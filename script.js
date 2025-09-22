window.onload = function() { // Ensures the page is fully loaded before running the game

  var config = {
      type: Phaser.AUTO, //Phaser.AUTO automatically chooses the best rendering context available (WebGL or Canvas)
      width: 800, //Game Screen width
      height: 600, //Game Screen height
      backgroundColor: '#ADD8E6', // Optional, sets the background color of the game
      scene: { //This object is the brain of your game
          preload: preload,
          create: create,
          update: update
      },
      parent: 'game-container' // Optional, but good practice:  Specifies the DOM element to add the game canvas to.

  };

  var game = new Phaser.Game(config); //Creates a new Phaser game instance with the specified configuration.

  function preload ()
  {
      // Load assets here (images, sounds, etc.)
      this.load.image('chicken', 'assets/chicken.png'); //Example of loading a chicken image
  }

  function create ()
  {
      // Create game objects here (sprites, text, etc.)
      this.chicken = this.add.image(400, 300, 'chicken'); //Example of adding the chicken to the scene
  }

  function update ()
  {
      // Game logic that runs every frame (movement, collision detection, etc.)
      //this.chicken.x += 1; //Example of moving the chicken to the right
  }

}
