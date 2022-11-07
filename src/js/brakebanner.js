class BrakeBanner{
	constructor(selector){
		this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0xffffff
    })

    document.querySelector(selector).appendChild(this.app.view)

    this.loader = new PIXI.Loader()

    this.loader.add('btn.png', 'images/btn.png')
    this.loader.add('btn_circle.png', 'images/btn_circle.png')
    this.loader.add('brake_bike.png', 'images/brake_bike.png')
    this.loader.add('brake_handlerbar.png', 'images/brake_handlerbar.png')
    this.loader.add('brake_lever.png', 'images/brake_lever.png')

    this.loader.load()

    this.loader.onComplete.add(() => {
      this.show()
    })
	}

  show() {
    let actionButton = new PIXI.Container()
    this.app.stage.addChild(actionButton)
    let btnImage = new PIXI.Sprite(this.loader.resources['btn.png'].texture)

    let btnCircle = new PIXI.Sprite(this.loader.resources['btn_circle.png'].texture)

    actionButton.addChild(btnImage)
    actionButton.addChild(btnCircle)

    btnImage.pivot.x = btnImage.pivot.y = btnImage.width / 2;
    btnCircle.pivot.x = btnCircle.pivot.y = btnCircle.width / 2;
  }
}