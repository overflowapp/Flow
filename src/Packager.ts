import * as JSZip from 'jszip';
import * as fs from 'fs';
import * as path from 'path';
import Flow from './typings/Flow';
import basicFile from './examples/basicFile';

export default class Packager {
    public static package(file: Flow.File) {
        console.log('Packaging content');
        const zip = new JSZip();

        zip.file('data.json', JSON.stringify(file));

        file.document.children.forEach((page) => {
            page.children.forEach((node) => {
                if (node.type === Flow.Type.Screen || node.type === Flow.Type.Image) {
                    const fileAsset = (node.source as Flow.FileAsset);
                    const filePath = `${fileAsset.dirPath}/${fileAsset.fileName}`;
                    const relativePath = path.join(__dirname, './examples/', filePath);
                    zip.file(filePath, fs.readFileSync(relativePath));
                }
            });
        });

        zip
            .generateNodeStream({streamFiles: true})
            .pipe(fs.createWriteStream(path.join(__dirname, '..', `test-${Date.now()}.flow`)))
            .on('finish', () => {
                console.log('Flow file created');
            });
    }
}

Packager.package(basicFile);
