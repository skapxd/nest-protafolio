import nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';
// import { PortafolioDto } from '../portafolio/dto/create-portafolio.dto';
// import { passMail, userMail } from 'src/config/configuration';
import { PortafolioDto } from 'src/portafolio/dto/create-portafolio.dto';
import { ConfigService } from '../../config/config.service';

@Injectable()
export class MailService {
    
  constructor(
    private config: ConfigService
  ){
    
  }

  msjTextSkapxd(data: PortafolioDto) {
    return `
    Tienes un nuevo registro del portafolio
    nombre: ${data.nombre}        
    correo: ${data.correo}        
    telefono: ${data.telefono}        
    nombre empresa: ${data.nombreEmpresa}        
    
    mensaje: ${data.mensaje}        
    `.replace(/ {2,}/g, '');
  }

  msjTextClient(data: PortafolioDto) {
    return `
      Hola ${data.nombre}, Tu información ha sido enviada exitosamente

      Dentro de las próximas 24 horas me estaré comunicando contigo por correo o celular

      Porfavor, no responder a este email.
    `.replace(/ {2,}/g, '');
  }


  async sendMail(
    email: string,
    options: {
      msjHtml?: string;
      msjText?: string;
    },
  ): Promise<void> {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: this.config.userMail,
        pass: this.config.passMail,
      },
    });

    transporter.verify().then(() => {
      
      console.log('ready for send email');
    });

    await transporter.sendMail({
      from: 'automail.noresponder@gmail.com',
      to: email,
      // html: options.msjHtml,
      text: options.msjText ?? '',
      subject: 'No responder a este email',
    });
  }
}

