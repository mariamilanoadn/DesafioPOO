# DesafioPOO
Aplicação de console desenvolvida em C# (.NET)

=====Funcionalidades=====

-  **Cadastro de imóveis** (Casas e Apartamentos)  
-  **Listagem completa** de imóveis cadastrados  
-  **Aluguel e desaluguel** de imóveis  
-  **Cálculo de valor total de aluguel** com descontos automáticos  
-  **Exclusão de imóveis**  
-  **Listagem de imóveis alugados** com dados do inquilino

-  Descrição das classes
- **Proprietario.cs** → Contém dados do proprietário (nome, telefone e CPF)  
- **Inquilino.cs** → Contém dados do inquilino (nome, telefone e CPF)  
- **Imovel.cs** → Classe abstrata com propriedades e métodos genéricos (encapsulamento e polimorfismo)  
- **Casa.cs** → Herda de `Imovel`, representando imóveis do tipo casa  
- **Apartamento.cs** → Herda de `Imovel`, representando imóveis do tipo apartamento  
- **Program.cs** → Contém o menu principal e a execução da aplicação  

---

## Conceitos de POO aplicados

 Conceito / Onde foi aplicado 

**Abstração       | Classe abstrata `Imovel` define comportamento genérico para tipos de imóvel |
**Encapsulamento  | Uso de `Get` e `Set` para proteger propriedades internas |
 **Herança        | Classes `Casa` e `Apartamento` herdam de `Imovel` |
 **Polimorfismo   | Método `EstaAlugado()` implementado de forma diferente em cada classe filha |

Exemplo de uso
CORRETORA IMOBILIÁRIA
1 - Cadastrar Imóvel
2 - Listar Imóveis
3 - Alugar/Desalugar Imóvel
4 - Calcular Valor do Aluguel
5 - Excluir Imóvel
6 - Listar Imóveis Alugados
0 - Sair
