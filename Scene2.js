var cursors;
var regua;
var rodarDir = false;
var rodarEsq = false;
var target = 0;
var rodar = false;
var rodarRegua = false;
var tentativas = 0;
var numeroQuadroText;
var distancia = 0;
var escalaPT = 2250700;
var escalaBR = 20548000;
var escalaCV = 1540000;
var escala = escalaPT/100000;

// 1cm = 2 250 700 cm
//1.3 = 20km
//1 cm = 1 540 000 cm


const cidadesPortugal = [["Viana do Castelo",363.37, 143.04], ["Braga", 430.42, 179], ["Vila Real", 529.59, 229.82], ["Bragança", 665.95, 174.04], ["Porto", 393.22, 263.29], ["Aveiro",387.03, 371.14],
                         ["Viseu", 517.19, 360], ["Guarda", 616.37, 373.62], ["Coimbra", 420.5, 454.2], ["Leiria", 352.27, 557.1], ["Castelo Branco", 580.42, 537.26], ["Santarém", 390.75, 666.2],
                         ["Portalegre", 586.61, 637.67], ["Lisboa", 310.17, 761.64], ["Setúbal", 351.08, 807.51], ["Évora", 504.8, 807.51], ["Beja", 528.35, 919.08], ["Faro", 518.43, 1121.14]];

const cidadesBrasil = [["Boa Vista", 361, 260.81], ["Manaus", 370.91, 405.85], ["São Luís", 757.7, 395.94], ["Natal", 968.43, 488.91], ["Rio Branco", 192.40, 580.65],
                         ["Cuiabá", 467.61, 709.57], ["Campo Grande", 504.7, 822.37], ["Palmas", 655.93, 580.64], ["Goiana", 631.13, 738.08], ["Belo Horizonte", 750.14, 814.94], 
                         ["Porto alegre", 579.07, 1051.71], ["Rio de Janeiro", 758.82, 889.32], ["Curitiba", 626.18, 946.34], ["Florianópolis", 632.37, 1002.13], ["Macapá", 590.22, 330.23]];

const cidadesCaboVerde = [["Porto Novo", 137.44, 315.2], ["Ribeira Grande", 137.44, 267.37], ["Mindelo", 159.51, 366.78], ["Vila da Ribeira Brava", 390.1, 456.74], ["Santa Maria", 836.8, 460.8],
                         ["Sal Rei", 830.7, 600.6], ["Vila do Maio", 734.74, 948.94], ["Praia", 637.6, 1022.1], ["Mosteiros", 373.7, 983.7], ["Vila Nova Sintra", 251.5, 1037]];


var c1 = Phaser.Math.Between(0, 16);
var c2 = Phaser.Math.Between(0, 17);
var pais = 0;
var repPt = 1;
var repBr = 0;
var repCV = 0;

class Scene2 extends Phaser.Scene {
	constructor(){
		super("playGame");
	}

	preload(){
        this.load.image('background3','assets/images/backgroundEscalas3.png');
        this.load.image('portugal', 'assets/images/mapaPortugalContinental.png');
        this.load.image('brasil', 'assets/images/mapaBrasil.png');
        this.load.image('caboVerde', 'assets/images/mapaCaboVerde2.png');
        this.load.image('rotacaoEsq', 'assets/images/rotacaoLeft.png');
        this.load.image('rotacaoDir', 'assets/images/rotacaoRight.png');
        this.load.image('regua', 'assets/images/regua.png');
        this.load.image('boxVerde1', 'assets/images/boxVerde-1200x150.png');
        this.load.image('boxVerde2', 'assets/images/boxVerde-500x500.png');
		this.load.image('btHome', 'assets/images/btHome.png');
        this.load.image('btVerificar', 'assets/images/btVerificar.png');
        this.load.image('btCorrigir', 'assets/images/btCorrigir.png');
        this.load.image('btRefresh', 'assets/images/btRefresh.png');
        this.load.image('btErrado', 'assets/images/btfechar.png');
        this.load.image('btInfo', 'assets/images/btinfo.png');
        this.load.image('btAvancar', 'assets/images/btavancar.png');
        this.load.image('btRetroceder', 'assets/images/btretroceder.png');
        this.load.image('star', 'assets/images/star.png');
        this.load.image('parabens', 'assets/images/parabens.png');
	}


