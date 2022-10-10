let KORDX = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.plot(KORDX, 0)
    KORDX = KORDX + 1
})
