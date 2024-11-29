function Game (playeritem: number) {
    if (resnum < 4) {
        radio.sendString("Res")
        resnum += 1
    }
    if (playeritem == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # # . .
            . # . # .
            `)
        if (Itemc == 0) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else if (Itemc == 1) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    } else if (playeritem == 1) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . . .
            . # . . .
            `)
        if (Itemc == 0) {
            basic.showIcon(IconNames.Yes)
        } else if (Itemc == 1) {
            basic.showIcon(IconNames.Square)
        } else {
            basic.showIcon(IconNames.No)
        }
    } else {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        if (Itemc == 0) {
            basic.showIcon(IconNames.No)
        } else if (Itemc == 1) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.Square)
        }
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    Itemc = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    Itemp = 0
    if (!(Itemc == 5)) {
        Game(0)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    radio.sendString("startGame")
    resnum = 0
    Sendm = 1
    Itemc = 5
})
radio.onReceivedString(function (receivedString) {
    if (receivedString.includes("startGame")) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        resnum = 0
        Itemc = 5
        Sendm = 1
    } else {
        Sendm = 0
        Game(Itemp)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    Itemp = 2
    if (!(Itemc == 5)) {
        Game(2)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(1)
    Itemp = 1
    if (!(Itemc == 5)) {
        Game(1)
    }
})
let Sendm = 0
let Itemp = 0
let Itemc = 0
let resnum = 0
radio.setGroup(8)
basic.forever(function () {
	
})
