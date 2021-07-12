import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import moment from 'moment';
import { Repository } from 'typeorm';
import { PortafolioDto } from './dto/create-portafolio.dto';
import { UpdatePortafolioDto } from './dto/update-portafolio.dto';
import { Portafolio } from './entities/portafolio.entity';
import { Mail } from 'src/mail/mail';

@Injectable()
export class PortafolioService {
  constructor(
    // @InjectRepository(Portafolio)
    // private readonly repository: Repository<Portafolio>,
    private readonly mail: Mail,

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

  findAll() {
    return `This action returns all portafolio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} portafolio`;
  }

  update(id: number, updatePortafolioDto: UpdatePortafolioDto) {
    return `This action updates a #${id} portafolio`;
  }

  remove(id: number) {
    return `This action removes a #${id} portafolio`;
  }

}
