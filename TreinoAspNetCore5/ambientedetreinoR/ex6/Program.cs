using System;

class Programa
{

    
    static void Main(string[] args)
    {
        int VelPermitida;
        int VelMotorista;
        double calc;
       

        Console.WriteLine("Insira a velocidade do motorista: ");
        VelMotorista = Convert.ToInt16(Console.ReadLine());

        Console.WriteLine("Insira a velocidade permitida: ");
        VelPermitida = Convert.ToInt16(Console.ReadLine());


        
        calc = (VelMotorista * 100) / VelPermitida;

        calc = calc - 100;

        Console.WriteLine(calc);

        if (calc <= 20 && calc > 1)
        {

            Console.WriteLine("infração média, " + calc + "% da velocidade permitida! Multa de R$ 85,00 + 4 pontos na carteira. ");

        }
        else if (calc <= 50 && calc > 0)
        {

            Console.WriteLine("infração grave, " + calc + "% acima da velocidade permitida! Multa de R$ 127,00 + 5 pontos na carteira.");

        }
        else if (calc > 50)
        {

            Console.WriteLine("infração gravíssima, " + calc + "% acima da velocidade permitida! Multa " +
                "de R$ 574,00 + 7 pontos na carteira + apreensão da carteira suspensão do direito de dirigir.");

        }
        else {

            Console.WriteLine("A velocidade do motorista é: " +VelMotorista+ "% A velocidade permitida: " +  VelPermitida + "% você está dentro da lei" );
           
        }





    }





}