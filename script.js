// Объект переводов (для brevity для tm и tr можно добавить аналогично)
const translations = {
  ru: {
    nav: { home: "Главная", music: "Музыка", contacts: "Контакты" },
    hero: { title: "Добро пожаловать", subtitle: "Создай свою легенду вместе с нами", button: "Узнать больше" },
    content: {
      title: "О Нас",
      paragraph1: "Это пример сайта в тёмных оттенках с минималистичным дизайном, вдохновлённым современными тенденциями. Здесь вы можете разместить информацию о себе или вашем проекте.",
      paragraph2: "Используйте этот шаблон как основу и адаптируйте его под свои потребности, добавляя дополнительные секции, анимации и интерактивные элементы."
    },
    musicPage: {
      title: "Музыка",
      songs: [
        { title: "Песня 1", artist: "Исполнитель 1" },
        { title: "Песня 2", artist: "Исполнитель 2" },
        { title: "Песня 3", artist: "Исполнитель 3" },
        { title: "Песня 4", artist: "Исполнитель 4" },
        { title: "Песня 5", artist: "Исполнитель 5" },
        { title: "Песня 6", artist: "Исполнитель 6" },
        { title: "Песня 7", artist: "Исполнитель 7" },
        { title: "Песня 8", artist: "Исполнитель 8" },
        { title: "Песня 9", artist: "Исполнитель 9" },
        { title: "Песня 10", artist: "Исполнитель 10" }
      ]
    },
    contactsPage: {
      title: "Контакты",
      address: "Адрес: ул. Ленина, д. 1, Москва",
      email: "Email: info@example.com",
      phone: "Телефон: +7 123 456 78 90",
      formTitle: "Обратная связь",
      formName: "Имя",
      formEmail: "Email",
      formMessage: "Сообщение",
      formButton: "Отправить",
      socialTitle: "Мы в социальных сетях:"
    },
    footer: { text: "&copy; 2025 Мой Сайт. Все права защищены." }
  },
  tm: {
    // Добавьте переводы для туркменского языка по аналогии
  },
  tr: {
    // Добавьте переводы для турецкого языка по аналогии
  }
};

function updateContent(lang) {
  // Обновляем навигацию
  const navHome = document.getElementById("nav-home");
  const navMusic = document.getElementById("nav-music");
  const navContacts = document.getElementById("nav-contacts");
  if (navHome && navMusic && navContacts) {
    navHome.textContent = translations[lang].nav.home;
    navMusic.textContent = translations[lang].nav.music;
    navContacts.textContent = translations[lang].nav.contacts;
  }
  // Обновляем hero (если есть)
  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const heroButton = document.getElementById("hero-button");
  if (heroTitle && heroSubtitle && heroButton) {
    heroTitle.textContent = translations[lang].hero.title;
    heroSubtitle.textContent = translations[lang].hero.subtitle;
    heroButton.textContent = translations[lang].hero.button;
  }
  // Обновляем content (если есть)
  const contentTitle = document.getElementById("content-title");
  const contentPara1 = document.getElementById("content-para1");
  const contentPara2 = document.getElementById("content-para2");
  if (contentTitle && contentPara1 && contentPara2) {
    contentTitle.textContent = translations[lang].content.title;
    contentPara1.textContent = translations[lang].content.paragraph1;
    contentPara2.textContent = translations[lang].content.paragraph2;
  }
  // Обновляем музыкальную страницу (если есть)
  const musicPageTitle = document.getElementById("music-page-title");
  if (musicPageTitle) {
    musicPageTitle.textContent = translations[lang].musicPage.title;
    for (let i = 1; i <= 10; i++) {
      const songTitleEl = document.getElementById("song-title-" + i);
      const songArtistEl = document.getElementById("song-artist-" + i);
      if (songTitleEl && songArtistEl) {
        songTitleEl.textContent = translations[lang].musicPage.songs[i - 1].title;
        songArtistEl.textContent = translations[lang].musicPage.songs[i - 1].artist;
      }
    }
  }
  // Обновляем страницу контактов (если есть)
  const contactsPageTitle = document.getElementById("contacts-page-title");
  if (contactsPageTitle) {
    contactsPageTitle.textContent = translations[lang].contactsPage.title;
  }
  const contactAddress = document.getElementById("contact-address");
  if (contactAddress) { contactAddress.textContent = translations[lang].contactsPage.address; }
  const contactEmail = document.getElementById("contact-email");
  if (contactEmail) { contactEmail.textContent = translations[lang].contactsPage.email; }
  const contactPhone = document.getElementById("contact-phone");
  if (contactPhone) { contactPhone.textContent = translations[lang].contactsPage.phone; }
  const formTitle = document.getElementById("form-title");
  if (formTitle) { formTitle.textContent = translations[lang].contactsPage.formTitle; }
  const formNameLabel = document.getElementById("form-name-label");
  if (formNameLabel) { formNameLabel.textContent = translations[lang].contactsPage.formName; }
  const formEmailLabel = document.getElementById("form-email-label");
  if (formEmailLabel) { formEmailLabel.textContent = translations[lang].contactsPage.formEmail; }
  const formMessageLabel = document.getElementById("form-message-label");
  if (formMessageLabel) { formMessageLabel.textContent = translations[lang].contactsPage.formMessage; }
  const formSubmitButton = document.getElementById("form-submit-button");
  if (formSubmitButton) { formSubmitButton.textContent = translations[lang].contactsPage.formButton; }
  const socialTitle = document.getElementById("social-title");
  if (socialTitle) { socialTitle.textContent = translations[lang].contactsPage.socialTitle; }
  // Обновляем футер
  const footerText = document.getElementById("footer-text");
  if (footerText) { footerText.innerHTML = translations[lang].footer.text; }
}

