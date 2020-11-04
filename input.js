const { stdin } = require('process');
let connection;

const setUpInput = function(conn) {
  connection = conn 
  //set up a connection with client
  const stdin = process.stdin;
  stdin.setRawMode(true);;
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;

};
const write = function(message){
  return connection.write(message);
  //function that sends to the server
};

const handleUserInput = function() {
  stdin.on("data", (key) => {
    //basically on key press, do the following
    if (key === 'w') {
      write('Move: up');
    }
    if (key === 'a') {
      write('Move: left');
    }
    if (key === 's') {
      write('Move: down');
    }
    if (key === 'd') {
      write('Move: right');
    }
    if (key === 'z') {
      write('Say: Rip');
    }
    if (key === 'x') {
      write('Say: GGez');
    }
    if (key === 'c') {
      write('Say: GGwp');
    }
    if (key === '\u0003') {
      process.exit();
    }
  });
};
handleUserInput();

module.exports = {
  setUpInput,
}

