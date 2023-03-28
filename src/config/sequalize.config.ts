import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

//тут мы настраиваем конфиг для подключения к базе данных это применимо к sequelize
export const getSequelizeConfig = async (
  configService: ConfigService,
): Promise<SequelizeModuleOptions> => {
  return {
    dialect: 'postgres',
    host: 'localhost',
    port: configService.get('PORT'),
    database: configService.get('DATABASE'),
    username: configService.get('USERNAME'),
    password: configService.get('PASSWORD'),
    autoLoadModels: true,
    synchronize: true,
  };
};
