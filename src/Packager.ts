import * as JSZip from 'jszip';
import Flow from './typings/Flow';
import * as fs from 'fs';
import basicFile from './examples/basicFile';

export default class Packager {
    public static package(file: Flow.File) {
        console.log('packaging');
        const zip = new JSZip();

        zip.file('data.json', JSON.stringify(file));

        file.document.children.forEach((page) => {
            page.children.forEach((node) => {
                const fileAsset = (node.source as Flow.FileAsset);
                const relativePath = `${fileAsset.dirPath}/${fileAsset.fileName}`;
                zip.file(relativePath, fs.readFileSync(relativePath));
            });
        });

        zip.generateAsync({ type: 'blob' }).then((blob: Blob) => {
            const fileName = `${file.document.name}.flow`;
            fs.writeFileSync('./test.flow', blob);
        });
    }

    public static d() {
        console.log('e');
    }
}

Packager.package(basicFile);
