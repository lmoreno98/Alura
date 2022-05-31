package Java_Parte2OrientacionAObjetos;

public class PruebaMetodos {
    public static void main(String[] args) {
        Cuenta micuenta = new Cuenta();
        micuenta.depositar(4.50);
        System.out.println(micuenta.saldo);
        micuenta.depositar(100);
        System.out.println(micuenta.saldo);
        micuenta.retirar(50);
        System.out.println(micuenta.saldo);

        Cuenta cuentaDeLuciano = new Cuenta();
        cuentaDeLuciano.depositar(1000);
        System.out.println("Antes transferir");
        System.out.println(micuenta.saldo);
        System.out.println(cuentaDeLuciano.saldo); 
        cuentaDeLuciano.transferir(500, micuenta);
        System.out.println("Despues transferir 500 ");
        System.out.println(micuenta.saldo);
        System.out.println(cuentaDeLuciano.saldo); 
    }
}
