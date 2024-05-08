import * as vscode from 'vscode';

const CHANNEL_NAME = 'Proposed Debug';

class OutputChannelLogger {
    public static instance = new OutputChannelLogger();

    protected outputChannel: vscode.OutputChannel | undefined;

    public logMessage(message: string): void {
        if (!this.outputChannel) {
            this.outputChannel = vscode.window.createOutputChannel(CHANNEL_NAME);
        }
        this.outputChannel.appendLine(message);
    }

    public showChannel() {
        if (this.outputChannel) {
            this.outputChannel.show();
        }
    }
}

export const logger = OutputChannelLogger.instance;
