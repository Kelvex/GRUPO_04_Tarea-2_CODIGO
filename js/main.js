//Animación
function myMove() {
  let id = null;
  const elem = document.getElementById("cuadro");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 275) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}
//Eventos
function displayDate() {
  document.getElementById("ejem1").innerHTML = Date();
}

function changeText(id) {
  id.innerHTML = "Es importante utilizar eventos para una mejor experiencia del usuario";
}

function mOver(obj) {
  obj.innerHTML = "el usuario pasa el mouse por encima o fuera de un elemento HTML"
}

function mOut(obj) {
  obj.innerHTML = "Se pueden usar para activar una función cuando"
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Primero, cuando se hace clic en un botón del mouse, se activa el evento onmousedown, luego, cuando se suelta el botón del mouse, se activa el evento onmouseup.";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="Finalmente, cuando se completa el clic del mouse, se activa el evento onclick.";
}

//EventListener
//Ejemplo 1
document.getElementById("myBtn222").addEventListener("click", function() {
  alert("Hello World!");
});
//Ejemplo 2
var x = document.getElementById("myBtn33");
x.addEventListener("mouseover", myFunction22);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction22() {
  document.getElementById("demo33").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo33").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo33").innerHTML += "Moused out!<br>";
}
//Ejemplo 3
let p1 = 5;
let p2 = 7;
document.getElementById("myBtn2").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  document.getElementById("demo2").innerHTML = a * b;
}
//Ejemplo 4
document.getElementById("myP1").addEventListener("click", function() {
  alert("¡Hiciste clic en el elemento blanco!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function() {
  alert("¡Hiciste clic en el elemento gris!");
}, false);

//Navegación y Nodos
function verbody(){
	document.getElementById("nodoraiz").innerHTML = document.body.innerHTML;
}
function copiarh(){
	document.getElementById("id12").innerHTML = "Texto copiado: "+"<br>"+document.getElementById("id11").innerHTML;
}
function verNombreNodo(){
	document.getElementById("navid02").innerHTML = "El tipo es: "+document.getElementById("navid01").nodeName;
}
function removerElemento() {
	document.getElementById("removep1").remove();
}
function removerElemento2(){
	const nodosecuparent = document.getElementById("nodosecudiv1");
	const nodosecuchild = document.getElementById("nodosecup1");
	nodosecuparent.removeChild(nodosecuchild);
}
function reemplazarElemento(){
	const reempparent = document.getElementById("reempdiv1");
	const reempchild = document.getElementById("reempp1");
	const reemppara = document.createElement("p");
	const reempnode = document.createTextNode("Esto es nuevo");
	reemppara.appendChild(reempnode);
	reempparent.replaceChild(reemppara,reempchild);
}
function agregarElemento(){
	const para = document.createElement("p");
	const node = document.createTextNode("Esto es nuevo");
	para.appendChild(node);
	const element = document.getElementById("nodediv1");
	element.appendChild(para);
}
function agregarElemento2(){
	const insertBepara = document.createElement("p");
	const insertBenode = document.createTextNode("Esto es nuevo");
	insertBepara.appendChild(insertBenode);
	const insertBeelement = document.getElementById("insertBediv1");
	const insertBechild = document.getElementById("insertBep1");
	insertBeelement.insertBefore(insertBepara,insertBechild);
}
//Lista de Nodos
function nodeIngreso() {
	const elemento2 = document.getElementById("ejemploNodeList");
	const indice2 = document.getElementById("idIndice2").value;
	const nodeListEj = elemento2.querySelectorAll("p");
	if (indice2 >= 0 && indice2 <= 2) {
		document.getElementById("ejemplo3").innerHTML = "<br> El texto del párrafo (índice " + indice2 + ") es: " + nodeListEj[indice2].innerHTML;
	} else {
		document.getElementById("ejemplo3").innerHTML = "<br> Párrafo (índice " + indice2 + ") no existe!!";
	}						
}
function cambioColor() {
	const parrafos1 = document.getElementById("ejemploNodeList2");
	const miNodeList = parrafos1.getElementsByTagName("p");
	for (let i = 0; i < miNodeList.length; i++) {
		miNodeList[i].style.color = "green";
	}
	document.getElementById("ejemplo4").innerHTML = 'El número de párrafos es: ' + miNodeList.length;
}
function normalColor() {
	const parrafos1 = document.getElementById("ejemploNodeList2");
	const miNodeList = parrafos1.getElementsByTagName("p");
	for (let i = 0; i < miNodeList.length; i++) {
		miNodeList[i].style.color = "";
	}
}
//Colecciones
function coleccion() {
	const elemento = document.getElementById("ejemploCollections");
	const indice = document.getElementById("idIndice").value;
	const coleccion = elemento.getElementsByTagName("p");
	if (indice >= 0 && indice <= 2) {
		document.getElementById("ejemplo1").innerHTML = "<br> El texto del párrafo (índice " + indice + ") es: " + coleccion[indice].innerHTML;
	} else {
		document.getElementById("ejemplo1").innerHTML = "<br> Párrafo (índice " + indice + ") no existe!!";
	}						
}
function colorCambio() {
	const parrafos = document.getElementById("ejemploCollections2");
	const miColeccion = parrafos.getElementsByTagName("p");
	for (let i = 0; i < miColeccion.length; i++) {
		miColeccion[i].style.color = "red";
	}
}
function colorNormal() {
	const parrafos = document.getElementById("ejemploCollections2");
	const miColeccion = parrafos.getElementsByTagName("p");
	for (let i = 0; i < miColeccion.length; i++) {
		miColeccion[i].style.color = "";
	}
}