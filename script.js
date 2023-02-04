const textarea = document.querySelector('.textarea');
const input = document.querySelector('.input');
const boton = document.querySelector('.boton');
const opciones = document.querySelector('.opciones');
const contenedor = document.querySelector('.container');
const resultado = document.querySelector('.resultado');
const msjResultado = document.querySelector('.mensaje-resultado');

const palabras = [  "perro",  "gato",  "casa",  "sol",  "mesa",  "silla",  "telefono",  "computadora",  "libro",  "planta",  "ventana",  "puerta",  
 "reloj",  "agua",  "taza",  "plato",  "cuchillo",  "tenedor",  "cuchara",  "auto",  "bicicleta",  "pajaro",  "flor",  "arbol",  "mar",  "cielo", 
 "nube",  "pastel",  "helado",  "pan",  "leche",  "queso",  "pescado",  "carne",  "pollo",  "manzana",  "banano",  "naranja",  "sandia",  "fresa",  
 "uva",  "rojo",  "verde",  "azul",  "amarillo",  "blanco",  "negro",  "gris",  "rosa",  "lila",  "marron",  "beige",  "persona",  "familia",  "amigo",  
 "enemigo",  "amor",  "odio",  "felicidad",  "tristeza",  "alegria",  "ira",  "escuela",  "universidad",  "trabajo",  "dinero",  "tienda",  "supermercado",  
 "hospital",  "farmacia",  "parque",  "playa",  "montana",  "lago",  "rios",  "musica",  "cine",  "teatro",  "arte",  "literatura",  "historia",  "geografia",  
 "biologia",    "anatomia", "arquitectura", "astronomia", "biologia", "botanica", "cantar", "celula", "componer", "craneo", "cuento", "descripcion", 
 "dibujar", "diferencial", "difundir", "digestion", "dinamica", "discusion", "divertido", "economia", "educacion", "efervescencia", "electronica", 
 "elemento", "elipsis", "enciclopedia", "entrevista", "equilibrio", "escena", "escepticismo", "especialidad", "espontaneo", "estadistica", "estilo", 
 "etica", "evolucion", "exclamacion", "existir", "experimento", "fascinante", "filosofia", "fisionomia", "fisiopatologia", "floricultura", "fotografia", 
 "friccion", "funcion", "gastronomia", "genetica", "geologia", "gramatica", "gravedad", "hemisferio", "herbario", "historia", "humanidades", "ideologia",
 "impulso", "incendio", "inmortal", "inspiracion", "intelectual", "interaccion", "internet", "investigacion", "jardineria", "kiosco", "labio", "lectura",
 "legislacion", "lejano", "letra", "linguistica", "literatura", "logistica", "luminosidad", "magia", "magnitud", "maquillaje", "matematicas", 
 "meditacion", "memoria", "metafisica", "microscopio", "mitologia", "museo", "naturaleza", "nebulosa", "necesidad", "neurologia", "noticia", "nutricion", 
 "objeto", "observacion", "olvido", "organizacion", "paz", "percepcion", "perfeccion", "periodico","perspectiva", "pintura",  "fisica",  "quimica"];

const btn20 = document.querySelector('.veinteSec');
const btn40 = document.querySelector('.cuarentaSec');
const btnVolver = document.querySelector('.volver');

const puntos = document.querySelector('.puntos');
const timeDisplay = document.getElementById("time");

let cantidadCaracteres = 0;

let time= 20;

btn20.addEventListener('click',(e)=>{
  time = 20;
  timeDisplay.innerHTML = time;
  btn20.classList.add('selected');
  btn40.classList.remove('selected');
  
})

btn40.addEventListener('click',(e)=>{
  time = 40;
  timeDisplay.innerHTML = time;
  btn40.classList.add('selected');
  btn20.classList.remove('selected');
})

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let intervalId;


function getRandomWord(palabras) {
  return palabras[Math.floor(Math.random() * palabras.length)]
};


startBtn.addEventListener("click", function() {
    cantidadCaracteres = 0;
    input.value = '';  
    textarea.value = '';
    textarea.value = getRandomWord(palabras);
    input.focus();
    puntos.innerHTML = 0;  
    intervalId = setInterval(function() {
    time--;
    timeDisplay.innerHTML = time;
    }, 1000);
    
    opciones.classList.add('oculto');    

    });


const comparar = ()=>{
        if (time > 0) {
          if (textarea.value.toLowerCase()==input.value.toLowerCase()) {
            cantidadCaracteres += textarea.value.length;
            textarea.value = getRandomWord(palabras);
            input.value = '';
            puntos.innerHTML = parseInt(puntos.innerHTML) + 1;
            
          }   
        } else {
          clearInterval(intervalId);
          time = 0;
          opciones.classList.remove('oculto');
          var res = `Completaste un total de: ${puntos.innerHTML} palabras <br> 
                      con ${cantidadCaracteres} caracteres correctos`;
          resultado.classList.remove('oculto');
          msjResultado.innerHTML = res;
        }      
         
        
}
    
btnVolver.addEventListener('click', (e)=>{
  resultado.classList.add('oculto');
  opciones.classList.remove('oculto');
})



input.addEventListener("keyup",(e)=>{
    comparar();
})



