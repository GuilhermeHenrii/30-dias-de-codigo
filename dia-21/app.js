const nome = document.querySelector('.nome');
const tel = document.querySelector('.tel');
const cidade = document.querySelector('.cidade');
const form = document.querySelector('.form');
const resp = document.querySelector('.resp');

form.addEventListener('click', (e) => {

  const el = e.target;
  if(el.classList.contains('btn-cadastro')) return saveContacts();
  if(el.classList.contains('btn-lista')) return showContatos();
});

function saveContacts() {
  if(!nome.value) return alert('Campo nome não pode estar vazio');
  if(!tel.value) return alert('Campo telefone não pode estar vazio');
  if(!cidade.value) return alert('Campo cidade não pode estar vazio');

  let contacts = JSON.parse(localStorage.getItem('Contacts')) || [];// retorna um array vazio no primeiro cadastro

  // sempre que eu adicionar um novo usuário, irei dar um push contendo o objeto do usuário dentro do array
  contacts.push({
    nome: nome.value,
    telefone: tel.value,
    cidade: cidade.value,
  });

  window.localStorage.setItem('Contacts', JSON.stringify(contacts));

  alert('Contato cadastrado com sucesso');
}

function showContatos() {
  resp.innerHTML = '';
  let contacts = JSON.parse(localStorage.getItem('Contacts'));
  contacts.forEach((element, index) => {
    resp.innerHTML += `${element.nome} - ${element.telefone} - ${element.cidade}<br>`;
  });
}
