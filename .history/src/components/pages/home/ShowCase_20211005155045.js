import React, { Component } from 'react';

class ShowCase extends Component {
    render() {
        return (
           <>
           <section class="showcase">
        <div class="container grid">
            <div class="showcase-text">
                <h1>Easier Deployment</h1>
                <p>Deploy web apps of all kinds, from large scale enterise APIs to static wbsites for individuals.Flill out the form to try a demo of our platform</p>
                <a href="feature.html" class="btn btn-outline">Read More</a>
            </div>
            <div class="showcase-form card">
                <h2>Request a demo</h2>
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact">
                    <p class="hidden">
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    <div class="form-control">
                        <input type="text" name="name" id="" placeholder="Name" required>
                    </div>
                    <div class="form-control">
                        <input type="text" name="Company name" id="" placeholder="Company Name" required>
                    </div>
                    <div class="form-control">
                        <input type="email" name="email" id="" placeholder="Email" required>
                    </div>
                    <input type="submit" value="Send" class="btn btn-primary">
                </form>
            </div>
        </div>
    </section>
           </>
        );
    }
}

export default ShowCase;