/**
 * Entry point of the Election app.
 */
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

// Explicitly for development
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { client } from 'electron-connect';
import MenuBuilder from '@/renderer/menu';

let mainWindow: Electron.BrowserWindow | null;

const installExtensions = async () => {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

    return Promise.all(extensions.map((name) => installer.default(installer[name], forceDownload))).catch(console.log);
};

const createWindow = async () => {
    if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
        await installExtensions();
    }

    // Create the browser window.
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        show: false,
        webPreferences: {
            webSecurity: false,
            devTools: process.env.NODE_ENV !== 'production',
        },
    });

    // Pass your BrowserWindow object
    client.create(mainWindow);

    // and load the index.html of the app.
    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, './index.html'),
            protocol: 'file:',
            slashes: true,
        }),
    );

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    mainWindow.webContents.on('did-finish-load', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined');
        }

        // mainWindow.webContents.send(rendererEvents.renderer.connect_app);
        mainWindow.show();
        mainWindow.focus();
    });

    const menuBuilder = new MenuBuilder(mainWindow);
    menuBuilder.buildMenu();
};

if (process.env.DEBUG) {
    app.commandLine.appendSwitch('remote-debugging-port', '9222');
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
