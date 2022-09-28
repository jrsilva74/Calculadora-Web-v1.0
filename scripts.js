	var v1 = "";
	var v2 = "";
	var op = "";
	var op2 = "";
	var oper = "";
	var mem = "";
	var p = 0;
	var quadrada = "";
	var tamanho = "";
	var tamanho2 = "";
  
	//NÚMEROS
	botao0 = () => {
		if(op == "") {
			if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
				document.getElementById("valor").innerText = 0;
				document.getElementById("valor_op").innerText = 0;
			}	
			else {
				document.getElementById("valor").innerText += 0;
				document.getElementById("valor_op").innerText += 0;
			}
		}

		else {
			if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
				document.getElementById("valor").innerText = 0;
				document.getElementById("valor_op").innerText += " " + 0;
			}	
			else {
				document.getElementById("valor").innerText = document.getElementById("valor").innerText += 0;
				document.getElementById("valor_op").innerText += + 0;
			}
		}
		return v1, v2;
		}

	botao1 = () => {
		if(op == "") {
			if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
				document.getElementById("valor").innerText = 1;
				document.getElementById("valor_op").innerText = 1;
			}	
			else {
				document.getElementById("valor").innerText += 1;
				document.getElementById("valor_op").innerText += 1;
			}
		}

		else {
			if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
				document.getElementById("valor").innerText = 1;
				document.getElementById("valor_op").innerText += " " + 1;
			}	
			else {
				document.getElementById("valor").innerText = document.getElementById("valor").innerText += 1;
				document.getElementById("valor_op").innerText += + 1;
			}
		}
		return v1, v2;
		}

		botao2 = () => {
			if(op == "") {
				if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
					document.getElementById("valor").innerText = 2;
					document.getElementById("valor_op").innerText = 2;
				}	
				else {
					document.getElementById("valor").innerText += 2;
					document.getElementById("valor_op").innerText += 2;
				}
			}
	
			else {
				if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
					document.getElementById("valor").innerText = 2;
					document.getElementById("valor_op").innerText += " " + 2;
				}	
				else {
					document.getElementById("valor").innerText = document.getElementById("valor").innerText += 2;
					document.getElementById("valor_op").innerText += + 2;
				}
			}
			return v1, v2;
			}

			botao3 = () => {
				if(op == "") {
					if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
						document.getElementById("valor").innerText = 3;
						document.getElementById("valor_op").innerText = 3;
					}	
					else {
						document.getElementById("valor").innerText += 3;
						document.getElementById("valor_op").innerText += 3;
					}
				}
		
				else {
					if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
						document.getElementById("valor").innerText = 3;
						document.getElementById("valor_op").innerText += " " + 3;
					}	
					else {
						document.getElementById("valor").innerText = document.getElementById("valor").innerText += 3;
						document.getElementById("valor_op").innerText += + 3;
					}
				}
				return v1, v2;
				}

				botao4 = () => {
					if(op == "") {
						if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
							document.getElementById("valor").innerText = 4;
							document.getElementById("valor_op").innerText = 4;
						}	
						else {
							document.getElementById("valor").innerText += 4;
							document.getElementById("valor_op").innerText += 4;
						}
					}
			
					else {
						if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
							document.getElementById("valor").innerText = 4;
							document.getElementById("valor_op").innerText += " " + 4;
						}	
						else {
							document.getElementById("valor").innerText = document.getElementById("valor").innerText += 4;
							document.getElementById("valor_op").innerText += + 4;
						}
					}
					return v1, v2;
					}

					botao5 = () => {
						if(op == "") {
							if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
								document.getElementById("valor").innerText = 5;
								document.getElementById("valor_op").innerText = 5;
							}	
							else {
								document.getElementById("valor").innerText += 5;
								document.getElementById("valor_op").innerText += 5;
							}
						}
				
						else {
							if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
								document.getElementById("valor").innerText = 5;
								document.getElementById("valor_op").innerText += " " + 5;
							}	
							else {
								document.getElementById("valor").innerText = document.getElementById("valor").innerText += 5;
								document.getElementById("valor_op").innerText += + 5;
							}
						}
						return v1, v2;
						}

						botao6 = () => {
							if(op == "") {
								if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
									document.getElementById("valor").innerText = 6;
									document.getElementById("valor_op").innerText = 6;
								}	
								else {
									document.getElementById("valor").innerText += 6;
									document.getElementById("valor_op").innerText += 6;
								}
							}
					
							else {
								if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
									document.getElementById("valor").innerText = 6;
									document.getElementById("valor_op").innerText += " " + 6;
								}	
								else {
									document.getElementById("valor").innerText = document.getElementById("valor").innerText += 6;
									document.getElementById("valor_op").innerText += + 6;
								}
							}
							return v1, v2;
							}

							botao7 = () => {
								if(op == "") {
									if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
										document.getElementById("valor").innerText = 7;
										document.getElementById("valor_op").innerText = 7;
									}	
									else {
										document.getElementById("valor").innerText += 7;
										document.getElementById("valor_op").innerText += 7;
									}
								}
						
								else {
									if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
										document.getElementById("valor").innerText = 7;
										document.getElementById("valor_op").innerText += " " + 7;
									}	
									else {
										document.getElementById("valor").innerText = document.getElementById("valor").innerText += 7;
										document.getElementById("valor_op").innerText += + 7;
									}
								}
								return v1, v2;
								}

								botao8 = () => {
									if(op == "") {
										if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
											document.getElementById("valor").innerText = 8;
											document.getElementById("valor_op").innerText = 8;
										}	
										else {
											document.getElementById("valor").innerText += 8;
											document.getElementById("valor_op").innerText += 8;
										}
									}
							
									else {
										if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
											document.getElementById("valor").innerText = 8;
											document.getElementById("valor_op").innerText += " " + 8;
										}	
										else {
											document.getElementById("valor").innerText = document.getElementById("valor").innerText += 8;
											document.getElementById("valor_op").innerText += + 8;
										}
									}
									return v1, v2;
									}

									botao9 = () => {
										if(op == "") {
											if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
												document.getElementById("valor").innerText = 9;
												document.getElementById("valor_op").innerText = 9;
											}	
											else {
												document.getElementById("valor").innerText += 9;
												document.getElementById("valor_op").innerText += 9;
											}
										}
								
										else {
											if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {	
												document.getElementById("valor").innerText = 9;
												document.getElementById("valor_op").innerText += " " + 9;
											}	
											else {
												document.getElementById("valor").innerText = document.getElementById("valor").innerText += 9;
												document.getElementById("valor_op").innerText += + 9;
											}
										}
										return v1, v2;
										}

		//APAGAR DADOS V1, V2, OP, OPER, P
		apagar = () => {
			document.getElementById("valor").innerText = "0";
			document.getElementById("valor_op").innerText = "";
			v1 = "";
			v2 = "";
			op = "";
			op2 = "";
			oper = "";
			p = 0;
			quadrada = "";
			tamanho = "";
			tamanho2 = "";
			return v1, v2, op, oper, op2, p, quadrada;
		}

		//OPERADORES

		//Apagando um número
		apagarUmNumero = () => {
			tamanho = document.getElementById("valor").innerText.length;
			tamanho2 = document.getElementById("valor_op").innerText.length;
			if(document.getElementById("valor").innerText.charAt(tamanho - 1) == ".") {
				document.getElementById("valor").innerText = document.getElementById("valor").innerText.substring(0, tamanho - 1);
				document.getElementById("valor_op").innerText = document.getElementById("valor_op").innerText.substring(0, tamanho2 - 1);
				return p--;
			}
			else {
				document.getElementById("valor").innerText = document.getElementById("valor").innerText.substring(0, tamanho - 1);
				document.getElementById("valor_op").innerText = document.getElementById("valor_op").innerText.substring(0, tamanho2 - 1);
			}
		}		

		//Ponto(.)
		ponto = () => {
			if(document.getElementById("valor").innerText == "") {
				document.getElementById("valor").innerText = "0.";
				document.getElementById("valor_op").innerText += " 0.";
				p++;
			}
			if(p > 0) {
				document.getElementById("valor").innerText += "";
			}
			else {
				document.getElementById("valor").innerText += ".";
				document.getElementById("valor_op").innerText += ".";
				p++;
			}
			return p;
		}	

		//Mais(+)
		mais = () => {
			if(v1 == "") {
				op = "+";
				v1 = document.getElementById("valor").innerText;
				document.getElementById("valor_op").innerText = v1 + "  " + op + "  ";
				document.getElementById("valor").innerText = "";
				return op, p--, v1;
			}
			else if(document.getElementById("valor").innerText != "") {
				v2 = document.getElementById("valor").innerText;
				document.getElementById("valor_op").innerText += " ";
				document.getElementById("valor").innerText = document.getElementById("valor").innerText;
				return op, p--, v2;
			}
		}

		//Menos(-)
		menos = () => {
			if(v1 == "") {
				op = "-";
				v1 = document.getElementById("valor").innerText;
				document.getElementById("valor_op").innerText = document.getElementById("valor").innerText + "  " + op + "  ";
				document.getElementById("valor").innerText = "";
				return op, p--, v1;
			}
			else if(document.getElementById("valor").innerText != "") {
				v2 = document.getElementById("valor").innerText;
				document.getElementById("valor_op").innerText += " ";
				document.getElementById("valor").innerText = document.getElementById("valor").innerText;
				return p--, v2;
			}
		}

		//Multiplicar (*)
		multiplicar = () => {
			if(v1 == "") {
				op = "x";
				v1 = document.getElementById("valor").innerText;
				document.getElementById("valor_op").innerText = document.getElementById("valor").innerText + "  " + op + "  ";
				document.getElementById("valor").innerText = "";
				return op, p--, v1;
			}
			else if(document.getElementById("valor").innerText != "") {
				v2 = document.getElementById("valor").innerText;
				document.getElementById("valor_op").innerText += " ";
				document.getElementById("valor").innerText = document.getElementById("valor").innerText;
				return p--, v2;
			}
		}

		//Dividir(/)
		dividir = () => {
			if(v1 == "") {
				op = "/";
				v1 = document.getElementById("valor").innerText;
				document.getElementById("valor_op").innerText = document.getElementById("valor").innerText + "  " + op + "  ";
				document.getElementById("valor").innerText = "";
				return op, p--, v1;
			}
			else if(document.getElementById("valor").innerText != "") {
				v2 = document.getElementById("valor").innerText;
				document.getElementById("valor_op").innerText += " ";
				document.getElementById("valor").innerText = document.getElementById("valor").innerText;
				return p--, v2;
			}
		}

		//Porcentagem(%)
		porcento = () => {
			if(document.getElementById("valor").innerText == "0" || document.getElementById("valor").innerText == "") {
				document.getElementById("valor").innerText = "0";
				document.getElementById("valor_op").innerText = "";
			} 
			else {
				v2 = (parseInt(v1) / 100) * document.getElementById("valor").innerText;
				document.getElementById("valor").innerText = op + document.getElementById("valor").innerText + "%";
				document.getElementById("valor_op").innerText = v1 + " " + op + " " + "(" + v2 + ")";
			}
			return v2, op2 = "%";
		}

		//Raiz quadrada(V)
		raizQuadrada = () => {
			if(document.getElementById("valor").innerText == "0") {
				document.getElementById("valor").innerText = "0";
				document.getElementById("valor_op").innerText = "";
			} 
			else {
				if(document.getElementById("valor").innerText < 0) {
					document.getElementById("valor_op").innerText = "(" + document.getElementById("valor").innerText +")" + " é um número negativo";
					document.getElementById("valor").innerText = "0";
				}
				else {
				quadrada = Math.sqrt(document.getElementById("valor").innerText);
				document.getElementById("valor_op").innerText = "Raiz quadrada de (" + document.getElementById("valor").innerText + ")"; 
				document.getElementById("valor").innerText = quadrada;
			}
			}
		}

		//1 dividido por(1/?)
		umDivididoPor = () => {
			if(document.getElementById("valor").innerText === "0") {
				document.getElementById("valor").innerText = "0";
				document.getElementById("valor_op").innerText = "";
			} 
			else {
				document.getElementById("valor_op").innerText = "1 dividido por (" + document.getElementById("valor").innerText + ")";
				document.getElementById("valor").innerText = 1 / document.getElementById("valor").innerText;
			}
		}		

		//Igual(=)
		igual = () => {
			if(op == "+") {
					if(op2 == "%"){
						oper = parseFloat(v1) + parseFloat(v2);
						document.getElementById("valor").innerText = oper;
						document.getElementById("valor_op").innerText = "";
						return op = "", op2 = "";
				} else{
					oper = parseFloat(v1) + parseFloat(document.getElementById("valor").innerText);
					document.getElementById("valor_op").innerText = "";
					document.getElementById("valor").innerText = oper;
					return op = "";
				}
			}

			if(op == "-") {
				if(op2 == "%"){
					oper = parseFloat(v1) - parseFloat(v2);
					document.getElementById("valor").innerText = oper;
					document.getElementById("valor_op").innerText = "";
					return op = "", op2 = "";
				} else {
					oper = parseFloat(v1) - parseFloat(document.getElementById("valor").innerText);
					document.getElementById("valor_op").innerText = "";
					document.getElementById("valor").innerText = oper;
					return op = "";
				}
			}

			if(op == "x") {
				oper = parseFloat(v1) * parseFloat(document.getElementById("valor").innerText);
				document.getElementById("valor_op").innerText = "";
				document.getElementById("valor").innerText = oper;
				return op = "";
			}

			if(op == "/") {
				oper = parseInt(v1) / parseInt(document.getElementById("valor").innerText);
				document.getElementById("valor_op").innerText = "";
				document.getElementById("valor").innerText = oper;
				return op = "";
			}
		}

		//Alterar positivo - negativo & vice-versa
		PositivoNegativo = () => {
			tamanho = document.getElementById("valor").innerText;
			if(document.getElementById("valor").innerText < "0") {
				document.getElementById("valor").innerText = Math.abs(document.getElementById("valor").innerText);
				document.getElementById("valor_op").innerText = document.getElementById("valor").innerText;
			} 
			else {
				document.getElementById("valor").innerText = -Math.abs( document.getElementById("valor").innerText);
				document.getElementById("valor_op").innerText = document.getElementById("valor").innerText;
			}
			if(document.getElementById("valor").innerText == "" || document.getElementById("valor").innerText == "0") {
				document.getElementById("valor_op").innerText = v1 + " " + op;
				document.getElementById("valor").innerText = "0";
			}
		}

		//Guardar número na memória
		guardarMemoria = () => {
			if(document.getElementById("valor").innerText == "") {
				mem = "";
				return mem;
			}
			else {
				mem = document.getElementById("valor").innerText;
				document.getElementById("a").innerText = "M";
				return mem;
			}
		}

		//Memória salva	
		memoriaSalva = () => {
			if(mem == "") {
				document.getElementById("valor").innerText = "0";
				return mem;
			}
			if(document.getElementById("valor").innerText == ""){
				document.getElementById("valor").innerText = mem;
				v1 = mem;
				return v1;
			} else {
				document.getElementById("valor").innerText = mem;
				v2 = mem;
				return v2;
			}
		}

		apagarMemoria = () => {
			document.getElementById("a").innerText = "";
			mem = "";
			return mem;
		}

		info = (x) => {
			switch (x) {
				case 1 :
				document.getElementById("info_botao").innerText = "1 dividido por";
				break;
				
				case 2 :
					document.getElementById("info_botao").innerText = "Raiz quadrada";
					break;

				case 3 :
					document.getElementById("info_botao").innerText = "Apagar memória";
					break;

				case 4 :
					document.getElementById("info_botao").innerText = "Resgatar memória";
					break;	

				case 5 :
					document.getElementById("info_botao").innerText = "Salvar número";
					break;
				
				case 6 :
					document.getElementById("info_botao").innerText = "Positivo para negativo ou vice-versa";
					break;
				
				case 7 :
					document.getElementById("info_botao").innerText = "Apagar dados da calculadora";
					break;	

				case 8 :
					document.getElementById("info_botao").innerText = "Porcentagem";
					break;	
	
				case 9 :
					document.getElementById("info_botao").innerText = "Deletar o último número digitado";
					break;
					
				case 10 :
					document.getElementById("info_botao").innerText = "Dividir";
					break;
					
				case 11 :
					document.getElementById("info_botao").innerText = "Multiplicar";
					break;	

				case 12 :
					document.getElementById("info_botao").innerText = "Subtrair";
					break;
						
				case 13 :
					document.getElementById("info_botao").innerText = "Somar";
					break;	
	
				}
		}

		info_out = () => {
			document.getElementById("info_botao").innerText = "";
		}