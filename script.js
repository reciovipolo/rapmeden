// Объект с переводами для трёх языков
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
      text: "© 2025 Мой Сайт. Все права защищены."
    }
  },
  en: {
    nav: {
      home: "Home",
      music: "Music",
      contacts: "Contact"
    },
    hero: {
      title: "Welcome",
      subtitle: "Create your legend with us",
      button: "Learn More"
    },
    content: {
      title: "About Us",
      paragraph1: "This is an example of a website in dark tones with a minimalist design inspired by modern trends. Here you can place information about yourself or your project.",
      paragraph2: "Use this template as a foundation and adapt it to your needs by adding additional sections, animations, and interactive elements."
    },
    footer: {
      text: "© 2025 My Website. All rights reserved."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      music: "Música",
      contacts: "Contacto"
    },
    hero: {
      title: "Bienvenido",
      subtitle: "Crea tu leyenda con nosotros",
      button: "Aprende más"
    },
    content: {
      title: "Sobre Nosotros",
      paragraph1: "Este es un ejemplo de un sitio web en tonos oscuros con un diseño minimalista inspirado en las tendencias modernas. Aquí puedes colocar información sobre ti o tu proyecto.",
      paragraph2: "Utiliza esta plantilla como base y adáptala a tus necesidades agregando secciones adicionales, animaciones y elementos interactivos."
    },
    footer: {
      text: "© 2025 Mi Sitio Web. Todos los derechos reservados."
    }
  }
};

// Функция для обновления текста на странице согласно выбранному языку
function updateContent(lang) {
  // Обновляем навигацию
  document.getElementById("nav-home").textContent = translations[lang].nav.home;
  document.getElementById("nav-music").textContent = translations[lang].nav.music;
  document.getElementById("nav-contacts").textContent = translations[lang].nav.contacts;
  
  // Обновляем hero-секцию
  document.getElementById("hero-title").textContent = translations[lang].hero.title;
  document.getElementById("hero-subtitle").textContent = translations[lang].hero.subtitle;
  document.getElementById("hero-button").textContent = translations[lang].hero.button;
  
  // Обновляем контент
  document.getElementById("content-title").textContent = translations[lang].content.title;
  document.getElementById("content-para1").textContent = translations[lang].content.paragraph1;
  document.getElementById("content-para2").textContent = translations[lang].content.paragraph2;
  
  // Обновляем футер
  document.getElementById("footer-text").innerHTML = translations[lang].footer.text;
}

// Устанавливаем обработчики событий для переключения языков
document.addEventListener('DOMContentLoaded', () => {
  // Язык по умолчанию (русский)
  let currentLang = 'ru';
  updateContent(currentLang);
  
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.getAttribute('data-lang');
      updateContent(currentLang);
    });
  });
});
