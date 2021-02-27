const tabs = (headerSelector, tabSelector, contentSelector, activeClass, displayParam = 'block') => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector); 

  function hideTabContent() {
    content.forEach(item => {
      item.style.display = 'none';
    });
    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });

  }

  function showTabContent(i = 0) {
    content[i].style.display = displayParam;
    tabs[i].classList.add(activeClass); 
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const t = e.target;

    if(t && 
      (t.classList.contains(tabSelector.replace(/\./, '')) ||
    t.parentNode.classList.contains(tabSelector.replace(/\./, '')))){
      tabs.forEach((item, i) => {
        if(t === item || t.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  });

}

export default tabs;