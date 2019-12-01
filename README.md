# Trabalho-DM-124
Repositório destinado ao trabalho avaliativo da Pós-graduação na disciplina DM-124 - Desenvolvimento de Web Services com segurança sob plataforma Node.js. 

# Instalando esta API:
1- Download da API com o comando: git clone https://github.com/RodrigoFranco91/Trabalho-DM-124.git
2- Instalação das dependências da API com o comando: npm install (utilizar esse comando no terminal dentro na pasta do projeto)

# Rodar a aplicação:
1- Executar o seguinte comando no terminal dentro da pasta do projeto: npm start

# Autenticação:
Utilizar a autenticação do tipo Basic Auth;
Username: inatel
Password: alunosinatel

# Testando a aplicação:
Obs: Dentro do diretório Postman há collections prontas para testar a API.

# Método - Post
URI: localhost:8080/api/entregas
Body:
    {
		"idDoPedido": "1",
        "idDoCliente": "1",
        "nomeDoRecebedor": "Rodrigo",
        "cpfDoRecebedor": "000.000.000-00",
        "dataEntrega": "25/10/2019",
        "horaEntrega": "15:00",
        "localizacao": "Cidade: Pouso Alegre - MG. Rua: Airton Senna. Número: 00. Bairro: Centro."
    }

# Método - Patch
URI: localhost:8080/api/entregas
Body:
    {
        "idDoPedido": "1",
        "idDoCliente": "1",
        "nomeDoRecebedor": "Rodrigo Franco de Lima",
        "cpfDoRecebedor": "000-0000-0000-00",
        "recebedorEhComprador": true,
        "dataEntrega": "25/10/2019",
        "horaEntrega": "15:00",
        "localizacao": "Brasil",
        "entregaRealizada": true
    }

# Método - Get
URI: localhost:8080/api/entregas
Body: {}

# Método - Get
URI: localhost:8080/api/entregas/1
Body: {}

# Método - Delete
URI: localhost:8080/api/entregas/1
Body: {}