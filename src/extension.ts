import * as vscode from 'vscode';
import { logger } from './logger';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-proposed-debug" is now active!');

	/**
	 * You can use proposed API here. `vscode.` should start auto complete
	 * Proposed API as defined in vscode.proposed.<proposalName>.d.ts.
	 */

	context.subscriptions.push(
		vscode.commands.registerCommand('proposed.dummyMenu', async data => {
			const showButton = 'Show Data';
			const buttons = [];

			if (data) {
				logger.logMessage(JSON.stringify(data, undefined, '\t'));
				buttons.push(showButton);
			}

			const result = await vscode.window.showInformationMessage('Action run', ...buttons);

			if (result === showButton) {
				logger.showChannel();
			}
		})
	);
}
