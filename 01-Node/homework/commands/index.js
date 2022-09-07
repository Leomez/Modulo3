

module.exports = {
    pwd: (data) => {
        data(__dirname)
        // process.stdout.write(process.cwd()) es lo mismo <--------
        // process.stdout.write(process.mainModule.path) es lo mismo  <--------            
    },    
            
    date: (data) => {
        data(Date())
    }            
}

