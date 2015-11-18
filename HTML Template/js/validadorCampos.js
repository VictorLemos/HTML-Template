function validaCampos(){
		var erro = document.getElementById("erro");
		
		var nome = document.getElementById("nome");
		if (nome.value == ""){
			erro.innerHTML = "O nome n�o pode ser vazio";
			return false;
		}
		
		var senha = document.getElementById("senha");
		if (senha.value == ""){
			erro.innerHTML = "A senha n�o pode ser vazia";
			return false;
		}
		
		var cSenha = document.getElementById("cSenha");
		if (cSenha.value == ""){
			erro.innerHTML = "A confima��o da senha n�o pode ser vazia";
			return false;
		}
		
		var dtNasc = document.getElementById("dtNasc");
		if (dtNasc.value == ""){
			erro.innerHTML = "A data de nascimento n�o pode ser vazia";
			return false;
		}
		
		var masc = document.getElementById("masc");
		var fem = document.getElementById("fem");
		// Valida se o usu�rio escolheu um sexo
		if (masc.checked == false && fem.checked == false){
			erro.innerHTML = "Selecione o seu sexo";
			return false;
		}
		
		//Valida se os campos de senha e confirma��o de senha 
		//est�o iguais
		if (senha.value != cSenha.value){
			erro.innerHTML = "A senha n�o confere";
			return false;
		}
		
		//Senha com m�nimo de 8 caracteres
		if (senha.value.length < 8){
			erro.innerHTML = "Senha minimo de 8 caracteres";
			return false;
		}
		
		//Estado obrigat�rio
		var estado = document.getElementById("estado");
		if (estado.value == "Selecione"){
			erro.innerHTML = "Estado � obrigat�rio";
			return false;
		}
		
		var email = document.getElementById("email");
		if (formatoEmail(email.value)==false){
			erro.innerHTML = "Email inv�lido";
			return false;
		}
		
		if (formatoData(dtNasc.value)==false){
			erro.innerHTML = "Data inv�lido";
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