import fetch from "node-fetch";

export default class movieController{
    //Testing
    static test(req, res) {
        return res.status(200).send("Hello World")
    }

    //Get Latest Movies
    static getLatest(req,res){
       
       var data = getAllMovies().then(console.log(data+ "resuelto")); 

       return res.status(200).send({
           movie: data
       });
    }      
}

//Funciones
async function getAllMovies(){
    var answer = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=13077fefd6d3c1627ec9cf236ac5726b&language=en-US&page=1");
    return await answer.json();
}