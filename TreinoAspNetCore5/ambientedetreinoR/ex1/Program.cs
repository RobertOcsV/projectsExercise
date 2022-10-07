using System;

class Programa
{

    static void Main(string[] args)
    {
     
        char s = ' ';

     
       do
        {
            Console.WriteLine("insira seu sexo (f) para feminino e (m) para masculino");
            s = Convert.ToChar(Console.ReadLine());            
        }
        while (s != 'm' && s != 'f');

        if (s == 'f')
        {

            Console.WriteLine("Bom dia, senhora");

        }
        else {

            Console.WriteLine("Bom dia, senhor");
        
        }

          
        
        
    }



}


//int numero2 = 0;
//int numero = 3;


//Console.WriteLine("Digite um numero para somar com: " + numero);
//numero2 = Convert.ToInt16(Console.ReadLine());

//numero = numero2 + numero;

//Console.WriteLine("a soma dos dois números são: "+numero);

//Console.WriteLine("Digite seu sexo: ");
//s = (char)Console.Read();

//Console.WriteLine("Digite seu sexo: (f) para feminino e (m) para masculino ");
//s = (char)Console.Read();

//if (s == 'f')
//    Console.WriteLine("Bom dia senhorita, café?");
//else
//{
//    if (s == 'm')
//        Console.WriteLine("Bom dia senhor, café?");
//    else
//    {
//        Console.WriteLine("valor inválido");
//    }
//}

//if (s != 'm' || s != 'f')
//{

//    Console.WriteLine("Valor inválido, aceitamos apenas (m) ou (f) como opção");

//}