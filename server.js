var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'title name',
    heading: 'heading name',
    date: 'Sep 5',
    content: `
    <p>This is the content of the my first article. This is the content of the my first article. This is the content of the my first article.</p>
            
            <p>Java Script Loading....</p>`
};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
var htmlTemplate = 
    `<!doctype html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
        <title>${title}</title>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
    </head>
    <body>
        <div>
            <a href='/'>Home</a>
            <a href='/article-one'>Page1</a>
            <a href='/article-two'>Page2</a>
            <a href='/article-three'>Page3</a>
        </div>
        <hr/>
        <h1>${heading}</h1>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div> 
    </body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res){
    res.send(createTemplate(articleOne))
 res.sendFile(path.join(__dirname, 'ui', 'article-one.html')); 
});

app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res){
   res.sendFile(path.join(__dirname, 'ui','article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
