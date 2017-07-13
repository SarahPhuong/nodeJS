const queryDB = require('../db');
const { hash, compare } = require('bcrypt');
class User{
    constructor(email, password, phone, name){
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.name=name
    }
    singUP(cb){
        hash(this.password, 8, (err, encrypted)=>{
            if(err) return cb(err);
            //encrypted
            const sql = `INSERT INTO public."User"(email, password, phone,name)
            VALUES ($1, $2, $3, $4);`;
            queryDB(sql,[this.email, encrypted, this.phone, this.name], cb);
        });
        
    }
    singIn(cb){
        const sql=`SELECT * FROM public."User" WHERE email=$1`;
        queryDB(sql,[this.password],(err, result)=>{
            if(err) return cb(err);
            if(result.rows.length===0) return cb(new Error('Email ko ton tai'));
            const encrypted=result.rows[0].password;
            compare($1, encrypted, (errCompare, same)=>{
                if(errCompare) return cb(errCompare);
                if(!same) return cb(new Error('Sai mat khau'));
                cb(null)
            })
        });
        console.log(sql)
    }
}

// const myUser= new User( 'nguyenphuong12345@gmail.com', '123','0221937835','Phuong')
// myUser.singUP(err=>console.log(err));
const myUser= new User( 'nguyenphuongs12s3@gmail.com', '123')

myUser.singIn(err=>console.log(err));
