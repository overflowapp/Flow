import * as JSZip from 'jszip';
import * as fs from 'fs';
import * as path from 'path';
import Flow, { NodeType } from '../index.d';
import basicFileWithConnections from './examples/basicFileWithConnections';

export default class Packager {
    public static package(file: Flow.File) {
        console.log('Packaging content');
        const zip = new JSZip();

        zip.file('data.json', JSON.stringify(file));

        file.document.children.forEach((page) => {
            page.children.forEach((node) => {
                if (node.type === NodeType.Screen || node.type === NodeType.Image) {
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

Packager.package(basicFileWithConnections);
