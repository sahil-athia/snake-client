const net = require('net');
const { IP, PORT } = require('./constants')

const connect = function() {
  const conn = net.createConnection({ 
    host: IP, 
    port: PORT  
  });
  conn.on('connect', () => {
    conn.write('Name: YYZ')
  })
  
  conn.on('data', () => {
    console.log('you died cause you idled');
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = {
  connect,
}


// conn.on('connect', () => {
//   conn.write('Move: up')
//   setTimeout(() => {
//     conn.write('Move: up')
//   }, 1000)
// })
// setInterval(() => {
//   conn.write('Move: up')
// }, 1000)