// seu código aqui
let input = document.querySelector("campoBuscaPorNome");
let button = document.querySelector(
  "estiloGeralBotoes estiloGeralBotoes--filter"
);

let button2 = document.querySelector(
  "estiloGeralBotoes estiloGeralBotoes--botaoBuscaPorNome"
);
let ulP = document.querySelector(".listaProdutos")

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

function gerador(produtos) {
  let ul = document.querySelector(".listaProdutos");
  for (let i = 0; i < produtos.length; i++) {
    let objeto = produtos[i];
    let objeto2 = criarListas(objeto);
    ul.append(objeto2);    
  }
}

gerador(produtos);

let section = document.querySelector(".filtersContainer");
button.addEventListener("click", filtroDeProdutos);


function filtroDeProdutos(event) {
  let clicar = event.target;
  if(clicar.id == "todosProdutos"){
    ulP.innerHTML = " "
    gerador(produtos)   
  
  }
  else if(clicar.id == "fruta"){
    let newArr = [];
    produtos.forEach(element => {      
      if(element.categoria == "fruta"){  
        newArr.push(element)
        console.log(newArr)
        gerador(newArr)
      }
    })  
  }
}

filtroDeProdutos()
