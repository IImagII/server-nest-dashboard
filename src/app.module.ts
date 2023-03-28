import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getSequelizeConfig } from './config/sequalize.config';
import { ViewsModule } from './views/views.module';
import { MovieModule } from './movie/movie.module';
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';

//тут именно подключаемся sequelise берем из https://docs.nestjs.com/techniques/database
@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getSequelizeConfig, // вытаскиваем и подключаем наши настройки которые мы прописали
    }),
    ViewsModule, // так создается сущность модель для user
    MovieModule,
    UserModule,
    ReviewModule, // так создается сущность модель для movie и другие
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
