//  let san  = prompt("0-99 arasyndagy sandy engiz:")
//  if( san >= 0 && san < 100){
//     alert("birinshi san:" + san +'\n' +  "ekinshi san:" )
//  }else if(san >= 0 && san < 10){
//     alert("birinshi san:" + san)
//  }else{
//     alert("sandy durys zhazbadynyz")
//  }

 let san = prompt("0 мен 99 арасындағы санды енгізіңіз:");
if (san.length == 1) {
    alert("Birinshi san" + san)
}
else if (san.length == 2) {
    alert("Birinshi san:" + san[0]  + '\n' + "ekinshi san:" + san[1])
} else {
    alert(" siz sandy qate terdiniz")
}













//  Қолданушыдан 0 мен 99 арасындағы санды енгізуді сұраңыз. 
//  Егер бір таңбалы сан енгізсе онда сол санды шығарып беріңіз, 
//  ал егер екі таңбалы сан енгізсе онда әрқайсысын жеке жеке шығарып беріңіз.
//  Мысалы 57  деген санды енгізсе онда Бірінші сан 5 ,
//  Екінші сан 7 деп шығару керек, бір таңбалы сан болса 3 болса онда 3 деп шығарыңыз