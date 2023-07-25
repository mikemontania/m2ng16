 
export class User {
//  ? significa opcional
    constructor(
        public codUsuario: number,
        public codEmpresa: number,
        public codSucursal: number,
        public codEmpresaErp: string,
        public codSucursalErp: string,
        public nombre: string,
        public username: string,
        public password: string,
        public authorities?: string,
        public img?: string,
        public maxDescuentoImp?: number,
        public maxDescuentoPorc?: number,
        public cantItem?: number
    ) { }

}

