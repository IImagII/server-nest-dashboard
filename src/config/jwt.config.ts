//это конфиг для правильного скрытия пароля
//тут мы делаем отдельную функцию чтобы вытащить из файла env 'JWT_SECRET'

import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJWTConfig = async (
  configService: ConfigService,
): Promise<JwtModuleOptions> => ({
  secret: configService.get('JWT_SECRET'),
});
