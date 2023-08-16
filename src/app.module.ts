import { Module } from '@nestjs/common';
import { ClientesModule } from './modules/clientes/clientes.module';

@Module({
  imports: [ClientesModule],
})
export class AppModule {}
