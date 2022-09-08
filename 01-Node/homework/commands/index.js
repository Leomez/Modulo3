const fs =  require('fs')


module.exports = {
    pwd: (data) => {
        data(__dirname)
        // process.stdout.write(process.cwd()) es lo mismo <--------
        // process.stdout.write(process.mainModule.path) es lo mismo  <--------            
    },             
    date: (data) => {
        data(Date())
    },
    ls: (data) => {
        fs.readdir('.', (err,files) => {
            if(err) throw err;
            files.forEach((file) => 
                data(file.toString())
            )
        }
    )},             
}


