/* global phaser */

// Copyright (c) 2023 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: Apr 2023
// This is the splash scene

/**
 * This class is the splash scene
 */
class SplashScene extends Phaser.scene { 
  /**
   * This method is the constructor
   * */
  constructor() {
    super({ key: "splashScene" })

    this.splashScreen = null
  }

  /**
   * Can be defined on your own scenes.
   * This method is called by the scene manager when the scene starts
   *  before preload () and create ()
   * @param {object} data - Any data passed via ScenePlugin.add () or ScenePlugin.start ()
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   *Can be defined on your own scenes.
   *Use it to load assets
   */
  preload() {
    console.log("Splash Scene")
    this.load.image("splashSceneBackground", "./assets/splashSceneImage.png")
    }

  /**
   * Can be defined on your own scenes.
   *Use it to create your game objects
   *@param {object} data - Any data passed via ScenePlugin.add () or ScenePlugin.start ()
   */
  create(data) {
    this.splashScreen = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
      )
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  /**
   * Should be overridden by your own scenes.
   * This method is called once per step while the scene is running.
   * @param {number} time - The current time
   * @param {number} delta - The delta time in ms since the last frame
   */
  update(time, delta) {
    if (time > 2000) {
    this.scene.switch("titleScene")
  }
}
}

export default SplashScene
