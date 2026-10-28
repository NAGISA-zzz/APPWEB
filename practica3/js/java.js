
function toroE() {
    var arregloe = new Array(5);
    var e = '';

    for (let i = 0; i < 5; i++) {
        arregloe[i] = new Array(5);

        for (let j = 0; j < 5; j++) {
            if (i == 0 || i == 2 || i == 4 || j == 0) {
                e += '<div style="display:inline-block; width:50px; height:50px; background-color:pink; text-align:center; line-height:50px;">X</div>';
            } else {
                e += '<div style="display:inline-block; width:50px; height:50px;"></div>';
            }
        }
        e += '<br>';
    }
    document.getElementById("BI").innerHTML = e;
}




function alumnos() {
    var alumnos = new Array(10);

    for (let i = 0; i < 10; i++) {
        alumnos[i] = prompt("Ingresa el nombre del alumno " + (i + 1));
    }

    var texto = "<h1>Arreglo inicial</h1>";

    alumnos.forEach(function(nombre) {
        texto += nombre + "<br>";
    });

    var eliminar = prompt("Nombre del alumno para eliminar");
    var posicion = alumnos.indexOf(eliminar);

    if (posicion != -1) {
        alumnos.splice(posicion, 1);
    }

    texto += '<div><h1>Arreglo final</h1></div>';

    alumnos.forEach(function(nombre) {
        texto += nombre + "<br>";
    });

    document.getElementById("BI").innerHTML = texto;
}



function salarios() {
    var sueldos = [
        [120, 180, 280],
        [120, 280, 340],
        [240, 520, 890]
    ];

    var puesto = document.getElementById("puesto").value;
    var nivel = document.getElementById("nivel").value;
    var horas = document.getElementById("horas").value;

    var sueldo = sueldos[puesto][nivel];
    var total = sueldo * horas;

    document.getElementById("total").innerHTML =
        "Total: $" + total;
}