document.addEventListener("DOMContentLoaded", () => {
  // Устанавливаем язык по умолчанию – русский
  let currentLang = "ru";
  updateContent(currentLang);
  
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.getAttribute("data-lang");
      updateContent(currentLang);
    });
  });
  
  // SVG-иконки для кнопок плеера
  const playIconSVG = `<svg class="icon play-icon" width="20" height="20" viewBox="0 0 20 20"><polygon fill="#fff" points="5,3 17,10 5,17"/></svg>`;
  const pauseIconSVG = `<svg class="icon pause-icon" width="20" height="20" viewBox="0 0 20 20"><rect x="4" y="3" width="4" height="14" fill="#fff"/><rect x="12" y="3" width="4" height="14" fill="#fff"/></svg>`;
  
  // Инициализация кастомных аудиоплееров (только на странице music.html)
  document.querySelectorAll(".custom-audio").forEach(customAudio => {
    const audioSrc = customAudio.getAttribute("data-src");
    const audio = new Audio(audioSrc);
    customAudio.audio = audio;
    
    const playButton = customAudio.querySelector(".play-pause");
    const progressContainer = customAudio.querySelector(".progress-container");
    const progress = customAudio.querySelector(".progress");
    
    playButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playButton.innerHTML = pauseIconSVG;
        showFloatingWidget(); // Показываем виджет при начале воспроизведения
      } else {
        audio.pause();
        playButton.innerHTML = playIconSVG;
      }
    });
    
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percent + "%";
      }
    });
    
    progressContainer.addEventListener("click", (e) => {
      const rect = progressContainer.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const newTime = (offsetX / rect.width) * audio.duration;
      audio.currentTime = newTime;
    });
    
    audio.addEventListener("ended", () => {
      playButton.innerHTML = playIconSVG;
      progress.style.width = "0%";
    });
  });
  
  // Функциональность плавающего виджета
  const floatingWidget = document.getElementById("floating-widget");
  function showFloatingWidget() {
    if (floatingWidget && floatingWidget.style.display === "none") {
      floatingWidget.style.display = "block";
    }
  }
  
  const widgetClose = document.querySelector("#floating-widget .widget-close");
  if (widgetClose) {
    widgetClose.addEventListener("click", () => {
      if (floatingWidget) {
        floatingWidget.style.display = "none";
      }
    });
  }
});
