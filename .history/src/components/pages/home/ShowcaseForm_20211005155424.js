import React, { Component } from 'react';

class ShowcaseForm extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}

export default ShowcaseForm;