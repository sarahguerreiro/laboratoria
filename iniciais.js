let iniciais = prompt('Digite seu nome e sobrenome');
iniciais.toUpperCase();
//console.log()
priIni = iniciais.slice(0, 1);
segIniPosition = iniciais.indexOf(' ')+1;
segIni = iniciais.slice(segIniPosition, segIniPosition + 1);
document.write('Toma, são suas iniciais: ' + priIni.toUpperCase() + segIni.toUpperCase());