	create(){    
		this.background3 = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'background3');
        this.background3.setScale(1.5);

        this.portugal = this.add.image(0.12*game.config.width, 0.05*game.config.height, 'portugal').setOrigin(0,0).setScale(1.30);
        this.portugal.visible = true;

        this.brasil = this.add.image(0.02*game.config.width, 0.17*game.config.height, 'brasil').setOrigin(0,0);
        this.brasil.visible = false;

        this.caboVerde = this.add.image(0.02*game.config.width, 0.21*game.config.height, 'caboVerde').setOrigin(0,0).setScale(0.9);
        this.caboVerde.visible = false;


        this.boxVerde = this.add.image(0.4*game.config.width, 0.13*game.config.height, 'boxVerde1').setOrigin(0,0).setScale(0.94,1);
        
        this.tarefa1 = this.add.text(0.41*game.config.width,0.15*game.config.height,'Tarefa 1:', {
             fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 1});

        
        if(c1 == c2) c2+=1;
            
        this.tarefaText = this.add.text(0.41*game.config.width,0.2*game.config.height,
            'No mapa estão assinaladas as 18 capitais de distrito de Portugal Continental. \nCalcula a distância real, em km, entre '
            + cidadesPortugal[c1][0] + ' e ' +cidadesPortugal[c2][0] + '.',   {       //119 e 123
             fontFamily: 'font1', fontSize: 22, fill: 'black', stroke: 'black', strokeThickness: 0.3});

        this.nota = this.add.text(0.403*game.config.width,0.27*game.config.height,
            'Nota: Devido a erros de medição, o valor que encontrares pode não corresponder à distância extata.', {
             fontFamily: 'font1', fontSize: 18, fill: 'white', stroke: 'white', strokeThickness: 0.7});
       

        this.escalaText = this.add.text(0.055*game.config.width,0.78*game.config.height,'Escala', {
            fontFamily: 'font1', fontSize: 34, fill: 'white', stroke: 'white', strokeThickness: 1});
        this.escalaValorPt = this.add.text(0.04*game.config.width,0.82*game.config.height,'1 : 2 250 700', {
            fontFamily: 'font1', fontSize: 25, fill: 'white', stroke: 'white', strokeThickness: 1});
        this.escalaValorBr = this.add.text(0.04*game.config.width,0.82*game.config.height,'1 : 20 548 000', {
            fontFamily: 'font1', fontSize: 25, fill: 'white', stroke: 'white', strokeThickness: 1});
        this.escalaValorBr.visible = false;
        this.escalaTextCV = this.add.text(0.055*game.config.width,0.6*game.config.height,'Escala', {
            fontFamily: 'font1', fontSize: 34, fill: 'white', stroke: 'white', strokeThickness: 1});
        this.escalaTextCV.visible = false;
        this.escalaValorCV = this.add.text(0.04*game.config.width,0.64*game.config.height,'1 : 1 540 000', {
            fontFamily: 'font1', fontSize: 25, fill: 'white', stroke: 'white', strokeThickness: 1});
       this.escalaValorCV.visible = false;


        this.rLetra = this.add.text(0.5 * game.config.width, 0.35*game.config.height,'R:', { fontFamily: 'font1', fontSize: 40, fill: 'white', stroke: 'black', strokeThickness: 1});
        this.kmLetra = this.add.text(0.756 * game.config.width, 0.35*game.config.height,'Km', { fontFamily: 'font1', fontSize: 40, fill: 'white', stroke: 'black', strokeThickness: 1});
        let resposta = `<input type="text" maxlength="6" id="resposta" name="resposta" style="font-size: 15px;font-family:'font1';text-align:center;">`;
        var caixaResp = this.add.rexInputText(0.53 * game.config.width, 0.35 * game.config.height, 220, 25, {
            type: 'text',
            fontSize: '15px',
            color: 'black',
            maxLength: '6',
            fontFamily: 'font1',
            border: 0.1,
            borderColor: 'black',
            backgroundColor: 'white',
            align: 'center',
        }).setScale(2).setOrigin(0,0).on('focus', function(caixaDeResposta){
            game.input.keyboard.enabled = false;
        }).on('blur', function(caixaDeResposta){
            game.input.keyboard.enabled = true;
        });


