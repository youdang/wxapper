const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 960,
        height: 728,
        title: 'Wxapper',
        webPreferences: {
            allowDisplayingInsecureContent: true,
            allowRunningInsecureContent: true,
            nodeIntegration: false
        }
    })

    mainWindow.loadURL('http://wx.qq.com')

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

