const showPictures = () => {
  const body = document.querySelector('body');

  const popup = document.createElement('div')
  popup.classList.add('popup');
  popup.style.display = 'flex';
  const image = document.createElement('img');
  image.style.display = 'inline-block'
  popup.style.justifyContent = 'center';
  popup.style.alignItems = 'center';
  popup.appendChild(image);

  const imageWrapper = document.querySelector('.works');

  imageWrapper.addEventListener('click', (e) => {
    e.preventDefault();
    const t = e.target;
    
    if(t && t.classList.contains('preview')) {
      popup.children[0].src = t.closest('a').pathname;
      body.style.overflow = 'hidden'
      body.appendChild(popup);
      popup.addEventListener('click', clickImage);
    }
  });

  function clickImage(e){
    const t = e.target;

      if(t && t === popup) {
        body.style.overflow = 'auto'
        popup.removeEventListener('click', clickImage)
        popup.remove();
      }
    }
}

export default showPictures;