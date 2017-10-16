const {app, Menu, BrowserWindow} = require('electron')
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

//    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
      win = null
    })
}

// app.on('ready', createWindow)


app.on('ready', () => {
  createWindow();

  // Check if we are on a MAC
  if (process.platform === 'darwin') {
    // Create our menu entries so that we can use MAC shortcuts
    Menu.setApplicationMenu(Menu.buildFromTemplate([
      {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
          { role: 'pasteandmatchstyle' },
          { role: 'delete' },
          { role: 'selectall' }
        ]
      }
    ]));
  }
});



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
