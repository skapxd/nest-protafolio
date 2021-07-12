import { FormPortafolioI } from 'src/interface/form_portafolio_I';
export class PortafolioDto implements FormPortafolioI {
  correo: string;
  telefono: string;
  mensaje: string;
  nombre: string;
  nombreEmpresa: string;
  fecha?: string;
}
