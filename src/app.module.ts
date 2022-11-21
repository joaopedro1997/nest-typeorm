import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductsModule, UsersModule, TypeOrmModule.forRoot({
    type: "mysql",
    host: "db",
    port: 3306,
    username: "root",
    password: "local_9p^1Sd.66+c!O",
    database: "local_db",
    entities: ["dist/**/entities/*{.js,.ts}"],
  }), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
