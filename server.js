const http = require('http');
const qrcode = require('qrcode');


const PORT = 3000;

const generateQRCode = async (text) => {
    try {
        const qrCodeDataURL = await qrcode.toDataURL(text, { type: 'terminal' });
        return qrCodeDataURL;
    } catch (error) {
        console.error('Error generating QR code:', error);
        return null;
    }
};



const server = http.createServer(async (req, res) => {
    
    if (req.url === '/') {
        const qrCodeData = await generateQRCode('github.com/ColdDionysus');
        
        if (qrCodeData) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            const html = `<html><body><img src="${qrCodeData}" /></body></html>`;
            res.end(html);
        } else {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
