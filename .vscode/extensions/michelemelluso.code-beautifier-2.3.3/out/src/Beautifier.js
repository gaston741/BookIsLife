"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsbeautify = require("js-beautify");
const vscode = require("vscode");
const DEFAULT_TAB_SIZE = vscode.workspace.getConfiguration('editor', null).get("tabSize");
const OPTIONS = vscode.workspace.getConfiguration('beautify').get("options");
class Beautifier {
    static beautify(document, range) {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const EDITOR_TAB_SIZE = editor.options.tabSize;
        let start = new vscode.Position(0, 0);
        let end = new vscode.Position(document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length);
        if (!editor.selection.isEmpty) {
            start = editor.selection.start;
            end = editor.selection.end;
        }
        range = new vscode.Range(start, end);
        let originalText = document.getText(range);
        let formattedText = jsbeautify.css(originalText, Object.assign({
            indent_size: EDITOR_TAB_SIZE || DEFAULT_TAB_SIZE
        }, OPTIONS));
        if (formattedText && originalText !== formattedText) {
            editor.edit(function (editor) {
                range = new vscode.Range(start, end);
                editor.replace(range, formattedText);
            });
        }
        return formattedText;
    }
}
exports.default = Beautifier;
//# sourceMappingURL=Beautifier.js.map