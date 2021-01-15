// соединение с dom
const select = document.querySelector("select");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
// end

// наследуемся от обьекта SpeechSynthesisUtterance()
const message = new SpeechSynthesisUtterance()

// создаем массив для голосов, куда закинем все голоса
let voices = [];

// даем знаачение по дефолту
textarea.value = 'Makers лучшая школа программирования';

// функция для получения голосов 
function getAllVoices() {
  voices = speechSynthesis.getVoices();
  console.log(voices)
  voices.forEach((voice) => {
// создаем элемент option
    const option = document.createElement("option");
    console.log(option)
    option.value = voice.name;
    option.textContent = `${voice.name}`;
// аппендим в тег select
    select.appendChild(option);
  });
}

// слушаем изменения speechSynthesis и вызов функции getAllVoices
speechSynthesis.addEventListener("voiceschanged", getAllVoices);
console.log(speechSynthesis.getVoices())

// слушаем изменения тега select и меняем голос обьекта message на выбранный
select.addEventListener("change", (e) => {
  message.voice = voices.find((voice) => voice.name === e.target.value);
  console.log(message)
});

// слушаем изменения тега button и вызываем метод speak и передаем наш message
button.addEventListener("click", () => {
  message.text = textarea.value.trim();
  if (message.text !== "") {
    speechSynthesis.speak(message);
  }
});
