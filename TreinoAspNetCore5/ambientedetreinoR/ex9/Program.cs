using System;
using System.Collections;
public class SamplesArrayList
{

    public static void Main()
    {

             int numD = 0;
             int valorDigitado;

            Console.WriteLine("Insira um valor: ");
            valorDigitado = Convert.ToInt16(Console.ReadLine());

            ArrayList numeros = new ArrayList();

            while (valorDigitado >= 1) {
              valorDigitado--;
              numD++;
              numeros.Add(numD);
            Console.WriteLine(numeros[numD]);
            }

            Console.WriteLine(valorDigitado);
            Console.WriteLine(numeros);

    }

}