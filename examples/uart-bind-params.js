const noble = require('../with-custom-binding')

// Needs to export env: BLUETOOTH_HCI_SOCKET_FORCE_UART=1

const noble_uart_a = noble ({ bindParams: { uart: { port: "/dev/tty.usbmodem1..." } } } )
const noble_uart_b = noble ({ bindParams: { uart: { port: "/dev/tty.usbmodem2..." } } } )

noble_uart_a.on('discover', (peripheral) => {
    console.log("UART A", peripheral.address)
})

noble_uart_b.on('discover', (peripheral) => {
    console.log("UART B", peripheral.address)
})

noble_uart_a.startScanning()
noble_uart_b.startScanning()
