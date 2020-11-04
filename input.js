const { stdin } = require('process');

const handleUserInput = function() {
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};

const setUpInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);;
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

handleUserInput()



module.exports = {
  setUpInput,
}