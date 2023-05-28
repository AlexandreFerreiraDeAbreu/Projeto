var perguntaValorcm = Phaser.Math.Between(2, 21);


class Scene4 extends Phaser.Scene {
    
	constructor(){
		super("playGame3");
	}

	preload(){
        this.load.image('background3','assets/images/backgroundEscalas3.png');
		this.load.image('boxVerde', 'assets/images/boxVerde-1600x160.png');
        this.load.image('btAvancar', 'assets/images/btavancar.png');
        this.load.image('btHome', 'assets/images/btHome.png');
        this.load.image('btVerificar', 'assets/images/btVerificar.png');
        this.load.image('btRefresh', 'assets/images/btRefresh.png');
        this.load.image('btErrado', 'assets/images/btfechar.png');
        this.load.image('btCorrigir', 'assets/images/btCorrigir.png');
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
	}

	create(){
        if(Phaser.Math.Between(0, 3) == 3){
            perguntaValorcm += 0.5;
        }

        this.background3 = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'background3');
        this.background3.setScale(1.5);


        this.boxVerde = this.add.image(0.1*game.config.width, 0.1*game.config.height, 'boxVerde').setOrigin(0,0).setScale(1.01,1);

        const g1 = this.add.grid(0.5*game.config.width, 0.6*game.config.height, 800, 600, 400, 100, 0xFFFFFF, 0.9);
        g1.setAltFillStyle( 0xF0F0F0 , 0.9);
        const g2 = this.add.grid(0.5*game.config.width, 0.6*game.config.height-250, 800, 100, 400, 100, 0x50C878, 0.8);


        this.tarefa2 = this.add.text(0.11*game.config.width,0.12*game.config.height,'Tarefa 3:', {
            fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 1});
        this.tarefaText = this.add.text(0.115*game.config.width,0.17*game.config.height,
           'Completa a tabela seguinte, indicando a distância real, em km, entre duas localidades de um concelho de Portugal \nque distam '
            +perguntaValorcm +' cm num mapa feito à escala indicada.',
              {fontFamily: 'font1', fontSize: 25, fill: 'black', stroke: 'black', strokeThickness: 0.3});

        
        this.escalaNoMapa = this.add.text(0.5*game.config.width-330,0.6*game.config.height-270,'Escala do mapa', {
            fontFamily: 'font1', fontSize: 33, fill: 'black', stroke: 'black', strokeThickness: 1.2});
        this.distanciaNoMapa = this.add.text(0.5*game.config.width+50,0.6*game.config.height-270,'Distância real', {
            fontFamily: 'font1', fontSize: 33, fill: 'black', stroke: 'black', strokeThickness: 1.2});
        this.escala1 = this.add.text(0.5*game.config.width-300,0.6*game.config.height-170,'1 : 5 000', {
            fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.8});
        this.escala2 = this.add.text(0.5*game.config.width-300,0.6*game.config.height-70,'1 : 10 000', {
            fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.8});
        this.escala3 = this.add.text(0.5*game.config.width-300,0.6*game.config.height+30,'1 : 25 000', {
            fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.8});
        this.escala4 = this.add.text(0.5*game.config.width-300,0.6*game.config.height+130,'1 : 50 000', {
            fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.8});
        this.escala5 = this.add.text(0.5*game.config.width-300,0.6*game.config.height+230,'1 : 100 000', {
            fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.8});

        this.cmLetra1 = this.add.text(0.5 * game.config.width+300, 0.6*game.config.height-170,'cm', { fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.5});
        this.cmLetra2 = this.add.text(0.5 * game.config.width+300, 0.6*game.config.height-70,'cm', { fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.5});
        this.cmLetra3 = this.add.text(0.5 * game.config.width+300, 0.6*game.config.height+30,'cm', { fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.5});
        this.cmLetra4 = this.add.text(0.5 * game.config.width+300, 0.6*game.config.height+130,'cm', { fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.5});
        this.cmLetra5 = this.add.text(0.5 * game.config.width+300, 0.6*game.config.height+230,'cm', { fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.5});
        

