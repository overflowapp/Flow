"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSZip = require("jszip");
var fs = require("fs");
var basicFile_1 = require("./examples/basicFile");
var Packager = (function () {
    function Packager() {
    }
    Packager.package = function (file) {
        console.log('packaging');
        var zip = new JSZip();
        zip.file('data.json', JSON.stringify(file));
        file.document.children.forEach(function (page) {
            page.children.forEach(function (node) {
                var fileAsset = node.source;
                var relativePath = fileAsset.dirPath + "/" + fileAsset.fileName;
                zip.file(relativePath, fs.readFileSync(relativePath));
            });
        });
        zip.generateAsync({ type: 'blob' }).then(function (blob) {
            var fileName = file.document.name + ".flow";
            fs.writeFileSync('./test.flow', blob);
        });
    };
    Packager.d = function () {
        console.log('e');
    };
    return Packager;
}());
exports.default = Packager;
Packager.package(basicFile_1.default);
//# sourceMappingURL=Packager.js.map