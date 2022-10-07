// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");


int c = 0;
char resultado = ' ';
int valor1 = 0;
int valor2 = 0;
do
{
    if (c == 0)
    {
        c++;
        Console.WriteLine("Insira um número: ");
        valor1 = Convert.ToInt16(Console.ReadLine());
    }
    else
    {
        Console.WriteLine("Insira mais um valor: ");
        valor2 = Convert.ToInt16(Console.ReadLine());
    }

    valor1 = valor1 + valor2;

    Console.WriteLine("Gostaria de inserir mais um valor?:  ");
    resultado = Convert.ToChar(Console.ReadLine());

} while (resultado == 's');


Console.WriteLine(resultado);
Console.WriteLine(valor1);