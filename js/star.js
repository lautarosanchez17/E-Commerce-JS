const stars = document.querySelectorAll('.star');

stars.forEach(function (star, index) {
  star.addEventListener('click', function () {
    const aumentoStar = index + 1;
    localStorage.setItem('valoracion', aumentoStar);
    actualizarStar(rating);
  });
});

function actualizarStar(aumentoStar) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove('check');
  }

  for (let i = 0; i < aumentoStar; i++) {
    stars[i].classList.add('check');
  }
}

const storageStar = localStorage.getItem('valoracion');

if (storageStar) {
  actualizarStar(storageStar);
}