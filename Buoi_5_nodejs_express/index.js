const express=require('express');
// const {PhepTinh}=require('./PhepTinh');
const app=express();
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));
app.listen(3000);

app.get('/',(req,res)=>{
    res.send("hello");
})

// app.get('/trangchu',(req,res)=>res.send('Homepage'));
app.get('/trangchu',(req,res)=>res.render('home'));
app.get('/royal',(req,res)=>res.render('royal'));
app.get('/home',(req,res)=>res.render('clothing'));
// app.get('/a/:name/:fname',(req,res)=>{
//     const {name,fname}=req.params;
//     res.render('a',{ten:name, ho:fname});
// });

app.get('/a/:username/:password',(req,res)=>{
    const {username,password}=req.params;
    let isAdmin=false;
    if(username==="thanhphuong" && password=="123") isAdmin =true;
    res.render('a',{isAdmin, name:username});
});
app.get('/info/:id',require('./controller/getID'));

// destructing const fName=req.params.firstname;=> const {firstname}=req.params
app.get('/show/:firstname/:lastname',require('./controller/showController'));

app.get('/tinh/:a/:b/:tenPhepTinh',require('./controller/xuLyPhepTinh'));

let arrName=['NodeJS','PHP','Java'];
app.get('/subject', (req, res) => res.render('subject', { arrName }));

app.get('/phim',(req,res)=>res.render('phim',{arrPhim}))

class Phim{
    constructor(name,idYoutube){
        this.name=name;
        this.idYoutube=idYoutube
    }
}
let arrPhim=[
    new Phim('English Listening Practice - Learn English Listening Comprehension','qYb0LCqqJbU'),
    new Phim('Learn English with VOA News, Improve English With VOA learning English, Report compilation 23','E-4vFfO2duU')
    
]