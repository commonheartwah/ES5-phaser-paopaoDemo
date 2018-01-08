var game = new Phaser.Game(1334, 750, Phaser.CANVAS, 'game', {
  init: init,//初始化舞台
  preload: preload,//资源加载
  create: create,//创建场景
  update: update//游戏循环
});

function init() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;//缩放控制
  // game.scale.setUserScale(1, 0.5);
}

function preload() {
  console.log('资源加载');
  game.load.image('bacImg', './assets/images/bg.png');//图片加载 背景图片
  game.load.image('startImg', './assets/images/rule.png');//开始图片按钮
}

function create() {
  game.add.sprite(0, 0, 'bacImg');
  game.add.button(game.width / 2, game.height / 2, 'startImg', function () {
    game.state.add('play', play);
    game.state.start('play');
  }).anchor.setTo(0.5);
}

function update() {

}