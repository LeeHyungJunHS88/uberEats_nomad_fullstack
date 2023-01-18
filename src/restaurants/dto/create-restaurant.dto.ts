import { ArgsType, Field } from '@nestjs/graphql';
import { IsString, IsBoolean, Length } from 'class-validator';

@ArgsType()
export class createRestaurantDto {
  @Field((_) => String)
  @IsString()
  name: string;

  @Field((_) => Boolean, { nullable: true })
  @IsBoolean()
  isVegan: boolean;

  @Field((_) => String)
  @IsString()
  address: string;

  @Field((_) => String)
  @IsString()
  @Length(5, 10)
  ownerName: string;
}
