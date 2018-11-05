declare namespace Flow {
    interface File {
        document: {
            id: string;
            children: Page[];
            name: string;
            type: Type.Document;
        }
        settings: {};
        schemaVersion: number;
    }

    interface Page extends Node {
        backgroundColor: Color;
        children: Screen[] | Image[];
        type: Type.Page;
    }

    interface Graphic extends Node {
        size: Size;
        position: Point;
        source: FileAsset | URLAsset;
    }

    interface Image extends Graphic {
        children: Layer[];
        connection?: Connection;
        type: Type.Image;
    }

    interface Screen extends Graphic {
        children: Layer[];
        connection?: Connection;
        type: Type.Screen;
    }

    interface Layer extends Node {
        size: Size;
        position: Point;
        type: Type.Layer | Type.Hotspot;
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
    }

    interface Color {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    enum Type {
        'Document' = 'Document',
        'Page' = 'PAGE',
        'Screen' = 'SCREEN',
        'Image' = 'IMAGE',
        'Hotspot' = 'HOTSPOT',
        'Layer' = 'LAYER',
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
}

export default Flow;