import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

type UserRole = 'client' | 'owner' | 'delivery';

@InputType({
  isAbstract: true,
})
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Column()
  @Field((_) => String, { nullable: true })
  email: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  role: UserRole;
}
