class Scene5 extends Phaser.Scene {
    
	constructor(){
		super("playGame4");
	}

	preload(){
        this.load.image('background3','assets/images/backgroundEscalas3.png');
		this.load.image('boxVerde', 'assets/images/boxVerde.png');
        this.load.image('btHome', 'assets/images/btHome.png');
        this.load.image('btVerificar', 'assets/images/btVerificar.png');
        this.load.image('btRefresh', 'assets/images/btRefresh.png');
        this.load.image('btErrado', 'assets/images/btfechar.png');
        this.load.image('btCorrigir', 'assets/images/btCorrigir.png');
	}

	create(){
        this.background3 = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'background3');
        this.background3.setScale(1.5);


        this.boxVerde = this.add.image(0.1*game.config.width, 0.1*game.config.height, 'boxVerde').setOrigin(0,0).setScale(1.01,1);


        this.tarefa2 = this.add.text(0.11*game.config.width,0.11*game.config.height,'Tarefa 4:', {
            fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 1});
        this.tarefaText = this.add.text(0.115*game.config.width,0.14*game.config.height,
           'Completa a tabela seguinte',   {fontFamily: 'font1', fontSize: 22, fill: 'black', stroke: 'black', strokeThickness: 0.3});
        

        this.btVerificar = this.add.sprite(0.6*game.config.width, 0.93*game.config.height, 'btVerificar').setInteractive({ useHandCursor: true }).setScale(0.6);
        this.btVerificar.name = 'btVerificar';
        this.btVerificar.on('pointerover', () => {
            this.btVerificar.setScale(0.63);
        });
        this.btVerificar.on('pointerout', () => {
            this.btVerificar.setScale(0.6);
        });


        this.corrigir = this.add.sprite(0.65*game.config.width, 0.45*game.config.height, 'btCorrigir').setInteractive({ useHandCursor: true }).setScale(0.6);
        this.corrigir.name = 'btCorrigir';
        this.corrigir.on('pointerover', () => {
            this.corrigir.setScale(0.63);
        });
        this.corrigir.on('pointerout', () => {
            this.corrigir.setScale(0.6);
        });
        this.corrigir.visible = false;


        this.btHome = this.add.sprite(0.06 * game.config.width, 0.09 *game.config.height, "btHome");
        this.btHome.setScale(0.7);
        this.btHome.setInteractive({ useHandCursor: true });
        this.btHome.name = 'btHome';
        this.btHome.on('pointerover', () => {
            this.btHome.setScale(0.73);
        });
        this.btHome.on('pointerout', () => {
            this.btHome.setScale(0.7);
        });


        this.btRetroceder = this.add.sprite(0.05 * game.config.width, 0.93 *game.config.height, "btAvancar");
        this.btRetroceder.setScale(0.5);
        this.btRetroceder.setInteractive({ useHandCursor: true });
        this.btRetroceder.name = 'btRetroceder';
        this.btRetroceder.on('pointerover', () => {
            this.btRetroceder.setScale(0.53);
        });
        this.btRetroceder.on('pointerout', () => {
            this.btRetroceder.setScale(0.5);
        });
        this.btRetroceder.flipX = true;

        this.btRefresh = this.add.sprite(0.865*game.config.width, 0.1325*game.config.height, 'btRefresh').setInteractive({ useHandCursor: true }).setScale(0.32);
        this.btRefresh.name = 'btRefresh';
        this.btRefresh.on('pointerover', () => {
            this.btRefresh.setScale(0.34);
        });
        this.btRefresh.on('pointerout', () => {
            this.btRefresh.setScale(0.32);
        });

        const g1 = this.add.grid(0.5*game.config.width, 0.6*game.config.height, 600, 600, 300, 100, 0xFFFFFF);
        g1.setOutlineStyle(0x000000);

        this.input.on('gameobjectdown', function(pointer, gameObject) {
            switch (gameObject.name) {
                case 'btRetroceder':
                    this.scene.transition({ target: 'playGame3', duration: 100 });
                    break;

                case 'btHome':
                    stop = true; 
                    this.scene.transition({ target: 'NoMenu', duration: 100 });
                    this.btHome.disableInteractive();
                    tentativas = 0;
                    break;
                default:
                    break;
            }   
        }, this);
	}

    update(){
    }
}


    