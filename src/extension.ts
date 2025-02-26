import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const provider = vscode.languages.registerCompletionItemProvider('php', {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const line = document.lineAt(position);
            
            // Check if the line contains echo and an opening quote
            if (/echo\s+['"]/.test(line.text)) {
                return [
                    new vscode.CompletionItem('<div>', vscode.CompletionItemKind.Snippet),
                    new vscode.CompletionItem('<span>', vscode.CompletionItemKind.Snippet),
                    new vscode.CompletionItem('<a href="">', vscode.CompletionItemKind.Snippet),
                    new vscode.CompletionItem('<ul><li></li></ul>', vscode.CompletionItemKind.Snippet),
                    new vscode.CompletionItem('<p></p>', vscode.CompletionItemKind.Snippet)
                ];
            }
        }
    });

    context.subscriptions.push(provider);
}

export function deactivate() {}
