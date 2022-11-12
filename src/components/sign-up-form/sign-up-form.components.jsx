import { useState } from "react";

const defaultFormFields = {
    displayNAme: '',
    email: '',
    password: '',
    confirmPassword: '',
}




const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayNAme, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={() => {}}>
                <label htmlFor="">Display name</label>
                <input type="text" onChange={handleChange} name='displayName' value={displayNAme}/>

                <label htmlFor="">Email</label>
                <input type="email" onChange={handleChange} name='email' value={email}/>

                <label htmlFor="">Password</label>
                <input type="password" onChange={handleChange} name='password' value={password}/>

                <label htmlFor="">Confirm Password</label>
                <input type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm