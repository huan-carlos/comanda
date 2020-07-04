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
    var preco = document.getElementsByClassName("preco");
    var qtd = document.getElementsByClassName("item");
    //var tabela = document.getElementById("myTable");
    //com os "html colection" das quantidade e preços, só multipliquei o valor com a quantidade pra obter o total do item e armazenar numa lista.
    var valor = [];
    for (var i = 0; i < qtd.length; i++) {
        valor[i] = qtd[i].value * parseFloat(preco[i].innerHTML);
    }
    //e depois somo todos os itens da lista.
    var total = valor.reduce(function(total, valor){
        return total + valor;
    }, 0);
    /*for(var i=0;i<32;i++){
        if(qtd[i].value==0){
            tabela.deleteRow(i+2);
        }
    }*/
    
    document.getElementById('myTable').remove();
    document.getElementById('go').remove();

    //devo criar elementos html através do javascript para mostrar ao usuário o valor total da comanda.
    
}