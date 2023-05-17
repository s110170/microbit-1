input.onGesture(Gesture.FreeFall, function () {
    led.plot(3, 3)
    led.plot(2, 1)
    led.plot(1, 5)
    led.plot(4, 2)
    led.plot(5, 4)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.No)
    soundExpression.mysterious.playUntilDone()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Yes)
    soundExpression.twinkle.playUntilDone()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
