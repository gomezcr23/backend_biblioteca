import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipo } from './entities/equipo.entity';
import { Repository } from 'typeorm';
import { UpdateEquipoDto } from './dto/update-equipo.dto';

@Injectable()
export class EquiposService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
  ) { }

  Equipo(createEquipoDto: CreateEquipoDto) {
    return this.equipoRepository.insert(createEquipoDto);
  }

  Obtener_id(codigo: number) {
    return this.equipoRepository.findOneBy({ codigo: codigo });
  }

  ObtenerTodo() {
    return this.equipoRepository.find({
      relations: {
        tipo: true,
        estado: true,
      },
    });
  }

  async Actualizar(codigo: number, updateEquipoDto: UpdateEquipoDto,): Promise<Equipo> {
    const equipo = await this.equipoRepository.findOneBy({ codigo: codigo });

    if (!equipo) {
      throw new NotFoundException(`El equipo con el ID ${codigo} no existe`);
    }

    this.equipoRepository.merge(equipo, updateEquipoDto);
    return this.equipoRepository.save(equipo);
  }

  ActualizarTodo(CreateEquipoDto : CreateEquipoDto) {
    const equipo = this.equipoRepository.findBy({ codigo: CreateEquipoDto.codigo });
    if (!equipo) {
      throw new NotFoundException(`El equipo con no existe`);
    }
    return this.equipoRepository.update({codigo: CreateEquipoDto.codigo}, CreateEquipoDto);
  }

  EliminarEquipo(codigo) {
    return this.equipoRepository.delete(codigo);
  }

  async EliminarEquipoPorCodigo(codigo : number) {
    return await this.equipoRepository.delete({codigo : codigo});
  }

  obtenerBuenos(tipo:number, estado:number){
    return this.equipoRepository.find({where:{tipo:{id:tipo}, estado:{id:estado}},relations:{tipo:true, estado:true}});
}
}
