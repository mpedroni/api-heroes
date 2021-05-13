import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Pagination } from 'nestjs-typeorm-paginate';
import { HeroesDto } from './dtos/heroes.dto';
import { HeroesService } from './heroes.service';
import { HeroesEntity } from './interface/heroes.entity';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  @ApiTags('heroes')
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async index(
    @Query('page') page = 1,
    @Query('limit') limit = 100,
  ): Promise<Pagination<HeroesEntity>> {
    limit = limit > 100 ? 100 : limit;

    return await this.heroesService.findAll({ page, limit });
  }

  @Post()
  @ApiTags('heroes')
  @ApiBody({ type: HeroesDto })
  async create(@Body() hero: HeroesDto): Promise<HeroesEntity> {
    return await this.heroesService.create(hero);
  }
}
