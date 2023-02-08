import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreEntity } from './entities/core.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CoreEntity])],
})
export class CommonModule {}
