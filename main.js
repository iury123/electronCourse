// Modules to control application life and create native browser window
const { app, BrowserWindow, session } = require('electron')
const windowStateKeeper = require('electron-window-state')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let childWindow
let secWindow
let altWindow

//Callback which is run when any browser window comes into focus.
app.on('browser-window-focus', () => {
  console.log('app focused')
})


function createWindow() {
  // Create the browser window.

  // mainWindow = new BrowserWindow({width: 1200, height: 800, show: false, backgroundColor: 'ff0000'})
  // mainWindow = new BrowserWindow({width: 1200, height: 800, show: false})

  // Session from new partition. 'persist:' before the name of partition is to persist the session.
  // let appSession = session.fromPartition('persist:partition1')


  let winState = windowStateKeeper({
    defaultWidth: 1200,
    defaultHeight: 600,
  })

  mainWindow = new BrowserWindow({
    width: winState.width,
    height: winState.height, x: winState.x, y: winState.y,
    // webPreferences: { session: appSession }, or
    // webPreferences: { partition: 'partition1' }
  })
  winState.manage(mainWindow)

  //Cleans the session, including local storage.
  // mainSession.clearStorageData()

  // altWindow = new BrowserWindow({ width: 700, height: 700 })


  // childWindow = new BrowserWindow({
  //   width: 800, height: 400,
  //   minWidth: 400, minHeight: 200,
  //   parent: mainWindow, modal: true, show: false, frame: false
  // })

  // secWindow = new BrowserWindow({ width: 800, height: 400 })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  // altWindow.loadFile('about.html')

  let mainContents = mainWindow.webContents
  let mainSession = mainWindow.webContents.session

  // let altSession = altWindow.webContents.session
  // let defaultSession = session.defaultSession

  // console.log(Object.is(mainSession, appSession))

  mainSession.cookies.get({name: 'cookie1'}, (error, cookies) => {
    console.log(cookies)
  })

  // expirationDate is to save your cookie after restart the app. Without it, the cookie is destroyed.

  // mainSession.cookies.set({
  //   url: "http://www.myapp.com",
  //   name: 'cookie1', value: 'cookieValue', domain: 'myapp.com', expirationDate: 99999999999
  //   }, (error) => {
  //   console.log("Cookies set")
  //   // Cookies.
  //   mainSession.cookies.get({}, (error, cookies) => {
  //     console.log(cookies)
  //   })
  // })



  // mainContents.on('did-finish-load', () => {
  //   console.log('Google.com loaded')
  // })

  // mainContents.on('new-window', (e, url) => {
  //   console.log('New window opened for ' + url)
  //   e.preventDefault()
  //   let modalWindow = new BrowserWindow({
  //     width: 600, height: 300, modal: true,
  //     parent: mainWindow
  //   })
  //   modalWindow.loadURL(url)
  //   modalWindow.on('closed', () => {
  //     modalWindow = null
  //   })
  // })

  // mainContents.on('context-menu', (e, params) => {
  //   console.log('User selected text: ' + params.selectionText)
  //   console.log('Selection can be copied: ' + params.editFlags.canCopy)
  // })


  // mainContents.on('login', (e, req, authInfo, callback) => {
  //   e.preventDefault()
  //   callback('admin', 'nosecret')
  // })

  // mainContents.on('will-navigate', (e, url) => {
  //   console.log('will navigate to: ' + url)
  // })

  // mainContents.on('did-navigate', (e, url) => {
  //   console.log('did navigate to: ' + url)
  // })

  // childWindow.loadFile('index_child.html')
  // secWindow.loadURL('https://www.google.com/')


  // childWindow.once('ready-to-show', () => {
  //   childWindow.show()
  // })

  // Necessary when the flag show is set to false.
  // mainWindow.once('ready-to-show', () => {
  //   mainWindow.show()
  // })

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  // altWindow.webContents.openDevTools()

  // secWindow.on('focus', () => {
  //   console.log('Sec windows focused')
  // })

  // mainWindow.on('focus', () => {
  //   console.log('main window focused')
  // })


  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })


  // altWindow.on('closed', () => {
  //   altWindow = null
  // })

  // childWindow.on('closed', function () {
  //   // Dereference the window object, usually you would store windows
  //   // in an array if your app supports multi windows, this is the time
  //   // when you should delete the corresponding element.
  //   childWindow = null
  // })

  // secWindow.on('closed', () => {
  //   secWindow = null
  // })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.