let produtos;
let x = 0;


document.addEventListener("DOMContentLoaded", function () {
    fetch("../Dados/show.json")
      .then((response) => response.json())
      .then((data) => {
        produtos = data;
        for (let i = 0; i < produtos.length; i++) {
            let p1 = document.getElementById(`produto${i}`);
            let b = document.getElementById(`ball${i}`);
            p1.textContent = produtos[i].descricao;
            console.log(`${i}`)
            let status = produtos[i].status
            if (status == true) {
                b.classList.add("true")
                b.classList.remove("false")
            }
            else{
                b.classList.add("false")
                b.classList.remove("true")
            }
        }
        
    });
  });