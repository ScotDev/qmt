import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import getConfig from 'next/config';

import Loading from '../Helpers/LoadingSmall'

export default function ReactHookForm() {
    const { publicRuntimeConfig } = getConfig();
    const FORM_ENDPOINT = publicRuntimeConfig.FORM_ENDPOINT;

    const [fileName, setfileName] = useState(false)
    const [loading, setloading] = useState(false)
    const [disableBtn, setdisableBtn] = useState(false)
    const [afterSubmitMsg, setafterSubmitMsg] = useState(false)

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        setloading(true)
        let formData = new FormData()
        formData.append("file", data.file[0])
        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("instagram", data.instagram)
        formData.append("music", data.music)
        formData.append("signed", data.signed)
        formData.append("promotion", data.promotion)

        console.log("formData:", data)
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
                setloading(false)
                setafterSubmitMsg('Data could not be sent, please try again')
            })
    };


    console.log(errors);

    return (
        <div className="form-wrapper">
            <h2 className="form-title">Send us your music</h2>
            <p className="form-text">We want to hear from you</p>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <fieldset>
                    <input type="text" placeholder="Band/artist name*" name="name" required ref={register({ required: true })} className="standard-input" />
                </fieldset>

                <fieldset>
                    <input type="email" placeholder="Email*" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} className="standard-input" />
                </fieldset>

                <fieldset>
                    <input type="text" placeholder="Instagram handle" name="instagram" ref={register({ maxLength: 200 })} className="standard-input" />
                </fieldset>

                <fieldset>
                    <input type="text" placeholder="Spotify/soundcloud link" name="music" ref={register({ required: true })} className="standard-input" />
                </fieldset>

                <fieldset>
                    <input type="text" placeholder="Genre" name="genre" ref={register({ required: true })} className="standard-input" />
                </fieldset>

                <fieldset>
                    <select name="signed" ref={register({ required: true })}>
                        <option value="Signed">Signed with record label</option>
                        <option value="Unsigned">Unsigned</option>
                    </select>
                </fieldset>

                <fieldset>
                    <label htmlFor="file" className="form-label">Presskit (If available)</label>
                    <div className="btn-secondary file-upload-wrapper" >
                        <span><i className="las la-cloud-upload-alt"></i></span>

                        <input type="file" name="file" ref={register} onChange={e => {
                            setfileName(e.target.files[0].name)
                        }}></input>
                    </div>

                    <p>{fileName ? fileName : "No file selected"} {fileName && <i className="las la-check"></i>}</p>
                </fieldset>

                <fieldset>
                    <label htmlFor="promotion" className="form-label">Are you releasing anything else soon that you would like us to promote?</label>
                    <textarea type="text" placeholder="Tell us about it!" name="promotion" ref={register} />
                </fieldset>

                <button type="submit" className="btn-primary" disabled={disableBtn}>Submit</button>



            </form>

            <p>{afterSubmitMsg}</p>

            {loading && <Loading></Loading>}
        </div>
    );
}