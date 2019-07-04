import { libros, agregarLibro } from '../daos/librosDAO'

const libroResolver = {
	Query: {
		libros: (_ : any, {nombreLibro, nombreAutor, estado, nombreEditorial, idEjemplar}: {idEjemplar: Number, nombreLibro: string, nombreAutor : string, nombreEditorial : string, estado: string}) => {
			return libros(idEjemplar, nombreLibro, nombreAutor, estado, nombreEditorial);
		}
	},
	Mutation: {
		agregarLibro: (_: any, 
			{idEditorial, nombre, generos} : {idEditorial: Number, nombre: String, generos: String}) => {
				return agregarLibro(idEditorial, nombre, generos);
		}
	}
};

export default libroResolver;