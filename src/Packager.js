"use strict";
exports.__esModule = true;
var jszip_1 = require("jszip");
var fs = require("fs");
var Packager = /** @class */ (function () {
    function Packager() {
    }
    Packager.package = function (file) {
        var zip = new jszip_1["default"]();
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
    return Packager;
}());
exports["default"] = Packager;
