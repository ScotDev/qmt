import React from 'react';
import { useForm } from 'react-hook-form';
import getConfig from 'next/config';

export default function ReactHookForm() {
    const { publicRuntimeConfig } = getConfig();
    const FORM_ENDPOINT = publicRuntimeConfig.FORM_ENDPOINT;

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

                console.log("Data sent")
                console.log(res)
            })
    };


    console.log(errors);

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <input type="text" placeholder="Band/artist name" name="name" ref={register({ required: true })} />
                <input type="email" placeholder="Email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                <input type="url" placeholder="Instagram" name="instagram" ref={register({ maxLength: 200 })} />
                <input type="url" placeholder="Link to music (Spotify/soundcloud)" name="music" ref={register({ required: true })} />
                <input type="text" placeholder="Genre" name="genre" ref={register({ required: true })} />
                <select name="Signed or unsigned" name="signed" ref={register({ required: true })}>
                    <option value="signed">Signed</option>
                    <option value="unsigned">Unsigned</option>
                </select>

                <input type="file" name="file" ref={register} ></input>

                <input type="textarea" placeholder="Are you releasing anything else soon that you would like us to promote?" name="promotion" ref={register} />

                <button type="submit" className="btn-primary">Submit</button>
            </form>
        </div>
    );
}