import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import getConfig from 'next/config';
import * as yup from "yup";

import Loading from '../Helpers/LoadingSmall'

export default function ReactHookForm() {
    const { publicRuntimeConfig } = getConfig();
    const FORM_ENDPOINT = publicRuntimeConfig.FORM_ENDPOINT;

    const [fileName, setfileName] = useState("No file selected.")
    const [fileSize, setfileSize] = useState(false)
    const [fileErrors, setfileErrors] = useState(false)
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
        promotion: yup.string()
            .max(400, 'Too Long!')
        // file: yup.mixed().test("size", "File size may not exceed 5 MB.", (value) => {
        //     console.log("Errors here ", errors)
        //     return value && value[0].size < 5000000
        // })
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });


    useEffect(() => {
        if (fileSize > 5) {
            setfileErrors("File size may not exceed 5 MB")
            console.log(fileErrors)
            console.log(fileSize)
        } else if (fileSize <= 5 || fileSize.length < 1) {
            setfileErrors(false)
        }

    }, [fileSize])


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

        if (fileErrors) {
            setafterSubmitMsg('Please add a smaller file')
            setdisableBtn(false)
            setloading(false)
        } else {
            setafterSubmitMsg(false)
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
        }

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
                    <select name="signed" ref={register}>
                        {/* <option disabled defaultValue selected>Please select an option</option> */}
                        <option value="Unsigned">Unsigned artist/band</option>
                        <option value="Signed">Signed with record label</option>
                    </select>
                    <p className="form-error">{errors.signed?.message}</p>
                </fieldset>

                <fieldset>
                    <label htmlFor="file" className="form-label">Presskit (If available)</label>
                    <div className="btn-secondary file-upload-wrapper" >
                        <span><i className="icon-upload"></i></span>

                        <input type="file" name="file" ref={register} onChange={(e) => {
                            setfileName(e.target.files[0].name)
                            setfileSize(e.target.files[0].size / 1000000)
                        }}></input>
                    </div>

                    {/* <p className="file-info">{fileName ? fileName : "No file selected. File size limit is 5 MB"} */}
                    <p className="file-info">{fileName} {fileSize === null && " File size limit is 5 MB"}
                        {fileErrors ? <i className="icon-cross"></i> : <i className="icon-tick"></i>}

                    </p>

                    {fileSize && "This file is " + fileSize.toFixed(2) + " MB"}


                    <p className="form-error">{fileErrors}</p>
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