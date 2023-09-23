function curso(){
  const courseName = prompt('Qual o nome do curso?');
  const courseCode = prompt('Qual o código do seu curso?');
  const content = prompt('Digite o conteúdo do curso');
  let courseContentNew;
  let continuing = '';

  let courseInfos = [courseName, courseCode, content];


  (function() {
    continuing = prompt('Deseja adicionar um novo conteúdo?');
    while (continuing === 'sim'){
      courseContentNew = prompt('Digite o nome do conteúdo:');
      courseInfos.push(courseContentNew);
      continuing = prompt('Deseja adicionar um novo curso?');
      if(continuing !== 'sim') alert('Obrigado');
    }
    showCourses(courseInfos);
  })();

  function showCourses(arr){
    const div = document.querySelector('.result');

    arr.forEach((element, index) => {
      if(index === 0) div.innerHTML += `<br>Curso: ${element}`;
      if(index === 1) div.innerHTML += `<br>Código: ${element}`;
      if(index === 2) div.innerHTML += `<br>Conteúdo: ${element}`;
      if(index > 2) div.innerHTML += `<br>Conteúdo: ${element}`;
    });

    // for(let i of arr){
    //   switch(count){
    //     case 0:
    //       div.innerHTML += `Curso: ${i}`;
    //       count++;
    //       break;
    //     case 1:
    //       div.innerHTML += `<br>Código: ${i}`;
    //       count++;
    //       break;
    //     case 2:
    //       div.innerHTML += `<br>Conteúdo: ${i}`;
    //       count++;
    //       break;
    //     default:
    //       div.innerHTML += `<br>Conteúdo: ${i}`;
    //       count++;
    //       break;
    //   }
    // }
  }
}

curso();
