let tabTitleWrapServ = document.querySelector('.tab-titles-wrapper');
let tabTitlesServ = document.querySelectorAll('.tab-item-title');
let tabContentServ = document.querySelectorAll('.tab-item-content');

tabTitleWrapServ.addEventListener('click', (e) => {
  if (e.target.tagName == 'LI') {
    activeTabServFunc(e)
    let checkTitleIndex = e.target.getAttribute('data-tab-title-index');

    tabContentServ.forEach((item, i) => {
      item.classList.remove('tab-item-content-active')
      let checkContentIndex = item.getAttribute('data-tab-content-index');
      if (checkTitleIndex === checkContentIndex) {
        item.classList.add('tab-item-content-active')
      }
    });
  }
})

function activeTabServFunc(e) {
  tabTitlesServ.forEach((item, i) => {
    item.classList.remove('tab-item-title-active')
  });
   e.target.classList.add('tab-item-title-active');
}

new Glide('.glide', {
  type: 'carousel'
}).mount()
