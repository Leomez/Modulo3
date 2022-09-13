var fs  = require("fs")
var http  = require("http")
const images = ['arcoiris_doge','badboy_doge','code_doge','resaca_doge','retrato_doge','sexy_doge']

// Escribí acá tu servidor
http.createServer( (req, res) => {
    res.writeHead(200, {'conten-type' : 'image/jpeg'})
    switch (req.url) {
        case `/${images[1]}`:
            let image = fs.readFileSync(`${__dirname}/images/${images[1]}.jpg`)
            res.end(image)  
            break;
    
        default:
            break;
    }
    
    
    console.log('server runing...');
    // console.log(req);
}).listen(3001, 'localhost')