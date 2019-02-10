// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer, remote, app, nativeImage, shell, clipboard } = require('electron')
const fs = require('fs')
const electron = require('electron')
const dialog = remote.dialog

console.log(process);
//Shared API
console.log(electron.screen.getAllDisplays())
const filebox = document.getElementById("filebox")
const trashbox = document.getElementById("trashbox")
let myfile;
// nullify the events below.
filebox.ondragover = filebox.ondragend = filebox.ondragleave = () => {
    return false
}

trashbox.ondragover = trashbox.ondragend = trashbox.ondragleave = () => {
    return false
}

trashbox.ondrop = (e) => {
    shell.moveItemToTrash(myfile)
    return false
}

filebox.ondrop = (e) => {
    myfile = e.dataTransfer.files[0].path
    shell.openItem(myfile)
    return false
}

let logo = nativeImage.createFromPath('/Users/iurymiguel/Desktop/logo.png')
fs.writeFile('/Users/iurymiguel/Desktop/logo.jpg', logo.toJPEG(100))
// shell.openExternal('https://stackacademy.tv')

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
