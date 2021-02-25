input.onButtonPressed(Button.A, function () {
    money += 1
    basic.showLeds(`
        # # # # #
        # . # . .
        # # # # #
        . . # . #
        # # # # #
        `)
    basic.pause(3000)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showNumber(mps)
})
input.onButtonPressed(Button.AB, function () {
    money = 25
})
input.onButtonPressed(Button.B, function () {
    if (money >= mine_cost) {
        mps += 1.5
        money += mine_cost - mine_cost * 2
        mine_cost += mine_cost / 1.65
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(350)
        basic.showString("" + (mine_cost))
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(money)
})
let money = 0
let mps = 0
let mine_cost = 0
mine_cost = 25
mps = 0
money = 0
basic.forever(function () {
    mine_cost = Math.round(mine_cost)
})
basic.forever(function () {
    money += mps
    basic.pause(1000)
})
