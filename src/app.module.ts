import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mail } from './mail/mail';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortafolioModule } from './portafolio/portafolio.module';
import { ConfigModule } from '@nestjs/config';
import { dbConnection } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        // Las variables de entorno se toman del primer archivo 
        // ( en este caso dev.env ) y no se sobre escriben
        // Al momento de hacer el deploy a GCP este archivo 
        // ( dev.env ) es ignorado por .gcloudignore  
        'env/dev.env',
        'env/prod.env',
      ],
    }),
    // TypeOrmModule.forRootAsync({ useFactory: dbConnection }),

    PortafolioModule,
  ],
  controllers: [AppController],
  providers: [AppService, Mail],
})
export class AppModule { }
