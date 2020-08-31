import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import getConfig from 'next/config';
import * as yup from "yup";

import Loading from '../Helpers/LoadingSmall'

export default function ReactHookForm() {
    const { publicRuntimeConfig } = getConfig();
    const FORM_ENDPOINT = publicRuntimeConfig.FORM_ENDPOINT;

    const [fileName, setfileName] = useState(false)
    const [fileSize, setfileSize] = useState(false)
    const [loading, setloading] = useState(false)
    const [disableBtn, setdisableBtn] = useState(false)
    const [afterSubmitMsg, setafterSubmitMsg] = useState(false)

    const schema = yup.object().shape({
        name: yup.string()
            .max(250, 'Too Long!')
            .required('Required'),
        email: yup.string()
            .email('Invalid email')
            .required('Required'),
        instagram: yup.string()
            .max(150, 'Too Long!'),
        music: yup.string()
            .max(300, 'Too Long!'),
        genre: yup.string()
            .max(150, 'Too Long!'),
        // select: yup.string()
        //     .required('Required'),
        promotion: yup.string()
            .max(400, 'Too Long!'),
        // file: yup.mixed().test("size", "Please select a smaller file.", (value) => {
        //     return value && value[0].size < 5000000
        // })
        file: yup.mixed().test("size", "Please select a smaller file.", (value) => {
            console.log("File size is", value)
            return value && value[0].size < 5000000
        })
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    console.log(errors)

    const onSubmit = data => {
        setloading(true)
        setdisableBtn(true)
        let formData = new FormData()
        formData.append("file", data.file[0])
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("instagram", data.instagram)
        formData.append("music", data.music)
        formData.append("signed", data.signed)
        formData.append("promotion", data.promotion)

        fetch(`${FORM_ENDPOINT}`, {
            method: 'post',
            body: formData
        })
            .then(res => {
                setdisableBtn(true)
                setloading(false)
                setafterSubmitMsg("Thank you! We'll be in touch soon")
                console.log("Data sent")
            })
            .catch(err => {
                console.log(err)
                setdisableBtn(false)
                setloading(false)
                setafterSubmitMsg('Data could not be sent, please try again')
            })
    };
    return (
        <div className="form-wrapper">
            <h2 className="form-title">Send us your music</h2>
            <p className="form-text">We want to hear from you</p>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <fieldset>
                    <input type="text" placeholder="Band/artist name*" name="name" ref={register({ required: true })} className="standard-input" />
                    <p className="form-error">{errors.name?.message}</p>
                </fieldset>

                <fieldset>
                    <input type="email" placeholder="Email*" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} className="standard-input" />
                    <p className="form-error">{errors.email?.message}</p>
                </fieldset>

                <fieldset>
                    <input type="text" placeholder="Instagram handle" name="instagram" ref={register({ maxLength: 200 })} className="standard-input" />
                    <p className="form-error">{errors.instagram?.message}</p>
                </fieldset>

                <fieldset>
                    <input type="text" placeholder="Spotify/soundcloud link" name="music" ref={register({ required: true })} className="standard-input" />
                    <p className="form-error">{errors.music?.message}</p>
                </fieldset>

                <fieldset>
                    <input type="text" placeholder="Genre" name="genre" ref={register({ required: true })} className="standard-input" />
                    <p className="form-error">{errors.genre?.message}</p>
                </fieldset>

                <fieldset>
                    <select name="signed" ref={register({ required: true })}>
                        <option disabled defaultValue selected>Please select an option</option>
                        <option value="Signed">Signed with record label</option>
                        <option value="Unsigned">Unsigned</option>
                    </select>
                    <p className="form-error">{errors.signed?.message}</p>
                </fieldset>

                <fieldset>
                    <label htmlFor="file" className="form-label">Presskit (If available)</label>
                    <div className="btn-secondary file-upload-wrapper" >
                        <span><i className="las la-cloud-upload-alt"></i></span>

                        <input type="file" name="file" ref={register} onChange={(e) => {
                            setfileName(e.target.files[0].name)
                            setfileSize(e.target.files[0].size / 1000000)
                        }}></input>
                    </div>

                    <p className="file-info">{fileName ? fileName : "No file selected. File size limit is 5 MB"}

                        {errors.file ? <i id="error-icon" className="las la-times"></i> : <i id="success-icon" className="las la-check"></i>}




                        {/* {fileName && <p>{"This file is " + fileSize.toFixed(1) + " MB"}</p>} */}


                    </p>

                    {fileSize && "This file is " + fileSize.toFixed(2) + " MB"}


                    <p className="form-error">{errors.file?.message}</p>
                </fieldset>

                <fieldset>
                    <label htmlFor="promotion" className="form-label">Are you releasing anything else soon that you would like us to promote?</label>
                    <textarea type="text" placeholder="Tell us about it!" name="promotion" ref={register} />
                    <p className="form-error">{errors.promotion?.message}</p>
                </fieldset>

                <button type="submit" className="btn-primary" disabled={disableBtn}>Submit</button>



            </form>

            <p className="after-submit-msg">{afterSubmitMsg}</p>

            {loading && <Loading></Loading>}
        </div>
    );
}