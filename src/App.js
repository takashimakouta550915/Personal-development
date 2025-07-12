import logo from './logo.svg';
import './App.css';



import React, { useState } from 'react';
import './App.css'; // スタイルを追加する場合

const faqs = [
  {
    question: 'Reactとは何ですか？',
    answer: 'ReactはFacebookが開発したJavaScriptライブラリで、UIを構築するために使われます。',
  },
  {
    question: 'JSXとは何ですか？',
    answer: 'JSXはJavaScriptの中にHTMLのような構文を書けるReactの拡張構文です。',
  },
  {
    question: '状態管理には何を使いますか？',
    answer: 'useStateやReduxなどが使われます。',
  },
];

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="App">
      <h1>よくある質問（FAQ）</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button onClick={() => toggleFAQ(index)} className="faq-question">
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;
