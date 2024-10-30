import { app, BrowserWindow } from 'electron';
import Store from 'electron-store';
const store = new Store();

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,      
            contextIsolation: false      
        }
    });

    win.loadFile('main.html');
}

app.whenReady().then(createWindow);


app.on(Window-all-closed, () =>{
    app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });