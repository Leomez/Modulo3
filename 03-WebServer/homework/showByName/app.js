var fs = require("fs")
var http = require("http")
const images = ['arcoiris_doge', 'badboy_doge', 'code_doge', 'resaca_doge', 'retrato_doge', 'sexy_doge']

// Escribí acá tu servidor
http.createServer((req, res) => {
    switch (req.url) {
        case `/${images[0]}`:
            {
                res.writeHead(200, { 'conten-type': 'image/jpeg' })
                let image = fs.readFileSync(`${__dirname}/images/${images[0]}.jpg`)
                res.end(image)
                break
            }
        case `/${images[1]}`:
            {
                res.writeHead(200, { 'conten-type': 'image/jpeg' })
                let image = fs.readFileSync(`${__dirname}/images/${images[1]}.jpg`)
                res.end(image)
                break
            }
        case `/${images[2]}`:
            {
                res.writeHead(200, { 'conten-type': 'image/jpeg' })
                let image = fs.readFileSync(`${__dirname}/images/${images[2]}.jpg`)
                res.end(image)
                break
            }
        case `/${images[3]}`:
            {
                res.writeHead(200, { 'conten-type': 'image/jpeg' })
                let image = fs.readFileSync(`${__dirname}/images/${images[3]}.jpg`)
                res.end(image)
                break
            }
        case `/${images[4]}`:
            {
                res.writeHead(200, { 'conten-type': 'image/jpeg' })
                let image = fs.readFileSync(`${__dirname}/images/${images[4]}.jpg`)
                res.end(image)
                break
            }
        case `/${images[5]}`:
            {
                res.writeHead(200, { 'conten-type': 'image/jpeg' })
                let image = fs.readFileSync(`${__dirname}/images/${images[5]}.jpg`)
                res.end(image)
                break
            }
        default:
            {
                res.writeHead(404, { 'conten-type': 'text/text' })
                res.end('Page not found')
                break
            }
        }
        console.log('server runing...');
    }).listen(3001, 'localhost')

