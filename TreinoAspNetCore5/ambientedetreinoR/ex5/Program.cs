using System;

class Programa
{
    


    static void Main(string[] args)
    {

        


        int idade;
        int peso = 0;
        char possuiTatoo = ' ';
        char conAlcool = ' ';

        Console.WriteLine("Olá, seja bem vindo ao banco central de doação de sangue!! ");
        Console.WriteLine("Questionário: ");

        //questão 1
        Console.WriteLine("Qual a sua idade? (idade min: 19 e idade max: 69)");
        idade = Convert.ToInt16(Console.ReadLine());

        if (idade >= 19 && idade <= 69) {
            //questão 2 - Ok
            Console.WriteLine("Você fez alguma tatuagem no último ano? responda com (s) ou (n)");
            possuiTatoo = Convert.ToChar(Console.ReadLine());

        } else if (idade < 19)
        {
            Console.WriteLine("Sinto muito só aceitamos idade acima de 18");
            System.Diagnostics.Process.GetCurrentProcess().Kill();
        } else
        {
            Console.WriteLine("Sinto muito só aceitamos idade abaixo de 70");
            System.Diagnostics.Process.GetCurrentProcess().Kill();
        }


        if (possuiTatoo == 'n')
        {
            //questão 3 - Ok
            Console.WriteLine("Qual o seu peso? (apenas acima de 50kg):  ");
            peso = Convert.ToInt16((Console.ReadLine()));

        }
        else {

            Console.WriteLine("Sinto muito, só aceitamos doadores que não fizeram tatuagens nos últimos 12 meses.. ");
            System.Diagnostics.Process.GetCurrentProcess().Kill();
        }

        if (peso >= 50 && idade >= 19 || idade <= 69)
        {
            //questão 4 - ok
            Console.WriteLine("Nas últimas 12 horas você consumiu álcool? (s) ou (n)");
            conAlcool = Convert.ToChar(Console.ReadLine());

        }
        else {

            Console.WriteLine("Sinto muito, aceitamos apenas peso acima de 50kg");
            System.Diagnostics.Process.GetCurrentProcess().Kill();
        }

        if (conAlcool == 'n')
        {

            Console.WriteLine("Ok, você está apto para doar sangue");

        }
        else {

            Console.WriteLine("Aguarde mais 12 horas para poder doar sangue.");
            System.Diagnostics.Process.GetCurrentProcess().Kill();
        }
        



    }


}