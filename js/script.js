document.querySelector(".box__btn").addEventListener("click", function(){
  var ekran = document.querySelector(".box__ekran");
  console.log(typeof parseInt(ekran.value));
  ekran.value = parseInt(ekran.value) + 1;
});

document.querySelector(".box__btn-clear").addEventListener("click",function(){
  document.querySelector(".box__ekran").value = 0;
});



