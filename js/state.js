//第二个舞台
function play() {
  //初始化使用的变量
  var music, musicBaby, musicSee, musicPeople, imgBaby, imgBabyy, imgSee, imgSeee, imgPeople, imgPeoplee;

  //加载使用的资源
  this.preload = function () {
    game.load.image('bacImg', './assets/images/bg.png');//图片加载 背景图片  
    //礼物图片资源              
    game.load.image('goodsOne', './assets/images/li1.png');//图片加载             
    game.load.image('goodsTwo', './assets/images/li2.png');//图片加载 
    game.load.image('goodsThree', './assets/images/li3.png');//图片加载 

    //望远镜，人，baby图片资源
    game.load.image('babyImg', './assets/images/baby.png');
    game.load.image('seeImg', './assets/images/see.png');
    game.load.image('peekabooImg', './assets/images/peekaboo.png');

    //音频文件资源
    game.load.audio('sound', './assets/audio/Time.mp3');//声音文件
    game.load.audio('baby', './assets/audio/baby.mp3');//声音文件
    game.load.audio('see', './assets/audio/see.mp3');//声音文件
    game.load.audio('people', './assets/audio/peekaboo.mp3');//声音文件

  }

  //创建资源
  this.create = function () {
    game.add.sprite(0, 0, 'bacImg');
    //baby 和 礼物图片的叠加
    imgBaby = game.add.sprite(0, 0, 'goodsOne');

    var tween = game.add.tween(imgBaby);
    tween.delay(500).to({ x: 0 }, 1000).to({y: 300 }, 5000);
    tween.start();
    tween.loop(); //循环效果

    game.add.sprite(0, 0, 'babyImg').kill();
    imgBabyy = game.add.sprite(0, game.height / 2, 'goodsOne');
    game.add.sprite(0, game.height / 2, 'babyImg').kill();

    //望远镜 和 礼物图片的叠加
    imgSee = game.add.sprite(game.width / 3, 0, 'goodsTwo');
    game.add.sprite(game.width / 3, 0, 'seeImg').kill();
    imgSeee = game.add.sprite(game.width / 3, game.height / 2, 'goodsTwo');
    game.add.sprite(game.width / 3, game.height / 2, 'seeImg').kill();

    //人 和 礼物图片的叠加
    imgPeople = game.add.sprite(game.width / 1.5, 0, 'goodsThree');
    game.add.sprite(game.width / 1.5, 0, 'peekabooImg').kill();
    imgPeoplee = game.add.sprite(game.width / 1.5, game.height / 2, 'goodsThree');
    game.add.sprite(game.width / 1.5, game.height / 2, 'peekabooImg').kill();

    //背景音乐
    music = game.add.audio('sound');
    //点击图片的音乐
    musicBaby = game.add.audio('baby');
    musicSee = game.add.audio('see');
    musicPeople = game.add.audio('people');

    music.onDecoded.add(this.start, this);


    //baby的点击显示事件
    imgBaby.inputEnabled = true; //这里启动相关操作，比如，鼠标点击等等
    imgBaby.events.onInputDown.add(this.listenerBaby, this);
    imgBabyy.inputEnabled = true; //这里启动相关操作，比如，鼠标点击等等
    imgBabyy.events.onInputDown.add(this.listenerBabyy, this);

    //see的点击显示事件
    imgSee.inputEnabled = true; //这里启动相关操作，比如，鼠标点击等等
    imgSee.events.onInputDown.add(this.listenerSee, this);
    imgSeee.inputEnabled = true; //这里启动相关操作，比如，鼠标点击等等
    imgSeee.events.onInputDown.add(this.listenerSeee, this);

    //人的点击显示事件
    imgPeople.inputEnabled = true; //这里启动相关操作，比如，鼠标点击等等
    imgPeople.events.onInputDown.add(this.listenerPeo, this);
    imgPeoplee.inputEnabled = true; //这里启动相关操作，比如，鼠标点击等等
    imgPeoplee.events.onInputDown.add(this.listenerPeoo, this);

  }

  //控制图片显示与隐藏 同时调用音乐
  this.listenerBaby = function () {
    imgBaby.kill();
    game.add.sprite(0, 0, 'babyImg');
    this.startBaby();
  }
  this.listenerBabyy = function () {
    imgBabyy.kill();
    game.add.sprite(0, game.height / 2, 'babyImg');
    this.startBaby();
  }
  this.listenerSee = function () {
    imgSee.kill();
    game.add.sprite(game.width / 3, 0, 'seeImg');
    this.startSee();
  }
  this.listenerSeee = function () {
    imgSeee.kill();
    game.add.sprite(game.width / 3, game.height / 2, 'seeImg')
    this.startSee();
  }
  this.listenerPeo = function () {
    imgPeople.kill();
    game.add.sprite(game.width / 1.5, 0, 'peekabooImg');
    this.startPeople();
  }
  this.listenerPeoo = function () {
    imgPeoplee.kill();
    game.add.sprite(game.width / 1.5, game.height / 2, 'peekabooImg');
    this.startPeople();
  }

  //音乐开启事件
  this.start = function () {
    music.fadeIn(400);
  }
  this.startBaby = function () {
    musicBaby.fadeIn(400);
  }
  this.startSee = function () {
    musicSee.fadeIn(400);
  }
  this.startPeople = function () {
    musicPeople.fadeIn(400);
  }
}