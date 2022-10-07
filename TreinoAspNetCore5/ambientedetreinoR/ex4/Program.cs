using System;

class Programa
{

    static void Main(string[] args)
    {

        Double tanque;
        Double kmPorLitro;
        Double distanciaKm;
        Double kmPossivel;
        Double calculoKm;



        Console.WriteLine("Quantos litros você possui no momento?");
        tanque = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("Quantos KM o carro faz por litro?");
        kmPorLitro = Convert.ToDouble(Console.ReadLine());

        Console.WriteLine("Qual a distância você deseja percorrer?");
        distanciaKm = Convert.ToDouble(Console.ReadLine());


        kmPossivel = kmPorLitro * tanque;

        calculoKm = distanciaKm - kmPossivel;

        //Console.WriteLine("distancia"distanciaKm);
        Console.WriteLine("km possivel: " + kmPossivel);

        if (distanciaKm > kmPossivel)
        {

            Console.WriteLine("Você precisará abastecer " + calculoKm + "km para poder chegar ao seu destino.");

        }
        else
        {
            calculoKm = calculoKm * -1;
            Console.WriteLine("você poderá chegar ao seu destino e ainda poderá rodar por mais " + calculoKm + "kilômetros");

        }



        //Double tanque;
        //Double kmPorLitro;
        //Double distanciaKm;
        //Double calculoKm;

        //Console.WriteLine("Quantos litros você possui no momento?");
        //tanque = Convert.ToDouble(Console.ReadLine());

        //Console.WriteLine("Quantos KM o carro faz por litro?");
        //kmPorLitro = Convert.ToDouble(Console.ReadLine());

        //Console.WriteLine("Qual a distância você deseja percorrer?");
        //distanciaKm = Convert.ToDouble(Console.ReadLine());



        //calculoKm = (tanque * distanciaKm) / kmPorLitro;

        //Console.WriteLine(calculoKm);





    }
}