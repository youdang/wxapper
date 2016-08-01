const {app, BrowserWindow} = require('electron')

let mainWindow

// is 'real' quit event triggered
let isQuit = false

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 960,
        height: 728,
        title: 'Wxapper',
        webPreferences: {
            nodeIntegration: false
        }
    })

    mainWindow.loadURL('https://wx.qq.com')

    mainWindow.on('close', (event) => {
        if (process.platform === 'darwin' && !!!isQuit) {
            // for macOS, we will not quit application unless 'real' quit event triggered
            event.preventDefault()
        }
        mainWindow.hide()
    })
}

app.on('ready', createWindow)

app.on('before-quit', () => {
    if (mainWindow !== null) {
        isQuit = true
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    } else {
        mainWindow.show()
    }
})

