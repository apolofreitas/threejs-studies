import View from './View'

export class App {
  private view: View

  constructor(private canvas: HTMLCanvasElement) {
    this.view = new View(this.canvas)
  }

  public start() {
    this.onWindowResize()
    window.addEventListener('resize', () => this.onWindowResize())
    this.update(0)
  }

  private onWindowResize() {
    this.view.setSize(window.innerWidth, window.innerHeight)
  }

  private update(dt: number) {
    this.view.update(dt / 1000)
    requestAnimationFrame((time) => this.update(time))
  }
}
