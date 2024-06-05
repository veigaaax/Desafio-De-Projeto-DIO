let nomedoheroi = "jovana";
let exp = 0;
let classe= "";


while (exp < 10000){

if ( exp < 1000){
  classe = "ferro";
    
} else if (exp >= 1001 && exp <= 2000){
    classe = "bronze";

} else if (exp >= 2001 && exp <= 5000){
    classe = "prata";

} else if (exp >= 5001 && exp <= 7000){
    classe = "ouro";

} else if (exp >= 7001 && exp <= 8000){
    classe = "Platina";

} else if (exp >= 8001 && exp <= 9000){
    classe = "Ascendente";

} else if (exp >= 9001 && exp <= 10000){
    classe = "Imortal";

} else if (exp >=10001){
    classe = "Radiante";
   
}

exp += 500;
}

console.log("O Herói com o nome de  " + nomedoheroi + " está no nível de " + classe);