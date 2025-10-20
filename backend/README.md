# ScreenMatch: Galeria de Filmes e Séries

Este projeto consiste em uma aplicação para busca de informações sobre filmes e séries, utilizando a API OMDb. O projeto é dividido em duas partes principais: um backend inicial desenvolvido em Java e um frontend moderno e responsivo construído com React, Vite e Tailwind CSS.

## Funcionalidades

- **Busca de Filmes:** Pesquise filmes e séries pelo título.
- **Galeria de Resultados:** Visualize os resultados da busca em uma grade de cards elegante.
- **Interface Responsiva:** A aplicação se adapta a diferentes tamanhos de tela, de desktops a celulares.
- **Backend em Java:** Uma aplicação de console para testar a busca na API OMDb e salvar os resultados.
- **Frontend em React:** Uma interface de usuário rica e interativa para uma experiência de navegação fluida.

## Estrutura do Projeto

```
/2914-java-screenmatch-listas-colecoes-aula04
|-- /frontend         # Contém o código do frontend em React
|   |-- /src
|   |-- package.json
|   `-- ...
|-- /src              # Contém o código do backend em Java
|   |-- /br/com/alura/screenmatch
|   `-- ...
`-- README.md
```

---

## Backend (Java)

O backend é uma aplicação de console simples escrita em Java. Sua função principal é conectar-se à API OMDb, buscar por um filme específico fornecido pelo usuário via terminal e salvar os dados brutos (JSON) e tratados em um arquivo de texto (`Filmes.txt`).

### Tecnologias Utilizadas

- Java
- Biblioteca `HttpClient` (nativa do Java 11+)
- `Gson` para manipulação de JSON

### Como Executar

1.  **Pré-requisitos:** É necessário ter o Java JDK 11 ou superior instalado.
2.  **Dependências:** O projeto utiliza a biblioteca Gson. Certifique-se de adicioná-la ao seu classpath.
3.  **Execução:** Compile e execute a classe `br.com.alura.screenmatch.PrincipalComBusca.Buscas` a partir da sua IDE de preferência.

---

## Frontend (React)

O frontend é uma aplicação web moderna que consome a API OMDb para fornecer uma interface gráfica rica e interativa para o usuário pesquisar e visualizar filmes e séries.

### Tecnologias Utilizadas

- **React:** Biblioteca para construção de interfaces de usuário.
- **Vite:** Ferramenta de build para um desenvolvimento frontend rápido.
- **Tailwind CSS:** Framework de CSS utility-first para estilização rápida e customizável.

### Como Executar

1.  **Pré-requisitos:** É necessário ter o [Node.js](https://nodejs.org/) (que inclui o npm) instalado.

2.  **Navegue até o diretório do frontend:**
    ```sh
    cd frontend
    ```

3.  **Instale as dependências do projeto:**
    ```sh
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```sh
    npm run dev
    ```

5.  **Acesse a aplicação:** Abra seu navegador e acesse o endereço `http://localhost:5173` (ou o endereço indicado no seu terminal).

## Chave da API (API Key)

O projeto utiliza uma chave de API da OMDb que está diretamente no código (`hardcoded`) tanto no backend Java quanto no frontend React.

**Atenção:** Para um projeto em produção ou para uso contínuo, é altamente recomendável mover a chave da API para uma variável de ambiente (`.env`) para garantir a segurança e facilitar a configuração.
