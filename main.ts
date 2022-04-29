controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (uomo_salto < 1) {
        uomo.vy = -120
    }
})
let uomo: Sprite = null
let uomo_salto = 0
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level2`)
let gravita = 250
let velocita_salto = -120
uomo_salto = 2
uomo = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
uomo.setStayInScreen(true)
controller.moveSprite(uomo, 100, 0)
uomo.setPosition(3, 62)
uomo.ay = gravita
scene.cameraFollowSprite(uomo)
game.onUpdate(function () {
    if (uomo.isHittingTile(CollisionDirection.Bottom)) {
        uomo_salto = 0
    }
})
