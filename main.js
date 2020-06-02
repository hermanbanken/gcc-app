const {app, BrowserWindow} = require('electron');
const windowStateKeeper = require('electron-window-state');
let win;

function createWindow() {
	// Load the previous state with fallback to defaults
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  });

  // Create the window using the state information
  win = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
		'height': mainWindowState.height,
		webPreferences: {
			webviewTag: true,
		}
  });

  // Let us register listeners on the window, so we can update the state
  // automatically (the listeners will be removed when the window is closed)
  // and restore the maximized or full screen state
	mainWindowState.manage(win);
	win.loadFile("index.html");
	// win.loadURL('https://console.cloud.google.com');
}

app.on('ready', function () {
  createWindow();
	app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
});
