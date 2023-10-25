const noble = require('../with-custom-binding')

// Needs to export env: BLUETOOTH_HCI_SOCKET_FORCE_UART=1

const noble_uart_a = noble ({ bindParams: { uart: { port: "/dev/tty.usbmodem1..." } } } )
const noble_uart_b = noble ({ bindParams: { uart: { port: "/dev/tty.usbmodem2..." } } } )

noble_uart_a.on('discover', peripheral => {
    console.log("UART A", peripheral.address)
})

noble_uart_b.on('discover', peripheral => {
    console.log("UART B", peripheral.address)
})

noble_uart_a.on('stateChange', state => {
    if(state === 'poweredOn') {
        noble_uart_a.setAddress("00:11:22:33:44:01");
        noble_uart_a.startScanning()        
    }
});

noble_uart_b.on('stateChange', state => {
    if(state === 'poweredOn') {
        noble_uart_b.setAddress("00:11:22:33:44:02");
        noble_uart_b.startScanning()        
    }
});
