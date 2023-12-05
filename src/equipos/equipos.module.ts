import { Module } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { EquiposController } from './equipos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipo } from './entities/equipo.entity';
import { TiposEquipos } from 'src/tipos-equipos/entities/tipos-equipos.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Equipo,TiposEquipos])],
  controllers: [EquiposController],
  providers: [EquiposService],
  exports: [TypeOrmModule,EquiposService]
})
export class EquiposModule { }
