import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';

import { ClientesDTO } from './clientes.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}
  @Post()
  async addCliente(@Body() data: ClientesDTO) {
    return this.clientesService.create(data);
  }
  @Get()
  async findAll() {
    return this.clientesService.findAll();
  }
  @Get('cpf')
  async findOne(@Body('cpf') cpf: string) {
    return this.clientesService.findOne(cpf);
  }
  @Put(':cpf')
  async update(@Param('cpf') cpf: string, @Body() data: ClientesDTO) {
    return this.clientesService.update(cpf, data);
  }
  @Delete('cpf')
  async deleteCliente(@Body('cpf') cpf: string) {
    return this.clientesService.delete(cpf);
  }
}
