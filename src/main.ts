import { App } from './components/App'

const canvas = document.getElementById('threejs-canvas') as HTMLCanvasElement
const app = new App(canvas)
app.start()
