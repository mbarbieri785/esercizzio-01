controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (uomo_salto < 1) {
        uomo.vy = -120
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    uomo.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false)
    game.reset()
})
let mySprite2: Sprite = null
let uomo: Sprite = null
let uomo_salto = 0
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level2`)
let gravita = 350
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
info.setLife(1)
game.onUpdate(function () {
    if (uomo.isHittingTile(CollisionDirection.Bottom)) {
        uomo_salto = 0
        pause(100)
    }
})
game.onUpdateInterval(1000, function () {
    mySprite2 = sprites.create(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fdd1111111df......
        ......fddd111111df......
        ......fdddddd111df......
        ......fdddddd111df......
        ......fbddddddd1df......
        ......ffbbddbfd1df......
        .......fcbbdcfddbf......
        .......fffbddccffff.....
        .......ffffcfbbb1bcf....
        ......ffffffffcd1b1f....
        ...ffffffffff..fdfdf....
        .....ffffff.....f.f.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite2.setPosition(160, randint(250, 120))
    mySprite2.setVelocity(-53, 0)
    mySprite2.setBounceOnWall(false)
})
