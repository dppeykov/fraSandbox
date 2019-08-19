import React from 'react';

const SignIn = ({ onRouteChange }) => {
    return(
        <article className="pa2 br3 ba white b--white-20 mv4 w-75 w-50-l mw6 center tc shadow-5">
            <form className="measure">
                <p className="tc f2">Sign In</p>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <div className="mt3">
                    <label className="db fw6 lh-copy f5" for="email-address">Email:</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-100 br3" type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f5" for="password">Password:</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-100 br3" type="password" name="password"  id="password" />
                </div>
                </fieldset>
                <div>
                    <input className="b ph3 pv2 input-reset br3 ba b--white white bg-transparent grow pointer f4 dib mt2" type="submit" value="Sign in" 
                    onClick={() => onRouteChange('home')}/>
                </div>
                <div className="lh-copy mt3">
                <a href="#0" className="f5 link dim white db mt4 mb2 underline">Register</a>
                </div>
            </form>
        </article>
    );
}

export default SignIn;