        this.errado = this.add.image(0.81 * game.config.width, 0.37 *game.config.height, 'btErrado').setScale(0.4);
        this.errado.visible = false;

        this.parabens = this.add.image(0.835 * game.config.width, 0.37 *game.config.height, 'parabens').setScale(0.4);
        this.parabens.visible = false;


        this.respText = this.add.text(0.4 * game.config.width, 0.6*game.config.height,'', {
            fontFamily: 'font1', fontSize: 40, fill: 'white', stroke: 'black', strokeThickness: 0.5});


        this.corrigirBox = this.add.image(0.75*game.config.width, 0.42*game.config.height, 'boxVerde2').setOrigin(0,0).setScale(0.9,0.8);
        this.corrigirBox.visible = false;
        this.corrigirText = this.add.text(0.77*game.config.width,0.43*game.config.height,'',{
            fontFamily: 'font1', fontSize: 31, fill: 'black', stroke: 'black', strokeThickness: 1});
        this.corrigirText.visible = false;


        this.btVerificar = this.add.sprite(0.62*game.config.width, 0.45*game.config.height, 'btVerificar').setInteractive({ useHandCursor: true }).setScale(0.6);
        this.btVerificar.name = 'btVerificar';
        this.btVerificar.on('pointerover', () => {
            this.btVerificar.setScale(0.63);
        });
        this.btVerificar.on('pointerout', () => {
            this.btVerificar.setScale(0.6);
        });

        this.corrigirFalso = this.add.sprite(0.67*game.config.width, 0.45*game.config.height, 'btCorrigir').setScale(0.6);
        this.corrigirFalso.name = 'btCorrigirFalso';
        this.corrigirFalso.setTint(0x787878);


        this.corrigir = this.add.sprite(0.67*game.config.width, 0.45*game.config.height, 'btCorrigir').setInteractive({ useHandCursor: true }).setScale(0.6);
        this.corrigir.name = 'btCorrigir';
        this.corrigir.on('pointerover', () => {
            this.corrigir.setScale(0.63);
        });
        this.corrigir.on('pointerout', () => {
            this.corrigir.setScale(0.6);
        });
        this.corrigir.visible = false;


        this.btRefresh = this.add.sprite(0.93*game.config.width, 0.1625*game.config.height, 'btRefresh').setInteractive({ useHandCursor: true }).setScale(0.32);
        this.btRefresh.name = 'btRefresh';
        this.btRefresh.on('pointerover', () => {
            this.btRefresh.setScale(0.34);
        });
        this.btRefresh.on('pointerout', () => {
            this.btRefresh.setScale(0.32);
        });


