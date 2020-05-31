const { app, BrowserWindow, ipcMain } = require('electron')


let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        hasShadow: false,
        //autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        },
        title: 'mainwindow'
    })

    mainWindow.loadFile('renderer.html')
})

// receive message from index.html 
ipcMain.on('item:add', (event, arg) => {
    console.log(event)
    console.log(arg)
    mainWindow.webContents.send('item:add', arg)
})
