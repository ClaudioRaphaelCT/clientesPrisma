-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "profissao" TEXT NOT NULL,
    "cpf" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");
