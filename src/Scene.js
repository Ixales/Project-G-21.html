class Scene extends Phaser.Scene {

  constructor (){
    super("playGame")
  }

  preload() {

    this.load.image('tiles', 'assets/tileset/asset-progect-g-21.png');
    this.load.atlas('atlasanim','assets/anim/anims.png','assets/anim/anims_atlas.json')
    this.load.tilemapTiledJSON('map', 'assets/tilemap/level1.json');
    this.load.image('spike', 'assets/spike.png');

  }

  create() {


    const map = this.make.tilemap({key: 'map'});
    const tileset = map.addTilesetImage('asset-progect-g-21', 'tiles');

    //CREE TES CALQUES ET TOUT ICI------------


    this.platforms = map.createLayer('Platforms', tileset,-600,300);
    this.Fond = map.createLayer('Fond', tileset,-600,300);
    this.Pland1 = map.createLayer('Pland1', tileset,-600,300);
    //this.Spikes= map.createLayer('Spikes', tileset,-600,300);
    this.platforms.setCollisionByExclusion(-1, true);//cette ligne c'est pour dire que tout le calque a de la collision donc pas besoin d'écrire celle-ci pour ton fond
    //this.Spikes.setCollisionByExclusion(-1, true);




    //----------------------------------------
    this.trous = this.physics.add.group({
      allowGravity: false,
      immovable: true
    });
// ceci permet au images que vous avez placé sur Tiled d'avoir une boite de colision mais aussi d'etre invisible
    map.getObjectLayer('Trous').objects.forEach((spike) => {
      //si vous utilisez une autre image que les piques remplacez le 'spike' avec le nom de l'image que vous avez remplacé (le nom déclaré dans preload)
      const trousSprite = this.trous.create(spike.x, spike.y + 200 - spike.height, 'spike').setOrigin(0).visible = false ;
    });
    this.physics.add.collider(this.player.player, this.trous, this.playerHit, null, this);



    this.player = new Player(this);

    this.cameras.main.startFollow(this.player.player, true,1, 0);
    this.cursors = this.input.keyboard.createCursorKeys();
  }




  update(){
    if (this.cursors.up.isDown && this.player.player.body.onFloor() && this.saut === false) {
      this.player.jump()
      this.saut = true;
    }
    if (this.cursors.up.isUp){
      this.saut = false;
    }

    if (this.cursors.left.isDown ){
      this.player.moveLeft();
    }
    else if (this.cursors.right.isDown){
      this.player.moveRight();
    }
    else {
      this.player.moveIdle();
    }

  }





}
