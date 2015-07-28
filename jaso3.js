var num='';
var result ='';

function calculadora(operacion) {
	num = num+operacion;
document.getElementById('inputSuccess').value=num;
alert("valor: "+operacion);

}
function termino(operacion) {
	num = num+operacion; 
document.getElementById('inputSuccess').value=num;
alert("termino: "+num);
}
function solucion(operacion) {
	var result = eval(num) 
document.getElementById('inputSuccess').value=result;
}
function limpiar() {
	num='';
document.getElementById('inputSuccess').value=num;

}
