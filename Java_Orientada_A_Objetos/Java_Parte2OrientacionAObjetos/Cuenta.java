package Java_Parte2OrientacionAObjetos;

class Cuenta {
    double saldo;
    int agencia;
    int numero;
    String titular;

    public void depositar(double valor){
        this.saldo += valor;
    }

    public boolean retirar(double valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return true;
        }
        else{
            return false;
        }
    }

    public boolean transferir(double valor, Cuenta cuenta ){
        if(this.saldo >= valor){
            this.saldo -= valor;
            cuenta.depositar(valor);
            return true;
        }
        else{
            return false;
        }
    }
}
