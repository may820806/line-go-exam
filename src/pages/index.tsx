import Head from 'next/head';
import { useEffect, useRef } from 'react';
import styles from '@/styles/Home.module.scss';
import LabelInput from '@/components/LabelInput';
import LabelInputNumber from '@/components/LabelInputNumber';
import LabelTextarea from '@/components/LabelTextarea';
import useFlightArrival from '@/application/getFlightArrival';
import Button from '@/components/CustomizedButtons';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  flightNumberPattern,
  namePattern,
  phonePattern,
  idPassportNumberPattern,
} from '@/utils/regexp';

export default function Home() {
  // const { flightData } = useFlightArrival();

  type TFormValues = {
    airport: string;
    flight: string;
    customerName: string;
    phone: string;
    idPassportNumber: string;
    note: string;
  };

  const valuesSchema = Yup.object().shape({
    flight: Yup.string()
      .matches(flightNumberPattern, '航班編號格式錯誤')
      .required('航班編號為必填'),
    customerName: Yup.string()
      .matches(namePattern, '姓名格式錯誤')
      .required('姓名為必填'),
    phone: Yup.string().required('電話為必填').matches(phonePattern, '電話格式錯誤'),
    idPassportNumber: Yup.string().required('身份證字號/護照編號為必填'),
  });

  const submitForm = (values: TFormValues) => {
    console.log('values', values);
  };

  return (
    <>
      <Head>
        <title>送機行程 | Line go</title>
        <meta name="description" content="送機行程" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${styles.main}`}>
        <h1>送機行程</h1>
        <Formik
          initialValues={{
            airport: '桃園國際機場 第一航廈',
            flight: '',
            customerName: '',
            phone: '',
            idPassportNumber: '',
            note: '',
          }}
          validationSchema={valuesSchema}
          onSubmit={(values) => {
            submitForm(values);
            
          }}
        >
          {(props) => (
            <form onSubmit={(e)=>{
              e.preventDefault();
              props.handleSubmit();
            }}>
              <LabelInput
                label="下車機場"
                value="桃園國際機場 第一航廈"
                inputName="airport"
                disabled
              />
              <LabelInput
                label="航班編號"
                inputName="flight"
                {...props.getFieldProps('flight')}
                error={props.errors.flight ? true : false}
              />

              <h2>旅客資訊</h2>
              <LabelInput
                label="姓名"
                inputName="customerName"
                {...props.getFieldProps('customerName')}
                error={props.errors.customerName ? true : false}
              />

              <LabelInput
                label="電話"
                inputName="phone"
                {...props.getFieldProps('phone')}
                error={props.errors.phone ? true : false}
              />

              <LabelInput
                label="身份證字號/護照編號"
                inputName="idPassportNumber"
                {...props.getFieldProps('idPassportNumber')}
                error={props.errors.idPassportNumber ? true : false}
              />

              <LabelTextarea
                label="乘車備註"
                inputName="note"
                {...props.getFieldProps('note')}
                minRows={4}
              />
              <input className={styles[`submit-button`]} type="submit" />
            </form>
          )}
        </Formik>
      </main>
    </>
  );
}
