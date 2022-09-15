var http = require('http');
var fs   = require('fs');


var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]
function match(url) {
  const nombres = ['/api/John%20Lennon','/api/Paul%20McCartney','/api/George%20Harrison','/api/Richard%20Starkey'];
  if(nombres.indexOf(url) > 0){
    return nombres.indexOf(url)
  } else {
    return false
  }  
}

console.log(match('/api/John%20Lennon'));

http.createServer((req,res) => {
  console.log(req.url);
  if (req.url === '/api') {
    res.writeHead(200, {'Conten-Type' : 'application/json'})
    res.end(JSON.stringify(beatles))
    console.log('entre a api');
  }
  if (match(req.url)) {    
    res.writeHead(200, {'Conten-Type' : 'application/json'})
    res.end(JSON.stringify(beatles[match(req.url)]))
    console.log('entre a ' + req.url);
  }
}).listen(3001, 'localhost')
