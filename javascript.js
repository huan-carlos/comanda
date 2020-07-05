//implementação da função dos botões de adição e subtração.
function add(num){
    var x = document.getElementsByClassName("item");
    x[num-1].value++;
}
function lass(num){
    var x = document.getElementsByClassName("item");
    x[num-1].value--;
    //quando chegar a zero o botão de subtração não decrementa mais. Isso impede de ter valores negativos.
    if (x[num-1].value<0) {x[num-1].value=0;}
}
var calcular = document.getElementById('go');
calcular.onclick = function(){
    var itens = document.getElementsByTagName('td');
    var preco = document.getElementsByClassName("preco");
    var qtd = document.getElementsByClassName("item");

    //com os "html colection" das quantidade e preços, só multipliquei o
    //valor com a quantidade pra obter o total do item e armazenar numa lista.
    var valor = [];
    for (var i = 0; i < qtd.length; i++) {
        valor[i] = qtd[i].value * parseFloat(preco[i].innerHTML);
    }
    //e depois somo todos os itens da lista.
    var total = valor.reduce(function(total, valor){
        return total + valor;
    }, 0);

    //armazenando temporariamente os nomes, preços e qtd.
    var vetNome = [];
    for(var i = 0; i < qtd.length; i++){
        vetNome[i] = itens[i*3].textContent;
    }

    //devo criar elementos html através do javascript para mostrar ao usuário o valor total da comanda.
    function verTotal(){
        var titleTotal = document.createElement('h1');
        var titleTotalText = document.createTextNode('Subtotal da Comanda');
        titleTotal.appendChild(titleTotalText);
        var textTotal = document.createElement('h2');
        var textTotaltext = document.createTextNode('Itens selecionados:');
        textTotal.appendChild(textTotaltext);
        var corpo = document.getElementsByTagName('body');
        corpo[0].appendChild(titleTotal);
        corpo[0].appendChild(textTotaltext);
        
        //renderizando os elementos no relatório final da comanda
        for(var i = 0; i < qtd.length; i++){
            if(qtd[i].value!=0){
                var lista = document.createElement('ul');
                var aux1 = document.createElement('h4');
                var aux2 = document.createTextNode(vetNome[i]);
                aux1.appendChild(aux2);
                lista.appendChild(aux1);
                corpo[0].appendChild(aux1);

                var aux2 = document.createTextNode(' -- Preço: R$'+preco[i].innerHTML+'  ');
                aux1.appendChild(aux2);
                lista.appendChild(aux1);
                corpo[0].appendChild(aux1);

                var aux2 = document.createTextNode(' -- Qtd.:'+qtd[i].value);
                aux1.appendChild(aux2);
                lista.appendChild(aux1);
                corpo[0].appendChild(aux1);
            }
        }
        //mostra o total da comanda
        var aux1 = document.createElement('h2');
        var aux2 = document.createTextNode('Total: R$'+total.toFixed(2));
        aux1.appendChild(aux2);
        corpo[0].appendChild(aux1);
    }
    verTotal();
    document.getElementById('myTable').remove();
    document.getElementById('go').remove();
}