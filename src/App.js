
import React, { useState } from 'react';
import './App.css';

const knowledgeData = [
 {
  category: '勤怠',
    items: [
      { title: '全体集会時の勤怠', content: 'https://example.com/attendance1' },
      { title: '遅刻', content: 'こちらをクリック' },
      { title: '早退', content: 'こちらをクリック' },
      { title: '休日出勤', content: 'こちらをクリック' },
      { title: 'シフト変更', content: 'こちらをクリック' },
    ],
 },
 {
  category: 'Groon',
    items: [
      { title: '旅費交通費', content: 'こちらをクリック' },
      { title: '出張について', content: 'こちらをクリック' },
    ],
 },
 
 {category: '組織図',
    items: [
      { title: '東日本営業所', content: 'こちらをクリック' },
      { title: '西日本営業所', content: 'こちらをクリック' },
    ],
  },

 {category: '健康診断について',
    items: [
      { title: '東日本営業予約の取り方', content: 'こちらをクリック' },
      { title: '二次検査について', content: 'こちらをクリック' },
    ],
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App">
     <h1>GEクリエイティブ社内ナレッジ</h1>
     <h2>見なかったら悲しみます</h2>
     <div className="category-list">
       {knowledgeData.map((section, index) => (
        <button
            key={index}
            onClick={() => setSelectedCategory(index)}
            className="category-button"
        >
           {section.category}
        </button>
        ))}
        </div>

       {selectedCategory !== null && (
        <div className="knowledge-section">
         <h2>{knowledgeData[selectedCategory].category}</h2>
          {knowledgeData[selectedCategory].items.map((item, idx) => (
          <div key={idx} className="knowledge-item">
            <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        )}
     </div>
  );
}


export default App;
