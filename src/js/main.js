import './slider';
import showPictures from './modules/showPictures';
import tabs from './modules/tabs';
import forms from './modules/forms';
import modals from './modules/modals';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  const modalState = {};
  const deadline = '2021-06-06';

  modals();
  showPictures();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  changeModalState(modalState);
  forms(modalState);
  timer('#timer', deadline, '#saleEndDate', '#saleEndMonth');
})