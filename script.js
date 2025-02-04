/* Сброс стилей */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #111;
  color: #eee;
  line-height: 1.6;
}

/* Фиксированное меню */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

/* Логотип */
.logo {
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
}

/* Меню */
nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav ul li a {
  color: #eee;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #e50914;
}

/* Переключатель языков */
.lang-switcher {
  display: flex;
  gap: 10px;
}

.lang-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  transition: transform 0.2s;
}

.lang-btn:hover {
  transform: scale(1.1);
}

/* Стили для секции hero */
.hero {
  position: relative;
  height: 100vh;
  background: url('https://via.placeholder.com/1920x1080') no-repeat center center/cover;
  margin-top: 80px; /* отступ для фиксированного header */
}

/* Затемнение фона в hero */
.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-content p {
  font-size: 20px;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background-color: #e50914;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #c40710;
}

/* Секция с контентом */
.content {
  padding: 60px 40px;
  background-color: #1a1a1a;
}

.content h2 {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
}

.content p {
  max-width: 800px;
  margin: 0 auto 20px;
  font-size: 18px;
  text-align: center;
}

/* Футер */
footer {
  background-color: #000;
  padding: 20px 40px;
  text-align: center;
  font-size: 14px;
}

/* Адаптивность */
@media (max-width: 768px) {
  header {
    flex-direction: column;
  }
  
  nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .hero-content h1 {
    font-size: 36px;
  }
  
  .hero-content p {
    font-size: 16px;
  }
}
