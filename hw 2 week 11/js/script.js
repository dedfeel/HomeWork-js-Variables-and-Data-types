let aty = prompt("Atynyzdu zhazynyz")
let tili = prompt("Qai tilde soileisiz (English, Russian,Kazakh")

if(tili == "English"){
    function language(aty) {
    return `Hello ${aty}!, how are you`
    }
}else if(tili == "Russian"){
    function language(aty) {
    return ` Привет ${aty}, как дела`
    }
}else if(tili =="Kazakh"){
    function language(aty) {
    return ` Салем ${aty}, калайсын`
    }
}else{
    alert(`korsetilgen tildi tandanyz`)
}

alert(language(aty))










    // if(tili == "English"){
    //     console.log(` Hello ${aty}!, how are you`);
    // }else if(tili == "Russian"){
    //     console.log(` Привет ${aty}, как делв`);
        
    // }else if(tili == "Kazakh"){
    //     console.log(` Салем ${aty}, калайсын`);
    // }


// Сіз қолданушыдан Кез келген студент екенін сұрайсыз.
//  Одан соң ол қай тілде сөйлейтінін сұрайсыз. 
// Яғни қазақша, орысша, ағылшынша сынды үш тілдің біреуін жазасыз.
//  Қай тілді жазса сол тілде амандасып қал жағдайын сұрау керек.
//  Әр тілге жеке жеке функция ашасыз жәнеде сәйкесінше енгізілген тілге байланысты сол функцияға жіберіліп отыру керек