//crear variables
var jugadas = prompt('Indique cuantas veces desea jugar en esta partida');
var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["piedra", "papel", "tijera"];
var i = 1;
// ciclo for para cantidad de juegos
for (i = 1; i <= jugadas; i++)
// do para entrar al ciclo
do  
    { 
    var opcionUsuario = prompt("indique una opcion: \n¿piedra?: 0, \n¿papel?: 1  \n¿tijera?: 2", 1);    
    var opcionMaquina = Math.floor(Math.random()*3);
    alert("Elegiste " + opciones[opcionUsuario]);
    alert("La Maquina eligio " + opciones[opcionMaquina]);
    i++ ;
// if comparar opcion usuario con la opcion mathrandom    
if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        alert("EMPATE!");
    }
    else if(opcionMaquina == papel)
    {
        alert("HAS PERDIDO!!!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("HAS GANADO!!!");
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        alert("HAS GANADO!!!");
    }
    else if(opcionMaquina == papel)
    {
        alert("EMPATE!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("HAS PERDIDO!!!!");
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        alert("HAS PERDIDO!!!");
    }
    else if(opcionMaquina == papel)
    {
        alert("HAS GANADO!!!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("EMPATE!");
    }
}
//while se repite segun el numero de jugadas indicadas
} 
    while (i <= jugadas)
