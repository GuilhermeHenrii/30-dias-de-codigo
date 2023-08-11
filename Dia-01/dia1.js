const resp = document.querySelector('.resp');

const nameUser = prompt("Qual o seu nome?", "Digite aqui");

const surnameUser = prompt("Qual o seu sobrenome?", "Digite aqui");

const ageUser = prompt("Qual a sua idade?", "Digite aqui");

const dtBithdayUserTxt = prompt("Qual a sua data de aniversário?", "dd/mm/aaaa");

const dtBtUserTxt = dtBithdayUserTxt.split('/');

const dtBithdayUser = new Date(dtBtUserTxt[2], dtBtUserTxt[1], dtBtUserTxt[0]);

resp.innerHTML = (`Seja bem vindo ${nameUser}. Seu sobrenome ${surnameUser} é muito bonito! :D Você tem ${ageUser} anos e nasceu ${dtBithdayUser.getDate()}` + '/' + `${dtBithdayUser.getMonth()}` + '/' + `${dtBithdayUser.getFullYear()}.` + 'Certo? ;) ');