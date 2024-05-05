import corsAnywhere from 'cors-anywhere';
const host = 'localhost';
const port = 8080;

corsAnywhere.createServer({
    originWhitelist: [], // Разрешить все источники
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('CORS Anywhere running on ' + host + ':' + port);
});