package Java_Parte2OrientacionAObjetos;

public class PruebaMetodos {
    public static void main(String[] args) {
        Cuenta micuenta = new Cuenta();
        micuenta.deposita(4.50);
        System.out.println(micuenta.getSaldo());
        micuenta.deposita(100);
        System.out.println(micuenta.getSaldo());
        micuenta.saca(50);
        System.out.println(micuenta.getSaldo());

        Cuenta cuentaDeLuciano = new Cuenta();
        cuentaDeLuciano.deposita(1000);
        System.out.println("Antes transferir");
        System.out.println(micuenta.getSaldo());
        System.out.println(cuentaDeLuciano.getSaldo()); 
        cuentaDeLuciano.transfiere(500, micuenta);
        System.out.println("Despues transferir 500 ");
        System.out.println(micuenta.getSaldo());
        System.out.println(cuentaDeLuciano.getSaldo()); 
    }
}
