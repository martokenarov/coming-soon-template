import React from 'react';
import {useFormik} from 'formik';
import styles from './NewsLetter.module.css';

type NewsLetterFormProps = {}

const NewsLetterForm:React.FC<NewsLetterFormProps> = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <form className={styles['form']} onSubmit={formik.handleSubmit}>
            <label className={styles['subtitle']} htmlFor="email">Notify Me When It's Ready</label>
            <div className={styles['inner-form']}>
                <div className={styles['email-form']}>
                    <input id="email" name="email" type="email" placeholder="your email" onChange={formik.handleChange} value={formik.values.email}></input>
                    <span className={styles['error']}>Email address is required</span>
                </div>
                <button type="submit">Subscribe</button>
            </div>
        </form>
    )
}

export default NewsLetterForm;