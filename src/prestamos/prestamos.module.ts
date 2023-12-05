import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { EquiposModule } from 'src/equipos/equipos.module';
import { DetallePrestamoModule } from 'src/detalle-prestamo/detalle-prestamo.module';
import { EquiposService } from 'src/equipos/equipos.service';
import { DetallePrestamoService } from 'src/detalle-prestamo/detalle-prestamo.service';
import { EstadoprestamoModule } from 'src/estadoprestamo/estadoprestamo.module';
import { EstadoprestamoService } from 'src/estadoprestamo/estadoprestamo.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prestamo]),EquiposModule,DetallePrestamoModule, EstadoprestamoModule],
  providers: [PrestamosService,EquiposService,DetallePrestamoService,EstadoprestamoService],
  controllers: [PrestamosController]
})
export class PrestamosModule {}
