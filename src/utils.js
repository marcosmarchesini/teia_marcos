
exports.isPalindromo = (palavra) =>{
    //verifica se foi recebido um texto para depois checar se é palimdromo
    if(!palavra){
        return false;
    } else {
        //inverter o texto recebido
        let palavraInvertida = palavra.split("").reverse().join("");
        //verificar se a palavra invertida é igual a palavra recebida
        if(palavra === palavraInvertida){
            console.log("A palavra é palindroma");
            return true;
        }else{
            console.log("A palavra não é palindroma");
            return false;
        }
    }
};

exports.verificarOcorrencia = (palavra) =>{
    //inicializa um objeto vazio para armazenar as ocorrencias de cada caracter da palavra recebida
    let charCount = {};
    //extrai e quantifica cada caracter da palavra recebida e armazena no objeto charCount
    for (let char of palavra) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
