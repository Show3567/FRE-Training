import java.text.NumberFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        getMortgage();
    }

    public static void getMortgage() {
        final byte MONTHS_IN_YEAR = 12;
        final byte PERCENTAGE = 100;

        int principal;
        float annualinterest;
        byte years;

        var currency = NumberFormat.getCurrencyInstance();

        principal = (int) verify("Principal: ", 1000, 10_000_000);
        annualinterest = (float) verify("AnnualInterest: ", 0, 100);
        years = (byte) verify("Year: ", 0, 30);

        double rate = annualinterest / MONTHS_IN_YEAR / PERCENTAGE;
        int months = years * MONTHS_IN_YEAR;

        double mortgageNum = principal * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);

        String mortgage = currency.format(mortgageNum);
        System.out.println(mortgage);
    }

    public static double verify(String inputMessage, double min, double max) {
        var scanner = new Scanner(System.in);
        double value;
        while (true) {
            System.out.print(inputMessage); // between 1000 and 10_000_000;
            value = scanner.nextDouble();

            if (value > min && value <= max) {
                break;
            }
            System.out.println("Input a number between " + min + " and " + max);
        }
        return value;
    }
}

// System.out.println("JDK java development kit");
// System.out.println("JRE java runtime environment");
// System.out.println("IDE integrated development environment");

// // type
// float floatVal = 1.0F;
// double doubleVal = 4.0;
// byte byteVal = 7;
// short shortVal = 7;
// long longValue = 5L;
// int intVal = 12;
// char charVal = 'a';
// boolean boolVal = true;
// short res = (short) longValue;
// long res = byteVal - longValue;
// String str = "10";
// int res = Integer.parseInt(str);
// System.out.println(res);

// var date = new Date();
// System.out.println(date);

// Array
// var numbers = new int[5];
// numbers[0] = 1;
// System.out.println(Arrays.toString(numbers));

// int[][] nums = new int[2][3];
// int[] nums = { 1, 2, 3, 4 };

// for (int num : nums) {
// System.out.println(num);
// }

// // const
// final int a = 5;
// System.out.println("success");

// String str = new String("hello");

// String str = "hello";
// str += " world";

// String str1 = "hello";
// str1 += " world"; // 'hello' 'hello world' 'hello world'

// System.out.println(str.equals(str1));
// String str = " hello";
// System.out.println(str.trim()); // toLowerCase,

// int a = 6;
// String str = String.valueOf(a);
// System.out.println(str);

// Math
// int a = (int) (Math.random() * 100);
// System.out.println(a);

// double num = 1231234314.2312131;
// var currency = NumberFormat.getCurrencyInstance();
// var percentage = NumberFormat.getPercentInstance();
// // $123.12
// String res = percentage.format(0.1);
// System.out.println(res);

// Scanner scanner = new Scanner(System.in);
// int a = scanner.nextInt();
// System.out.println("number: " + a);
