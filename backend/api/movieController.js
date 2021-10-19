export default class movieController{
    //Testing
    static test(req, res) {
        return res.status(200).send("Hello World")
    }

    //Get Latest Movies
    static getLatest(req,res){
       getAllMovies();
    }
}

//Funciones
async function getAllMovies(){
    var answer = await 
    fetch("");
    var data = await answer.json();
    return data;
}