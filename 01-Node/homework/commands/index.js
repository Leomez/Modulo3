const fs = require('fs')
const axios = require('axios')


module.exports = {
    pwd: (done, input) => {
        done(__dirname)
        // process.stdout.write(process.cwd()) es lo mismo <--------
        // process.stdout.write(process.mainModule.path) es lo mismo  <--------            
    },
    date: (done, input) => {
        done(Date())
    },
    ls: (done, input) => {
        fs.readdir('.', (err, files) => {
            if (err) throw err;
            files.forEach((file) =>
                done(file.toString())
            )
        }
        )
    },
    // echo: (done, input) => {
    //     done(input)
    // }
    echo: function (input, done) {
        done(input.join(' '))
    },
    cat: (input, done) => {
        fs.readFile(`./${input}`, (err, file) => {
            if (err) throw err;
            else done(`\n***********************************************************************
                        ${file.toString()}
                    \n\n***********************************************************************`
            )

        })
    },
    head: (input, done) => {
        fs.readFile(`./${input}`, (err, file) => {
            if (err) throw err;
            let lines = file.toString().split('\n').slice(0, 10);
            done(`\n\n***********************************************************************
                    ${lines.join('\n')}
                \n\n************************************************************************`
            )

        })
    },
    tail: (input, done) => {
        fs.readFile(`./${input}`, (err, file) => {
            if (err) throw err;
            let lines = file.toString().split('\n').slice(-10);
            done(`\n\n***********************************************************************
                    ${lines.join('\n')}
                \n\n************************************************************************`
            )
        }
        )
    },
    curl: (input, done) => {
        axios(input.toString())
        .then(data => data.json())
        .then(data => done(data.data))
        .catch(err => console.log(err))
        
    }
}


