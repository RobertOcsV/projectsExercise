using System;

class Programa
{


    static void Main(string[] args)
    {

        double valor1;
        double valor2;
        double resultado;
        char expressao = ' ';


        Console.WriteLine("Insira um valor: ");
        valor1 = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("Insira o operador:  ");
        expressao = Convert.ToChar(Console.ReadLine());

        Console.WriteLine("Insira o valor2: ");
        valor2 = Convert.ToDouble(Console.ReadLine());

        if (expressao == '*')
        {

            resultado = valor1 * valor2;

            Console.WriteLine("resultado do calculo: " +  resultado);
        }
        else if (expressao == '/')
        {
            resultado = valor1 / valor2;

            Console.WriteLine("resultado do calculo: " + resultado);


        }
        else if (expressao == '+')
        {
            resultado = valor1 + valor2;

            Console.WriteLine("resultado do calculo: " + resultado);


        }
        else if (expressao == '-')
        {
            resultado = valor1 - valor2;

            Console.WriteLine("resultado do calculo: " + resultado);


        }
        else if(expressao == '^') {
            
            resultado = Math.Pow(valor1, valor2);
            Console.WriteLine("resultado do calculo: " + resultado);

        }




    }


}