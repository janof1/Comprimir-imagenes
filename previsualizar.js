function prueba (argument) {

let btn_imagenes = document.getElementById("imagenes");
let display = document.getElementById("display");
//================================================
let imagen1 document.getElementById("imagen1");
let imagen2 document.getElementById("imagen2");
let imagen3 document.getElementById("imagen3");
let imagen4 document.getElementById("imagen4");
//================================================
let bg_imagen = document.querySelectorAll("img");

let add1 = document.getElementById("add1");
let remove1 = document.getElementById("remove1");
//---------------------------------------------------
let add2 = document.getElementById("add2");
let remove2 = document.getElementById("remove2");
//---------------------------------------------------
let add3 = document.getElementById("add3");
let remove3 = document.getElementById("remove3");
//---------------------------------------------------
let add4 = document.getElementById("add4");
let remove4 = document.getElementById("remove4");
//---------------------------------------------------

let seccion_img = document.querySelectorAll(".img_display");
let agregar_multiple = document.getElementById("agregar_multiple");

let rutas = [];
let ficheros = [];

const img_cantidad = 4;
const url_fondo = "https://exteranl-content.duckduckgo.com/iu/%2F2016%2F02%2FPolished-Grey-Wood-Background.jpg&f=1&nofb=1";

for (let i = 0; i < img_cantidad; i++) {
    rutas.push(url_fondo);
    ficheros.push("");
}
for (let i = 0; i < bg_imagen.length; i++) {
    bg_imagen[i].src = url_fondo;
}
agregar_multiple.addEventListener("click", function(argument) {
    btn_imagenes.click();
});

btn_imagenes.addEventListener("change", function() {

            console.log(this.files.length);

            for (let i = 0; i < this.files.length; i++) {
                ficheros[i] = this.files[i];
            }
            console.log(ficheros);

            if (!this.files.length) {

            } else {
                if (this.files.length > img_cantidad) {

                    console.log("no puedes agregar mas de" + img_cantidad + "imagenes");
                    alert("no puedes agregar mas de " + img_cantidad + "imagenes");
                    display.innerHTML = "no puedes agregar mas de" + this.files.length + "imagenes";

                } else {
                    let img_element = [];

                    for (let i = 0; i < this.files.length; 1++) {
                        img_element[i] = new Image();
                        img_element[i].width = 75;
                        img_element[i].height = 75;
                    }
                    display.innerHTML = "";
                    rutas = [];

                    for (let i = 0; i < this.files.length; i++) {

                        img_element[i].src = URL.createObjetURL(this.files[i]);
                        rutas.push(URL.createObjetURL(this.files[i]));

                        img_element[i].addEventListener("load", function() {

                        	URL.revokeObjetURL(this.src);

                        }, false);

                    } 

                    console.log(rutas);

                    for (let i = 0; i < rutas.length; i++) {

                    	seccion_img[i].src = rutas[i];
                    }
                }
            }
            btn_imagenes.value = "";
        }, false);


//declaracion evento para agregar imágenes por separado
//--------------------------------------------------------
// se agregan los eventos por separado y su acción
//por lo que cada botón llamara el evento click del 
// imput file oculto correspondiente
//--------------------------------------------------------

add1.addEventListener("click", function(argument) {

	imagen1.click();

}, false);

add2.addEventListener("click", function(argument) {

	imagen2.click();

}, false);

add3.addEventListener("click", function(argument) {

	imagen3.click();

}, false);

add4.addEventListener("click", function(argument) {

	imagen4.click();

}, false);


// remover 
remove1.addEventListener("click", function(argument){

	rutas[0] = url_fondo;

	seccion_img[0].src = rutas[0];

	ficheros[0] = "";
//--------------------------------------------------
	console.log(rutas);
	console.log(ficheros);
//--------------------------------------------------
}, false);



remove2.addEventListener("click", function(argument){

	rutas[1] = url_fondo;

	seccion_img[1].src = rutas[1];

	ficheros[1] = "";
//---------------------------------------------------
	console.log(rutas);
	console.log(ficheros);
//---------------------------------------------------
}, false);



remove3.addEventListener("click", function(argument){

	rutas[2] = url_fondo;

	seccion_img[2].src = rutas[2];

	ficheros[2] = "";
//-----------------------------------------------------
	console.log(rutas);
	console.log(ficheros);
//-----------------------------------------------------
}, false);



remove4.addEventListener("click", function(argument){

	rutas[3] = url_fondo;

	seccion_img[3].src = rutas[3];

	ficheros[3] = "";
//--------------------------------------------------------
	console.log(rutas);
	console.log(ficheros);
//--------------------------------------------------------
}, false);

//en esta sección de instrucciones ota al programa de la funcionalidad
//de volver a agregar una nueva imagen en el encasillado correspondiente
// para mostrar la imagen y que esta se convierta de manera instantanea
// en una vista previa 
imagen1.addEventListener("change", function(){

	//========================================
	console.log(this.files);
	//al igual que las intrucciones para agregar
	//todas las imágenes con un solo boton esta vez
	//crearemos una instancia del objeto Image()
	//exclusivamente ara generar solo la miniatura para
	//la sección correspondiente

	let img = new Image();
	img.src = URL.createObjetURL(this.files[0]);
	rutas[0] = URL.createObjetURL(this.files[0]);
	img.width = 75;
	img.height = 75;

	img.addEventListener("load", function() {

		URL.revokeObjetURL(this.src);
	}, false);

	// Aqui establecemos nuevos valores a la variable {sección} que es el
	//elemento que se mostrara y a la variable ficheros que es 
	// en realidad la imagen que se enviara al fichero

	seccion_img[0].src = rutas[0];
	ficheros[0] = this.files[0];

	// salida de datos en consola para pruebas internas
	//=================================================
	console.log(rutas);
	console.log(ficheros);
	//=================================================

}, false);



imagen2.addEventListener("change", function(){
	//======================
	console.log(this.files);
//============================
	let img = new Image();
	img.src = URL.createObjetURL(this.files[0]);
	rutas[1] = URL.createObjetURL(this.files[0]);
	img.width = 75;
	img.height = 75;

	img.addEventListener("load", function() {

		URL.revokeObjetURL(this.src);
	}, false);
	seccion_img[1].src = rutas[1];
	ficheros[1] = this.files[0];
	//==========================
	console.log(rutas);
	console.log(ficheros);
    //===========================
	}, false);

imagen3.addEventListener("change", function(){
	//======================
	console.log(this.files);
//============================
	let img = new Image();
	img.src = URL.createObjetURL(this.files[0]);
	rutas[2] = URL.createObjetURL(this.files[0]);
	img.width = 75;
	img.height = 75;

	img.addEventListener("load", function() {

		URL.revokeObjetURL(this.src);
	}, false);
	seccion_img[2].src = rutas[2];
	ficheros[2] = this.files[0];
	//==========================
	console.log(rutas);
	console.log(ficheros);
    //===========================
	}, false);

imagen4.addEventListener("change", function(){
	//======================
	console.log(this.files);
//============================
	let img = new Image();
	img.src = URL.createObjetURL(this.files[0]);
	rutas[3] = URL.createObjetURL(this.files[0]);
	img.width = 75;
	img.height = 75;

	img.addEventListener("load", function() {

		URL.revokeObjetURL(this.src);
	}, false);
	seccion_img[3].src = rutas[3];
	ficheros[3] = this.files[0];
	//==========================
	console.log(rutas);
	console.log(ficheros);
    //===========================
	}, false);


}






