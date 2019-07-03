import getAutorByID from '../daos/autoresDAO'
import Autor from '../dtos/Autor';

const autoresResolver = {
	Query: {
		getAutorByID: (_ : any, {id}: {id: Number, nombreCompleto: string}) : Promise <Autor> => {
			return getAutorByID(id);
		}
	}
};

export default autoresResolver;