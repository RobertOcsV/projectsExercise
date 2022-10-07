using System;

class Programa
{

    static void Main(string[] args)
    {

        int lado1 = 0;
        int lado2 = 0;
        int lado3 = 0;

        Console.WriteLine("Insira o valor do lado1: ");
        lado1 = Convert.ToInt16(Console.ReadLine());

        Console.WriteLine("Insira o valor do lado2: ");
        lado2 = Convert.ToInt16(Console.ReadLine());

        Console.WriteLine("Insira o valor do lado3: ");
        lado3 = Convert.ToInt16(Console.ReadLine());


        if (lado1 == lado2 && lado1 == lado3)
        {
            Console.WriteLine("Este é um triângulo equilátero (todos iguais)");
        }
        else if (lado1 != lado2 && lado1 == lado3 || 
                 lado2 != lado3 && lado2 == lado1 ||
                 lado3 != lado1 && lado3 == lado2 )
        {
            Console.WriteLine("Este é um triângulo isóceles (dois iguais)");
        }
        else {
            Console.WriteLine("Este é um triângulo escaleno (todos diferentes)");        
        }


    }


}