import { ipcRenderer } from 'electron'

const isElectron = process && process.versions && process.versions.electron

if (isElectron) {
  ipcRenderer.on('main-process-message', (_event, ...args) => {
    console.log('[Receive Main-process message]:', ...args)
  })
}
