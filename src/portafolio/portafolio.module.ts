import { Module } from '@nestjs/common';
import { PortafolioService } from './portafolio.service';
import { PortafolioController } from './portafolio.controller';
import { Portafolio } from './entities/portafolio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mail } from 'src/mail/mail';

@Module({
  // imports: [TypeOrmModule.forFeature([Portafolio])],
  controllers: [PortafolioController],
  providers: [PortafolioService, Mail],
})
export class PortafolioModule {}
