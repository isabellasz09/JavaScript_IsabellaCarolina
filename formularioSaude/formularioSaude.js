//executar mascaras

function mascara(o,f){
    //define o objeto e chama a função
    objeto=o
    funcao=f
    setTimeout("executaMascara()",1)

}

function executaMascara(){
    objeto.value=funcao(objeto.value)
}

//mascaras
//telefone
function telefone(variavel){
    variavel=variavel.replace(/\D/g,"")
    variavel=variavel.replace(/^(\d\d)(\d)/g,"($1) $2") 
    //adiciona parenteses em volta dos dois primeiros digitos
    variavel=variavel.replace(/(\d{4})(\d)/,"$1-$2") 
    //adiciona hifem entre o quarto e o quinto digito 
    return variavel
}

function RGeCPF(variavel){
    variavel=variavel.replace(/\D/g,"")//remove caracteres não numericos
    variavel=variavel.replace(/(\d{3})(\d)/,"$1.$2") 
    //adiciona ponto entre o terceiro e o quarto digito
    variavel=variavel.replace(/(\d{3})(\d)/,"$1.$2") 
    //adiciona ponto entre o sexto e o setimo digito
    variavel=variavel.replace(/(\d{3})(\d{1,2})$/,"$1-$2") 
    //adiciona hifem entre o quarto e o quinto digito 
    return variavel
}

function cep(variavel){
    variavel=variavel.replace(/\D/g,"")//remove caracteres não numericos
    variavel=variavel.replace(/(\d{2})(\d)/,"$1.$2") 
    variavel=variavel.replace(/(\d{3})(\d)/,"$1-$2") 
    return variavel
}

function cartaosus(variavel){
    variavel=variavel.replace(/\D/g,"")
    variavel=variavel.replace(/(\d{6})(\d)/,"$1-$2") 
    return variavel
}

function data(variavel){
    variavel=variavel.replace(/\D/g,"")//remove caracteres não numericos
    variavel=variavel.replace(/(\d{2})(\d)/,"$1/$2") 
    variavel=variavel.replace(/(\d{2})(\d)/,"$1/$2") 
    return variavel
}