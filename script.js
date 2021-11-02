// API ключ
let apiKey = "2e74557168d669e2f08e88fa15445dc8";
// Город погода которого нужна
let city = "Minsk,BY";
// Формируем url для GET запроса
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
// Отправляем запрос
axios.get(url).then(res => {
   // Выводим результат в консоль браузера
   console.log(res.data);
})
// Отправка GET запроса
axios.get(url).then(res => {
   // Вывод города
   document.querySelector('.city').innerHTML = res.data.name;
   // Вывод температуры
   document.querySelector('.temp').innerHTML = res.data.main.temp;
   // Вывод влажности
   document.querySelector('.humidity').innerHTML = res.data.main.humidity;
   // Вывод скорости ветра
   document.querySelector('.wind').innerHTML = res.data.wind.speed;
})