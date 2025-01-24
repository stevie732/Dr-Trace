import * as vscode from 'vscode';
import TimeTracker from './timeTracker';

export function activate(context: vscode.ExtensionContext) {
  const timeTracker = new TimeTracker();

  let startCommand = vscode.commands.registerCommand
    ('timeTracker.start', () => {
      timeTracker.startTracking();
      vscode.window.showInformationMessage('Time tracking started.');
    });

  let stopCommand = vscode.commands.registerCommand
    ('timeTracker.stop', () => {
      timeTracker.stopTracking();
      const totalTime = timeTracker.getTotalTime();
      vscode.window.showInformationMessage(`Time tracking stopped. Total time: ${totalTime} seconds.`);
    });

  context.subscriptions.push(startCommand);
  context.subscriptions.push(stopCommand);
}

export function deactivate() { }

