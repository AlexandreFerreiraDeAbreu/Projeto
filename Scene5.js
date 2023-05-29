class Scene5 extends Phaser.Scene {
    
	constructor(){
		super("playGame4");
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
        var nDica = 1;
        const dicas = ['No menu inicial podes encontrar um botão que te informa sobre escalas!',
                       'Podes arrastar a régua para te ajudar a medir as distâncias.',
                       'No computador, podes usar o botão direito do rato ou as setas do\nteclado para rodar a régua.',
                       'No telemóvel ou no tablet, podes usar dois dedos para rodar a régua.',
                       'Se acertares a pergunta, podes clicar no botão ao lado das dicas\npara ter uma nova pergunta.',
                       'Se estiveres com dificuldades em acertar a resposta, podes usar o\nbotão de ajuda para veres uma possível resolução.',
                       'Antes de usares a ajuda tenta resolver por ti próprio, não há \nlimite de tentativas!'];
        var cidade1 = Phaser.Math.Between(0, 16);
        var cidade2 = Phaser.Math.Between(0, 17);
        if(cidade1 == cidade2) cidade2+=1;

		this.background3 = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'background3');
        this.background3.setScale(1.5);

        this.portugal = this.add.image(0.12*game.config.width, 0.05*game.config.height, 'portugal').setOrigin(0,0).setScale(1.30);
        this.portugal.visible = true;

        this.brasil = this.add.image(0.02*game.config.width, 0.17*game.config.height, 'brasil').setOrigin(0,0);
        this.brasil.visible = false;

        this.caboVerde = this.add.image(0.02*game.config.width, 0.21*game.config.height, 'caboVerde').setOrigin(0,0).setScale(0.9);
        this.caboVerde.visible = false;


        this.boxVerde = this.add.image(0.4*game.config.width, 0.13*game.config.height, 'boxVerde1').setOrigin(0,0).setScale(0.94,1);
        
        this.tarefa1 = this.add.text(0.41*game.config.width,0.15*game.config.height,'Tarefa 4:', {
             fontFamily: 'font1', fontSize: 30, fill: 'black', stroke: 'black', strokeThickness: 1});

            
        this.tarefaText = this.add.text(0.41*game.config.width,0.2*game.config.height,'',   { 
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
        var caixaDeResposta = this.add.rexInputText(0.53 * game.config.width, 0.35 * game.config.height, 220, 25, {
            type: 'text',
            fontSize: '15px',
            color: 'black',
            maxLength: '16',
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


        this.errado = this.add.image(0.78 * game.config.width, 0.37 *game.config.height, 'btErrado').setScale(0.4);
        this.errado.visible = false;

        this.parabens = this.add.image(0.835 * game.config.width, 0.37 *game.config.height, 'parabens').setScale(0.4);
        this.parabens.visible = false;


        this.respText = this.add.text(0.4 * game.config.width, 0.6*game.config.height,'', {
            fontFamily: 'font1', fontSize: 40, fill: 'white', stroke: 'black', strokeThickness: 0.5});


        this.corrigirCaixa = this.add.image(0.7*game.config.width, 0.42*game.config.height, 'boxVerde2').setOrigin(0,0).setScale(1.1,0.6);
        this.corrigirCaixa.visible = false;
        this.corrigirText = this.add.text(0.71*game.config.width,0.43*game.config.height,'',{
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

        this.corrigirFalso = this.add.image(0.67*game.config.width, 0.45*game.config.height, 'btCorrigir').setScale(0.6);
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

        this.dicaBox = this.add.image(0.5*game.config.width, 0.02*game.config.height, 'boxVerde1').setOrigin(0,0).setScale(0.77,0.8);
        //this.dicaBox.setTint(0xC9CC3F);
        this.dicaTitulo = this.add.text(0.505*game.config.width,0.03*game.config.height,'Dica:', {
            fontFamily: 'font1', fontSize: 28, fill: 'black', stroke: 'black', strokeThickness: 1});
        this.dicaText = this.add.text(0.51*game.config.width,0.06*game.config.height,'No menu inicial podes encontrar um botão que te informa sobre escalas!', {
            fontFamily: 'font1', fontSize: 21, fill: 'black', stroke: 'black', strokeThickness: 0.2});
        this.dicaNext = this.add.sprite(0.935 * game.config.width, 0.09 *game.config.height, "btAvancar").setScale(0.3).setInteractive({ useHandCursor: true });
        this.dicaNext.name = 'btDicaNext';
        this.dicaPrev = this.add.sprite(0.909 * game.config.width, 0.09 *game.config.height, "btAvancar").setScale(0.3).setInteractive({ useHandCursor: true });
        this.dicaPrev.name = 'btDicaPrev';
        this.dicaPrev.flipX = true;

        this.dicaBox.visible = false;
        this.dicaTitulo.visible = false;
        this.dicaText.visible = false;
        this.dicaNext.visible = false;
        this.dicaPrev.visible = false;

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

        this.star1 = this.matter.add.sprite(cidadesPortugal[cidade1][1], cidadesPortugal[cidade1][2], 'star').setScale(0.7);
        this.star1.setBody({
            type: 'rectangle',
            width: 7,
            height: 7
        });
        this.star1.setCollisionGroup(-1);

        numeroQuadroText = this.add.text(950, 1130, '', { fontFamily: 'font1', fontSize: '32px', fill: 'white' });
        numeroQuadroText.visible = false;

        const tween = this.add.tween({
            targets: [this.star1],
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
            caixaDeResposta.setBlur();
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

        distancia = Phaser.Math.RoundTo(Phaser.Math.Distance.Between(this.star1.x, this.star1.y, cidadesPortugal[cidade2][1], cidadesPortugal[cidade2][2])/43.4506, -1);

        this.tarefaText.setText('No mapa estão assinaladas as 18 capitais de distrito de Portugal Continental. \nEncontra a cidade que está a '
        +Phaser.Math.RoundTo(distancia*22.507,0)+ ' km  de distância de ' +cidadesPortugal[cidade1][0] + '.');


        this.input.on('gameobjectdown', function(pointer, gameObject) {
            switch (gameObject.name) {
                case 'btHome':
                    tentativas = 0;
                    this.scene.shutdown();
                    this.scene.transition({ target: 'NoMenu', duration: 100 });
                    this.btHome.disableInteractive();
                    break;

                case 'btRetroceder':
                    this.scene.shutdown();
                    this.scene.transition({ target: 'playGame3', duration: 100 });
                    break;

                case 'btInfo':
                    if(this.dicaBox.visible){
                        this.dicaBox.visible = false;
                        this.dicaTitulo.visible = false;
                        this.dicaText.visible = false;
                        this.dicaNext.visible = false;
                        this.dicaPrev.visible = false;
                    }
                    else{
                        this.dicaBox.visible = true;
                        this.dicaTitulo.visible = true;
                        this.dicaText.visible = true;
                        this.dicaNext.visible = true;
                        if(nDica>=2){
                            this.dicaPrev.visible = true;
                        }
                    }
                    break;
                case 'btDicaNext':
                    nDica += 1;
                    this.dicaPrev.visible = true;
                    if(nDica == 7) this.dicaNext.visible = false;
                    this.dicaText.setText(dicas[nDica-1])
                    break;
                case 'btDicaPrev':
                    nDica -= 1;
                    this.dicaNext.visible = true;
                    if(nDica == 1) this.dicaPrev.visible = false;
                    this.dicaText.setText(dicas[nDica-1])
                    break;

                case 'btVerificar':
                    let resposta = caixaDeResposta.text;

                    if ((pais == 0 || pais == 1) && resposta == cidadesPortugal[cidade2][0]){
                        this.parabens.visible = true;
                        this.btVerificar.visible = false;
                    }
                    else if (pais == 2 && resposta == cidadesBrasil[cidade2][0]){
                        this.parabens.visible = true;
                        this.btVerificar.visible = false;
                    }
                    else if (pais == 3 && resposta == cidadesCaboVerde[cidade2][0]){
                        this.parabens.visible = true;
                        this.btVerificar.visible = false;
                    }
                    else{
                        caixaDeResposta.text = '';
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
                    this.corrigirCaixa.visible = false;
                    this.corrigirText.visible = false;
                    caixaDeResposta.text = '';
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
                    if(pais == 1) pais = 0;
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
                            cidade1 = Phaser.Math.Between(0, 16);
                            cidade2 = Phaser.Math.Between(0, 17);
                            if(cidade1 == 0 || cidade1 == 1 || cidade1 == 2 || cidade1 == 3){
                                cidade2 = Phaser.Math.Between(0, 16);
                            }
                            if(cidade2 == 0 || cidade2 == 1 || cidade2== 2 || cidade2 == 3){
                                cidade1 = Phaser.Math.Between(0, 16);
                            }
                            if(cidade1 == cidade2) cidade2 += 1;
                            this.star1.setX(cidadesPortugal[cidade1][1]);
                            this.star1.setY(cidadesPortugal[cidade1][2]);
                            tween.restart();
                            distancia = Phaser.Math.RoundTo(Phaser.Math.Distance.Between(this.star1.x, this.star1.y, cidadesPortugal[cidade2][1], cidadesPortugal[cidade2][2])/43.4506, -1);
                            this.tarefaText.setText('No mapa estão assinaladas as 18 capitais de distrito de Portugal Continental. \nEncontra a cidade que está a '
                            + Phaser.Math.RoundTo(distancia*22.507,0)+ ' km de distância de ' +cidadesPortugal[cidade1][0] + '.');
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
                            cidade1 = Phaser.Math.Between(0, 13);
                            cidade2 = Phaser.Math.Between(0, 14);
                            if(cidade1 == cidade2) cidade2 += 1;
                            this.star1.setX(cidadesBrasil[cidade1][1]);
                            this.star1.setY(cidadesBrasil[cidade1][2]);
                            tween.restart();
                            distancia = Phaser.Math.RoundTo(Phaser.Math.Distance.Between(this.star1.x, this.star1.y, cidadesBrasil[cidade2][1], cidadesBrasil[cidade2][2])/43.4506, -1);
                            this.tarefaText.setText('No mapa estão assinalados alguns dos 26 estados do Brasil. \nEncontra a cidade que está a '
                            + Phaser.Math.RoundTo(distancia*205.48,0)+ ' km de distância de ' +cidadesBrasil[cidade1][0] + '.');
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
                            cidade1 = Phaser.Math.Between(0, 8);
                            cidade2 = Phaser.Math.Between(0, 9);
                            if(cidade1 == cidade2) cidade2 += 1;
                            this.star1.setX(cidadesCaboVerde[cidade1][1]);
                            this.star1.setY(cidadesCaboVerde[cidade1][2]);
                            tween.restart();
                            distancia = Phaser.Math.RoundTo(Phaser.Math.Distance.Between(this.star1.x, this.star1.y, cidadesCaboVerde[cidade2][1], cidadesCaboVerde[cidade2][2])/43.4506, -1);
                            this.tarefaText.setText('No mapa estão assinaladas 15 cidades nas várias ilhas de Cabo verde. \nEncontra a cidade que está a '
                            + Phaser.Math.RoundTo(distancia*15.4,0)+ ' km de distância de ' +cidadesCaboVerde[cidade1][0] + '.');
                            break;

                        default:
                            break;
                    }
                    break;

                case 'btCorrigir':
                    if(this.corrigirCaixa.visible){
                        this.corrigirCaixa.visible = false;
                        this.corrigirText.visible = false;
                    }
                    else{
                        this.corrigirCaixa.visible = true;
                        this.corrigirText.visible = true;
                        if(this.portugal.visible){
                            this.corrigirText.setText(' Proposta de correção\n\n'+Phaser.Math.RoundTo(distancia*22.507,0)+' km = '+Phaser.Math.RoundTo(distancia*2250700,0)+' cm\n\n'+
                            Phaser.Math.RoundTo(distancia*2250700,0)+' / 2250700 = '+Phaser.Math.RoundTo(distancia,-2) +' cm\n\nResposta = ' + cidadesPortugal[cidade2][0]+'.');
                        }
                        else if (this.brasil.visible){
                            this.corrigirText.setText(' Proposta de correção\n\n'+Phaser.Math.RoundTo(distancia*15.4,0)+' km = '+Phaser.Math.RoundTo(distancia*1540000,0)+' cm\n\n'+
                            Phaser.Math.RoundTo(distancia*1540000,0)+' / 2250700 = '+Phaser.Math.RoundTo(distancia,-2) +' cm\n\nResposta = ' + cidadesBrasil[cidade2][0]+'.');
                        }else{
                            this.corrigirText.setText(' Proposta de correção\n\n'+Phaser.Math.RoundTo(distancia*15.4,0)+' km = '+Phaser.Math.RoundTo(distancia*1540000,0)+' cm\n\n'+
                            Phaser.Math.RoundTo(distancia*1540000,0)+' / 2250700 = '+Phaser.Math.RoundTo(distancia,-2) +' cm\n\nResposta = ' + cidadesCaboVerde[cidade2][0]+'.');
                        }
                    }
                    break;
                default:
                    break;
            }   
        }, this);

        this.input.keyboard.on('keydown-ENTER', event =>{
            let resposta = caixaDeResposta.text;

        });
	}


    update(){

        // 1 cm = 43.4506px?

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


    