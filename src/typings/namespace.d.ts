export namespace Flow {
    interface File {
        document: {
            id: string;
            children: Page[];
            name: string;
            type: Type.Document;
        };
        settings: Settings;
        schemaVersion: number;
    }

    interface Page extends Node {
        backgroundColor: Color;
        type: Type.Page;
        children: (Screen | Image | Rectangle | Ellipse | Diamond)[];
        startNodeID?: string;
    }

    interface Screen extends Graphic {
        children: Layer[];
        connections?: Connection[];
        type: Type.Screen;
    }

    interface Image extends Graphic {
        type: Type.Image;
        children: Layer[];
        connections?: Connection[];
    }

    interface Graphic extends Node {
        size: Size;
        position: Point;
        source: FileAsset | URLAsset;
    }

    interface Rectangle extends Shape {
        type: Type.Rectangle;
    }

    interface Ellipse extends Shape {
        type: Type.Ellipse;
    }

    interface Diamond extends Shape {
        type: Type.Diamond;
    }

    interface Shape extends Node {
        size: Size;
        position: Point;
        connections?: Connection[];
    }

    interface Layer extends Node {
        type: Type.Layer | Type.Hotspot;
        size: Size;
        position: Point;
        connections?: Connection[];
    }

    interface Node {
        id: string;
        name: string;
        type: Type;
    }

    interface Connection {
        nodeID: string;
    }

    interface Settings {
        grid: [number, number];
        snapToGrid: boolean;
        snapToObjects: boolean;
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

    const enum Type {
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

    interface Point {
        x: number;
        y: number;
    }

    interface Size {
        h: number;
        w: number;
    }
}
