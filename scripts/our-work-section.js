let btnLoadMore = document.querySelector('.work-button-load');
let btnText = document.querySelector('.work-button-more-text');
let spinner = document.querySelector('.spinner');
let moreItems = document.querySelector('.more-items-section');
let workTabTitleWrap = document.querySelector('.work-tab-titles-wrapper');
let workTabImagesWrap = document.querySelector('.work-tab-items-wrapper');
let workTabTitleItem = document.querySelectorAll('.work-tab-title-item');
let workTabImages = document.querySelectorAll('.img-item-wrap');
let workTabImagesAdd = document.querySelectorAll('.img-item-wrap-more');
let hoverTab = document.querySelector('.hover-tab');

function btnLoadMoreFunc() {
  if (btnText.innerText === 'LOAD MORE') {
    spinner.classList.remove('display-none');
    btnLoadMore.classList.add('display-none');

    setTimeout(() => {
      spinner.classList.add('display-none');
      btnLoadMore.classList.remove('display-none');
      btnText.innerText = 'hide';

      workTabImagesAdd.forEach((item, i) => {
        item.classList.remove('display-none')
      });

    }, 2500);
  } else if (btnText.innerText === 'HIDE') {
    btnText.innerText = 'load more';

    workTabImagesAdd.forEach((item, i) => {
      item.classList.add('display-none')
    });
  }
}

function activeTab(e) {
  workTabTitleItem.forEach((item, i) => {
    item.classList.remove('work-tab-title-item-active');
  });

  e.target.classList.add('work-tab-title-item-active');
}

function switchTabs(e) {
  activeTab(e)

  let checkTabAttr;
  let checkImgAttr

  if (e.target.tagName === 'LI') {
    checkTabAttr = e.target.getAttribute('data-tab-title');

    workTabImages.forEach((item, i) => {
      item.classList.add('display-none')
      checkImgAttr = item.getAttribute('data-tab-content');
      if (checkTabAttr === checkImgAttr) {
        item.classList.remove('display-none')
      } else if (checkTabAttr === 'all') {
        item.classList.remove('display-none')
      }

      if (checkTabAttr !== 'all') {
        btnLoadMore.classList.add('display-none')
        btnText.innerText = 'load more';
      } else {
        btnLoadMore.classList.remove('display-none')
      }
    })

    workTabImagesAdd.forEach((item, i) => {
      item.classList.add('display-none')
      checkImgAttrAdd = item.getAttribute('data-tab-content');
      if (checkTabAttr === checkImgAttrAdd) {
        item.classList.remove('display-none')
      }
    })
  }
}

btnLoadMore.addEventListener('click', btnLoadMoreFunc)
workTabTitleWrap.addEventListener('click', switchTabs)
