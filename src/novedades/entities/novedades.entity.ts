import { Equipo } from 'src/equipos/entities/equipo.entity';
import { Prestamo } from 'src/prestamos/entities/prestamo.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'novedades', schema: 'public' })
export class Novedades {
  @PrimaryGeneratedColumn()
  id: number;

  /* @ManyToOne(() => Prestamo, (novedades) => novedades.prestamo)
  @JoinColumn()
  prestamo: Prestamo; */

  @Column()
  descripcion: string;

  @Column()
  fecha_novedad: String;

  @Column()
  tipo_novedad: String;

  @ManyToOne(() => Equipo, equipo => equipo.novedades)
  equipo_novedades: Equipo;
}
