import connection from '../dbconnection';

import Libro from '../dtos/Libro'

const libros = (idEjemplar : Number, nombreLibro : string, nombreAutor : string, estado : string, nombreEditorial : string) => {
    let query : string;
    let args : any[];

    if (nombreLibro) {
        query = "SELECT * FROM Libros WHERE nombre = ?";
        args = [nombreLibro];
    } else if (nombreAutor) {
        query = "SELECT * FROM Libros INNER JOIN AutoresLibros ON Libros.idLibro = AutoresLibros.idLibro INNER JOIN Autores ON AutoresLibros.idAutor = Autores.idAutor WHERE Autores.nombreCompleto = ?";
        args = [nombreAutor];
    } else if (nombreEditorial){
        query = "SELECT * FROM Libros INNER JOIN Editoriales ON Libros.idEditorial = Editoriales.idEditorial WHERE Editoriales.nombre = ?";
        args = [nombreEditorial];
    }
    else {
        query = "SELECT * FROM Libros";
    }
    return new Promise((resolve, reject) => {
        connection.query(query, args, (err : string, results : any[]) => {
            if (err) {
                reject(err);
                return;
            }
            const toReturn : Libro[] = []
            for (const result of results){
                const newLibro = new Libro(result.idLibro, result.idEditorial, result.nombre, result.generos)
                toReturn.push(newLibro);
            }
            resolve(toReturn);
        })
    })
}

const agregarLibro = async (idEditorial: Number, nombre: String, generos: String) => {

    const query = "INSERT INTO Libros VALUES(0, ?, ?, ?)";
    
    return new Promise((resolve, reject) => {

        connection.query(query, [idEditorial, nombre, generos], async (err : string, results : any) => {
            if (err) {
                reject(err);
                return;
            }
            resolve('Se ha agregado correctamente el libro.');
        })
    })

}

export { libros, agregarLibro }