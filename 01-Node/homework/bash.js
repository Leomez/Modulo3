const { pwd } = require('./commands/index');
const commands = require('./commands/index');

const done = function(data) {
    process.stdout.write(data);
    process.stdout.write('\nprompt > ');
}

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remueve la nueva línea

    if (commands[cmd]) {
        commands[cmd](done)
    }

    else {
        done('comando inexistete')
    }
//   if(cmd === 'date') {
//     commands.date(done)
//   }
//   if(cmd === 'pwd') {
//    commands.pwd(done)    
//   }
  
//   process.stdout.write('\nprompt > ');
});