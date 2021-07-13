import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { MailService } from 'src/providers/mail/mail.service';
import { PortafolioDto } from './dto/create-portafolio.dto';
import { UpdatePortafolioDto } from './dto/update-portafolio.dto';
import { FirebaseService } from '../providers/firebase/firebase.service';

@Injectable()
export class PortafolioService {
  constructor(
    private readonly mail: MailService,
    private readonly firebase: FirebaseService,

  ) { }

  async create(createPortafolioDto: PortafolioDto) {
    try {
      const data = {

        correo : createPortafolioDto.correo,
        telefono : createPortafolioDto.telefono,
        mensaje : createPortafolioDto.mensaje,
        nombre : createPortafolioDto.nombre,
        nombreEmpresa : createPortafolioDto.nombreEmpresa,
        fecha : moment()
          .subtract(5, 'hours')
          .format('YYYY[-]MM[-]DD HH:mm:ss')
      }
      // const repository = new Portafolio();


      if (Object.keys(data).length < 3) {
        return {
          success: false,
        };
      }

      this.mail.sendMail('manuellondogno132@gmail.com', {
        msjText: this.mail.msjTextSkapxd(data),
      });

      this.mail.sendMail(data.correo, {
        msjText: this.mail.msjTextClient(data),
      });

      this.firebase.fireStore.collection('contacs').add(data)

      // await this.repository.save(data);

      return {
        success: true,
      };

    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

}
