let num = +prompt("qai kursta okisyz: 1/2/3/4")
let city =  prompt(" Kelgen zheriniz, Almaty ma? yes/no")

if((num == 1 || num == 2 && city == "no" )){
  alert("Quttyqtaimyz, sizge zhatahanadan oryn berildi")
}else{
  alert("sizge zhatahanadan oryn berilmeidi")
}




// 2)

alert(" Oiyn sharty: durys zhauap bergen ar surakka 1 bal beriledi")


let zhyl = prompt("Qazaqstan tauelsizdigin qashan aldy")
let qala = prompt("Qazir qai qalada okyp zhatyrsyz ? (Almaty +1 / basqasy -1)")


if(zhyl == 1991 && qala == "Almaty"){
    alert("sizde 2 upai")
}else if(zhyl==1991){
  alert("sizde 1 upai")
}else if(qala == "Almaty"){
  alert("sizde 1 upai")
}else{
  alert("sizde 0 upai")
}




// Ойын шартын хабарлау:
// Алдымен, alert арқылы ойынның шартын көрсетеді: әрбір дұрыс жауап үшін 1 ұпай беріледі.
//     Сұрақтар қою:
// Бірінші сұрақ: Қазақстанның тәуелсіздік алған жылы. Жауап surak1 айнымалысына сақталады.
// Екінші сұрақ: Қазір оқып жатқан қаласы. Жауап surak2 айнымалысына сақталады.
//     Жауаптарды тексеру және ұпай қосу:
// Егер surak1 айнымалысында енгізілген жауап 1991 болса, score айнымалысына +1 ұпай қосылады.
// Егер surak2 айнымалысында енгізілген жауап "Almaty" болса, тағы +1 ұпай қосылады.
//    Жинаған ұпайды көрсету:
// Соңында, студенттің жинаған ұпайын alert арқылы көрсетеді.