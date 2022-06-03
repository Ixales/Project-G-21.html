let gameConfig = {
    type: Phaser.AUTO,
    width:400,
    height: 200,
    maxWidth:2000,
    maxHeight:2000,
    backgroundColor: '#000000',
    zoom: 3,
    pixelArt: true,
    /*
    scale: {

        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,

        // Or put game size here
         width: 400,
         height: 200,

        // Minimum size
        min: {
            width: 800,
            height: 600
        },
        // Or set minimum size like these
        // minWidth: 800,
        // minHeight: 600,

        // Maximum size
        max: {
            width: 1600,
            height: 1200
        },
        // Or set maximum size like these
        // maxWidth: 1600,
        // maxHeight: 1200,

        zoom: 1,  // Size of game canvas = game size * zoom
    },

     */
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            debug : false,
            gravity: { y: 1000 }
        }
    },
    scene: [Scene]
};
let game = new Phaser.Game(gameConfig);