# cotacao-cripto
Aplicação para ver cotação de criptomoedas em tempo real

## Autor

[danilojmessias](https://www.github.com/danilojmessias)

## Rodar Localmente

Clone o Projeto

```bash
 https://github.com/danilojmessias/cotacao-cripto.git
```


Instale as dependencias

```bash
  npm install
```

Inicie o Projeto

```bash
  npm run start
```

## Api

Utilizei a API [coinlib.io](https://coinlib.io/apidocs) para receber os dados das moedas
Devido a politica de CORS adotada pela coinlib foi necessário utilizar um acesso externo, cedido via [Sujeito Programador](https://sujeitoprogramador.com)
Esta api existe um limite de requisições por key cedida, caso queira uma key própria, siga estes passos:
vá para [coinlib.io](https://coinlib.io)
clique em Sign In e escolha a melhor forma de login para voce
Após logar, clique no seu nome de usuário e vá em profile
Haverá a área API, digite no campo o motivo para usar a API e clique para gerar a sua key
Com sua key em mãos, substitua na url das funçãos getDataCoins {https://sujeitoprogramador.com/api-cripto/?key=sua-key}
e getDataCoinDetails {https://sujeitoprogramador.com/api-cripto/coin/?key=sua-key}

## Caso não tenha acesso a coinlib

Caso não tenho acesso ao coinlib, é possivel utilizar o JSON que disponibilizei no arquivo. Porém a aplicação fica limitada aos dados salvos no momento que gerei o JSON e apenas a visualização da cotação, não sendo possivel acessar os dados na página detalhes

## Para inicializar esta API siga os passos:

Abra o caminho do projeto
```bash
  cotacao-cripto\src\database
```
Instale o json server
```bash
  npm install -g json-server
```
Inicie o servidor
```bash
  json-server --watch db.json --port 3001
```

Com isso substitua na url das funçãos getDataCoins {http://localhost:3001/mock}
