/* Quando o controller é instanciado pelo Angular, um novo escopo é criado e disponibilizado através da variável "$scope". O nome do parâmetro da função deve ser exatamente igual a "$scope". */

/* O AngularJS possui um sistema próprio de injeção de dependências. */

/* No AngularJS, um controller nada mais é do que uma função JavaScript, que é salva em um arquivo de mesmo nome. Em conjunto com o objeto "$scope", ela é capaz de disponibilizar dados e ações para a view. */

/* Estamos criando um controller dentro do módulo que foi criado acima. O primeiro parâmetro é o nome do módulo, e o segundo parâmetro é a função anônima com o conteúdo do controller. */
app.controller("HelloController", function ($scope) {
  /* Estamos adicionando a propriedade "total" no objeto "$scope". */

  $scope.total = 0;

  /* No Angular, um model é qualquer tipo primitivo ou objeto em JavaScript. */

  /* A view será incrementada sem precisarmos atualizar a página. O Angular sabe quando o model é modificado e atualiza a view com base nesse novo valor. É muito diferente ao trabalharmos com JQuery, por exemplo, pois, nessa biblioteca, além de atualizarmos o módulo, temos que sincronizá-lo com a view. */

  $scope.incrementar = function () {
    $scope.total++;
  };
});
