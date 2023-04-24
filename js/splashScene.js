/* global phaser */

// Copyright (c) 2023 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: Apr 2023
// This is the splash scene

/**
 * This class is the splash scene
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor() {
    super({ key: "splashScene" })
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
  }

  /**
   * Can be defined on your own scenes.
   *Use it to create your game objects
   *@param {object} data - Any data passed via ScenePlugin.add () or ScenePlugin.start ()
   */
  create(data) {
    //pass
  }

  /**
   * Should be overridden by your own scenes.
   * This method is called once per step while the scene is running.
   * @param {number} time - The current time
   * @param {number} delta - The delta time in ms since the last frame
   */
  update(time, delta) {
    this.scene.switch("titleScene")
  }
}

export default SplashScene