        this.btVerificar = this.add.sprite(0.5*game.config.width, 0.93*game.config.height, 'btVerificar').setInteractive({ useHandCursor: true }).setScale(0.6);
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


        this.btAvancar = this.add.sprite(0.95 * game.config.width, 0.93 *game.config.height, "btAvancar");
        this.btAvancar.setScale(0.5);
        this.btAvancar.setInteractive({ useHandCursor: true });
        this.btAvancar.name = 'btAvancar';
        this.btAvancar.on('pointerover', () => {
            this.btAvancar.setScale(0.53);
        });
        this.btAvancar.on('pointerout', () => {
            this.btAvancar.setScale(0.5);
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



        

        var inputText1 = this.add.rexInputText(0.5 * game.config.width+70, 0.6 * game.config.height-170, 200, 40, {
            type: 'text',
            fontSize: '30px',
            color: 'black',
            maxLength: '5',
            fontFamily: 'font1',
            border: 0.1,
            borderColor: 'black',
            align: 'center',
        })
            .setOrigin(0,0);
        var inputText2 = this.add.rexInputText(0.5 * game.config.width+70, 0.6 * game.config.height-70, 200, 40, {
            type: 'text',
            fontSize: '30px',
            color: 'black',
            maxLength: '5',
            fontFamily: 'font1',
            border: 0.1,
            borderColor: 'black',
            align: 'center',
        })
            .setOrigin(0,0);
        var inputText3 = this.add.rexInputText(0.5 * game.config.width+70, 0.6 * game.config.height+30, 200, 40, {
            type: 'text',
            fontSize: '30px',
            color: 'black',
            maxLength: '5',
            fontFamily: 'font1',
            border: 0.1,
            borderColor: 'black',
            align: 'center',
        })
            .setOrigin(0,0);
        var inputText4 = this.add.rexInputText(0.5 * game.config.width+70, 0.6 * game.config.height+130, 200, 40, {
            type: 'text',
            fontSize: '30px',
            color: 'black',
            maxLength: '5',
            fontFamily: 'font1',
            border: 0.1,
            borderColor: 'black',
            align: 'center',
        })
            .setOrigin(0,0);
        var inputText5 = this.add.rexInputText(0.5 * game.config.width+70, 0.6 * game.config.height+230, 200, 40, {
            type: 'text',
            fontSize: '30px',
            color: 'black',
            maxLength: '5',
            fontFamily: 'font1',
            border: 0.1,
            borderColor: 'black',
            align: 'center',
        })
            .setOrigin(0,0);


        this.input.on('pointerdown', function () {
            inputText1.setBlur();
            inputText2.setBlur();
            inputText3.setBlur();
            inputText4.setBlur();
            inputText5.setBlur();
        })








        this.input.on('gameobjectdown', function(pointer, gameObject) {
            switch (gameObject.name) {
                case 'btRetroceder':
                    this.scene.transition({ target: 'playGame2', duration: 100 });
                    break;
                case 'btAvancar':
                    this.scene.transition({ target: 'playGame4', duration: 100 });
                    break;

                case 'btHome':
                    stop = true; 
                    this.scene.transition({ target: 'NoMenu', duration: 100 });
                    this.btHome.disableInteractive();
                    tentativas = 0;
                    break;
                case 'btRefresh':
                    perguntaValorcm = Phaser.Math.Between(2, 21);
                    if(Phaser.Math.Between(0, 3) == 2){
                        perguntaValorcm += 0.5;
                    }
                    this.tarefaText.setText('Completa a tabela seguinte, indicando qual é a distância em cm, num mapa feito à escala indicada, entre duas localidades \nde um concelho de Portugal, cuja distância real é de '
                     +perguntaValorcm +' km.');
                    break;
                case 'btVerificar':
                    break;
                default:
                    break;
            }   
        }, this);
	}

    update(){
    }
}


    