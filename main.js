function classToggle() {
    const navs = document.querySelectorAll('aside')
    
    navs.forEach(nav => nav.classList.toggle('.menuknop'));
  }
  
  document.querySelector('.menuknop')
    .addEventListener('click', classToggle);