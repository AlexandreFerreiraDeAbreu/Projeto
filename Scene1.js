var quadro = 1;
var numeroQuadro = 1;
var numeroQuadroText;

class Scene1 extends Phaser.Scene {
    
	constructor(){
		super("Slides");
	}

	preload(){
        this.load.image("background","assets/images/background.png");
		this.load.image("quadro1","assets/images/quadro1.png");
        this.load.image("quadro2","assets/images/quadro2.png");
        this.load.image("quadro3","assets/images/quadro3.png");
        this.load.image("quadro4","assets/images/quadro4.png");
        this.load.image("btavancar","assets/images/btavancar.png");
        this.load.image("btretroceder","assets/images/btretroceder.png");
        this.load.image('btHome', 'assets/images/btHome.png');

        this.load.image('box1', 'assets/images/box1.png');
        this.load.image('box2', 'assets/images/box2.png');
        this.load.image('box3', 'assets/images/box3.png');
        this.load.image('box4', 'assets/images/box4.png');
        this.load.image('box5', 'assets/images/box5.png');
        this.load.image('box6', 'assets/images/box6.png');
	}

	create(){

        this.background = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'background');
        this.background.setScale(1.5);

        this.quadro1 = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'quadro1');
        this.quadro1.setScale(1.5);
        this.quadro1.setInteractive({ useHandCursor: true });
		this.quadro1.name = 'quadro1';

		this.quadro2 = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'quadro2');
        this.quadro2.setScale(1.5);
        this.quadro2.setInteractive({ useHandCursor: true });
        this.quadro2.visible = false;
        this.quadro2.name = 'quadro2';

        this.quadro3 = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'quadro3');
        this.quadro3.setScale(1.5);
        this.quadro3.setInteractive({ useHandCursor: true });
        this.quadro3.visible = false;
        this.quadro3.name = 'quadro3';

        this.quadro4 = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'quadro4');
        this.quadro4.setScale(1.5);
        this.quadro4.setInteractive({ useHandCursor: true });
        this.quadro4.visible = false;
        this.quadro4.name = 'quadro4';

        this.box1 = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'box1');
        this.box1.setScale(1.5);
        this.box1.visible = false;
        this.box1.name = 'box1';

        this.box2 = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'box2');
        this.box2.setScale(1.5);
        this.box2.visible = false;
        this.box2.name = 'box2';

        this.box3 = this.add.image(0.5 * game.config.width, 0.37 *game.config.height, 'box3');
        this.box3.setScale(1.5);
        this.box3.visible = false;
        this.box3.name = 'box3';

        this.box4 = this.add.image(0.5 * game.config.width, 0.37 *game.config.height, 'box4');
        this.box4.setScale(1.5);
        this.box4.visible = false;
        this.box4.name = 'box4';

        this.box5 = this.add.image(0.5 * game.config.width, 0.37 *game.config.height, 'box5');
        this.box5.setScale(1.5);
        this.box5.visible = false;
        this.box5.name = 'box5';

        this.box6 = this.add.image(0.5 * game.config.width, 0.37 *game.config.height, 'box6');
        this.box6.setScale(1.5);
        this.box6.visible = false;
        this.box6.name = 'box6';


		this.btavancar = this.add.sprite(0.955 * game.config.width, 0.939 *game.config.height, "btavancar");
        this.btavancar.setScale(0.46);
        this.btavancar.setInteractive({ useHandCursor: true });
        this.btavancar.name = 'btavancar';

        this.btavancar.on('pointerover', () => {
        this.btavancar.displayHeight += 5;
        this.btavancar.displayWidth += 5;

        });
        this.btavancar.on('pointerout', () => {
        this.btavancar.displayHeight -= 5;
        this.btavancar.displayWidth -= 5;
        });


        this.btretroceder = this.add.sprite(0.045 * game.config.width, 0.939 *game.config.height, "btavancar");
        this.btretroceder.flipX = true;
        this.btretroceder.setScale(0.46);
        this.btretroceder.setInteractive({ useHandCursor: true });
        this.btretroceder.visible = false;
        this.btretroceder.name = 'btretroceder';

        this.btretroceder.on('pointerover', () => {
        this.btretroceder.displayHeight += 5;
        this.btretroceder.displayWidth += 5;

        });
        this.btretroceder.on('pointerout', () => {
        this.btretroceder.displayHeight -= 5;
        this.btretroceder.displayWidth -= 5;
        });


        this.btHome = this.add.sprite(0.045 * game.config.width, 0.06 *game.config.height, "btHome");
        this.btHome.setScale(0.5);
        this.btHome.setInteractive({ useHandCursor: true });
        this.btHome.name = 'btHome';

        this.btHome.on('pointerover', () => {
        this.btHome.displayHeight += 5;
        this.btHome.displayWidth += 5;

        });
        this.btHome.on('pointerout', () => {
        this.btHome.displayHeight -= 5;
        this.btHome.displayWidth -= 5;
        });


        numeroQuadroText = this.add.text(950, 1130, '1 / 4', { fontSize: '32px', fill: 'white' });

        this.input.on('gameobjectdown', function(pointer, gameObject) {
            switch (gameObject.name) {
                case 'btavancar':
                    if( quadro == 1){
                        this.quadro1.visible = false;
                        this.quadro2.visible = true;

                        this.btretroceder.visible = true;
                        this.btretroceder.setInteractive();
                        quadro = quadro + 1;
                    }
                    else if(quadro == 2){
                        this.quadro2.visible = false;
                        this.quadro3.visible = true;
                        quadro = quadro + 1;
                    }
                    else if(quadro == 3){
                        this.quadro3.visible = false;
                        this.quadro4.visible = true;

                        this.btavancar.visible = false;
                        this.btavancar.disableInteractive();
                        quadro = quadro + 1;
                    }

                    numeroQuadro = numeroQuadro + 1;
                    numeroQuadroText.setText(numeroQuadro + ' / 4');

                    break;
                case 'btretroceder':
                    if( quadro == 2){
                        this.quadro2.visible = false;
                        this.quadro1.visible = true;

                        this.btretroceder.visible = false;
                        this.btretroceder.disableInteractive();
                        quadro = quadro - 1;
                    }
                    else if(quadro == 3){
                        this.quadro3.visible = false;
                        this.quadro2.visible = true;
                        quadro = quadro - 1;
                    }
                    else if(quadro == 4){
                        this.quadro4.visible = false;
                        this.quadro3.visible = true;

                        this.btavancar.setInteractive();
                        this.btavancar.visible = true;
                        quadro = quadro - 1;
                    }

                    numeroQuadro = numeroQuadro - 1;
                    numeroQuadroText.setText(numeroQuadro + ' / 4');

                    break;
                case 'btHome':
                    this.scene.transition({ target: 'NoMenu', duration: 100 });
                    this.btavancar.disableInteractive();
                    this.btavancar.visible = false;
                    this.btretroceder.disableInteractive();
                    this.btretroceder.visible = false;
                    quadro = 1;
                    numeroQuadro = 1;
                    break;
                case 'quadro1':
                    if(pointer.x > 420 & pointer.x < 450 && pointer.y > 950 && pointer.y < 980 ){
                        this.box1.visible = true;
                        this.box2.visible = false;
                    }
                    else if(pointer.x > 1370 & pointer.x < 1380 && pointer.y > 970 && pointer.y < 980 ){
                        this.box2.visible = true;
                        this.box1.visible = false;
                    }
                    else{
                        this.box2.visible = false;
                        this.box1.visible = false;
                    }
                    break;
                case 'quadro2':

                    if(pointer.x > 420 & pointer.x < 450 && pointer.y > 620 && pointer.y < 650 || pointer.x > 470 & pointer.x < 490 && pointer.y > 815 && pointer.y < 830){
                        this.box1.visible = true;
                        this.box2.visible = false;
                    }
                    else if(pointer.x > 1365 & pointer.x < 1380 && pointer.y > 620 && pointer.y < 650|| pointer.x > 970 & pointer.x < 995 && pointer.y > 815 && pointer.y < 830){
                        this.box2.visible = true;
                        this.box1.visible = false;
                    }
                    else{
                        this.box2.visible = false;
                        this.box1.visible = false;
                    }
                    break;
                case 'quadro3':
                    if(pointer.x > 420 & pointer.x < 450 && pointer.y > 620 && pointer.y < 650 ){
                        this.box1.visible = true;
                        this.box2.visible = false;
                    }
                    else if(pointer.x > 1365 & pointer.x < 1380 && pointer.y > 620 && pointer.y < 650 ){
                        this.box2.visible = true;
                        this.box1.visible = false;
                    }
                    else if(pointer.x > 1220 & pointer.x < 1250 && pointer.y > 840 && pointer.y < 860 ){
                        this.box3.visible = true;
                    }
                    else if(pointer.x > 1260 & pointer.x < 1280 && pointer.y > 900 && pointer.y < 920 ){
                        this.box4.visible = true;
                    }
                    else if(pointer.x > 1250 & pointer.x < 1270 && pointer.y > 950 && pointer.y < 970 ){
                        this.box6.visible = true;
                    }
                    else if(pointer.x > 1250 & pointer.x < 1270 && pointer.y > 1005 && pointer.y < 1025 ){
                        this.box5.visible = true;
                    }
                    else{
                        this.box1.visible = false;
                        this.box2.visible = false;
                        this.box3.visible = false;
                        this.box4.visible = false;
                        this.box5.visible = false;
                        this.box6.visible = false;
                    }
                    break;
                case 'quadro4':
                    if(pointer.x > 420 & pointer.x < 450 && pointer.y > 620 && pointer.y < 650 ){
                        this.box1.visible = true;
                        this.box2.visible = false;
                    }
                    else if(pointer.x > 1365 & pointer.x < 1380 && pointer.y > 620 && pointer.y < 650 ){
                        this.box2.visible = true;
                        this.box1.visible = false;
                    }
                    else{
                        this.box2.visible = false;
                        this.box1.visible = false;
                    }
                    break;
                default:
                    break;
            }
        }, this); 
	}
}

