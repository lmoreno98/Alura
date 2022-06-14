package Java_Parte2OrientacionAObjetos;

public class testReferencia {
    public static void main(String[] args) {
        Cliente diego = new Cliente();
        diego.setNombre("Diego");
        diego.setDocumento("40980849");
        diego.setTelefono("1234567");

        Cuenta cuentaDeDiego = new Cuenta();
        cuentaDeDiego.setAgencia(1);
        cuentaDeDiego.setTitular(diego);
        System.out.println(cuentaDeDiego.getTitular().getNombre());
    }
}
