const barra = document.getElementById("barraPesquisa");

const resultado = document.getElementById("resultadoPesquisa");

barra.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        let texto = barra.value.toLowerCase().trim();

        if(texto === "regra numero 1" || texto === "regra número 1"){

            window.location.href = "Regra1.html";

        }else{

            resultado.innerHTML = "Se lembre da Regra número 1.";

            resultado.style.display = "block";

        }

    }

});