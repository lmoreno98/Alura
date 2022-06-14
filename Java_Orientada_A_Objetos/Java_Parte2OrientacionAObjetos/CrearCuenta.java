package Java_Parte2OrientacionAObjetos;

public class CrearCuenta {
    
    public static void main(String[] args) {
        
        // Creo una variable para asignar una nueva cuenta nombre de la clase
        Cuenta primeraCuenta = new Cuenta();
        primeraCuenta.deposita(1000);
        primeraCuenta.setNumero(001);
        primeraCuenta.setAgencia(12);
        //primeraCuenta.titular = "Luciano";
        System.out.println(primeraCuenta.getSaldo());
        
        Cuenta segundaCuenta = new Cuenta();
        segundaCuenta.deposita(2000);
        System.out.println(segundaCuenta.getSaldo());
        
    }
    
}
