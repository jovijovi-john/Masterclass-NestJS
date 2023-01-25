import { Controller, Body, Post } from '@nestjs/common';

import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller('app') // todas as rotas daqui estarão dentro de /app
export class AppController {
  constructor(private rocketMembersRepostitory: RocketMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepostitory.create(name, memberFunction);
  }
}
