'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // 替换中文所有标点符号
    let replaceChsMarks = vscode.commands.registerCommand('extension.replaceChsMarks', () => {
        
        replaceAll();
    });
    context.subscriptions.push(replaceChsMarks);
}

// this method is called when your extension is deactivated
export function deactivate() {
}

function replaceAll() {
    const textEditor = vscode.window.activeTextEditor;
    if (!textEditor) {
        return;  // No open text editor
    }

    let oldString1 = '，', newString1 = ', ';
    let oldString2 = '（', newString2 = '(';
    let oldString3 = '）', newString3 = ')';
    let oldString4 = '？', newString4 = '? ';
    let oldString5 = '！', newString5 = '! ';
    let oldString6 = '“', newString6 = '"';
    let oldString7 = '”', newString7 = '"';
    let oldString8 = '：', newString8 = ': ';
    let oldString9 = '；', newString9 = '; ';

    let mytext = textEditor.document.getText();
    
    mytext = regExpReplace(mytext, oldString1, newString1);
    mytext = regExpReplace(mytext, oldString2, newString2);
    mytext = regExpReplace(mytext, oldString3, newString3);
    mytext = regExpReplace(mytext, oldString4, newString4);
    mytext = regExpReplace(mytext, oldString5, newString5);
    mytext = regExpReplace(mytext, oldString6, newString6);
    mytext = regExpReplace(mytext, oldString7, newString7);
    mytext = regExpReplace(mytext, oldString8, newString8);
    mytext = regExpReplace(mytext, oldString9, newString9);

    let firstLine = textEditor.document.lineAt(0);
    let lastLine = textEditor.document.lineAt(textEditor.document.lineCount - 1);
    let textRange = new vscode.Range(0,
        firstLine.range.start.character,
        textEditor.document.lineCount - 1,
        lastLine.range.end.character);

    textEditor.edit(function (editBuilder) {
        editBuilder.replace(textRange, mytext);
    });
}

function regExpReplace(mytext : string, oldString : string, newString : string) {
    let regex = new RegExp(oldString, "g");
    mytext = mytext.replace(regex, newString);
    return mytext;
}