
function Mostrar(){
	$('#cs').click(function(){ //Criação de Sites
		//oculta
			$('#intro_servicos').hide();
			$('#criacao_perfil').hide();
			$('#manutencao').hide();
			$('#alimentacao').hide();
		//mostra div
		  $('#criacao').show();
		  $('#produtos').show();
		  $('#menu-horizontal').show();
		  
	});
	$('#ms').click(function(){ //Manutenção de Sites
		//oculta
			$('#produtos').hide();
			$('#intro_servicos').hide();
			$('#alimentacao').hide();
			$('#criacao_perfil').hide();
		//mostra div
			$('#criacao').show();
			$('#manutencao').show();
			$('#menu-horizontal').show();
			
	});
	$('#cp').click(function(){ //Criação de Perfis
		//ocuta
			$('#produtos').hide();
			$('#intro_servicos').hide();
			$('#manutencao').hide();
			$('#alimentacao').hide();
		//mostra div
			//mostra div
			$('#criacao').show();
			$('#menu-horizontal').show();
		  	$('#criacao_perfil').show();
			
	});
	$('#ap').click(function(){ //Alimentação de Perfis
		//ocuta
			$('#produtos').hide();
			$('#intro_servicos').hide();
			$('#manutencao').hide();
			$('#criacao_perfil').hide();
		//mostra div
			$('#criacao').show();
			$('#menu-horizontal').show();
		  	$('#alimentacao').show();
			$('#criacao_perfil').hide();
	});
	$('#s').click(function(){ //Serviços
		//ocuta
			$('#criacao').hide();
			
			
		//mostra div
			
		  	$('#intro_servicos').show();
			
	});
	
	//menu horizontal
	$('#csh').click(function(){ //Criação de Sites Horizontal
		//ocuta
			$('#criacao_perfil').hide();
			$('#alimentacao').hide();
			$('#manutencao').hide();
			
			
		//mostra div
			$('#produtos').show();
			
	});
	$('#msh').click(function(){ //Manutenção de Sites Horinzontal
		//ocuta
			$('#criacao_perfil').hide();
			$('#alimentacao').hide();
			$('#produtos').hide();
			
			
		//mostra div
			$('#manutencao').show();
			
	});
	$('#cph').click(function(){ //Criação de Perfis Horizontal
		//ocuta
			$('#manutencao').hide();
			$('#alimentacao').hide();
			$('#produtos').hide();
			
			
		//mostra div
			$('#criacao_perfil').show();
			
	});
	$('#aph').click(function(){ //Manutenção de Perfis Horizontal
		//ocuta
			$('#criacao_perfil').hide();
			$('#manutencao').hide();
			$('#produtos').hide();
			
			
		//mostra div
			$('#alimentacao').show();
			
	});
	
}