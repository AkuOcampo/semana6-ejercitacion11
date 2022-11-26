//Se trata de poner siete case, uno para cada día de la semana. Finalmente, un bloque default para contemplar cualquier cosa no contemplada en los case.Modificarlo para que informe un plan de ejercicios por día.

let diaSemana = prompt("¿Qué día es hoy?");

switch (diaSemana) {
    case "lunes":
        alert("Hoy es lunes, le toca hacer: ABDOMINALES. Vaya a su rutina a esa sección para ver los ejercicios y tiempos");
        break;
    case "martes":
        alert("Hoy es martes, le toca hacer: CAMINATA. Vaya a su rutina a esa sección para ver los ejercicios y tiempos");
        break;
    case "miércoles":
        alert("Hoy es miércoles, le toca hacer: BRAZOS. Vaya a su rutina a esa sección para ver los ejercicios y tiempos");
        break;
    case "jueves":
        alert("Hoy es jueves, le toca hacer: CAMINATA. Vaya a su rutina a esa sección para ver los ejercicios y tiempos");
        break;
    case "viernes":
        alert("Hoy es vierne, le toca hacer: PIERNAS. Vaya a su rutina a esa sección para ver los ejercicios y tiempos");
        break;
    case "sábado":
        alert("Hoy es sábado, le toca hacer: CARDIO. Vaya a su rutina a esa sección para ver los ejercicios y tiempos");
        break;
    case "domingo":
        alert("Hoy es domingo, le toca hacer: DESCANSAR. Vaya a su rutina a esa sección para ver los ejercicios y tiempos");
        break;
    default:
        alert("Escribe el día de la semana en minúsculas.");
}

//El bucle se ejecute de 20 a 70.

for(i=20;i<=70;i++){

document.write("El número es: " + i + "<br>");
}

//Realizar un bucle, donde el usuario pueda determinar la cantidad de veces que aparecerá el saludo ‘Hola Mundo’.

let repeticiones = parseInt(prompt("ingrese cantidad de iteraciones"));

for (i = 0; i < repeticiones; i++) {
  console.log("Hola mundo!");
}
