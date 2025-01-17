import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'testuser',
  password: '1234',
  database: 'practice',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
