// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {ipcRenderer} = require('electron')

//Send message to main process on channel1
ipcRenderer.send('channel1', {name: "John", surname: "Cohen"})

ipcRenderer.on('channel1', (event, args) => {
    console.log('renderer.js',args);
})

ipcRenderer.on('private', (event, args) => {
    console.log('renderer.js',args);
})

console.log(ipcRenderer.sendSync('sync-channel', 'some request'));
