package com.company.antra;

public class Main {

    public static void main(String[] args) {
        System.out.println(Main.mortgagePayment(100000, 0.005, 180));
    }

    public static double mortgagePayment(double p, double r, double n){
        return p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
}
