//* Passos do que iremos fazer:
/* 1 Procurar o botão

document.querySelector -> temos que pegar do documento e procurar o botão "+ novo horário", e o argumento é o id do botão,
que é ("#add-time")

document.querySelector("#add-time") -> esse elemento quando achar vai retornar um evento, entre as funcionalidade deles
tem a de clicar e para retornar o clique vamos colocar o ->.addEventListener() -> e essa funcionalidade pede duas coisas, 
primeiro é o tipo do evento -> ('click',), e o que vai fazer depois da ação de clicar no botão, vai ser clonar a fieldset 
que fizemos ->  ('click' , cloneField), e o cloneField é o tipo de ação que vamos ter que criar
*/

document.querySelector("#add-time")
      //* 2 Quando clicar no botão
      .addEventListener('click', cloneField)

/* 3 Executar uma ação

E para criar as ações, as funcionalidades coloco -> function , mais o nome do que quer criar -> cloneField, e é necessário
colocar os parenteses -> () , e abre e fecha chaves -> {} , todas as vezes que executar o cloneField, ele vai executar o 
que esta aplicando dentro das chaves.

*/
function cloneField() {
      /*          3.1 Duplicar os campos. Que campos?
      Vamos criar uma constante para podermos chamar ela depois, será a -> const newFieldContainer
      Iremos duplicar o campo -> .schedule-item  e para isso iremos criar o -> document.querySelector('.schedule-item') ,
      e para duplicar é simples, colocamos o -> .cloneNode() , em javaScript iremos usar o .cloneNode para elementos HTML,
      e dentro das do -> .cloneNode(true) , colocamos o valor de boolean true, para pegar todo o conteúdo da class 
      -> .schedule-item , caso não o coloque o -> true , ele somente vai pegar a <div> vazia.
     */
      const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

      /*          3.2 Pegar os campos. Que Campos?
      Criamos outra const -> fields que atribui a const -> newFieldContainer e procura todas as tags -> ('input') e coloca
      no -> const fields
      */
      const fields = newFieldContainer.querySelectorAll('input')

      /*          3.3 Limpar cada campo. Que Campos?
      .forEach -> é para cada
      fields.forEach(function() {}) -> coloco o nome da const, mais o .forEach() e dentro dos parenteses -> () coloco uma
      funcão -> (function(field) {}) , e o -> (field) é o field do momento, e depois abro e fecho chaves para executar o 
      que tem dentro.
      */
      fields.forEach(function(field) {
            //pega o field do momento e limpa ele
            field.value = ""
      })

      /*          3.4 Colocar na página. Onde colocar?
      .appendChild() -> é a funcionalidade de adicionar um filho e dentro dos () , colocamos a variável -> const fields
     */
      document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

