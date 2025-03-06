public class HelloWorld {
    public static void main(String[] args) {
        String ambiente =  args[0];
        if (ambiente.equalsIgnoreCase("dev")) {
            System.out.println("Executando em DEV");
        } else if (ambiente.equalsIgnoreCase("TESTE")) {
            System.out.println("Executando em TESTE");
        }else {
        System.out.println(ambiente);
        }
    }
}