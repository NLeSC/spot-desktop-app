const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
    win = new BrowserWindow({
      width: 1400, height: 900,
      icon: './images/flask.svg'
  //    , fullscreen: true
    })

    // diable menu bar
    // win.setMenu(null);
  //  win.maximize();

    win.loadURL(url.format({
      pathname: path.join(__dirname, 'src/index.html'),
      protocol: 'file:',
      slashes: true
    }))

    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
      win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
})
