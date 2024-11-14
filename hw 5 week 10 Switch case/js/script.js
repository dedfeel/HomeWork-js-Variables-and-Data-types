let san1 = +prompt("Birinshi sandy engiz")
let san2 = +prompt("ekinshi sandy engiz")
let san3 = +prompt("ushinshi sandy engiz")

let big;

switch(true){
    case san1 >= san2 && san1 >= san3:
        alert("en ulken san:" + san1)
        break;
    case san2 >= san1 && san2 >= san3:
        alert("en ulken san:" + san2)
        break;  
    case san3 >= san2 && san3 >= san1:
        alert("en ulken san:" + san3)
        break; 
    default:
        alert("siz qate zhazdynyz")      
}







// Тапсырма: Ең үлкен санды анықтау
//   Пайдаланушыдан үш сан енгізуді сұраңыз және олардың қайсысы ең үлкен екенін анықтаңыз. Осы санды экранға шығарыңыз.
// Мысалы, егер енгізілген сандар 5, 8 және 3 болса, нәтиже ретінде "Ең үлкен сан: 8" деп шығуы керек.
// Бұл тапсырманы JavaScript тілінде switch операторын қолдана отырып жасаңыз.