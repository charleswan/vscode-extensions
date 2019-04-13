'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import pangu = require('pangu');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.addEngWhitespace', addSpaceAll);

    context.subscriptions.push(disposable);
    context.subscriptions.push(new Watcher());
}

// this method is called when your extension is deactivated
export function deactivate() {
}

function addSpace(e: vscode.TextEditor, d: vscode.TextDocument, sel: vscode.Selection[]) {
    e.edit(function (edit) {
        // itterate through the selections and convert all text to Lower
        for (var x = 0; x < sel.length; ++x) {
            let txt: string = d.getText(new vscode.Range(sel[x].start, sel[x].end));
            edit.replace(sel[x], pangu.spacing(txt));
        }
    });
}

function addSpaceAll() {
    let e = vscode.window.activeTextEditor;
    if (e) {
        let d = e.document;
        if (d) {
            let sel = new vscode.Selection(new vscode.Position(0, 0), new vscode.Position(Number.MAX_VALUE, Number.MAX_VALUE));
            addSpace(e, d, [sel]);
        }
    }
}

class Watcher {
    private _disposable!: vscode.Disposable;
    private _config!: vscode.WorkspaceConfiguration;

    public getConfig() {
        this._config = vscode.workspace.getConfiguration('pangu');
    }
    constructor() {
        this.getConfig();
        if (this._config.get('auto_space_on_save', false)) {
            let subscriptions: vscode.Disposable[] = [];
            this._disposable = vscode.Disposable.from(...subscriptions);

            vscode.workspace.onWillSaveTextDocument(this._onWillSaveDoc, this, subscriptions);
        }
    }
    dispose() {
        this._disposable.dispose();
    }

    _onWillSaveDoc(e : any) {
        addSpaceAll();
    }
}