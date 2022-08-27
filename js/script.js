var ekran = document.querySelector(".box__ekran");
let displayTitle = document.querySelector(".display__title")

document.querySelector(".box__btn").addEventListener("click", function(){
  
  ekran.value = parseInt(ekran.value) + 1;
  count()
});
function count(){
  let ekranValue = ekran.value
  if (ekranValue <=33 ){
    displayTitle.innerHTML = "subhanallah"
  }
  if (ekranValue >=33 && ekranValue <= 66 ){
    displayTitle.innerHTML = "elhamdülillah"
  }
  if (ekranValue >=66 && ekranValue <=99 ){
    displayTitle.innerHTML = "Allahu Ekber"
  }
  if (ekranValue == 100){
    displayTitle.innerHTML="";
    ekran.value = 0;
  }
}
document.querySelector(".box__btn-clear").addEventListener("click",function(){
  let name1 = ekran.value;
  name1.value = 0;
  displayTitle.innerHTML=""
});



