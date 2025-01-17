import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({
  isAbstract: true,
})
@ObjectType()
@Entity()
export class Restaurant {
  @Field((_) => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((_) => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field((_) => Boolean, { nullable: true })
  @Column({ default: true })
  @IsOptional()
  @IsBoolean()
  isVegan?: boolean;

  @Field((_) => String)
  @Column()
  @IsString()
  address: string;

  @Field((_) => String)
  @Column()
  @IsString()
  ownerName: string;

  @Field((_) => String)
  @Column()
  @IsString()
  categoryName: string;
}
