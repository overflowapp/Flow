import Flow from '../typings/Flow';

const basicFile: Flow.File = {
    document: {
        id: 'cjo45613k00002a5p9gj6nr3b',
        name: 'Basic Document',
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
                children: [
                    {
                        id: 'cjo45mq7500002a5p8n8u1bfz',
                        name: 'Sign in',
                        type: Flow.Type.Screen,
                        source: {
                            fileName: 'sign-in.png',
                            dirPath: './assets',
                        },
                        children: [],
                        size: {
                            h: 700,
                            w: 1152,
                        },
                        position: {
                            x: 200,
                            y: 128,
                        },
                    },
                    {
                        id: 'cjo45oi8700002a5pmpnxhfny',
                        name: 'Sign up',
                        type: Flow.Type.Screen,
                        source: {
                            fileName: 'sign-up.png',
                            dirPath: './assets',
                        },
                        children: [],
                        size: {
                            h: 700,
                            w: 1152,
                        },
                        position: {
                            x: 1452,
                            y: 128,
                        },
                    },
                ],
            },
        ],
    },
    settings: {
        grid: [40, 40],
    },
    schemaVersion: 1,
};

export default basicFile;
