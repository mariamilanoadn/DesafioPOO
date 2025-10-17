using System;

namespace CorretoraImobiliaria
{
    public abstract class Imovel
    {
        protected string Endereco { get; set; }
        protected int Numero { get; set; }
        protected bool Alugado { get; set; }
        protected Proprietario Proprietario { get; set; }
        protected Inquilino? Inquilino { get; set; }

        public Imovel(string endereco, int numero, Proprietario proprietario)
        {
            Endereco = endereco;
            Numero = numero;
            Proprietario = proprietario;
            Alugado = false;
            Inquilino = null;
        }

        public abstract string EstaAlugado();

        public string ContatoProprietario()
        {
            return $"Proprietário: {Proprietario.Nome}, Telefone: {Proprietario.Telefone}";
        }

        public double CalcularAluguel(double valorMensal, int meses)
        {
            double total = valorMensal * meses;
            double desconto = 0;

            if (meses >= 36)
                desconto = 0.15;
            else if (meses >= 24)
                desconto = 0.10;
            else if (meses >= 12)
                desconto = 0.05;

            double valorFinal = total - (total * desconto);

            Console.WriteLine($"\nValor sem desconto: R$ {total:N2}");
            if (desconto > 0)
                Console.WriteLine($"Desconto aplicado: {(desconto * 100)}%");
            else
                Console.WriteLine("Sem desconto aplicado.");

            Console.WriteLine($"Valor final: R$ {valorFinal:N2}");
            return valorFinal;
        }

        // Getters e setters
        public string GetEndereco() => Endereco;
        public int GetNumero() => Numero;
        public bool GetAlugado() => Alugado;
        public void SetAlugado(bool alugado) => Alugado = alugado;
        public Inquilino? GetInquilino() => Inquilino;
        public void SetInquilino(Inquilino? inquilino) => Inquilino = inquilino;
    }
}
