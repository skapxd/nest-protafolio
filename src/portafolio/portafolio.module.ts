import { Module } from '@nestjs/common';
import { PortafolioService } from './portafolio.service';
import { PortafolioController } from './portafolio.controller';
import { FirebaseModule } from 'src/providers/firebase/firebase.module';
import { MailModule } from '../providers/mail/mail.module';

@Module({
  imports: [
    FirebaseModule,
    MailModule
  ],
  controllers: [PortafolioController],
  providers: [PortafolioService],
})
export class PortafolioModule { }
