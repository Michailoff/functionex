var number = parseInt(prompt("Digite um valor"));

function positive(number){

	if(number > 0) {
       return document.body.append("Positivo");
   }
     else(number < 0)
       return document.body.append("Negativo");
    }

positive(number)