        this.btInfo = this.add.sprite(0.89*game.config.width, 0.1625*game.config.height, 'btInfo').setInteractive({ useHandCursor: true }).setScale(0.43);
        this.btInfo.name = 'btInfo';
        this.btInfo.on('pointerover', () => {
            this.btInfo.setScale(0.46);
        });
        this.btInfo.on('pointerout', () => {
            this.btInfo.setScale(0.43);
        });


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


        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            
            gameObject.setTint(0xff0000);
            dragX = Phaser.Math.Clamp(dragX, 0.025*game.config.width, 0.60*game.config.width);
            dragY = Phaser.Math.Clamp(dragY, 0.030*game.config.height, 0.95*game.config.height);
            gameObject.x = dragX;
            gameObject.y = dragY;
    
        });
        this.input.on('dragend', function (pointer, gameObject) {
            gameObject.setTint(0x00ff00);
    
        });

        this.star1 = this.matter.add.sprite(cidadesPortugal[c1][1], cidadesPortugal[c1][2], 'star').setScale(0.7);
        this.star1.setBody({
            type: 'rectangle',
            width: 7,
            height: 7
        });
        this.star1.setCollisionGroup(-1);
        this.star2 = this.matter.add.sprite(cidadesPortugal[c2][1], cidadesPortugal[c2][2], 'star').setScale(0.7);
        this.star2.setBody({
            type: 'rectangle',
            width: 7,
            height: 7
        });
        this.star2.setCollisionGroup(-1);

        numeroQuadroText = this.add.text(0.6*game.config.width, 0.93*game.config.height, '', { fontFamily: 'font1', fontSize: '37px', fill: 'white' });
        numeroQuadroText.visible = false;

        const tween = this.add.tween({
            targets: [this.star1,this.star2],
            scale: 2.5,
            duration: 400,
            yoyo: true,
            ease: 'Linear',
            repeat: 1
        });

        regua = this.matter.add.sprite(0,0, 'regua').setInteractive({draggable: true }).setScale(1.7);
        regua.name = 'regua';
        regua.setBody({
            type: 'rectangle',
            width: regua.width*1.62,
            height: 2
        });
        regua.setOrigin(0.0285,0);
        this.matter.body.setCentre( regua.body, { x: -regua.width*0.8, y: 0 }, true );
        regua.setCollisionGroup(-1);
        regua.on('pointerover', () => {
            rodarRegua = true;                       //só roda a régua se carregar em cima dela
            regua.setTint(0x00ff00);
        });
        regua.on('pointerout', () => {
            rodarRegua = false;
            regua.clearTint();
        });
        regua.setX(0.472*game.config.width);
        regua.setY(0.87*game.config.height);


        this.rotacaoEsq = this.add.sprite(0.37*game.config.width, 0.93*game.config.height, 'rotacaoEsq').setInteractive({ useHandCursor: true }).setScale(0.9);
        this.rotacaoEsq.name = 'btEsq';
        this.rotacaoEsq.on('pointerover', () => {
            this.rotacaoEsq.setScale(0.95);
        });
        this.rotacaoEsq.on('pointerout', () => {
            this.rotacaoEsq.setScale(0.9);
            rodarEsq = false;
        });
        this.rotacaoEsq.on('pointerdown', () => {
            rodarEsq = true;
        });
        this.rotacaoEsq.on('pointerup', () => {
            rodarEsq = false;
        });


        this.rotacaoDir = this.add.sprite(0.425*game.config.width, 0.93*game.config.height, 'rotacaoDir').setInteractive({ useHandCursor: true }).setScale(0.9);
        this.rotacaoDir.name = 'btDir'
        this.rotacaoDir.on('pointerover', () => {
            this.rotacaoDir.setScale(0.95);
        });
        this.rotacaoDir.on('pointerout', () => {
            this.rotacaoDir.setScale(0.9);
            rodarDir = false;
        });
        this.rotacaoDir.on('pointerdown', () => {
            rodarDir = true;
        });
        this.rotacaoDir.on('pointerup', () => {
            rodarDir = false;
        });

        
        this.input.on('pointermove', function(pointer) {
            target = Phaser.Math.Angle.BetweenPoints(regua,pointer);
        });
        this.input.on('pointerdown', function(pointer) {
            caixaResp.setBlur();
            if(pointer.rightButtonDown() &&  rodarRegua){
                rodar = true;
            }
        });
        this.input.on('pointerup', function(pointer) {
            if(pointer.rightButtonDown() &&  rodarRegua){
                rodar = true;
            }else{
            rodar = false;
            }
        });
        

        this.cursors = this.input.keyboard.createCursorKeys();

        distancia = Phaser.Math.RoundTo(Phaser.Math.Distance.BetweenPoints(this.star1, this.star2)/43.4506, -1);


        this.input.on('gameobjectdown', function(pointer, gameObject) {
            switch (gameObject.name) {
                case 'btAvancar':
                    tentativas = 0;
                    caixaResp.visible = false;
                    this.scene.shutdown();
                    this.scene.transition({ target: 'playGame2', duration: 100 });
                    break;

                case 'btHome':
                    tentativas = 0;
                    this.scene.shutdown();
                    this.scene.transition({ target: 'NoMenu', duration: 100 });
                    this.btHome.disableInteractive();
                    break;

                case 'btVerificar':
                    let resposta = caixaResp.text;

                    if (Math.abs((distancia*(escala))-resposta) <= (0.3*escala)){
                        this.parabens.visible = true;
                        this.btVerificar.visible = false;
                    }
                    else{
                        caixaResp.text = '';
                        tentativas += 1;
                        if(tentativas == 3){
                            this.corrigir.visible = true;
                        }
                        this.errado.visible = true;
                        this.timer =  this.time.delayedCall(2000, this.onEvent, [], this);
                    }
                    break;

                case 'btRefresh':
                    tentativas = 0;
                    this.btVerificar.visible = true;
                    this.parabens.visible = false;
                    this.corrigir.visible = false;
                    this.corrigirBox.visible = false;
                    this.corrigirText.visible = false;
                    caixaResp.text = '';
                    regua.setX(0.472*game.config.width);
                    regua.setY(0.87*game.config.height);
                    regua.angle = 0;
                    
                    if(repPt > 2){
                        pais = Phaser.Math.Between(2, 3);
                    }else if(repBr > 1){
                        pais = Phaser.Math.Between(0, 2);
                        if(pais == 2) pais += 1;
                    }else if(repCV > 1){
                        pais = Phaser.Math.Between(0, 2);
                    }
                    switch(pais) {
                        case 0:
                            escala = escalaPT/100000;
                            repPt += 1;
                            repBr = 0;
                            repCV = 0;
                            this.portugal.visible = true;
                            this.brasil.visible = false;
                            this.escalaText.visible = true;
                            this.escalaValorPt.visible = true;
                            this.escalaValorBr.visible = false;
                            this.escalaValorCV.visible = false;
                            this.escalaTextCV.visible = false;
                            this.escalaTextCV.visible = false;
                            this.caboVerde.visible = false;
                            c1 = Phaser.Math.Between(0, 16);
                            c2 = Phaser.Math.Between(0, 17);
                            if(c1 == 0 || c1 == 1 || c1 == 2 || c1 == 3){
                                c2 = Phaser.Math.Between(0, 16);
                            }
                            if(c2 == 0 || c2 == 1 || c2 == 2 || c2 == 3){
                                c1 = Phaser.Math.Between(0, 16);
                            }
                            if(c1 == c2) c2 += 1;
                            this.star1.setX(cidadesPortugal[c1][1]);
                            this.star1.setY(cidadesPortugal[c1][2]);
                            this.star2.setX(cidadesPortugal[c2][1]);
                            this.star2.setY(cidadesPortugal[c2][2]);
                            tween.restart();
                            this.tarefaText.setText('No mapa estão assinaladas as 18 capitais de distrito de Portugal Continental. \nCalcula a distância real, em km, entre '
                            + cidadesPortugal[c1][0] + ' e ' +cidadesPortugal[c2][0] + '.');
                            distancia = Phaser.Math.RoundTo(Phaser.Math.Distance.BetweenPoints(this.star1, this.star2)/43.4506, -1);
                            break;
                    
                        case 2:
                            escala = escalaBR/100000;
                            repBr += 1;
                            repPt = 0;
                            repCV = 0;
                            this.portugal.visible = false;
                            this.brasil.visible = true;
                            this.escalaText.visible = true;
                            this.escalaValorPt.visible = false;
                            this.escalaValorBr.visible = true;
                            this.escalaValorCV.visible = false;
                            this.escalaTextCV.visible = false;
                            this.escalaTextCV.visible = false;
                            this.caboVerde.visible = false;
                            c1 = Phaser.Math.Between(0, 13);
                            c2 = Phaser.Math.Between(0, 14);
                            if(c1 == c2) c2 += 1;
                            this.star1.setX(cidadesBrasil[c1][1]);
                            this.star1.setY(cidadesBrasil[c1][2]);
                            this.star2.setX(cidadesBrasil[c2][1]);
                            this.star2.setY(cidadesBrasil[c2][2]);
                            tween.restart();
                            this.tarefaText.setText('No mapa estão assinalados alguns dos 26 estados do Brasil. \nCalcula a distância real, em km, entre '
                            + cidadesBrasil[c1][0] + ' e ' +cidadesBrasil[c2][0] + '.');
                            distancia = Phaser.Math.RoundTo(Phaser.Math.Distance.BetweenPoints(this.star1, this.star2)/43.4506, -1);
                            break;

                        case 3:
                            escala = escalaCV/100000;
                            repCV += 1;
                            repBr = 0;
                            repPt = 0;
                            this.portugal.visible = false;
                            this.brasil.visible = false;
                            this.escalaText.visible = false;
                            this.escalaValorPt.visible = false;
                            this.escalaValorBr.visible = false;
                            this.escalaValorCV.visible = true;
                            this.escalaTextCV.visible = true;
                            this.escalaTextCV.visible = true;
                            this.caboVerde.visible = true;
                            c1 = Phaser.Math.Between(0, 8);
                            c2 = Phaser.Math.Between(0, 9);
                            if(c1 == c2) c2 += 1;
                            this.star1.setX(cidadesCaboVerde[c1][1]);
                            this.star1.setY(cidadesCaboVerde[c1][2]);
                            this.star2.setX(cidadesCaboVerde[c2][1]);
                            this.star2.setY(cidadesCaboVerde[c2][2]);
                            tween.restart();
                            this.tarefaText.setText('No mapa estão assinaladas 15 cidades nas várias ilhas de Cabo verde. \nCalcula a distância real, em km, entre '
                            + cidadesCaboVerde[c1][0] + ' e ' +cidadesCaboVerde[c2][0] + '.');
                            distancia = Phaser.Math.RoundTo(Phaser.Math.Distance.BetweenPoints(this.star1, this.star2)/43.4506, -1);
                            break;

                        default:
                            break;
                    }
                    break;

                case 'btCorrigir':
                    if(this.corrigirBox.visible){
                        this.corrigirBox.visible = false;
                        this.corrigirText.visible = false;
                    }
                    else{
                        this.corrigirBox.visible = true;
                        this.corrigirText.visible = true;
                        if(this.portugal.visible){
                            this.corrigirText.setText(' Proposta de correção\n\n1 cm ------>2 250 700\n\n'+distancia+' cm ------> X\n\n X = '
                            +distancia+' x 2250700\n X = '+Phaser.Math.RoundTo((distancia*escalaPT),0)+' cm\n\n Resposta = ' + Phaser.Math.RoundTo((distancia*escalaPT)/100000,-1)+' km');
                        }
                        else if (this.brasil.visible){
                            this.corrigirText.setText(' Proposta de correção\n\n1 cm ------>20 548 000\n\n'+distancia+' cm ------> X\n\n X = '
                            +distancia+' x 20548000\n X = '+Phaser.Math.RoundTo((distancia*escalaBR),0)+'cm\n\n Resposta = ' + Phaser.Math.RoundTo((distancia*escalaBR)/100000,-1)+' km');
                        }else{
                            this.corrigirText.setText(' Proposta de correção\n\n1 cm ------>1 540 000\n\n'+distancia+' cm ------> X\n\n X = '
                            +distancia+' x 1540000\n X = '+Phaser.Math.RoundTo((distancia*escalaCV),0)+'cm\n\n Resposta = ' + Phaser.Math.RoundTo((distancia*escalaCV)/100000,-1)+' km');
                        }
                    }
                    break;
                default:
                    break;
            }   
        }, this);

        this.input.keyboard.on('keydown-ENTER', event =>{
            let resposta = caixaResp.text;

            if (Math.abs((distancia*(escala))-resposta) <= (0.3*escala)){
                caixaResp.text = '';
                this.parabens.visible = true;
                this.timer =  this.time.delayedCall(2000, this.onEvent, [], this);
            }
            else{
                caixaResp.text = '';
                tentativas += 1;
                if(tentativas == 3){
                    this.corrigir.visible = true;
                }
                this.errado.visible = true;
                this.timer =  this.time.delayedCall(2000, this.onEvent, [], this);
            }

        });
	}


    update(){

        // 1 cm = 43.4506px?
        if(this.matter.overlap(this.star1,regua) && this.matter.overlap(this.star2,regua)){
            numeroQuadroText.setText('Comprimento: ' + distancia + 'cm');
            numeroQuadroText.visible = true;
        }
        else{
            numeroQuadroText.visible = false;
        }

        if (this.cursors.right.isDown){
            regua.angle += 1.0;
        }
        else if (this.cursors.left.isDown){
            regua.angle -= 1.0;
        }
        if(rodarDir){
            regua.angle += 0.2;
        }
        else if(rodarEsq){
            regua.angle -= 0.2;
        }
        if (rodar){
            regua.rotation = target;
        }
    }
    onEvent (){
        this.errado.visible = false;
    }
}