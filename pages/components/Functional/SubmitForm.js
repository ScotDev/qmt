import React from 'react'

export default function SubmitForm() {
    return (
        <div className="form-wrapper">
            <h3 className="form-title">Send us your music</h3>
            <p className="form-text">Contact us by email or fill in the form below!</p>
            <a className="form-email" target="_blank" href="mailto:thequarantinemixtape@gmail.com"><i class="las la-envelope"></i>thequarantinemixtape@gmail.com</a>
            <form>
                <fieldset>
                    <label htmlFor="name" className="form-label">Artist/band name</label>
                    <input name="name" type="text" placeholder="Artist/band name*" required aria-required></input>
                </fieldset>

                <fieldset>
                    <label htmlFor="instagram" className="form-label">Instagram account</label>
                    <input name="instagram" type="url" placeholder="Link to Instagram account"></input>
                </fieldset>

                <fieldset>
                    <label htmlFor="music" className="form-label">Link to music</label>
                    <input name="music" type="url" placeholder="Link to music"></input>
                </fieldset>

                <fieldset>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input name="email" type="email" placeholder="Email address*" required aria-required></input>
                </fieldset>

                <fieldset>
                    <label htmlFor="presskit" className="form-label" id="presskit-label">Presskit (If applicable)</label>
                    <button class="upload-btn-wrapper btn"><span><i class="las la-upload"></i> Upload a file</span>
                        <input name="presskit" type="file"></input>
                    </button>
                </fieldset>

                <button type="submit" value="Submit" className="btn-primary">Submit</button>

            </form>

        </div>
    )
}
