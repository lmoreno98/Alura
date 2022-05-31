package Java_Parte2OrientacionAObjetos;

public class CrearCuenta {
    
    public static void main(String[] args) {
        
        // Creo una variable para asignar una nueva cuenta nombre de la clase
        Cuenta primeraCuenta = new Cuenta();
        primeraCuenta.saldo = 1000;
        primeraCuenta.numero = 001;
        primeraCuenta.agencia = 12;
        primeraCuenta.titular = "Luciano";
        System.out.println(primeraCuenta.saldo);
        
        Cuenta segundaCuenta = new Cuenta();
        segundaCuenta.saldo = 2000;
        System.out.println(segundaCuenta.saldo);
        
    }
    
}
