import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { ClientesDTO } from './clientes.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}
  /*         CREATE           */
  async create(data: ClientesDTO) {
    //Verificar se o cliente com o mesmo CPF já foi cadastrado:
    const clientExiste = await this.prisma.cliente.findFirst({
      where: {
        cpf: data.cpf,
      },
    });
    //Validação se o Cliente já existe
    if (clientExiste) {
      throw new HttpException(
        `CPF já cadastrado no sistema`,
        HttpStatus.UNAUTHORIZED,
      );
    }
    //Criar
    const cliente = await this.prisma.cliente.create({
      data,
    });
    return cliente;
  }

  /*        FIND ALL         */
  async findAll() {
    return this.prisma.cliente.findMany();
  }
  /*        FIND ONE         */
  async findOne(cpf: string) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        cpf,
      },
    });

    if (cliente === null) {
      throw new HttpException(
        `O cliente não existe na base de dados`,
        HttpStatus.NOT_FOUND,
      );
    }
    return cliente;
  }

  /*        UPDATE         */
  async update(cpf: string, data: ClientesDTO) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        cpf,
      },
    });

    if (cliente === null) {
      throw new HttpException(
        `O cliente não existe na base de dados`,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.prisma.cliente.update({
      data,
      where: {
        cpf,
      },
    });
  }

  /*        DELETE         */
  async delete(cpf: string) {
    const cliente = await this.prisma.cliente.findUnique({
      where: {
        cpf,
      },
    });

    if (cliente === null) {
      throw new HttpException(
        `O cliente não existe na base de dados`,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.prisma.cliente.delete({
      where: {
        cpf,
      },
    });
  }
}
