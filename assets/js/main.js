var imgIntro = document.querySelector('#img-intro');

if(screen.width < 768){
    imgIntro.classList.remove('w-60');
    imgIntro.classList.add('w-100');
}else{
    imgIntro.classList.remove('w-100');
    imgIntro.classList.add('w-60');
}

fetch('https://randomuser.me/api/')
  .then((response) => response.json())
  .then((data) => {
    let contenidoContacto = document.querySelector('#contenidoContacto');
    let user = data.results[0];
    console.log(user);
    contenidoContacto.innerHTML = `<p>`+ obtenerNombre(user) +`</p>` + `<p>`+ user.email +`</p>` + `<p>`+ user.phone +`</p>` + `<p> Pais: `+ user.location.country +`</p>`;
    
  });

function obtenerNombre(user){
    let nombre = user.name.title + ' ' + user.name.first + ' ' + user.name.last;
    return nombre;
}