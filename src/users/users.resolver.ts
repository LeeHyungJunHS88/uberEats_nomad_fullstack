import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((_) => Boolean)
  hi() {
    return true;
  }

  @Query((_) => User)
  users() {
    return this.usersService.findAll();
  }

  @Mutation((_) => Boolean)
  async createUser(@Args('data') userData: createUserDto) {
    try {
      await this.usersService.createuser(userData);
      return true;
    } catch (e) {
      return false;
    }
  }
}
