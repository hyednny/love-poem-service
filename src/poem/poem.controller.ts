import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { Poem } from './poem.schema';

@Controller('poem')
export class PoemController {
  private poems: Poem[] = [];

  @Get(':id')
  findOne(@Param('id') id: number): string {
    if (!id) throw new NotFoundException(`poem id ${id} not found`);
    return 'Poems fetched successfully';
  }
}
