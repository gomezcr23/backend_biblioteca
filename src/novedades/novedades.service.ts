import { Injectable, NotFoundException } from '@nestjs/common';
import { Novedades } from './entities/novedades.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateNovedadDto } from './dto/update-equipo.dto';

@Injectable()
export class NovedadesService {
  constructor(
    @InjectRepository(Novedades)
    private readonly novedadesRepository: Repository<Novedades>,
  ) { }

  Novedad(tipo) {
    return this.novedadesRepository.insert(tipo);
  }

  obtener() {
    return this.novedadesRepository.find();
  }
  Obtener_id(id: number) {
    return this.novedadesRepository.findOneBy({ id: id });
  }

  async Actualizar(id: number, UpdateNovedadDto: UpdateNovedadDto): Promise<Novedades> {
    const novedad = await this.novedadesRepository.findOneBy({ id: id });

    if (!novedad) {
      throw new NotFoundException(`La novedad con el ID ${id} no existe`);
    }

    this.novedadesRepository.merge(novedad, UpdateNovedadDto);
    return this.novedadesRepository.save(novedad);
  }

  EliminarNovedad(id: number) {
    return this.novedadesRepository.delete({ id: id });
  }
}
