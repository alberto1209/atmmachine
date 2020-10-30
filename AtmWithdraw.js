//array of the bills´s images 
var imagenes = [];
imagenes["doscientos"] = "200 soles.png"
imagenes["cien"] = "100 soles.png"
imagenes["cincuenta"] = "50 soles.png"
imagenes["veinte"] = "20 soles.png"
imagenes["diez"] = "10 soles.png"
//class billetes describes the bills, their value and quantity.
class billetes
{
    constructor (v,q,n) {
        this.value = v;
        this.quantity = q;
        this.name = n;
        this.image = new Image();
        this.image.src = imagenes[this.name];
    }
}
//function that contains all the algorithm.
function billsOut()
{
    //texto is the variable that contains the html elememet texto_lineas, which used to get input from the user
    var texto = document.getElementById("texto_lineas");
    montoRequerido = parseInt(texto.value);
    for (var b of billetesDenomination)
    {
        if (montoRequerido>0)
        {
            división = Math.floor(montoRequerido/b.value);
            if(división>b.quantity)
            {
                papeles = b.quantity;
            }
            else 
            {
                papeles = división;
            } 
            entregado.push(new billetes(b.value,papeles));
            montoRequerido = montoRequerido - (b.value * papeles);
            b.quantity = b.quantity - papeles;
        }
    }
    
    //print the number of bills that are going to be withdrawn
    if (montoRequerido>0)
    {
        r.innerHTML = "Soy un cajero misio";
    }
    else 
    {
        
        for (var e of entregado)
        {
            if(e.quantity>0)
            {
                resultado.innerHTML += e.cantidad + " billetes de " + e.mostrar();
            }
        }
    }
} 
function mostrar()
{
    document.body.appendChild(this.image);
}
//billetesDenomination is the array that contains all the bills expended
var billetesDenomination = [];
billetesDenomination.push(new billetes(200, 4, "doscientos"));
billetesDenomination.push(new billetes(100, 4, "cien"));
billetesDenomination.push(new billetes(50, 4, "cincuenta"));
billetesDenomination.push(new billetes(20, 4, "veinte"));
billetesDenomination.push(new billetes(10, 4, "diez")); 
var entregado = [];
var montoRequerido = 0;
var papeles = 0;
var división = 0;
// the variable r contains the html element "resultado", which is used as a paragraph to print the number of bills expended
var r = document.getElementById("resultado");
// the variable extraer contains the html element "botoncito", which is used as a button 
var extraer = document.getElementById("botoncito");
// we add to the variable extraer an eventlistener to interact with the user, when he clicks the button, the function "billOut" runs.
extraer.addEventListener("click", billsOut);