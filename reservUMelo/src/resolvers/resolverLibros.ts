import { libros } from '../daos/librosDAO'

const libroResolver = {
	Query: {
		libros: (_ : any, {nombreLibro, nombreAutor, estado, nombreEditorial, idEjemplar}: {idEjemplar: Number, nombreLibro: string, nombreAutor : string, nombreEditorial : string, estado: string}) => {
			return libros(idEjemplar, nombreLibro, nombreAutor, estado, nombreEditorial);
		}
	}
};

export default libroResolver;