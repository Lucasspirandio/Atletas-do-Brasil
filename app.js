function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum atleta encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let título = "";
    let descrição = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados){
        título = dado.título.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
         //se o título includes campoPesquisa
        if(título.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa))
            {//cria um novo elemento 
            resultados += `
            <div class="item-resultado">
             <h2>
             <a href="#" target="_blank">${dado.título}</
             a> </h2>
             <p class="descrição-meta">${dado.descrição}</p>
             <a href=${dado.link} target="_blank">Mais informações</a> </div>
             `;}
            }
  if (!resultados) {
      resultados = "<p>Nada foi encontrado<p/>"
  }

   // Atualiza o conteúdo HTML da seção com os resultados construídos
section.innerHTML = resultados;    
           }
