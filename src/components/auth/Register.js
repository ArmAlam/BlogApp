import React, {useState} from "react";


const Register = () => {
    const [firstName, setFirstName] = useState('');

    const handleChange = (e) => {
        setFirstName(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name='firstName' value={firstName } onChange={handleChange}/>
                <button type="submit" >Submit</button>
            </form>
        </>
    );
}

export default Register;