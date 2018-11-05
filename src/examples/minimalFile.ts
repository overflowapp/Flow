import Flow from '../typings/Flow';

const minimalFile: Flow.File = {
    document: {
        id: 'cjo45613k00002a5p9gj6nr3b',
        name: 'Sample Document',
        type: Flow.Type.Document,
        children: [
            {
                id: 'cjo456d2700002a5p80zudiut',
                name: 'Page 1',
                type: Flow.Type.Page,
                backgroundColor: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1,
                },
                children: [],
            },
        ],
    },
    settings: {
        grid: null,
        snapToGrid: false,
        snapToObjects: false,
    },
    schemaVersion: 1,
};

export default minimalFile;
