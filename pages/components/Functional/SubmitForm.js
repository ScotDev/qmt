import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';

export default function SubmitForm() {



    return (

        <div className="form-wrapper">
            <h3 className="form-title">Send us your music</h3>
            <p className="form-text">Contact us by email or fill in the form below!</p>
            <a className="form-email" target="_blank" href="mailto:the.quarantine.mixtape@gmail.com"><i className="las la-envelope"></i>Email Us!</a>
            <Formik initialValues={{ name: '', instagram: '', music: '', email: '' }} validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}>

                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor="name" className="form-label">Artist/band name</label>
                        <Field as="input" type="name" name="name" />
                        <ErrorMessage name="name" component="div" />

                        <label htmlFor="email" className="form-label">Email address</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />

                        <label htmlFor="instagram" className="form-label">Instagram account</label>
                        <Field type="instagram" name="instagram" />
                        <ErrorMessage name="instagram" component="div" />

                        <label htmlFor="music" className="form-label">Link to music</label>
                        <Field type="music" name="music" />
                        <ErrorMessage name="music" component="div" />

                        <button type="submit" disabled={isSubmitting} className="btn-primary">
                            Submit
           </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

{/* <Form className="form"> */ }
{/* <fieldset>
                        <label htmlFor="name" className="form-label">Artist/band name</label>
                        {/* <input name="name" type="text" placeholder="Name*" required aria-required></input> */}
{/* <Field name="name" id="name" placeholder="Name*" required aria-required></Field> */ }
{/* </fieldset> */ }
{/* 
                    <fieldset>
                        <label htmlFor="instagram" className="form-label">Instagram account</label>
                        <input name="instagram" type="url" placeholder="Link to Instagram account"></input>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="music" className="form-label">Link to music</label>
                        <input name="music" type="url" placeholder="URL"></input>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input name="email" type="email" placeholder="Email address*" required aria-required></input>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="presskit" className="form-label" id="presskit-label">Presskit (If applicable)</label>
                        <button className="upload-btn-wrapper btn"><span><i className="las la-upload"></i> Upload a file</span>
                            <input name="presskit" type="file"></input>
                        </button>
                    </fieldset> */}

<button type="submit" value="Submit" className="btn-primary">Submit</button>

{/* </Form> */ }
{/* </Formik> */ }

        // </div>
//     )
// }
