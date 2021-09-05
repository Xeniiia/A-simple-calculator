function insert(num){
    document.form.pole.value = document.form.pole.value + num; }

function clean(){
    document.form.pole.value = ""; }  

function equal() {
	const exp = document.form.pole.value;
	if (exp){ document.form.pole.value = eval(exp); }
}