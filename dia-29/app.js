class Review {
  constructor() {
    this.name = document.querySelector('.name');// nome
    this.movieName = document.querySelector('.movie-name');// nome do filme
    this.review = document.querySelector('.review');// campo de análise
    this.btnMakeAssessment = document.querySelector('.make-assessment');// btn avalia
    this.btnShowReviews = document.querySelector('.show-reviews');// btn lista
    this.form = document.querySelector('.form');
  }

  events(){
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      const el = e.submitter;// submitter pega o elemento que esta submetendo o form
      if(el.classList.contains('make-assessment')) return this.createAssessment();
    });

    this.btnShowReviews.addEventListener('click', e => {
      // escutando esse btn no event click, pois o click ignra o required
      const el = e.target;
      if(el.classList.contains('show-reviews')) return this.reviewList();
    });
  }

  createAssessment(){
    let reviews = JSON.parse(localStorage.getItem('Reviews')) || [];
    reviews.push({
      'Nome': this.name.value,
      'NomeDoFilme': this.movieName.value,
      'Avaliacao': this.review.value,
    });

    window.localStorage.setItem('Reviews', JSON.stringify(reviews));
  };

  reviewList(){
    let cleanUp = document.querySelectorAll('.list-of-reviews');
    for(let i of cleanUp){
      i.remove();
    };

    const datas = JSON.parse(localStorage.getItem('Reviews'));

    datas.forEach((el, index) => {
      const div = this.createDiv();
      div.innerHTML = `Nome: ${el.Nome}<br>Filme Avaliado: ${el.NomeDoFilme}<br>Avaliação: ${el.Avaliacao}`;
    });
  };

  createDiv(){
    const div = document.createElement('div');
    div.classList.add('list-of-reviews');
    this.form.appendChild(div);
    return div;
  }
}

const user = new Review();
user.events();
