const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow() {
    if (mainWindow != null) {
        return
    }

    mainWindow = new BrowserWindow({
        width: 960,
        height: 728,
        webPreferences: {
            allowDisplayingInsecureContent: true,
            allowRunningInsecureContent: true,
            nodeIntegration: false,
            plugins: true
        }
    })

    mainWindow.loadURL('http://wx.qq.com')

    mainWindow.on('close', () => {
        mainWindow = null
    })
}

app.on('ready', () => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('activated', () => {
    if (mainWindow == null) {
        createWindow()
    }
})

