import React from 'react'

export default function SubmitForm() {
    return (
        <div className="form-wrapper">
            <form className="submit-form">
                <label htmlFor="name" className="form-label">Artist/band name</label>
                <input name="name" type="text" placeholder="Name" required aria-required></input>

                <label htmlFor="instagram" className="form-label">Instagram account</label>
                <input name="instagram" type="url" placeholder="Link to account"></input>

                <label htmlFor="email" className="form-label">Email address</label>
                <input name="email" type="email" placeholder="Email address" required aria-required></input>

                <label htmlFor="music" className="form-label">Link to music</label>
                <input name="music" type="url" placeholder="Music"></input>

                <label htmlFor="presskit" className="form-label">Presskit (If applicable)</label>
                <button class="upload-btn-wrapper btn"><span><i class="las la-upload"></i> Upload a file</span>
                    <input name="presskit" type="file"></input>
                </button>


                <input type="submit" value="Submit" className="btn-primary"></input>

            </form>

        </div>
    )
}
