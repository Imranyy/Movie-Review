const express= require('express');
const app=express();
const cors = require('cors');
const pool=require('./db');


//middleware
app.use(cors());
app.use(express.json());

//ROUTES
app.get('/', async(req,res)=>{
try{
    const InsertData=mysql.pool.query("SELECT * FROM todo.movies; INSERT INTO movies(movie_name,movies_review) VALUES('kingsman', 'good');")
        res.send('hello there')
   } catch (error){
       console.error(errror.message);
    }
});

//get allmovies
app.get('/movies', async(req,res)=>{
   try{
       const allmovies= await pool.query('SELECT * FROM movies;')
       res.json(allmovies.rows)
       console.log('getting all movies');
    }catch (error){
        console.error(error.message);
    }
});
const server= app.listen(3001,()=>{
    const host= server.address().address
    const port=server.address().port
console.log("listening to Port 3001")
});