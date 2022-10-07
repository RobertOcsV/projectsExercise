using System;

class Programa
{

    static void Main(string[] args)
    {

        double altura;
        double peso;
        double imc;

        Console.WriteLine("Insira sua altura: ");
        altura =  Convert.ToDouble(Console.ReadLine());
        altura = altura * altura;

        Console.WriteLine("Insira seu peso: ");
        peso = Convert.ToDouble(Console.ReadLine());

        imc =  peso / altura;

        if (imc <= 17)
        {

            Console.WriteLine("você está abaixo do peso.");
        }
        else if (imc >= 18.5 && imc <= 24.99)
        {
            Console.WriteLine("você está com o peso na média");
        } else if (imc >= 25 && imc <= 29.99)
        {
            Console.WriteLine("Você está acima do peso.");
        } else if (imc >= 30 && imc <= 34.99) {

            Console.WriteLine("Obesidade1");
        } else if (imc >= 35 && imc <= 39.99)
        {
            Console.WriteLine("Obesidade2 (Severa)");
        }
        else {

            Console.WriteLine("Obesidade 3 perigo!");

        }

        


    }


}