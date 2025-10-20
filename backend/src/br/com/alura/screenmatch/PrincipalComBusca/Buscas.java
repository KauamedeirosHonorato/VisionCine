package br.com.alura.screenmatch.PrincipalComBusca;

import br.com.alura.screenmatch.modelos.Titulo;
import br.com.alura.screenmatch.modelos.TituloOmdb;
import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class Buscas {

    public static void main(String[] args) throws IOException, InterruptedException {

        Scanner leitura = new Scanner(System.in);
        System.out.print("Digite um filme para buscar: ");
        String busca = leitura.nextLine().trim().replace(" ", "+");

        String apiKey = "9bf3861";
        String endereco = "https://www.omdbapi.com/?t=" + busca + "&apikey=" + apiKey;

        // --- Conexão HTTP ---
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(endereco))
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        String json = response.body();
        System.out.println("\nJSON retornado da API:");
        System.out.println(json);

        // --- Conversão JSON → Objeto ---
        Gson gson = new GsonBuilder()
                .setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE)
                .create();

        TituloOmdb meuTituloOmdb = gson.fromJson(json, TituloOmdb.class);
        System.out.println("\nObjeto TituloOmdb:");
        System.out.println(meuTituloOmdb);

        try {
            Titulo meuTitulo = new Titulo(meuTituloOmdb);
            System.out.println("\nTítulo convertido com sucesso:");
            System.out.println(meuTitulo);

            // --- Escrita em arquivo ---
            try (FileWriter escrita = new FileWriter("Filmes.txt", true)) {
                escrita.write(meuTitulo.toString()+ "\n");
                escrita.write("\n E ");
            }

        } catch (IllegalArgumentException e) {
            System.out.println("\n Houve um erro na conversão:");
            System.out.println(e.getMessage());
        }

        System.out.println("\nO programa finalizou com sucesso!");
    }
}
