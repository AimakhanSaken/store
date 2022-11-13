import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const defaultFormFields = {
    displayNAme: '',
    email: '',
    password: '',
    confirmPassword: '',
}




const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('pass do not match');
            return
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user,{displayName});
            resetFormFields();    
        } catch(error){
            if (error.code === 'auth/email-alredy-in-use'){
                alert('email alredy in use')
            } else {
                console.log('error', error);
            }
            
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div>
            <h1>Sign Up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput
                label='Display Name'
                type="text" 
                required 
                onChange={handleChange} 
                name='displayName' 
                value={displayName}
                 />

                <FormInput
                label='Email'
                type="email" 
                required 
                onChange={handleChange} 
                name='email' 
                value={email} 
                />

                <FormInput
                label='Password'
                type="password" 
                required 
                onChange={handleChange} 
                name='password' 
                value={password} 
                />

                <FormInput
                label="Confirm Password"
                type="password" 
                required 
                onChange={handleChange} 
                name='confirmPassword' 
                value={confirmPassword} 
                />

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm