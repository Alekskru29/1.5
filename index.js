const swiper = new Swiper('.swiper', {
  spaceBetween: 16,
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const btn = document.querySelector('.show-more-btn button');
const brandItems = document.querySelectorAll('.brand-item.brand-label');
const arrows = document.querySelectorAll('.show-more-btn .arrow-button .arrow');

let isExpanded = false;

function toggleBrandVisibility() {
  brandItems.forEach((item, index) => {
    if (window.innerWidth >= 1120) {
      item.style.display = index < 8 ? 'flex' : isExpanded ? 'flex' : 'none';
    } else if (window.innerWidth >= 768) {
      item.style.display = index < 6 ? 'flex' : isExpanded ? 'flex' : 'none';
    } else {
      item.style.display = 'flex';
    }
  });
}

toggleBrandVisibility();
window.addEventListener('resize', toggleBrandVisibility);

btn.addEventListener('click', () => {
  isExpanded = !isExpanded;
  toggleBrandVisibility();

  btn.textContent = isExpanded ? 'Скрыть' : 'Показать все';

  arrows.forEach(arrow => {
    arrow.style.transform = isExpanded ? 'rotate(225deg)' : 'rotate(45deg)';
  });
});