import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './user.model';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])], //необходимо добавить подключение самой модели
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
