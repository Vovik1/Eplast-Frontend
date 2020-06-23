import React from 'react';
import {Button} from 'antd';
import styles from './PersonalData.module.css';

export default function () {
  return (
    <div className={styles.userFieldsWrapper}>
      <h2 className={styles.title}>Особистий профіль</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Прізвище:</td>
              <td>Ім`я:</td>
            </tr>
            <tr>
              <td>
                <span>Хартманє</span>
              </td>
              <td>
                <span>Василь</span>
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>Номер телефону:</td>
            </tr>
            <tr>
              <td>
                <span>admin@eplast.com</span>
              </td>
              <td>
                <span>00-00-000-00</span>
              </td>
            </tr>
            <tr>
              <td>Національність:</td>
              <td>Віровизнання:</td>
            </tr>
            <tr>
              <td>
                <span>Національність</span>
              </td>
              <td>
                <span>Агностик</span>
              </td>
            </tr>
            <tr>
              <td>Дата народження:</td>
              <td>Стать:</td>
            </tr>
            <tr>
              <td>
                <span>06-08-1949</span>
              </td>
              <td>
                <span>Жінка</span>
              </td>
            </tr>
            <tr>
              <td>Місце навчання:</td>
              <td>Спецальність:</td>
            </tr>
            <tr>
              <td>
                <span>Львів</span>
              </td>
              <td>
                <span>Ветеренарія</span>
              </td>
            </tr>
            <tr>
              <td>Ступінь:</td>
              <td>Місце роботи:</td>
            </tr>
            <tr>
              <td>
                <span>Бакалавр</span>
              </td>
              <td>
                <span>Кременчук</span>
              </td>
            </tr>
          </tbody>
        </table>
          <Button className={styles.btn}>Обрати/змінити курінь</Button>
      </div>
    </div>
  );
}
