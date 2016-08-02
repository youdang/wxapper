const {app, BrowserWindow, shell} = require('electron')
const URL = require('url')

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

    mainWindow.loadURL('https://wx.qq.com')

    mainWindow.on('close', (event) => {
        if (process.platform === 'darwin') {
            event.preventDefault()
            mainWindow.hide()
        }
    })

    let webContents = mainWindow.webContents
    webContents.on('new-window', (event, url) => {
        event.preventDefault()
        let query = URL.parse(url, true).query
        shell.openExternal(query.requrl)
    })
}

app.on('ready', createWindow)

app.on('before-quit', () => {
    if (mainWindow !== null) {
        mainWindow.destroy()
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

