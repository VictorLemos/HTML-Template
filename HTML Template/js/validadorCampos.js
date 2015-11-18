function validaCampos(){
		var erro = document.getElementById("erro");
		
		var nome = document.getElementById("nome");
		if (nome.value == ""){
			erro.innerHTML = "O nome não pode ser vazio";
			return false;
		}
		
		var senha = document.getElementById("senha");
		if (senha.value == ""){
			erro.innerHTML = "A senha não pode ser vazia";
			return false;
		}
		
		var cSenha = document.getElementById("cSenha");
		if (cSenha.value == ""){
			erro.innerHTML = "A confimação da senha não pode ser vazia";
			return false;
		}
		
		var dtNasc = document.getElementById("dtNasc");
		if (dtNasc.value == ""){
			erro.innerHTML = "A data de nascimento não pode ser vazia";
			return false;
		}
		
		var masc = document.getElementById("masc");
		var fem = document.getElementById("fem");
		// Valida se o usuário escolheu um sexo
		if (masc.checked == false && fem.checked == false){
			erro.innerHTML = "Selecione o seu sexo";
			return false;
		}
		
		//Valida se os campos de senha e confirmação de senha 
		//estão iguais
		if (senha.value != cSenha.value){
			erro.innerHTML = "A senha não confere";
			return false;
		}
		
		//Senha com mínimo de 8 caracteres
		if (senha.value.length < 8){
			erro.innerHTML = "Senha minimo de 8 caracteres";
			return false;
		}
		
		//Estado obrigatório
		var estado = document.getElementById("estado");
		if (estado.value == "Selecione"){
			erro.innerHTML = "Estado é obrigatório";
			return false;
		}
		
		var email = document.getElementById("email");
		if (formatoEmail(email.value)==false){
			erro.innerHTML = "Email inválido";
			return false;
		}
		
		if (formatoData(dtNasc.value)==false){
			erro.innerHTML = "Data inválido";
			return false;
		}
		return true;
	}
	
	function formatoData(valor){
		var padrao = /^((0?[1-9]|[12]\d)\/(0?[1-9]|1[0-2])|30\/(0?[13-9]|1[0-2])|31\/(0?[13578]|1[02]))\/(19|20)?\d{2}$/;
		return padrao.test(valor);	
	}
	
	function formatoEmail(valor){
		var padrao = /^(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([AZa-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zAZ]{2,6}$/;
		return padrao.test(valor);
	}