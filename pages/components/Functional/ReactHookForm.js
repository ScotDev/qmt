import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import getConfig from 'next/config';

export default function ReactHookForm() {
    const { publicRuntimeConfig } = getConfig();
    const FORM_ENDPOINT = publicRuntimeConfig.FORM_ENDPOINT;

    const [fileName, setfileName] = useState(false)
    const [disableBtn, setdisableBtn] = useState(false)
    const [afterSubmitMsg, setafterSubmitMsg] = useState(false)

    const { register, handleSubmit, errors, setValue } = useForm();

    const onSubmit = data => {
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
                setafterSubmitMsg('Submitted successfully')
                console.log("Data sent")
            })
            .catch(err => {
                console.log(err)
                setafterSubmitMsg('Data could not be sent')
            })
    };


    console.log(errors);

    return (
        <div className="form-wrapper">
            <h2 className="form-title">Send us your music</h2>
            <p className="form-text">We want to hear from you</p>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <fieldset>
                    <input type="text" placeholder="Band/artist name*" name="name" required ref={register({ required: true })} />
                </fieldset>

                <fieldset>
                    <input type="email" placeholder="Email*" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                </fieldset>

                <fieldset>
                    <input type="url" placeholder="Instagram" name="instagram" ref={register({ maxLength: 200 })} />
                </fieldset>

                <fieldset>
                    <input type="url" placeholder="Link to music (Spotify/soundcloud)" name="music" ref={register({ required: true })} />
                </fieldset>

                <fieldset>
                    <input type="text" placeholder="Genre" name="genre" ref={register({ required: true })} />
                </fieldset>

                <fieldset>
                    <select name="signed" ref={register({ required: true })}>
                        <option value="signed">Signed</option>
                        <option value="unsigned">Unsigned</option>
                    </select>
                </fieldset>

                <fieldset>
                    <p className="form-label" id="file-label">Presskit (If applicable)</p>
                    {/* <label htmlFor="file" className="btn-secondary file-btn" >Upload a file <i className="las la-upload"></i></label> */}
                    {/* <button className="btn-secondary">Upload a file <i className="las la-upload"></i></button> */}
                    <input type="file" name="file" ref={register} onChange={e => {
                        setfileName(e.target.files[0].name)
                    }}></input>
                    <p>{fileName ? fileName : "No file selected"} {fileName && <i className="las la-check"></i>}</p>
                </fieldset>

                <fieldset>
                    <label htmlFor="promotion" className="form-label">Are you releasing anything else soon that you would like us to promote?</label>
                    <textarea type="text" rows="4" cols="50" placeholder="Tell us about it!" name="promotion" ref={register} />
                </fieldset>

                <button type="submit" className="btn-primary" disabled={disableBtn}>Submit</button>
                <p>{afterSubmitMsg}</p>
            </form>
        </div>
    );
}