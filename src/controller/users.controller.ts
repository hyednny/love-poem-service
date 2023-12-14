import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Controller()
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
