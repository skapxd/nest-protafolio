import { PartialType } from '@nestjs/mapped-types';
import { PortafolioDto } from './create-portafolio.dto';

export class UpdatePortafolioDto extends PartialType(PortafolioDto) {}
