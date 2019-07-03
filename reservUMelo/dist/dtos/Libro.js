"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Libro {
    constructor($id, /*$editorial: Editorial,*/ $nombre, $generos /*, $autores: [Autor]*/) {
        this.id = $id;
        // this.editorial = $editorial;
        this.nombre = $nombre;
        this.generos = $generos;
        //this.autores = $autores;
    }
}
exports.default = Libro;
//# sourceMappingURL=Libro.js.map