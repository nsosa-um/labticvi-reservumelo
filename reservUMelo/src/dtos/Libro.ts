//import Editorial from './editorial'
import Autor from './autor'

class Libro{

    private id: Number;
    private idEditorial: Number;
    private nombre: String;
    private generos: String;
    private autores: [Autor];

	constructor($id: Number, $idEditorial: Number, $nombre: String, $generos: String/*, $autores: [Autor]*/) {
		this.id = $id;
		this.idEditorial = $idEditorial;
		this.nombre = $nombre;
		this.generos = $generos;
		//this.autores = $autores;
    }
    
}

export default Libro