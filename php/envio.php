<?php
	
	$destino="nangie.infor@gmail.com";
	$nome=$_POST["nome"];
	$email=$_POST["email"];
	$telefone=$_POST["telefone"];
	$assunto=$_POST["assunto"];
	$mensagem=$_POST["mensagem"];
	$conteudo="Nome: ".$nome."\nEmail: ".$email."\nTelefone: ".$telefone."\nMensagem: ".$mensagem."\n";
	mail($destino, $assunto, $conteudo);
	
	header("Location:enviada.php");
?>