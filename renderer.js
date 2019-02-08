// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const { ipcRenderer, remote, app } = require('electron')

const dialog = remote.dialog

// console.log(remote.getGlobal('app_version'))

// dialog.showMessageBox({ message: 'Are you sure you want to quit', buttons: ['Quit', 'Cancel'] }, (buttonIndex) => {
//     console.log('ddd');
//     if (buttonIndex === 0) app.quit()
// })

// const window = new remote.BrowserWindow({width: 800, height: 400})
// window.loadURL('https://www.google.com/')

//Send message to main process on channel1
// ipcRenderer.send('channel1', {name: "John", surname: "Cohen"})

// ipcRenderer.on('channel1', (event, args) => {
//     console.log('renderer.js',args);
// })

// ipcRenderer.on('private', (event, args) => {
//     console.log('renderer.js',args);
// })

// console.log(ipcRenderer.sendSync('sync-channel', 'some request'));
