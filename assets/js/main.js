// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const inputPeso = e.target.querySelector('#peso');
	const inputAltura = e.target.querySelector('#altura');

	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);

	if (!peso) {
		setResultado('Peso inválido', false);
		return;
	}

	if (!altura) {
		setResultado('Altura inválida', false);
		return;
	}

	const imc = getImc(peso, altura);
	const nivelImc = getNivelImc(imc);

	const msg = `Seu IMC é ${imc} (${nivelImc}).`;

	setResultado(msg, true);
});

