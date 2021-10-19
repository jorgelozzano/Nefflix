import fetch from "node-fetch";

export default class movieController {
    //Testing
    static test(req, res) {
        return res.status(200).send("Hello World")
    }

    //Get Latest Movies
    static async getLatest(req, res) {

        var data = await getAllMovies().then(console.log("data: " + data + "; estado: resuelto"));

        return res.status(200).send({
            movie: data
        });
    }

    static async getJustOneMovie(req,res,next){
        var data = await getJustOneMovie().then(console.log("data: " + data));
        return res.status(200).send({
            movie: data
        })
    }

}

//Funciones
async function getAllMovies() {
    var answer = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=13077fefd6d3c1627ec9cf236ac5726b&language=en-US&page=1");
    return await answer.json();
}

async function getJustOneMovie(){
    var response = await fetch("https://api.themoviedb.org/3/movie/76341?api_key=13077fefd6d3c1627ec9cf236ac5726b")
    return await response.json();
}