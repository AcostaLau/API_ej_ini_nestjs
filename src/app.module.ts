import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { ProductController } from './controllers/product/product.controller';
import { ProductsService } from './services/products/products.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, ProductController,],
  providers: [AppService, ProductsService],
})
export class AppModule { }
