var humBargner = document.querySelector('.humbarger');
var line =  document.querySelectorAll('.line');
var navi = document.querySelector('.nav_menu');
var soci = document.querySelector('.social');

line.forEach(function(damn){
    humBargner.addEventListener('click', function() {
        damn.classList.toggle('active')
        navi.classList.toggle('active')
        soci.classList.toggle('active')
    })
})

/*--- Popup ---*/
let showPop = document.querySelector('.cv_pop');
let btnPop= document.getElementById('showCV');
let closePop = document.querySelector('.close');
let body     = document.querySelector('body')

btnPop.addEventListener('click', function() {
    showPop.classList.add('active');
    body.classList.add('active')
})
closePop.addEventListener('click', function() {
    showPop.classList.remove('active')
    body.classList.remove('active')
})

