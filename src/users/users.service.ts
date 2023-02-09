import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}

  findAll() {
    return this.user.find();
  }

  createuser(createUserDto: createUserDto) {
    const newUser = this.user.create(createUserDto);
    return this.user.save(newUser);
  }
}
