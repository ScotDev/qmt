import React, { useState } from 'react';
import getConfig from 'next/config';

import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    const { publicRuntimeConfig } = getConfig();
    const FORM_ENDPOINT = publicRuntimeConfig.FORM_ENDPOINT;
    const [fileName, setfileName] = useState(false);
    const [fileData, setfileData] = useState(null)

    const formik = useFormik({
        initialValues: {
            name: '', instagram: '', music: '', email: '', file: ''
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

            let data = new FormData();

            data.append('name', values.name)
            data.append('email', values.email)
            data.append('instagram', values.instagram)
            data.append('music', values.music)
            data.append('file', values.file)
            console.log(data)
            console.log(values)
            // return fetch(FORM_ENDPOINT, { method: 'post', headers: new Headers({ Accept: 'multipart/form-data' }), body: data })
            //     .then(res => res.json())
            //     .then(data => console.log(data))
            // return axios({
            //     method: 'post',
            //     url: FORM_ENDPOINT,
            //     data: data,
            //     headers: { 'Content-Type': 'multipart/form-data' }
            // });
            // axios.post(`${FORM_ENDPOINT}`, formData, config)
            //     .then(res => {
            //         console.log("Data sent")
            //     })
        }
    });
    return (
        <div className="form-wrapper">
            <h3 className="form-title">Send us your music</h3>
            <p className="form-text">We want to hear from you</p>
            <form className="form" onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <fieldset>
                    <label htmlFor="name">Artist/band name</label>
                    <input
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

                </fieldset>

                <fieldset>
                    <label htmlFor="email">Email Address</label>
                    <input
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
                </fieldset>

                <fieldset>
                    <label htmlFor="instagram">Instagram account</label>
                    <input
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
                </fieldset>

                <fieldset>
                    <label htmlFor="music">Link to music</label>
                    <input
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
                </fieldset>

                <fieldset>
                    <p className="form-label" id="file-label">Presskit (If applicable)</p>
                    <label htmlFor="file" className="btn-secondary file-btn" >Upload a file <i className="las la-upload"></i></label>
                    <input
                        name="file"
                        type="file"
                        id="file"
                        onChange={(event) => {
                            formik.handleChange("file", event.target.files[0])
                            // formik.setFieldValue('file', event.target.files[0])
                            setfileData(event.target.files[0])
                            setfileName(event.target.files[0].name)
                        }}
                        onBlur={formik.handleBlur}
                        value={formik.values.file}
                    ></input>
                    <p>{fileName ? fileName : "No file selected"} {fileName && <i className="las la-check"></i>}</p>
                </fieldset>
                {/* 
                <button className="btn-primary" type="submit" disabled={formik.submitCount > 0}>Submit</button> */}
                <button className="btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormikForm;