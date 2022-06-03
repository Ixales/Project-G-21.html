class Player {

  constructor(scene) {
    this.scene = scene

    this.player = this.scene.physics.add.sprite(-400, 700, 'player');

    this.player.setBounce(0);

    this.player.setCollideWorldBounds(false);
    this.player.body.setSize(20,40);
    this.player.setOffset(22,10)



    //COLLIDERS

    this.scene.physics.add.collider(this.player, this.scene.platforms);  //ça veut dire, player et platforms rentrent en collision donc tu les traverse pas
    //this.scene.physics.add.collider(this.player, this.scene.Spikes);
    this.scene.anims.create({
      key: 'idle',
      frames: this.scene.anims.generateFrameNames('atlasanim',{
        prefix:'att-anim',
        start: 1,
        end: 7,
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.scene.anims.create({
      key: 'run',
      frames: this.scene.anims.generateFrameNames('atlasanim',{
        prefix:'run-anim',
        start: 1,
        end: 12,
      }),
      frameRate: 15,
      repeat: -1,
    });




  }


  create(){
    this.saut = false;
  }

 
//CHANGE LES CHIFFRES SI TU VEUX QUI AILLE PLUS VITE, MOINS HAUT, ETC....

  jump() {
    this.player.setVelocityY(-300);
  }

  moveRight() {
    this.player.setVelocityX(150);
    this.player.setFlipX(false);
    this.player.play('run', true);
  }

  moveLeft() {
    this.player.setVelocityX(-150);
    this.player.setFlipX(true);
    this.player.play('run', true);
  }

  moveIdle() {
    this.player.setVelocityX(0);
    this.player.play('idle', true);
  }
}