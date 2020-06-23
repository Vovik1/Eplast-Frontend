import React, {useEffect} from 'react';
import { Formik } from 'formik';
import styles from './EditUserPage.module.css';
import * as Yup from 'yup';
import { Form, Input, Avatar, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const validationSchema = Yup.object().shape({
  name: Yup.string().min(5, 'Too Short!').max(40, 'Too Long!').required('Full Name is required'),

  email: Yup.string().email('Невалідний email').required('Email is required'),

  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

interface UserFields {
  name: string;
  surname: string;
  email: string;
  phone: string;
  nationality: string;
  birth: string;
  gender: string;
  studingPlace: string;
  specialty: string;
  degree: string;
  workPlace: string;
  imageUrl: string;
  religion: string;
}

export default function () {
  const [form] = Form.useForm();

  const handleSubmit = () => {};

  const initialValues = {
    name: 'Василь',
    surname: 'Хартманє',
    email: 'admin@eplast.com',
    phone: '00 00 000 00',
    nationality: 'Національність',
    birth: '06-08-1949',
    gender: 'Жінка',
    studingPlace: 'Львів',
    specialty: 'Ветеренарія',
    degree: 'Бакалавр',
    workPlace: 'Кременчук',
    imageUrl: 'https://eplast.azurewebsites.net/images/Users/374756d8-8f87-48df-ab20-b268842392be.jpg',
    religion: 'Агностик',
  };

  useEffect(() => {

  }, [initialValues]);

  const uploadPhotoConfig = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      if (info.file.status === 'done') {
        initialValues.imageUrl = info.file.xhr.response;
      }
     // console.log(info.file.xhr.response);
      console.log(info);
    },
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {({ values, handleSubmit, handleChange, isValid, errors, touched }) => (
          <Form form={form}>
            <div className={styles.avatarWrapper}>
              <Avatar size={256} src={values.imageUrl} className="avatarElem" />
              <Upload {...uploadPhotoConfig} className={styles.changeAvatar}>
                <Button className={styles.changeAvatarBtn}>
                  <UploadOutlined /> Вибрати
                </Button>
              </Upload>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
