import connection from '../dbconnection';
import Autor from '../dtos/Autor';

const getAutorByID = (id : Number) : Promise <Autor> => {

    // const query = "SELECT * FROM Autores WHERE idAutor = 1";

    let query : string;
    let args : any[];

    if (id) {
        query = 'SELECT * FROM Autores WHERE idAutor = ?'
        args = [id]
    }else{
        query = 'SELECT * FROM Autores'
    }

    return new Promise((resolve, reject) => {
        connection.query(query, args, (err : string, autor_res : any) => {
            if (err) {
                reject(err);
                return;
            }
            const autor = new Autor(autor_res[0].idAutor, autor_res[0].nombreCompleto)
            resolve(autor)
        })
    })
    

}

export default getAutorByID