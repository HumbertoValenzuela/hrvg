let clickBarra = document.querySelector(".nav__svg-icon");
clickBarra.addEventListener("click", abrirMenu);

function abrirMenu()
{
    var ancla = document.getElementsByClassName('navbar__links');
    // console.log(ancla);
    for (let index = 0; index < ancla.length; index++) {
         let anclando = ancla.item(index);
        //  console.log(ancla.item(index));
         anclando.classList.toggle('desaparece');
          //toggle aparece o coloca la clase desaparece     
        //   ancla.item(index).classList.toggle('desaparece');
        //ancla[index].classList.toggle('desaparece');
    }
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".page-header").style.top = "0";
  } else {
    document.querySelector(".page-header").style.top = "-250px";
  }
  prevScrollpos = currentScrollPos;
}






