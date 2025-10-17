namespace CorretoraImobiliaria
{
    public class Casa : Imovel
    {
        public Casa(string endereco, int numero, Proprietario proprietario)
            : base(endereco, numero, proprietario) { }

        public override string EstaAlugado()
        {
            return GetAlugado() ? "A casa está alugada." : "A casa está disponível.";
        }
    }
}
