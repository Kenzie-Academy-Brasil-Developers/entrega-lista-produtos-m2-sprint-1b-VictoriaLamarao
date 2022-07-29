let button = document.querySelector(
  "estiloGeralBotoes estiloGeralBotoes--filter"
);

let ulP = document.querySelector(".listaProdutos");

// função criar lista de produtos
function criarListas(objeto) {
  let titulo = objeto.nome;
  let secao = objeto.secao;
  let price = objeto.preco;
  let category = objeto.category;

  let li = document.createElement("li");
  let image = document.createElement("img");
  let h3 = document.createElement("h3");
  let span = document.createElement("p");
  let p = document.createElement("span");

  image.src = objeto.img;
  h3.innerText = titulo;
  span.innerText = secao;
  p.innerText = `R$ ${price},00`;

  li.append(image, h3, span, p);

  return li;
}

//função para gerar as listas na pagina
function gerador(arr) {
  let ul = document.querySelector(".listaProdutos");
  for (let i = 0; i < arr.length; i++) {
    let objeto = arr[i];
    let objeto2 = criarListas(objeto);
    ul.append(objeto2);
  }
}

gerador(produtos);

// usando eventlistener
//let section = document.querySelector(".filtersContainer");
let divBotoes = document.querySelector("#botoesContainer");
divBotoes.addEventListener("click", filtroDeProdutos);

//função para filtrar os produtos quando clica nos botões
function filtroDeProdutos(event) {
  ulP.innerHTML = " ";
  let clicar = event.target;
  if (clicar.id == "todosProdutos") {
    gerador(produtos);
    somaProdutos(produtos);
  } else if (clicar.id == "fruta") {
    let todosProdutos = produtos.filter((element) => {
      if (element.categoria == "fruta") {
        return element;
      }
    });
    somaProdutos(todosProdutos);
    gerador(todosProdutos);
  } else if (clicar.id == "laticinios") {
    let panific = produtos.filter((element) => {
      if (element.categoria == "Leite") {
        return element;
      }
    });
    somaProdutos(panific);
    gerador(panific);
  } else if (clicar.id == "panificadora") {
    let doce = produtos.filter((element) => {
      if (element.categoria == "doces") {
        return element;
      }
    });
    somaProdutos(doce);
    gerador(doce);
  }
}

// barra de pesquisa
let button2 = document.querySelector(
  "estiloGeralBotoes estiloGeralBotoes--botaoBuscaPorNome"
);
let div = document.querySelector(".containerBuscaPorNome");
let searchInput = document.querySelector("input");
//let newArr = []
addEventListener("keyup", pesquisar);
//const value = e.target.value

function pesquisar() {
  ulP.innerHTML = " ";
  let newArr = []; 
  let texto = searchInput.value.toLowerCase();
  newArr = produtos.filter((x) => {
    if (x.nome.toLowerCase().includes(texto)) {
      return x;
    }
  });

  gerador(newArr);
  somaProdutos(newArr)
  
}


let valor = document.querySelector("span");

function somaProdutos(arr) {
  let resultado = 0;
  for (let i = 0; i < arr.length; i++) {
    resultado += arr[i].preco;
  }
  valor.innerText = `R$ ${resultado},00`;
}
somaProdutos(produtos);
