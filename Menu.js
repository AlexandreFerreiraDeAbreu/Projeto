var hide = false;
var x; 
var y;
var fs = false;

class Menu extends Phaser.Scene {
	constructor(){
		super("NoMenu");
	}


	preload(){
		this.load.image("background","assets/images/background.png");
        this.load.image("titulo2","assets/images/titulo2.png");
        this.load.image("login","assets/images/login.png");
        this.load.image("creditos","assets/images/creditos.png");
		this.load.image('btplay', 'assets/images/btPlay.png');
        this.load.image('btInfo', 'assets/images/btinfo.png');
        this.load.image('btcreditos', 'assets/images/btcreditos.png');
        this.load.image('btFechar', 'assets/images/btfechar.png');
        this.load.image('btLogin', 'assets/images/btLogin.png');
        this.load.image('btFullScreen', 'assets/images/btFullScreen.png');
        this.load.image('btExitFullScreen', 'assets/images/btExitFullScreen.png');
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);
	}

	create(){
		this.background = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'background');
        this.background.setScale(1.5);

        this.titulo2 = this.add.image(0.53 * game.config.width, 0.08 *game.config.height, 'titulo2');
        this.titulo2.setScale(1.6);

        this.loginQuadro = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'login');
        this.loginQuadro.setScale(1.6);
        this.loginQuadro.visible = false;

        this.creditos = this.add.image(0.5 * game.config.width, 0.5 *game.config.height, 'creditos');
        this.creditos.setScale(1.5);
        this.creditos.visible = false;
        //this.creditos.name = 'creditos';

        this.btplay = this.add.sprite(0.5 * game.config.width, 0.5 *game.config.height, "btplay");
        this.btplay.setScale(1.3);
        this.btplay.setInteractive({ useHandCursor: true });
        this.btplay.name = 'btplay';

        this.btplay.on('pointerover', () => {
        this.btplay.displayHeight += 5;
        this.btplay.displayWidth += 5;

        });
        this.btplay.on('pointerout', () => {
        this.btplay.displayHeight -= 5;
        this.btplay.displayWidth -= 5;
        });



        this.btInfo = this.add.sprite(0.94 * game.config.width, 0.785 *game.config.height, "btInfo");
        this.btInfo.setScale(0.863);
        this.btInfo.setInteractive({ useHandCursor: true });
        this.btInfo.name = 'btInfo';

        this.btInfo.on('pointerover', () => {
        this.btInfo.displayHeight += 5;
        this.btInfo.displayWidth += 5;

        });
        this.btInfo.on('pointerout', () => {
        this.btInfo.displayHeight -= 5;
        this.btInfo.displayWidth -= 5;
        });


        this.btcreditos = this.add.sprite(0.94 * game.config.width, 0.91 *game.config.height, "btcreditos");
        this.btcreditos.setScale(1.15);
        this.btcreditos.setInteractive({ useHandCursor: true });
        this.btcreditos.name = 'btcreditos';

        this.btcreditos.on('pointerover', () => {
        this.btcreditos.displayHeight += 5;
        this.btcreditos.displayWidth += 5;

        });
        this.btcreditos.on('pointerout', () => {
        this.btcreditos.displayHeight -= 5;
        this.btcreditos.displayWidth -= 5;
        });


        this.btLogin = this.add.sprite(0.94 * game.config.width, 0.66 *game.config.height, "btLogin");
        this.btLogin.setScale(0.884,0.886);
        this.btLogin.setInteractive({ useHandCursor: true });
        this.btLogin.name = 'btLogin';

        this.btLogin.on('pointerover', () => {
        this.btLogin.displayHeight += 5;
        this.btLogin.displayWidth += 5;

        });
        this.btLogin.on('pointerout', () => {
        this.btLogin.displayHeight -= 5;
        this.btLogin.displayWidth -= 5;
        });


        this.btLoginFinal = this.add.sprite(0.5 * game.config.width, 0.7 *game.config.height, "btLogin");
        this.btLoginFinal.setScale(1);
        this.btLoginFinal.setInteractive({ useHandCursor: true });
        this.btLoginFinal.visible = false;
        this.btLoginFinal.name = 'btLoginFinal';

        this.btLoginFinal.on('pointerover', () => {
        this.btLoginFinal.displayHeight += 5;
        this.btLoginFinal.displayWidth += 5;

        });
        this.btLoginFinal.on('pointerout', () => {
        this.btLoginFinal.displayHeight -= 5;
        this.btLoginFinal.displayWidth -= 5;
        });





        this.btFechar = this.add.sprite(0.69 * game.config.width, 0.25 *game.config.height, "btFechar");
        this.btFechar.setScale(0.695);
        this.btFechar.setInteractive({ useHandCursor: true });
        this.btFechar.visible = false;
        this.btFechar.name = 'btFechar';

        this.btFechar.on('pointerover', () => {
        this.btFechar.displayHeight += 5;
        this.btFechar.displayWidth += 5;

        });
        this.btFechar.on('pointerout', () => {
        this.btFechar.displayHeight -= 5;
        this.btFechar.displayWidth -= 5;
        });


        this.btFecharLogin = this.add.sprite(0.695 * game.config.width, 0.24 *game.config.height, "btFechar");
        this.btFecharLogin.setScale(0.695);
        this.btFecharLogin.setInteractive({ useHandCursor: true });
        this.btFecharLogin.visible = false;
        this.btFecharLogin.name = 'btFecharLogin';

        this.btFecharLogin.on('pointerover', () => {
        this.btFecharLogin.displayHeight += 5;
        this.btFecharLogin.displayWidth += 5;

        });
        this.btFecharLogin.on('pointerout', () => {
        this.btFecharLogin.displayHeight -= 5;
        this.btFecharLogin.displayWidth -= 5;
        });



        this.btFullScreen = this.add.sprite(0.06 * game.config.width, 0.08 *game.config.height, "btFullScreen");
        this.btFullScreen.setScale(0.7);
        this.btFullScreen.setInteractive({ useHandCursor: true });
        this.btFullScreen.name = 'btFullScreen';

        this.btFullScreen.on('pointerover', () => {
        this.btFullScreen.setScale(0.72);

        });
        this.btFullScreen.on('pointerout', () => {
            this.btFullScreen.setScale(0.7);
        });


        this.btExitFullScreen = this.add.sprite(0.06 * game.config.width, 0.08 *game.config.height, "btExitFullScreen");
        this.btExitFullScreen.setScale(0.7);
        this.btExitFullScreen.visible = false;
        this.btExitFullScreen.setInteractive({ useHandCursor: true });
        this.btExitFullScreen.name = 'btExitFullScreen';

        this.btExitFullScreen.on('pointerover', () => {
            this.btFullScreen.setScale(0.72);

        });
        this.btExitFullScreen.on('pointerout', () => {
            this.btFullScreen.setScale(0.7);
        });

        //------------------------------------LOGIN INFO ----------------------

        this.loginErrorMsg = this.add.text(0.42 * game.config.width, 0.585 * game.config.height,"Utilizador ou Password Errados",{ fontFamily: 'font1',fontSize: 36,color: '#ff0000',align: 'center'});
        this.loginErrorMsg.visible = false;
           
        let user = `
        <input type="text" name="username" style="font-size: 15px;font-family:'font1';text-align:center;">
        `;
        
        let pass = `
        <input type="password" name="password" style="font-size: 15px;font-family:'font1';text-align:center;">
        `;      
                
        x = this.add.dom(0.535 * game.config.width, 0.368 * game.config.height).createFromHTML(user);
        x.setScale(2.55,2.95);
        x.visible = false;


        y = this.add.dom(0.535 * game.config.width, 0.532 * game.config.height).createFromHTML(pass);
        y.setScale(2.55,2.95);
        y.visible = false;

         //--------------------------------------------------------------------------


        this.input.on('gameobjectdown', function(pointer, gameObject) {
            switch (gameObject.name) {
                case 'btplay':
                    this.scene.shutdown();
                    this.scene.transition({ target: 'playGame', duration: 100 });
                    this.btplay.disableInteractive();
                    this.btInfo.disableInteractive();
                    this.btFullScreen.disableInteractive();
                    break;
                case 'btInfo':
                    this.scene.shutdown();
                    this.scene.transition({ target: 'Slides', duration: 100 });
                    this.btplay.disableInteractive();
                    this.btInfo.disableInteractive();
                    break;
                case 'btcreditos':
                    this.btplay.disableInteractive();
                    this.btInfo.disableInteractive();
                    this.btcreditos.disableInteractive();
                    this.btLogin.disableInteractive();
                    this.btplay.visible = false;
                    this.creditos.visible = true;
                    this.btFechar.visible = true;
                    this.btLogin.visible = false;
                    this.btcreditos.visible = false;
                    this.btInfo.visible = false;
                    break;
                case 'btFechar':
                    this.btplay.setInteractive();
                    this.btInfo.setInteractive();
                    this.btcreditos.setInteractive();
                    this.btLogin.setInteractive();
                    this.btplay.visible = true;
                    this.creditos.visible = false;
                    this.btFechar.visible = false;
                    this.btLogin.visible = true;
                    this.btcreditos.visible = true;
                    this.btInfo.visible = true;
                    break;
                case 'btFullScreen':
                    this.scale.startFullscreen();
                    break;
                case 'btExitFullScreen':
                    this.scale.stopFullscreen();
                    break;
                case 'btLogin':
                    this.btplay.disableInteractive();
                    this.btInfo.disableInteractive();
                    this.btcreditos.disableInteractive();
                    this.btLogin.disableInteractive();
                    this.btFecharLogin.setInteractive();
                    this.btLoginFinal.setInteractive();
                    this.btLogin.visible = false;
                    this.btcreditos.visible = false;
                    this.btInfo.visible = false;

                    this.btLoginFinal.visible = true;
                    this.btFecharLogin.visible = true;
                    this.btplay.visible = false;
                    this.loginQuadro.visible = true;

                    x.visible = true;
                    y.visible = true;
                    break;
                case 'btFecharLogin':
                    this.btplay.setInteractive();
                    this.btInfo.setInteractive();
                    this.btcreditos.setInteractive();
                    this.btLogin.setInteractive();
                    this.btLogin.visible = true;
                    this.btcreditos.visible = true;
                    this.btInfo.visible = true;

                    this.btplay.visible = true;
                    this.loginQuadro.visible = false;
                    this.btFecharLogin.visible = false;
                    this.btLoginFinal.visible = false;
                    this.loginErrorMsg.visible = false;

                    x.visible = false;
                    y.visible = false;
                    break;
                case 'btLoginFinal':
                    let user = x.getChildByName("username").value
                    let password = y.getChildByName("password").value

                    if (user != '' && password != '') {
                         let r = login(user, password,this);
                        x.getChildByName("username").value = '';
                        y.getChildByName("password").value = '';       
                    }
                    break;
                default:
                    break;
            }
        }, this); 
	}



    update() {
        if(this.scale.isFullscreen){
            this.btFullScreen.visible = false;
            this.btExitFullScreen.visible = true;
        }
        else{
            this.btFullScreen.visible = true;
            this.btExitFullScreen.visible = false;
        }
        if(hide){
            this.btFechar.disableInteractive();
            this.btFecharLogin.disableInteractive();
            this.btExitFullScreen.disableInteractive();
            this.btLoginFinal.disableInteractive();
            this.btcreditos.setInteractive();
            this.btcreditos.setInteractive();
            this.btInfo.setInteractive();
            this.btFullScreen.setInteractive();
            this.btplay.setInteractive();

            this.creditos.visible = false;
            this.loginQuadro.visible = false;
            this.btExitFullScreen = false;
            this.btFechar.visible = false;
            this.btFecharLogin.visible = false;
            this.btLoginFinal.visible = false;

            this.btFullScreen = true;
            this.btInfo.visible = true;
            this.btcreditos.visible = true;
            this.btplay.visible = true;
            this.btLogin = true;

            //Login hide
            x.visible = false;
            y.visible = false;
            this.loginErrorMsg.visible = false;
            hide = false; 
            
        }
    }
}
