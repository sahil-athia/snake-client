const { stdin } = require('process');
const client = require('./client');
let connection;

const setUpInput = function(conn) {
  connection = conn 
  const stdin = process.stdin;
  stdin.setRawMode(true);;
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;

};

const handleUserInput = function() {
  stdin.on("data", (key) => {
    if (key === 'w') {
      connection.write('Move: up')
    }
    if (key === 'a') {
      connection.write('Move: left')
    }
    if (key === 's') {
      connection.write('Move: down')
    }
    if (key === 'd') {
      connection.write('Move: right')
    }
    if (key === '\u0003') {
      process.exit();
    }
  });
};


handleUserInput()



module.exports = {
  setUpInput,
}

