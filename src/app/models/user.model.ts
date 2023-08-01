 
export class User {
//  ? significa opcional
    constructor(
        public id: number,
        public empresaId: number,
        public sucursalesId: number,
        public admin: string,
        public usuario: string,
        public rol: string,
        public password?: string,
    ) { }

}

