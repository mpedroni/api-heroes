import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { HeroesEntity } from './interface/heroes.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([HeroesEntity])],
  controllers: [HeroesController],
  providers: [HeroesService],
})
export class HeroesModule {}
