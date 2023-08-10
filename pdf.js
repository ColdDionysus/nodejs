const PDFDocument = require('pdfkit');
const doc = new PDFDocument;
const fs = require('fs')
const http = require('http')

const server = http.createServer(async (req, res) => {
    doc.pipe(fs.createWriteStream('./file.pdf')); // write to PDF
    doc.pipe(res);                                       // HTTP response
    doc.text('Hello world!', 100, 100)
    // add stuff to PDF here using methods described below...
    doc.image('images/image.png', 430, 15, {fit: [100, 100], align: 'center', valign: 'center'})
   .rect(430, 15, 100, 100).stroke()
   .text('Centered', 430, 0);
    // finalize the PDF and end the stream
    doc.end();
});

server.listen(3000)

