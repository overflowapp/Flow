import Flow, { NODE_TYPE } from '../../index.d';

const minimalFile: Flow.File = {
    document: {
        id: 'cjo45613k00002a5p9gj6nr3b',
        name: 'Sample Document',
        type: NODE_TYPE.DOCUMENT,
        children: [
            {
                id: 'cjo456d2700002a5p80zudiut',
                name: 'Page 1',
                type: NODE_TYPE.PAGE,
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
    settings: {},
    schemaVersion: 1,
};

export default minimalFile;
