const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

// configration of paths for Express
const publicDirectorypath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars and directory of views
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory of this server
app.use(express.static(publicDirectorypath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'index',
        name: 'Howard'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About company',
        name: 'Noblefibres Imp. & Exp. Co., Ltd.'
    });
});
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact us',
        name: 'Noblefibres I&E'
    });
});

app.listen(8000, () => {
    console.log('The server is running on port 8000....');
});