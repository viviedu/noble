
module.exports = function (options) {
  if (process.env.NOBLE_HCI_UART_PORT) {
    return new (require('./hci-uart/bindings'))(options);
  } else {
    throw new Error('Unsupported platform');
  }
};
