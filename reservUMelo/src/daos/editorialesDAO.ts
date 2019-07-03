import connection from '../dbconnection';
import Editorial from '../dtos/Editorial';

const getEditorial = (id : Number, nombre: String) : Promise <Editorial> => {
    let args: any[];
    let query: String;

    if (id) {
        query = "SELECT * FROM Editoriales WHERE idEditorial = ?";
        args = [id]
    } else if (nombre) {
        query = "SELECT * FROM Editoriales WHERE nombre = ?";
        args = [nombre]
    }

    return new Promise((resolve, reject) => {
        connection.query(query, args, (err : string, editorial_res : any) => {
            if (err) {
                reject(err);
                return;
            }

            const editorial = new Editorial(editorial_res[0].idEditorial, editorial_res[0].nombre)
            resolve(editorial)
        })
    })
    

}

export default getEditorial