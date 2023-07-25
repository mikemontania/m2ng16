
import { Rol } from './rol.model';
import { Sucursal } from './sucursal.model';

export class Usuarios {
//  ? significa opcional
        public enabled: boolean;
        public codUsuario: number;
        public nombrePersona: string;
        public codPersonaErp: string;
        public username: string;
        public rol: Rol;
        public codEmpresa: number;
        public sucursal: Sucursal;
        public bloqueado?: boolean;
        public intentoFallido?: number;
        public createdAt?: Date;
        public modifiedAt?: Date;
        public createdBy?: string;
        public modifiedBy?: string;
        public password?: string;
        public img?: string;
        constructor() { }

}

