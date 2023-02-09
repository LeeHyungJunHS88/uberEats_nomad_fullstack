import { Field } from '@nestjs/graphql';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field()
  id: string;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @DeleteDateColumn()
  @Field()
  deletedAt: Date;

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;
}
