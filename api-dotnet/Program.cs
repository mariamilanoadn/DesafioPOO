using System;
using System.Collections.Generic;

namespace CorretoraImobiliaria
{
    class Program
    {
        static List<Imovel> imoveis = new List<Imovel>();

        static void Main(string[] args)
        {
            int opcao;

            do
            {
                Console.Clear();
                Console.WriteLine("CORRETORA IMOBILIÁRIA");
                Console.WriteLine("--------------------------");
                Console.WriteLine("1 - Cadastrar Imóvel");
                Console.WriteLine("2 - Listar Imóveis");
                Console.WriteLine("3 - Alugar/Desalugar Imóvel");
                Console.WriteLine("4 - Calcular Valor do Aluguel");
                Console.WriteLine("5 - Excluir Imóvel");
                Console.WriteLine("6 - Listar Imóveis Alugados");
                Console.WriteLine("0 - Sair");
                Console.Write("\nEscolha uma opção: ");
                int.TryParse(Console.ReadLine(), out opcao);

                switch (opcao)
                {
                    case 1: CadastrarImovel(); break;
                    case 2: ListarImoveis(); break;
                    case 3: AlternarAluguel(); break;
                    case 4: CalcularValorTotal(); break;
                    case 5: ExcluirImovel(); break;
                    case 6: ListarAlugados(); break;
                    case 0: Console.WriteLine("Saindo..."); break;
                    default: Console.WriteLine("Opção inválida!"); break;
                }

                if (opcao != 0)
                {
                    Console.WriteLine("\nPressione qualquer tecla para continuar...");
                    Console.ReadKey();
                }

            } while (opcao != 0);
        }


        static void CadastrarImovel() { /* ... */ }
        static void ListarImoveis() { /* ... */ }
        static void AlternarAluguel() { /* ... */ }
        static void CalcularValorTotal() { /* ... */ }
        static void ExcluirImovel() { /* ... */ }
        static void ListarAlugados() { /* ... */ }
    }
}
