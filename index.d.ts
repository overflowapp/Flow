declare namespace Flow {
    interface File {
        document: Document;
        settings: Settings;
        schemaVersion: SchemaVersion;
    }

    interface Document {
        id: string;
        name: string;
        type: NODE_TYPE.DOCUMENT;
        children: Page[];
    }

    interface Page extends Node {
        type: NODE_TYPE.PAGE;
        children: (Screen | Image | Rectangle | Ellipse | Diamond)[];
        backgroundColor: Color;
        startNodeID?: string;
    }

    interface Screen extends Graphic {
        type: NODE_TYPE.SCREEN;
        children: Layer[];
        connections?: Connection[];
    }

    interface Image extends Graphic {
        type: NODE_TYPE.IMAGE;
        connections?: Connection[];
    }

    interface Rectangle extends Shape {
        type: NODE_TYPE.RECTANGLE;
    }

    interface Ellipse extends Shape {
        type: NODE_TYPE.ELLIPSE;
    }

    interface Diamond extends Shape {
        type: NODE_TYPE.DIAMOND;
    }

    interface Layer extends Node {
        type: NODE_TYPE.LAYER | NODE_TYPE.HOTSPOT;
        position: Point;
        size: Size;
        connections?: Connection[];
    }

    interface Connection {
        nodeID: string;
    }

    interface Settings {
        grid?: [number, number];
    }

    interface Color {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    interface FileAsset {
        fileName: string;
        dirPath: string;
    }

    interface Point {
        x: number;
        y: number;
    }

    interface Size {
        h: number;
        w: number;
    }

    type SchemaVersion = 1;
}

interface Node {
    id: string;
    name: string;
    type: NODE_TYPE;
}

interface Shape extends Node {
    position: Flow.Point;
    size: Flow.Size;
    connections?: Flow.Connection[];
}

interface Graphic extends Node {
    position: Flow.Point;
    size: Flow.Size;
    source: Flow.FileAsset;
}

export const enum NODE_TYPE {
    DOCUMENT = 'DOCUMENT',
    PAGE = 'PAGE',
    SCREEN = 'SCREEN',
    IMAGE = 'IMAGE',
    RECTANGLE = 'RECT',
    ELLIPSE = 'ELLIPSE',
    DIAMOND = 'DIAMOND',
    HOTSPOT = 'HOTSPOT',
    LAYER = 'LAYER',
}

export default Flow;
