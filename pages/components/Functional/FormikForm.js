import React from 'react';
import getConfig from 'next/config';

import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {

    const { publicRuntimeConfig } = getConfig();
    const FORM_ENDPOINT = publicRuntimeConfig.FORM_ENDPOINT;

    const formik = useFormik({
        initialValues: {
            name: '', instagram: '', music: '', email: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Must be at least 2 characters')
                .required('Required'),
            instagram: Yup.string()
                .url('Must be a valid address')
                .required('Required'),
            music: Yup.string()
                .url('Must be a valid address')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
        }),
        onSubmit: values => {
            console.log("Values:", formik.values)
            const data = {
                submitter_name: values.name,
                submitter_email: values.email,
                instagram_account: values.instagram,
                music_link: values.music
            }
            axios.post(`${FORM_ENDPOINT}`, { data })
                .then(res => {
                    console.log("Data sent")
                })
        },
    });
    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Artist/band name</label>
            <input className="form-input"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                minLength={2}
                maxLength={60}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className="form-error-msg">{formik.errors.name}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input className="form-input"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}

                onBlur={formik.handleBlur}
                value={formik.values.email}
                maxLength={60}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="form-error-msg">{formik.errors.email}</div>
            ) : null}

            <label htmlFor="instagram">Instagram account</label>
            <input className="form-input"
                id="instagram"
                name="instagram"
                type="url"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.instagram}
                maxLength={150}
            />
            {formik.touched.instagram && formik.errors.instagram ? (
                <div className="form-error-msg">{formik.errors.instagram}</div>
            ) : null}

            <label htmlFor="music">Link to music</label>
            <input className="form-input"
                id="music"
                name="music"
                type="url"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.music}
                maxLength={150}
            />
            {formik.touched.music && formik.errors.music ? (
                <div className="form-error-msg">{formik.errors.music}</div>
            ) : null}

            {/* <input type="text" name="_honey" style="display:none"></input> */}

            {/* <label htmlFor="file" className="form-label" id="file-label">Presskit (If applicable)</label> */}
            {/* <button className="upload-btn-wrapper btn"><span><i className="las la-upload"></i> Upload a file</span> */}
            {/* <input name="file"
                type="file"
                id="file"
                onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0])
                }}
                onBlur={formik.handleBlur}
                value={formik.values.file}
            ></input> */}
            {/* </button> */}


            <button className="btn-primary" type="submit">Submit</button>
        </form>
    );
};

export default FormikForm;