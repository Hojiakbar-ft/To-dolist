import './JournalItem.css';

export default function JournalItem({ title, text, date }) {
  
  const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date)

  return (
    <>
      <h2 className="journal-item_header">{title}</h2>
      <div className="journal-item_body">
        <p className="journal-item_data">{formatedDate}</p>
        <p className="journal-item_text">{text}</p>
      </div>
    </>
  );
}
