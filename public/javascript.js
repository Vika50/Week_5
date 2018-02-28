// Показать/Скрыть сайдбар
function showElement(element_id) {
    if (document.getElementById(element_id)) {
        var elem = document.getElementById(element_id);
        if (elem.style.display!="block") {
            elem.style.display="block";
        }
        else
            elem.style.display="none";
    }
    else
        alert("Элемент с id: " + element_id + " не найден");
}

// Меняем размер шрифта
font_Size.onchange = function fontSize(){
    var result=this.value;
    if (result<=24 && result>=8)
        {
   document.querySelectorAll("p").forEach(function(p) {
    p.style.fontSize = result + 'px';
  });
    document.querySelector("#font_Size").style.fontSize=result + 'px';
        }
    else 
        alert("Некорректные данные, пожалуйста, введите от 8 до 24");
}

// Цвет бекграунда
var color_background;
var defaultColor = "#fff";
window.addEventListener("load", startup, false);
  function startup() {
  color_background = document.querySelector("#color_background");
  color_background.value = defaultColor;
  color_background.addEventListener("input", updateFirst, false);
  color_background.select();
}
    function updateFirst(event) {
   document.body.style.backgroundColor = event.target.value;
}

// Выбор шрифта 
function onclickRadio() {
  var nameRadio = document.getElementsByName('family');
  for (var i = 0; i < nameRadio.length; i++) {
    if (nameRadio[i].type === 'radio' && nameRadio[i].checked) {
       var rezultatRadio = nameRadio[i].value;       
    }
  }
    document.querySelectorAll("p").forEach(function(p) {
    p.style.fontFamily = rezultatRadio;
  });
}

// Удаляем тег p
remove_p.onclick = function(){
    var pp=document.querySelectorAll('.content-left > p:last-child');
    for (var i = 0; i < pp.length; i++) {
    pp[i].remove();
    }
}