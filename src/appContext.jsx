import { useContext, createContext, useState, useEffect } from "react";

const questions = [
  {
    question:
      "Which of the following expressions can be used to create an element from a template",
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
    resultTextFault: `The right answer is: template.
    content.
    cloneNode(true). Get a content of template and then clone it.`,
    resultTextRight: "Absolutely right!",
  },
  {
    question: "How do we change the style of an element?",
    answers: [
      { text: `element.style.color = "red"`, value: true, id: 0 },
      { text: `element.style.color("red")`, value: false, id: 1 },
      { text: `element(color.red)`, value: false, id: 2 },
      { text: `element = style.color("red");`, value: false, id: 3 },
    ],
    resultTextFault: `The right answer is: element.style.color = "red". 
    The style is a property that returns the inline style of an element 
    that contains a list of all styles properties for that element.`,
    resultTextRight: "Absolutely right!",
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Document Object Model", value: true, id: 0 },
      { text: "Document Ordinary Model", value: false, id: 1 },
      { text: "Document Observation Map", value: false, id: 2 },
      { text: "Document Object Map", value: false, id: 3 },
    ],
    resultTextFault: `The right answer is: Document Object Model.
    Document Object Model (DOM) is a platform and language-neutral 
    interface that allows programs and scripts to dynamically 
    access and update the content, structure, and style of a document.`,
    resultTextRight: "Absolutely right!",
  },
  {
    question: "Which command adds the button just created to the DOM?",
    answers: [
      { text: `document.insertBefore(button)`, value: false, id: 0 },
      { text: `document.insert(button)`, value: false, id: 1 },
      { text: `window.appendChild(button)`, value: false, id: 2 },
      { text: `document.body.appendChild(button)`, value: true, id: 3 },
    ],
    resultTextFault: `The right answer is: document.body.appendChild(button).
    It's append the button to the body of the document.`,
    resultTextRight: "Absolutely right!",
  },
  {
    question: "What method allows us to add an attribute to a DOM element?",
    answers: [
      { text: `element.getAttribute()`, value: false, id: 0 },
      { text: `element.setAttribute()`, value: true, id: 1 },
      { text: `element.createAttribute()`, value: false, id: 2 },
      { text: `element.makeAttribute()`, value: false, id: 3 },
    ],
    resultTextFault: `The right answer is: element.setAttribute().
    It's used to create a new attribute on a DOM element 
    (and also to alter an existing attribute).`,
    resultTextRight: "Absolutely right!",
  },
];

const appContext = createContext();

const AppContext = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <appContext.Provider
      value={{
        questionNumber,
        setQuestionNumber,
        score,
        setScore,
        data: questions[questionNumber],
        length: questions.length,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(appContext);
};

export default AppContext;

export { useGlobalContext };
