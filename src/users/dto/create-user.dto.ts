import { InputType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class createUserDto extends User {}
