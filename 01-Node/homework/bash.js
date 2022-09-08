const { pwd } = require('./commands/index');
const commands = require('./commands/index');

const done = function (data) {
    process.stdout.write(data);
    process.stdout.write('\nprompt > ');
}

// Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
    var entrada = data.toString().trim().split(' '); // remueve la nueva línea
    let cmd = entrada.shift()
    //   if(input[0]==='echo')
    if (commands[cmd]) {
        commands[cmd](entrada,done)
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