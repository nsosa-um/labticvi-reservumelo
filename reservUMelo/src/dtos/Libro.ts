//import Editorial from './editorial'
import Autor from './autor'

class Libro{

    private id: Number;
    // private editorial: Editorial;
    private nombre: String;
    private generos: String;
    private autores: [Autor];

	constructor($id: Number, /*$editorial: Editorial,*/ $nombre: String, $generos: String/*, $autores: [Autor]*/) {
		this.id = $id;
		// this.editorial = $editorial;
		this.nombre = $nombre;
		this.generos = $generos;
		//this.autores = $autores;
    }
    
}

export default Libro