import {
  Controller,
  Get,
  Res,
  Req,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AppService } from './app.service';
import { minify } from "html-minifier";
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Get()
  getHello(@Res() res: Response, @Req() req: Request) {
    return res.render('home/home', {}, (err: Error, html: string) => {
      
      // Minify html
      html = minify(html);
      
      // Caching Html
      // const cacheKey = `__urlCacheKey__${req.url}`;
      // this.cacheManager.set(
      //   // Cache Key
      //   cacheKey,
      //   // Content
      //   html,
      //   // Expiration Time
      //   { ttl: 1000 }
      // )

      return res.send(html);
    });
  }
}
