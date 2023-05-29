var perguntaValorcm = Phaser.Math.Between(5, 51);
var tentativas1 = 0;
var tentativas2 = 0;
var tentativas3 = 0;
var tentativas4 = 0;
var tentativas5 = 0;


class Scene4 extends Phaser.Scene {
    
	constructor(){
		super("playGame3");
	}

	preload(){
        this.load.image('background3','assets/images/backgroundEscalas3.png');
		this.load.image('boxVerde', 'assets/images/boxVerde-1600x160.png');
        this.load.image('boxVerde2', 'assets/images/boxVerde-500x500.png');
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


        this.errado1 = this.add.image(0.72 * game.config.width, 0.6 *game.config.height-150, 'btErrado').setScale(0.4);
        this.errado1.visible = false;
        this.errado2 = this.add.image(0.72 * game.config.width, 0.6 *game.config.height-50, 'btErrado').setScale(0.4);
        this.errado2.visible = false;
        this.errado3 = this.add.image(0.72 * game.config.width, 0.6 *game.config.height+50, 'btErrado').setScale(0.4);
        this.errado3.visible = false;
        this.errado4 = this.add.image(0.72 * game.config.width, 0.6 *game.config.height+150, 'btErrado').setScale(0.4);
        this.errado4.visible = false;
        this.errado5 = this.add.image(0.72 * game.config.width, 0.6 *game.config.height+250, 'btErrado').setScale(0.4);
        this.errado5.visible = false;


        this.corrigirFalso1 = this.add.sprite(0.77*game.config.width, 0.6*game.config.height-150, 'btCorrigir').setScale(0.55);
        this.corrigirFalso1.name = 'btCorrigirFalso';
        this.corrigirFalso1.setTint(0x787878);
        this.corrigirFalso2 = this.add.sprite(0.77*game.config.width, 0.6*game.config.height-50, 'btCorrigir').setScale(0.55);
        this.corrigirFalso2.name = 'btCorrigirFalso';
        this.corrigirFalso2.setTint(0x787878);
        this.corrigirFalso3 = this.add.sprite(0.77*game.config.width, 0.6*game.config.height+50, 'btCorrigir').setScale(0.55);
        this.corrigirFalso3.name = 'btCorrigirFalso';
        this.corrigirFalso3.setTint(0x787878);
        this.corrigirFalso4 = this.add.sprite(0.77*game.config.width, 0.6*game.config.height+150, 'btCorrigir').setScale(0.55);
        this.corrigirFalso4.name = 'btCorrigirFalso';
        this.corrigirFalso4.setTint(0x787878);
        this.corrigirFalso5 = this.add.sprite(0.77*game.config.width, 0.6*game.config.height+250, 'btCorrigir').setScale(0.55);
        this.corrigirFalso5.name = 'btCorrigirFalso';
        this.corrigirFalso5.setTint(0x787878);
        this.corrigirFalso1.visible = false;
        this.corrigirFalso2.visible = false;
        this.corrigirFalso3.visible = false;
        this.corrigirFalso4.visible = false;
        this.corrigirFalso5.visible = false;


        this.corrigir1 = this.add.sprite(0.77*game.config.width, 0.6*game.config.height-150, 'btCorrigir').setInteractive({ useHandCursor: true }).setScale(0.55);
        this.corrigir1.name = 'btCorrigir1';
        this.corrigir1.on('pointerover', () => {
            this.corrigir1.setScale(0.58);
        });
        this.corrigir1.on('pointerout', () => {
            this.corrigir1.setScale(0.55);
        });
        this.corrigir1.visible = false;
        this.corrigir2 = this.add.sprite(0.77*game.config.width, 0.6*game.config.height-50, 'btCorrigir').setInteractive({ useHandCursor: true }).setScale(0.55);
        this.corrigir2.name = 'btCorrigir2';
        this.corrigir2.on('pointerover', () => {
            this.corrigir2.setScale(0.58);
        });
        this.corrigir2.on('pointerout', () => {
            this.corrigir2.setScale(0.55);
        });
        this.corrigir2.visible = false;
        this.corrigir3 = this.add.sprite(0.77*game.config.width, 0.6*game.config.height+50, 'btCorrigir').setInteractive({ useHandCursor: true }).setScale(0.55);
        this.corrigir3.name = 'btCorrigir3';
        this.corrigir3.on('pointerover', () => {
            this.corrigir3.setScale(0.58);
        });
        this.corrigir3.on('pointerout', () => {
            this.corrigirFalso3.setScale(0.55);
        });
        this.corrigir3.visible = false;
        this.corrigir4 = this.add.sprite(0.77*game.config.width, 0.6*game.config.height+150, 'btCorrigir').setInteractive({ useHandCursor: true }).setScale(0.55);
        this.corrigir4.name = 'btCorrigir4';
        this.corrigir4.on('pointerover', () => {
            this.corrigir4.setScale(0.58);
        });
        this.corrigir4.on('pointerout', () => {
            this.corrigir4.setScale(0.55);
        });
        this.corrigir4.visible = false;
        this.corrigir5 = this.add.sprite(0.77*game.config.width, 0.6*game.config.height+250, 'btCorrigir').setInteractive({ useHandCursor: true }).setScale(0.55);
        this.corrigir5.name = 'btCorrigir5';
        this.corrigir5.on('pointerover', () => {
            this.corrigir5.setScale(0.58);
        });
        this.corrigir5.on('pointerout', () => {
            this.corrigir5.setScale(0.55);
        });
        this.corrigir5.visible = false;


        this.tarefa2 = this.add.text(0.11*game.config.width,0.12*game.config.height,'Tarefa 3:', {
            fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 1});
        this.tarefaText = this.add.text(0.115*game.config.width,0.17*game.config.height,
           'Completa a tabela seguinte, indicando a distância real, em km, entre duas localidades de um concelho de Portugal \nque distam '
            +perguntaValorcm +' cm num mapa feito à escala indicada.',
              {fontFamily: 'font1', fontSize: 25, fill: 'black', stroke: 'black', strokeThickness: 0.3});

        
        this.escalaNoMapa = this.add.text(0.5*game.config.width-330,0.6*game.config.height-270,'Escala do mapa', {
            fontFamily: 'font1', fontSize: 33, fill: 'black', stroke: 'black', strokeThickness: 1.2});
        this.distanciaReal = this.add.text(0.5*game.config.width+70,0.6*game.config.height-270,'Distância real', {
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

        this.cmLetra1 = this.add.text(0.5 * game.config.width+300, 0.6*game.config.height-170,'km', { fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.5});
        this.cmLetra2 = this.add.text(0.5 * game.config.width+300, 0.6*game.config.height-70,'km', { fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.5});
        this.cmLetra3 = this.add.text(0.5 * game.config.width+300, 0.6*game.config.height+30,'km', { fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.5});
        this.cmLetra4 = this.add.text(0.5 * game.config.width+300, 0.6*game.config.height+130,'km', { fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.5});
        this.cmLetra5 = this.add.text(0.5 * game.config.width+300, 0.6*game.config.height+230,'km', { fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 0.5});
        

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
            .setOrigin(0,0).on('focus', function(inputText1){
                game.input.keyboard.enabled = false;
            }).on('blur', function(inputText1){
                game.input.keyboard.enabled = true;
            });
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
            .setOrigin(0,0).on('focus', function(inputText2){
                game.input.keyboard.enabled = false;
            }).on('blur', function(inputText2){
                game.input.keyboard.enabled = true;
            });
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
            .setOrigin(0,0).on('focus', function(inputText3){
                game.input.keyboard.enabled = false;
            }).on('blur', function(inputText3){
                game.input.keyboard.enabled = true;
            });
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
            .setOrigin(0,0).on('focus', function(inputText4){
                game.input.keyboard.enabled = false;
            }).on('blur', function(inputText4){
                game.input.keyboard.enabled = true;
            });
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
            .setOrigin(0,0).on('focus', function(inputText5){
                game.input.keyboard.enabled = false;
            }).on('blur', function(inputText5){
                game.input.keyboard.enabled = true;
            });


        this.input.on('pointerdown', function () {
            inputText1.setBlur();
            inputText2.setBlur();
            inputText3.setBlur();
            inputText4.setBlur();
            inputText5.setBlur();
        });

        this.parabens1 = this.add.image(0.84 * game.config.width, 0.6 *game.config.height, 'parabens').setScale(1);
        this.parabens1.visible = false;

        this.corrigirBox1 = this.add.image(0.05*game.config.width, 0.27*game.config.height, 'boxVerde2').setOrigin(0,0).setScale(0.92,0.8);
        this.corrigirBox1.visible = false;
        this.corrigirText1 = this.add.text(0.07*game.config.width,0.28*game.config.height,'',{
            fontFamily: 'font1', fontSize: 31, fill: 'black', stroke: 'black', strokeThickness: 1});
        this.corrigirText1.visible = false;
        this.corrigirBox2 = this.add.image(0.05*game.config.width, 0.33*game.config.height, 'boxVerde2').setOrigin(0,0).setScale(0.96,0.8);
        this.corrigirBox2.visible = false;
        this.corrigirText2 = this.add.text(0.07*game.config.width,0.34*game.config.height,'',{
            fontFamily: 'font1', fontSize: 31, fill: 'black', stroke: 'black', strokeThickness: 1});
        this.corrigirText2.visible = false;
        this.corrigirBox3 = this.add.image(0.05*game.config.width, 0.39*game.config.height, 'boxVerde2').setOrigin(0,0).setScale(0.98,0.8);
        this.corrigirBox3.visible = false;
        this.corrigirText3 = this.add.text(0.07*game.config.width,0.40*game.config.height,'',{
            fontFamily: 'font1', fontSize: 31, fill: 'black', stroke: 'black', strokeThickness: 1});
        this.corrigirText3.visible = false;
        this.corrigirBox4 = this.add.image(0.05*game.config.width, 0.46*game.config.height, 'boxVerde2').setOrigin(0,0).setScale(1.01,0.8);
        this.corrigirBox4.visible = false;
        this.corrigirText4 = this.add.text(0.07*game.config.width,0.47*game.config.height,'',{
            fontFamily: 'font1', fontSize: 31, fill: 'black', stroke: 'black', strokeThickness: 1});
        this.corrigirText4.visible = false;
        this.corrigirBox5 = this.add.image(0.05*game.config.width, 0.52*game.config.height, 'boxVerde2').setOrigin(0,0).setScale(1.02,0.8);
        this.corrigirBox5.visible = false;
        this.corrigirText5 = this.add.text(0.065*game.config.width,0.53*game.config.height,'',{
            fontFamily: 'font1', fontSize: 31, fill: 'black', stroke: 'black', strokeThickness: 1});
        this.corrigirText5.visible = false;



        this.input.on('gameobjectdown', function(pointer, gameObject) {
            switch (gameObject.name) {
                case 'btRetroceder':
                    tentativas1 = 0;
                    tentativas2 = 0;
                    tentativas3 = 0;
                    tentativas4 = 0;
                    tentativas5 = 0;
                    this.scene.shutdown();
                    this.scene.transition({ target: 'playGame2', duration: 100 });
                    break;
                case 'btAvancar':
                    tentativas1 = 0;
                    tentativas2 = 0;
                    tentativas3 = 0;
                    tentativas4 = 0;
                    tentativas5 = 0;
                    this.scene.shutdown();
                    this.scene.transition({ target: 'playGame4', duration: 100 });
                    break;

                case 'btHome':
                    tentativas1 = 0;
                    tentativas2 = 0;
                    tentativas3 = 0;
                    tentativas4 = 0;
                    tentativas5 = 0;
                    this.scene.shutdown();
                    this.scene.transition({ target: 'NoMenu', duration: 100 });
                    break;
                case 'btCorrigir1':
                    if(this.corrigirBox1.visible){
                        this.corrigirBox1.visible = false;
                        this.corrigirText1.visible = false; 
                    }
                    else{
                        this.corrigirBox1.visible = true;
                        this.corrigirText1.visible = true;
                        this.corrigirText1.setText(' Proposta de correção 1\n\n1 cm ------>5 000\n'+perguntaValorcm+' cm ------> X\n\nX = '
                            +perguntaValorcm+' x 5000 = ' + perguntaValorcm*5000+'\n\n'+perguntaValorcm*5000+'cm = '+perguntaValorcm/20+' km\n\nResposta = '+Phaser.Math.RoundTo((perguntaValorcm/20),-3)+' km\n');
                        this.corrigirBox2.visible = false;
                        this.corrigirText2.visible = false;
                        this.corrigirBox3.visible = false;
                        this.corrigirText3.visible = false;
                        this.corrigirBox4.visible = false;
                        this.corrigirText4.visible = false;
                        this.corrigirBox5.visible = false;
                        this.corrigirText5.visible = false;
                    }
                    break;
                case 'btCorrigir2':
                    if(this.corrigirBox2.visible){
                        this.corrigirBox2.visible = false;
                        this.corrigirText2.visible = false;
                    }
                    else{
                        this.corrigirBox2.visible = true;
                        this.corrigirText2.visible = true;
                        this.corrigirText2.setText(' Proposta de correção 2\n\n1 cm ------>10 000\n'+perguntaValorcm+' cm ------> X\n\nX = '
                        +perguntaValorcm+' x 10000 = ' + perguntaValorcm*10000+'\n\n'+perguntaValorcm*10000+'cm = '+perguntaValorcm/10+' km\n\nResposta = '+Phaser.Math.RoundTo((perguntaValorcm/10),-3)+' km\n');
                        this.corrigirBox1.visible = false;
                        this.corrigirText1.visible = false;
                        this.corrigirBox3.visible = false;
                        this.corrigirText3.visible = false;
                        this.corrigirBox4.visible = false;
                        this.corrigirText4.visible = false;
                        this.corrigirBox5.visible = false;
                        this.corrigirText5.visible = false;
                    }
                    break;
                case 'btCorrigir3':
                    if(this.corrigirBox3.visible){
                        this.corrigirBox3.visible = false;
                        this.corrigirText3.visible = false;
                    }
                    else{
                        this.corrigirBox3.visible = true;
                        this.corrigirText3.visible = true;
                        this.corrigirText3.setText(' Proposta de correção 3\n\n1 cm ------>25 000\n'+perguntaValorcm+' cm ------> X\n\nX = '
                        +perguntaValorcm+' x 25000 = ' + perguntaValorcm*25000+'\n\n'+perguntaValorcm*25000+'cm = '+perguntaValorcm/4+' km\n\nResposta = '+Phaser.Math.RoundTo((perguntaValorcm/4),-3)+' km\n');
                        this.corrigirBox2.visible = false;
                        this.corrigirText2.visible = false;
                        this.corrigirBox1.visible = false;
                        this.corrigirText1.visible = false;
                        this.corrigirBox4.visible = false;
                        this.corrigirText4.visible = false;
                        this.corrigirBox5.visible = false;
                        this.corrigirText5.visible = false;
                    }
                    break;
                case 'btCorrigir4':
                    if(this.corrigirBox4.visible){
                        this.corrigirBox4.visible = false;
                        this.corrigirText4.visible = false;
                    }
                    else{
                        this.corrigirBox4.visible = true;
                        this.corrigirText4.visible = true;
                        this.corrigirText4.setText(' Proposta de correção 4\n\n1 cm ------>50 000\n'+perguntaValorcm+' cm ------> X\n\nX = '
                        +perguntaValorcm+' x 50000 = ' + perguntaValorcm*50000+'\n\n'+perguntaValorcm*50000+'cm = '+perguntaValorcm/2+' km\n\nResposta = '+Phaser.Math.RoundTo((perguntaValorcm/2),-3)+' km\n');
                        this.corrigirBox2.visible = false;
                        this.corrigirText2.visible = false;
                        this.corrigirBox3.visible = false;
                        this.corrigirText3.visible = false;
                        this.corrigirBox1.visible = false;
                        this.corrigirText1.visible = false;
                        this.corrigirBox5.visible = false;
                        this.corrigirText5.visible = false;
                    }
                    break;
                case 'btCorrigir5':
                    if(this.corrigirBox5.visible){
                        this.corrigirBox5.visible = false;
                        this.corrigirText5.visible = false;
                    }
                    else{
                        this.corrigirBox5.visible = true;
                        this.corrigirText5.visible = true;
                        this.corrigirText5.setText(' Proposta de correção 5\n\n1 cm ------>100 000\n'+perguntaValorcm+' cm ------> X\n\nX = '
                        +perguntaValorcm+' x 100000 = ' + perguntaValorcm*100000+'\n\n'+perguntaValorcm*100000+'cm = '+perguntaValorcm+' km\n\nResposta = '+perguntaValorcm+' km\n');
                        this.corrigirBox2.visible = false;
                        this.corrigirText2.visible = false;
                        this.corrigirBox3.visible = false;
                        this.corrigirText3.visible = false;
                        this.corrigirBox4.visible = false;
                        this.corrigirText4.visible = false;
                        this.corrigirBox1.visible = false;
                        this.corrigirText1.visible = false;
                    }
                    break;
                case 'btRefresh':
                    perguntaValorcm = Phaser.Math.Between(5, 51);
                    if(Phaser.Math.Between(0, 3) == 2){
                        perguntaValorcm += 0.5;
                    }
                    this.tarefaText.setText('Completa a tabela seguinte, indicando a distância real, em km, entre duas localidades de um concelho de Portugal \nque distam '
                    +perguntaValorcm +' cm num mapa feito à escala indicada.');
                    this.parabens1.visible = false;
                    this.errado1.visible = false;
                    this.errado2.visible = false;
                    this.errado3.visible = false;
                    this.errado4.visible = false;
                    this.errado5.visible = false;
                    this.corrigir1.visible = false;
                    this.corrigir2.visible = false;
                    this.corrigir3.visible = false;
                    this.corrigir4.visible = false;
                    this.corrigir5.visible = false;
                    this.corrigirFalso1.visible = false;
                    this.corrigirFalso2.visible = false;
                    this.corrigirFalso3.visible = false;
                    this.corrigirFalso4.visible = false;
                    this.corrigirFalso5.visible = false;
                    this.corrigirBox2.visible = false;
                    this.corrigirText2.visible = false;
                    this.corrigirBox3.visible = false;
                    this.corrigirText3.visible = false;
                    this.corrigirBox1.visible = false;
                    this.corrigirText1.visible = false;
                    this.corrigirBox5.visible = false;
                    this.corrigirText5.visible = false;
                    this.corrigirBox4.visible = false;
                    this.corrigirText4.visible = false;
                    inputText1.text = '';
                    inputText2.text = '';
                    inputText3.text = '';
                    inputText4.text = '';
                    inputText5.text = '';
                    this.btVerificar.visible = true;
                    tentativas1 = 0;
                    tentativas2 = 0;
                    tentativas3 = 0;
                    tentativas4 = 0;
                    tentativas5 = 0;
                    break;
                case 'btVerificar':
                    if(inputText1.text != perguntaValorcm/20){
                        tentativas1+=1;
                        this.errado1.visible = true;
                        this.corrigirFalso1.visible = true;
                        if(tentativas1 >= 2){
                            this.corrigir1.visible = true;
                        }
                    }else if (inputText1.text == perguntaValorcm/20){
                        this.errado1.visible = false;
                        this.corrigirFalso1.visible = false;
                        this.corrigir1.visible = false;
                    }
                    if(inputText2.text != perguntaValorcm/10){
                        tentativas2+=1;
                        this.errado2.visible = true;
                        this.corrigirFalso2.visible = true;
                        if(tentativas2 >= 2){
                            this.corrigir2.visible = true;
                        }
                    }else if (inputText2.text == perguntaValorcm/10){
                        this.errado2.visible = false;
                        this.corrigirFalso2.visible = false;
                        this.corrigir2.visible = false;
                    }
                    if(inputText3.text != perguntaValorcm/4){
                        tentativas3+=1;
                        this.errado3.visible = true;
                        this.corrigirFalso3.visible = true;
                        if(tentativas3 >= 2){
                            this.corrigir3.visible = true;
                        }
                    }else if (inputText3.text == perguntaValorcm/4){
                        this.errado3.visible = false;
                        this.corrigirFalso4.visible = false;
                        this.corrigir3.visible = false;
                    }
                    if(inputText4.text != perguntaValorcm/2){
                        tentativas4+=1;
                        this.errado4.visible = true;
                        this.corrigirFalso4.visible = true;
                        if(tentativas4 >= 2){
                            this.corrigir4.visible = true;
                        }
                    }else if (inputText4.text == perguntaValorcm/2){
                        this.errado4.visible = false;
                        this.corrigirFalso4.visible = false;
                        this.corrigir4.visible = false;
                    }
                    if(inputText5.text != perguntaValorcm){
                        tentativas5+=1;
                        this.errado5.visible = true;
                        this.corrigirFalso5.visible = true;
                        if(tentativas5 >= 2){
                            this.corrigir5.visible = true;
                        }
                    }else if (inputText5.text == perguntaValorcm){
                        this.errado5.visible = false;
                        this.corrigirFalso5.visible = false;
                        this.corrigir5.visible = false;
                    }
                    if(this.errado1.visible == false && this.errado2.visible == false && this.errado3.visible == false && this.errado4.visible == false && this.errado5.visible == false){
                        this.parabens1.visible = true;
                        this.btVerificar.visible = false;
                    }
                    break;
                default:
                    break;
            }   
        }, this);
	}

    update(){
    }
}