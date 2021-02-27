const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeBtnSelector, closeClickData = true) {
    const triggers = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = modal.querySelector(closeBtnSelector),
          modalWindows = document.querySelectorAll('[data-modal]');

    triggers.forEach(trigger => {
      trigger.addEventListener("click", (e) => {
        const t = e.target;
        if (t) {
          e.preventDefault();
        }

        modalWindows.forEach(window => window.style.display = "none");
  
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
    });

    close.addEventListener("click", () => {
      modalWindows.forEach(window => window.style.display = "none");
      closeModal(modal);
    });

    modal.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t === modal && closeClickData) {
        modalWindows.forEach(window => window.style.display = "none");
        closeModal(modal);
      }
    });
  }

  function closeModal(modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  function showModalByTime(modal, time) {
    setTimeout(() => {
      document.querySelector(modal).style.display = 'flex';
      document.body.style.overflow = "hidden";
    }, time)
  }

  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_close");
  bindModal(".phone_link", ".popup_engineer", ".popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);
  showModalByTime(".popup_engineer", 60000)
};

export default modals;
