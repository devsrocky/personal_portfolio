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

