import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty } from "class-validator";
import { CreateCatDto } from "src/estadoprestamo/Dto/CreateCat.Dto";


export class UpdateEstadoEquipoDto extends PartialType(CreateCatDto) {

  @IsNotEmpty()
  id: number;

  descripcion: string;

}