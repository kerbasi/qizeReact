const questions = [
  {
    question:
      "Какое выражение можно использовать для создания элемента из шаблона",
    answers: [
      {
        text: `template.cloneNode(true)`,
        value: false,
        id: 0,
      },
      {
        text: `template.
        querySelector(content).
        cloneNode(true)`,
        value: false,
        id: 1,
      },
      {
        text: `template.content.
        cloneNode(true)`,
        value: true,
        id: 2,
      },
    ],
    resultTextFault: `Правильный ответ: template.
    content. cloneNode(true). Сначала получаем содержимое шаблона через content, 
    а затем клонируем его.`,
    resultTextRight: "Правильно!",
  },
  {
    question: "Как изменить стиль элемента?",
    answers: [
      { text: `element.style.color = "red"`, value: true, id: 0 },
      { text: `element.style.color("red")`, value: false, id: 1 },
      { text: `element(color.red)`, value: false, id: 2 },
      { text: `element = style.color("red");`, value: false, id: 3 },
    ],
    resultTextFault: `Правильный ответ: element.style. color = "red". 
    style - это свойство, которое возвращает встроенный стиль элемента
    Оно содержит список всех свойств стилей для этого элемента.`,
    resultTextRight: "Правильно!",
  },
  {
    question: "Что означает абривеатура DOM?",
    answers: [
      { text: "Document Object Model", value: true, id: 0 },
      { text: "Document Ordinary Model", value: false, id: 1 },
      { text: "Document Observation Map", value: false, id: 2 },
      { text: "Document Object Map", value: false, id: 3 },
    ],
    resultTextFault: `Правильный ответ: Document Object Model.
    Объектная модель документа (DOM)- это независящий от платформы 
    и языка программный интерфейс, позволяющий программам и скриптам 
    получить доступ к содержимому HTML-, XHTML- и XML-документов`,
    resultTextRight: "Правильно!",
  },
  {
    question: "Какая команда добавит кнопку, созданную в DOM?",
    answers: [
      {
        text: `document.
      insertBefore(button)`,
        value: false,
        id: 0,
      },
      { text: `document.insert(button)`, value: false, id: 1 },
      { text: `window.appendChild(button)`, value: false, id: 2 },
      {
        text: `document.body.
      appendChild(button)`,
        value: true,
        id: 3,
      },
    ],
    resultTextFault: `Правильный ответ: document.body. appendChild(button).
    Она добавит кнопку к корпусу документа.`,
    resultTextRight: "Правильно!",
  },
  {
    question: "Какой метод позволит нам добавить атрибут в элемент DOM?",
    answers: [
      { text: `element.getAttribute()`, value: false, id: 0 },
      { text: `element.setAttribute()`, value: true, id: 1 },
      { text: `element.createAttribute()`, value: false, id: 2 },
      { text: `element.makeAttribute()`, value: false, id: 3 },
    ],
    resultTextFault: `Правильный ответ: element.setAttribute().
    Он используется для создания нового атрибута для элемента DOM
    (или изменения существующего атрибута).`,
    resultTextRight: "Правильно!",
  },
];

export default questions;
