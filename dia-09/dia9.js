const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    class Person {
        constructor() {
            this.question = confirm('Vamos começar a montar seu personagem?');
        }
    
        char(){
            if(this.question) alert('Então vamos começar!');
    
            this.question = confirm('Seu personagem é uma mulher?');
            if(this.question) alert('Olá Princesa!');
    
            if(!this.question) alert('Olá Rei!');
        }
    }
    
    const person = new Person();
    person.char();
});