const { app, BrowserWindow } = require('electron');
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 900,
    // webPreferences: {
    //   preload: path.join(__dirname, "preload.js"),
    // },
  });

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5713");
    // win.webContents.openDevTools();
  } else {
    // win.loadFile(path.join(__dirname, "../dist/index.html"));
    win.loadURL("https://repofy-application.vercel.app/");
  }
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
