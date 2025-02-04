// Объект с переводами для русского, туркменского и турецкого языков
const translations = {
  ru: {
    nav: {
      home: "Главная",
      music: "Музыка",
      contacts: "Контакты"
    },
    hero: {
      title: "Добро пожаловать",
      subtitle: "Создай свою легенду вместе с нами",
      button: "Узнать больше"
    },
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
    footer: {
      text: "&copy; 2025 Мой Сайт. Все права защищены."
    }
  },
  tm: {
    nav: {
      home: "Baş sahypa",
      music: "Muzika",
      contacts: "Habarlaşmak"
    },
    hero: {
      title: "Hoş geldiňiz",
      subtitle: "Biziň bilen öz efsanäňizi dörediň",
      button: "Has köp bilmek"
    },
    content: {
      title: "Biz Barada",
      paragraph1: "Bu, gara reňklerde minimalist dizaýnly saýtyň nusgasydyr we häzirki zaman tekliplerinden ylham alýar. Bu ýerde özüňiz ýa-da taslamanyňyz barada maglumat ýerleşdirip bilersiňiz.",
      paragraph2: "Bu şablony esas edip, goşmaça bölümler, animasiýalar we interaktiw elementler goşup zerurlyklaryňyza laýyklaşdyryň."
    },
    musicPage: {
      title: "Muzika",
      songs: [
        { title: "Aýdym 1", artist: "Çyjgyjy 1" },
        { title: "Aýdym 2", artist: "Çyjgyjy 2" },
        { title: "Aýdym 3", artist: "Çyjgyjy 3" },
        { title: "Aýdym 4", artist: "Çyjgyjy 4" },
        { title: "Aýdym 5", artist: "Çyjgyjy 5" },
        { title: "Aýdym 6", artist: "Çyjgyjy 6" },
        { title: "Aýdym 7", artist: "Çyjgyjy 7" },
        { title: "Aýdym 8", artist: "Çyjgyjy 8" },
        { title: "Aýdym 9", artist: "Çyjgyjy 9" },
        { title: "Aýdym 10", artist: "Çyjgyjy 10" }
      ]
    },
    footer: {
      text: "&copy; 2025 Meniň Saýtym. Ähli hukuklar goralan."
    }
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      music: "Müzik",
      contacts: "İletişim"
    },
    hero: {
      title: "Hoşgeldiniz",
      subtitle: "Efsanenizi bizimle yaratın",
      button: "Daha Fazla Bilgi"
    },
    content: {
      title: "Hakkımızda",
      paragraph1: "Bu, modern trendlerden ilham alan minimalist tasarıma sahip, koyu tonlarda bir sitenin örneğidir. Burada kendiniz veya projeniz hakkında bilgi yerleştirebilirsiniz.",
      paragraph2: "Bu şablonu temel alarak, ek bölümler, animasyonlar ve interaktif öğeler ekleyerek ihtiyaçlarınıza göre uyarlayın."
    },
    musicPage: {
      title: "Müzik",
      songs: [
        { title: "Şarkı 1", artist: "Sanatçı 1" },
        { title: "Şarkı 2", artist: "Sanatçı 2" },
        { title: "Şarkı 3", artist: "Sanatçı 3" },
        { title: "Şarkı 4", artist: "Sanatçı 4" },
        { title: "Şarkı 5", artist: "Sanatçı 5" },
        { title: "Şarkı 6", artist: "Sanatçı 6" },
        { title: "Şarkı 7", artist: "Sanatçı 7" },
        { title: "Şarkı 8", artist: "Sanatçı 8" },
        { title: "Şarkı 9", artist: "Sanatçı 9" },
        { title: "Şarkı 10", artist: "Sanatçı 10" }
      ]
    },
    footer: {
      text: "&copy; 2025 Benim Sitem. Tüm hakları saklıdır."
    }
  }
};

function updateContent(lang) {
  // Обновляем навигацию (если присутствует)
  const navHome = document.getElementById("nav-home");
  const navMusic = document.getElementById("nav-music");
  const navContacts = document.getElementById("nav-contacts");
  if (navHome && navMusic && navContacts) {
    navHome.textContent = translations[lang].nav.home;
    navMusic.textContent = translations[lang].nav.music;
    navContacts.textContent = translations[lang].nav.contacts;
  }
  
  // Обновляем секцию hero (для главной страницы)
  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const heroButton = document.getElementById("hero-button");
  if (heroTitle && heroSubtitle && heroButton) {
    heroTitle.textContent = translations[lang].hero.title;
    heroSubtitle.textContent = translations[lang].hero.subtitle;
    heroButton.textContent = translations[lang].hero.button;
  }
  
  // Обновляем секцию контента (для главной страницы)
  const contentTitle = document.getElementById("content-title");
  const contentPara1 = document.getElementById("content-para1");
  const contentPara2 = document.getElementById("content-para2");
  if (contentTitle && contentPara1 && contentPara2) {
    contentTitle.textContent = translations[lang].content.title;
    contentPara1.textContent = translations[lang].content.paragraph1;
    contentPara2.textContent = translations[lang].content.paragraph2;
  }
  
  // Обновляем музыкальную страницу (если присутствует)
  const musicPageTitle = document.getElementById("music-page-title");
  if (musicPageTitle) {
    musicPageTitle.textContent = translations[lang].musicPage.title;
    // Обновляем данные для каждой песни
    for (let i = 1; i <= 10; i++) {
      const songTitleEl = document.getElementById("song-title-" + i);
      const songArtistEl = document.getElementById("song-artist-" + i);
      if (songTitleEl && songArtistEl) {
        songTitleEl.textContent = translations[lang].musicPage.songs[i - 1].title;
        songArtistEl.textContent = translations[lang].musicPage.songs[i - 1].artist;
      }
    }
  }
  
  // Обновляем футер
  const footerText = document.getElementById("footer-text");
  if (footerText) {
    footerText.innerHTML = translations[lang].footer.text;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Устанавливаем язык по умолчанию – русский
  let currentLang = "ru";
  updateContent(currentLang);
  
  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.getAttribute("data-lang");
      updateContent(currentLang);
    });
  });
});
