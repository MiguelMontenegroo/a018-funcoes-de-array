const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//const retornaPropsMaiusculas = (objMaiusculas) => {
 //   For(let chave in objMaiusculas){
   //     objMaiusculas(chave) = chave.toUpperCase()
  //  }
//}

//console.log(retornaPropsMaiusculas(objeto))



const caixaAlta = (meuObjeto) =>{
    meuObjeto.nome = meuObjeto.nome.toUpperCase()
    meuObjeto.profissao = meuObjeto.profissao.toUpperCase()
    meuObjeto.username = meuObjeto.username.toUpperCase()
    meuObjeto.senha = meuObjeto.senha.toUpperCase()

    console.log(meuObjeto)

}

const textoCorr = (meuObjeto) =>{
    let texto = null;
    texto = meuObjeto.nome;
    texto+= meuObjeto.profissao 
    texto+= meuObjeto.username 
    texto+= meuObjeto.senha 
    console.log(texto)


}

const join = (meuObjeto, funcaoCaixaAlta, funcaoTextoCorr) => {
    funcaoCaixaAlta(meuObjeto);
    funcaoTextoCorr(meuObjeto);


}
join(objeto,caixaAlta,textoCorr)









 //const multiplicaComMap = array.map((item, index, array) => {
    //return item * 3
       // })

        //const caixaAlta = objeto.map((item, index, array) => {
         //  return item.toUpperCase
        //})
        //console.log(caixaAlta(objeto))


        //const caixaAlta = (usuario) => {
        //const caixa = usuario
        //return caixa
        //}
        //console.log(caixaAlta(objeto))

        //const caixaAlta = (string) => {
         //   const array = []
          //  for (let i of string){
          //      array.push(i.toUpperCase())
          //  }
          //  return array
        //}
        //console.log(caixaAlta(objeto))