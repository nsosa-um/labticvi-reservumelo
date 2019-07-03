import getEditorial from '../daos/editorialesDAO'
import Editorial from '../dtos/Editorial';

const editorialesResolver = {
	Query: {
		getEditorial: (_ : any, {id, nombre}: {id: Number, nombre: string}) : Promise <Editorial> => {
			return getEditorial(id, nombre);
		}
	}
};

export default editorialesResolver;