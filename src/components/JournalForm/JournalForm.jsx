import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import cn from 'classnames'

const INITIAL_STATE = {
  title: true,
  text: true,
  date: true
}

export default function JournalForm({ onSubmit }) {
  const[formValidState, setFormValidState] = useState(INITIAL_STATE)
  useEffect(() => {
    let timeId;
    if (!formValidState.date || !formValidState.text || !formValidState.title) {
      timeId = setTimeout (() => {
        setFormValidState(INITIAL_STATE)
      }, 1500)
      return () => {
        clearTimeout(timeId)
      }
    }
  }, [formValidState])

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);

    let isFormValid = true;

    if (!formProps.title.trim().length) {
      setFormValidState(state => ({...state, title: false}));
      isFormValid = false;
    } else {
      setFormValidState(state => ({...state, title: true}));
    }
  
    if (!formProps.text.trim().length) {
      setFormValidState(state => ({...state, text: false}));
      isFormValid = false;
    } else {
      setFormValidState(state => ({...state, text: true}));
    }
  
    if (!formProps.date) {
      setFormValidState(state => ({...state, date: false}));
      isFormValid = false;
    } else {
      setFormValidState(state => ({...state, date: true}));
    }
  
    if (!isFormValid) {
      return
    }

    onSubmit(formProps);
  };

  return (
    <form className={styles["journal-form"]} onSubmit={addJournalItem}>

      <div className={styles['form-head']}>
        <label htmlFor="title" className={styles['form-label']}>
          <input type="text" name="title" placeholder='Заголовок' 
            className={cn(styles['input-title'], {
              [styles['invalid']] : !formValidState.title
            })}/>
        </label>

        <button>
          <img src="/clear.svg" alt='icon clear' width='30' height='30'/>
        </button>
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-label']} onClick={(e) => e.target.showPicker()}>
          <img src="/calender.svg" alt="icon calender" width='18' height='18'/>
          <span>Дата</span>
        </label>
          <input type="date" name="date" id='date' className={cn(styles['input'], {
            [styles['invalid']]: !formValidState.date
          })} onClick={(e) => e.target.showPicker()}/>
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-label']}>
          <img src="/folder.svg" alt="icon folder" width='18' height='18'/>
          <span>Метки</span>
        </label>
          <input placeholder='Добавить метку' type="text" name="tag" id='tag' className={styles['input']}/>
      </div>

      <textarea name="text" id="" placeholder='Введите текст' cols="30" rows="15" className={cn(styles['input'], {
        [styles['invalid']]: !formValidState.text
      })}/>

      <Button />
    </form>
  );
}