"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const Beautifier_1 = require("./Beautifier");
const LANGUAGES = ["scss", "sass", "css", "less"];
function activate(context) {
    for (var i = 0, l = LANGUAGES.length; i < l; i++) {
        registerDocType(LANGUAGES[i]);
    }
    context.subscriptions.push(vscode.commands.registerCommand('beautify.format', () => {
        if (LANGUAGES.indexOf(vscode.window.activeTextEditor.document.languageId) !== -1) {
            Beautifier_1.default.beautify(vscode.window.activeTextEditor.document);
        }
        else {
            vscode.commands.executeCommand('editor.action.format');
        }
    }));
    function registerDocType(language) {
        context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider({ scheme: 'file', language: language }, {
            provideDocumentFormattingEdits: (document, options, token) => {
                return Beautifier_1.default.beautify(vscode.window.activeTextEditor.document);
            }
        }));
        context.subscriptions.push(vscode.languages.registerDocumentRangeFormattingEditProvider({ scheme: 'file', language: language }, {
            provideDocumentRangeFormattingEdits: (document, range, options, token) => {
                var start = new vscode.Position(0, 0);
                var end = new vscode.Position(document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length);
                return Beautifier_1.default.beautify(vscode.window.activeTextEditor.document, new vscode.Range(start, end));
            }
        }));
    }
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map