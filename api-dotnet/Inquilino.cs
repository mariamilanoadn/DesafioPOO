namespace CorretoraImobiliaria
{
    public class Inquilino
    {
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string CPF { get; set; }

        public Inquilino(string nome, string telefone, string cpf)
        {
            Nome = nome;
            Telefone = telefone;
            CPF = cpf;
        }

        public override string ToString()
        {
            return $"{Nome} (Tel: {Telefone}, CPF: {CPF})";
        }
    }
}
