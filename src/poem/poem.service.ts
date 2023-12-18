import { Injectable, NotFoundException } from '@nestjs/common';
import { Poem } from './poem.schema';

@Injectable()
export class PoemService {
  private readonly poems: Poem[] = [];

  findAll(): Poem[] {
    return this.poems;
  }

  findOne(id: number) {
    const poem = this.poems.find((poem) => poem.id === Number(id));
    if (!poem) {
      throw new NotFoundException(`poem id ${id} not found`);
    }
  }

  create(poem: Poem) {
    return this.poems.push(poem);
  }
}
