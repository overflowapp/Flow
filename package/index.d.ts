declare namespace Flow {
    interface File {
        document: {
            id: string;
            name: string;
            type: NodeType.Document;
            children: Page[];
        };
        settings: Settings;
        schemaVersion: SchemaVersion;
    }

    interface Page extends Node {
        type: NodeType.Page;
        children: (Screen | Image | Rectangle | Ellipse | Diamond)[];
        backgroundColor: Color;
        startNodeID?: string;
    }

    interface Screen extends Graphic {
        type: NodeType.Screen;
        children: Layer[];
        connections?: Connection[];
    }

    interface Image extends Graphic {
        type: NodeType.Image;
        connections?: Connection[];
    }

    interface Rectangle extends Shape {
        type: NodeType.Rectangle;
    }

    interface Ellipse extends Shape {
        type: NodeType.Ellipse;
    }

    interface Diamond extends Shape {
        type: NodeType.Diamond;
    }

    interface Layer extends Node {
        type: NodeType.Layer | NodeType.Hotspot;
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

    type URLAsset = string;

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
    type: NodeType;
}

interface Shape extends Node {
    position: Flow.Point;
    size: Flow.Size;
    connections?: Flow.Connection[];
}

interface Graphic extends Node {
    position: Flow.Point;
    size: Flow.Size;
    source: Flow.FileAsset | Flow.URLAsset;
}

export const enum NodeType {
    Document = 'DOCUMENT',
    Page = 'PAGE',
    Screen = 'SCREEN',
    Image = 'IMAGE',
    Rectangle = 'RECT',
    Ellipse = 'ELLIPSE',
    Diamond = 'DIAMOND',
    Hotspot = 'HOTSPOT',
    Layer = 'LAYER',
}

export default Flow;