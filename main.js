bluetooth.onBluetoothConnected(function on_bluetooth_connected() {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function on_bluetooth_disconnected() {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    bluetooth.uartWriteLine("Hello!")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function on_uart_data_received() {
    basic.showIcon(IconNames.Surprised)
    serial.writeString(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
})
bluetooth.startUartService()
