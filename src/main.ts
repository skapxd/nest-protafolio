import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {

  const env = new ConfigService()
  env.setEnv()

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.useStaticAssets(join(__dirname, '..', '/public'));
  app.setBaseViewsDir(join(__dirname, '..', '/public'));
  app.setViewEngine('ejs');
  
  const port = env.port;

  app.disable('x-powered-by');

  await app.listen(port, () => { 
    // console.log(`Application is running on: ${await app.getUrl()}`);
  });

  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
