const express = require('express');
const bodyParser = require('body-parser');
const { PhepTinh } = require('./PhepTinh'); //eslint-disable-line
const parser = bodyParser.urlencoded({ extended: false });
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.get('/', (req, res) => res.render('home'));
app.listen(3000, () => console.log('Server Start'));

app.post('/xuly', parser, (req, res) => {
    console.log(req.body);
    res.send('Da nhan request:');
});

app.get('/tinh', (req, res) => res.render('tinh'));

app.post('/tinh', parser, (req, res) => {
    const { soA, soB, phepTinh } = req.body;
    const apt = new PhepTinh(soA, soB, phepTinh);
    const str = apt.getResultString();
    res.send('ket qua: ' + str);
});
// app.post('/tinh',parser,require('./controller/xuLyPhepTinh'));

class Users {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

const arrUsers = [
    new Users('Phuong', '123'),
    new Users('AD', '324'),
    new Users('POD', '657')
];

app.get('/admin', (req, res) => res.render('admin', { arrUsers }));

app.get('/dangki', (req, res) => res.render('dangKy'));

app.post('/dangki', parser, (req, res) => {
    const { username, password } = req.body;
    arrUsers.push(new Users(username, password));
    res.redirect('admin');
});
