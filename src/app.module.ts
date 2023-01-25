import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { RocketMembersRepository } from './repositories/rocket-members-repository';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMembersRepository,
    },
  ],
})

// Esse provide e useClasse servem para:
// Sempre que alguem solicitar uma classe do tipo RocketMembersRepository, eu vou usar a classe PrismaRocketMembersRepository. Isso é injeção de dependência
export class AppModule {}
