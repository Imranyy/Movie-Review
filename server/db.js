//calling the database
const mysql=require('mysql');
const db=mysql.createPool({
    user:'root',
    password:'imrany00',
    host:'127.0.0.1',
    database:'todo',
});
module.exports =db
     