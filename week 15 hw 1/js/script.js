let taqyrypAty = document.querySelector('#taqyryp')
taqyrypAty.textContent = 'HW: Introduction to DOM'

let aty = document.getElementById('Esim')
aty.textContent = 'Berik Aziz'

let hobbies = document.getElementsByClassName('hobbyes');

hobbies[0].innerHTML = '<b>Coding</b>'
hobbies[1].innerHTML = '<b>Teaching</b>'
hobbies[2].innerHTML = '<b>Reading</b>'




// 1-тапсырма:
// Тақырыпты id беру арқылы нұсқаулық суреті бойынша дайындаңыз.
// querySelector әдісін қолданып, оның ішіндегі мазмұнын "Homework Day1 DOM" мәнінен "HW: Introduction to DOM" мәніне өзгертіңіз.
// 2-тапсырма(getElementById әдісін қолданыңыз)
// Аты-жөніңіз жазылатын элементін табыңыз.
// Оның мазмұнын "Ozinidin tolyq aty-jonynyz" деген бастапқы мәнінен өзіңіздің аты-жөніңізге ауыстырыңыз.
// 3-тапсырма
// Барлық хобби элементтері тізім ретінде нұсқаулық бойынша дайындаңыз
// Әр хобби элементін getElementsByClassName арқылы тауып, олардың мазмұнын нақты хоббиларыңызбен ауыстырыңыз.
// Мысалы
// Бірінші элемент: Coding
// Екінші элемент: Teaching
// Үшінші элемент: Reading
// Әр хобби мәтінін <b> тегін қолданып қалыңдатуды ұмытпаңыз.
// ЕСКЕРТУ!
// textContent тек элементтің мәтінін өзгертеді, ал  innerHTML элементтің ішіндегі мазмұнды тэгтерімен қоса өзгертуге мүмкіндік береді.