import * as THREE from 'three'

import Shape from './Shape'

export default class View {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private torus: Shape

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    })
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    this.camera.position.z = 15
    this.scene = new THREE.Scene()
    this.torus = new Shape(this.scene)
  }

  public setSize(width: number, height: number): void {
    this.renderer.setSize(width, height)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  public update(dt: number): void {
    this.torus.update(dt)
    this.renderer.render(this.scene, this.camera)
  }
}
