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
    footer: {
      text: "&copy; 2025 Мой Сайт. Все права защищены."
    },
    musicPage: {
      title: "Музыка",
      songs: [
        "Песня 1", "Песня 2", "Песня 3", "Песня 4", "Песня 5",
        "Песня 6", "Песня 7", "Песня 8", "Песня 9", "Песня 10"
      ]
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
    footer: {
      text: "&copy; 2025 Meniň Saýtym. Ähli hukuklar goralan."
    },
    musicPage: {
      title: "Muzika",
      songs: [
        "Aýdym 1", "Aýdym 2", "Aýdym 3", "Aýdym 4", "Aýdym 5",
        "Aýdym 6", "Aýdym 7", "Aýdym 8", "Aýdym 9", "Aýdym 10"
      ]
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
    footer: {
      text: "&copy; 2025 Benim Sitem. Tüm hakları saklıdır."
    },
    musicPage: {
      title: "Müzik",
      songs: [
        "Şarkı 1", "Şarkı 2", "Şarkı 3", "Şarkı 4", "Şarkı 5",
        "Şarkı 6", "Şarkı 7", "Şarkı 8", "Şarkı 9", "Şarkı 10"
      ]
    }
  }
};

// Функция для обновления содержимого страницы согласно выбранному языку
function updateContent(lang) {
  // Обновляем навигацию
  document.getElementById("nav-home").textContent = translations[lang].nav.home;
  document.getElementById("nav-music").textContent = translations[lang].nav.music;
  document.getElementById("nav-contacts").textContent = translations[lang].nav.contacts;
  
  // Обновляем секцию hero (если есть)
  if (document.getElementById("hero-title")) {
    document.getElementById("hero-title").textContent = translations[lang].hero.title;
    document.getElementById("hero-subtitle").textContent = translations[lang].hero.subtitle;
    document.getElementById("hero-button").textContent = translations[lang].hero.button;
  }
  
  // Обновляем контент (если есть)
  if (document.getElementById("content-title")) {
    document.getElementById("content-title").textContent = translations[lang].content.title;
    document.getElementById("content-para1").textContent = translations[lang].content.paragraph1;
    document.getElementById("content-para2").textContent = translations[lang].content.paragraph2;
  }
  
  // Обновляем музыкальную страницу (если есть)
  if (document.getElementById("music-page-title")) {
    document.getElementById("music-page-title").textContent = translations[lang].musicPage.title;
    for (let i = 1; i <= 10; i++) {
      const songTitle = document.getElementById("song-title-" + i);
      if (songTitle) {
        songTitle.textContent = translations[lang].musicPage.songs[i - 1];
      }
    }
  }
  
  // Обновляем футер
  if (document.getElementById("footer-text")) {
    document.getElementById("footer-text").innerHTML = translations[lang].footer.text;
  }
}

// Устанавливаем обработчики событий для переключения языков после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  // По умолчанию устанавливаем русский язык
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
