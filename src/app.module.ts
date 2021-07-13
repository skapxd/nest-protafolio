import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { PortafolioModule } from './portafolio/portafolio.module';
import { MailModule } from './providers/mail/mail.module';

@Module({
  imports: [
    PortafolioModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule { }
