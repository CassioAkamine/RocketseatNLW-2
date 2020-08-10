/*
TODA VEZ QUE FIZER UMA ALTERAÇÃO NO SERVIDOR, PRECISA REINICIAR O SERVIDOR PARA NÃO TER PROBLEMA

- Vamos mexer na estrutura de pastas do Projeto NWL-Rocketseat. Refatorar todo o projeto;
- Criar uma nova pasta chamada "src";
	+ dentro de src está o conteúdo .html
- Criar uma nova pasta chamada "public";
	+ dentro de public terá o conteúdo styles, images, 
	
- npm - fica resposável pelo gerenciamento de pacotes de subaplicações

- json - javaScrip Object notation - 

- express no Node --> npm install express : é uma biblioteca de ideias e estratégias que será colocado no projeto.
	- node_modules - 
    - package-lock.json - para mapear todas as dependencias da aplicação.
    

Criando o servidor -> na pasta "src" cria um novo arquivo server.js .

require('express')() -> require é necessária para chamar uma dependência de outro projeto.
Sempre tem que se perguntar que tipo é o que vamos chamar.

.listen(5500) é uma funcionalidade, 5500 é uma porta de acesso no servidor

Criando rotas: -> 

-->   (req, res) => {} - significa que é um arrow function (uma função curta). É PADRÃO ESSA FUNÇÃO

.get("/", (req, res) => {}) -> req --> é requisição e é o que acompanha o pedido, e ela vai trazer mais dados.
                               res --> é a resposta é o que vai mostrar em tela.

$ npm install nodemon -D --> é uma ferramenta para reiniciar o servidor enquanto estamos desenvolvendo e o -D -> significa, que vamos instalar em 
um lugar específico para quem é desenvolvedor
Após baixar e instalar, abre o -> package.json e procura o --> "scripts": { "test": "echo \"Error: no test specified\" && exit 1" } e altera todos
os comando para "scripts": { "dev": "nodemon src/server.js" }

O comando para executar o servidor é -> npm run dev

Para enviar o HTML, colocamos -> res.sendFile(__dirname + "")
    __dirname + "" -> é uma variável do node e vai concatenar o dirname com o arquivo html que está na pasta
    A pasta __dirname ->  é o caminho -> E:\AREA DEV\NLW-RocketSeat\src - que está salvo o projeto

    quando se coloca um .use -> é uma funcionalidade que é uma configuração do servidor
*/

// criei uma const express -> para não ficar repetindo os atributos
// criei uma const server -> para receber a const express()

// -> sempre que conter vários dados, tem que colocar os colchetes [], isso é um array -> vetor
// Abaixo é uma estrutura de dados, que esta recebendo uma lista com dois proffyss e cada proffy é um objeto dentro de uma lista de objetos
/* Precisa transformar essa estrutura de dados de programação, para que envie corretamente os dados para o front-end, 
HTML não transforma o dado, mas consegue atribuir poderes ao HTML usando uma estratégia chamada -> template engine
*/

// servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configurar servidor para acessar nunjucks
// 'src/views' -> pasta aonde esta o arquivo HTML
// express: server, noCache: true,-> enviar o objeto com algumas configurações

//configurar nunjucks (template nunjuncks)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Inicio e configuração do servidor
server
    //receber os dados do req.body
    .use(express.urlencoded({ extended: true }))
    // Configuração de arquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
    // rotas da aplicação 
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    //start do servidor
    .listen(5500)
