import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './Layouts/LeftPanel/LeftPanel';
import Body from './Layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const data = [
  // {
  //   title: 'Подготовка к обновлению курсов',
  //   text: 'Сегодня провёл весь день за...',
  //   date: new Date(),
  //   id: 1,
  // },
  // {
  //   title: 'Поход в горы',
  //   text: 'Думал, что очень много време...',
  //   date: new Date(),
  //   id: 2,
  // },
  // {
  //   title: 'Первая заметка',
  //   text: 'Создал первую заметку, чтобы ...',
  //   date: new Date(),
  //   id: 3,
  // },
];

function App() {
  const [items, setItems] = useState(data);

  const addItems = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
        id: Math.floor(Math.random() * 1000)
      },
    ]);
  };

  return (
    <>
      <div className="app">
        <LeftPanel>
          
          <Header />
          <JournalAddButton />
          <JournalList items={items} />

        </LeftPanel>

        <Body>
          <JournalForm onSubmit={addItems} />
        </Body>
      </div>
    </>
  );
}

export default App;
