let millivolts = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
input.onButtonPressed(Button.B, function () {
    millivolts = Math.round(pins.analogReadPin(AnalogPin.P0) * (3000 / 1023))
    basic.showNumber(millivolts)
    if (millivolts < 1200) {
        basic.showIcon(IconNames.Skull)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
