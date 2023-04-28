/*const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    port: '6666',
    type: 'mysql',
    user : 'root',
    password : 'root',
    database : 'stalkerbook' ,
});

conn.connect( err =>{
    if(err){
        console.log(err);
        return err;
    }
    else{
        console.log('Database ----- OK');
    }
});

let query="SELECT * FROM user";

conn.query(query, (err, result) =>{
    console.log(err);
    console.log(result);
});

conn.end(err=>{
    if (err){
        console.log(err);
        return err;
    }
    else{
        console.log('DataBase ----- Close');
    }
});

*/