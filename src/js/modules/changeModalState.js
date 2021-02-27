import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs(['#width', '#height']);


  bindStateChange('click', windowForm, 'windowForm');
  bindStateChange('input', windowWidth, 'width');
  bindStateChange('input', windowHeight, 'height');
  bindStateChange('change', windowType, 'view_type');
  bindStateChange('click', windowProfile, 'profile');

  function bindStateChange(event, elem, property) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            if(elem === windowForm) {
              state[property] = item.children[0].alt;
              break;
            }
            state[property] = i;
            break;
          case 'INPUT':
            if(item.getAttribute('type') === 'radio') {
              i === 0 
              ? state[property] = "Холодный профиль"
              : state[property] = "Тёплый профиль";
            } else {
              state[property] = item.value;
            }
            break;
          case 'SELECT':

            state[property] = item.value;
            break;
          default :
            console.log(state);
        }
      })
    })
  }
}

export default changeModalState;