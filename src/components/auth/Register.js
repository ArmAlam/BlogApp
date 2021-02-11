import React, {useState} from "react";
import {withFormik} from "formik";


const Register = ({values, handleChange, handleSubmit, handleBlur, isSubmitting}) => {

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                       name='firstName'
                       value={values.firstName }
                       onChange={handleChange}
                       onBlur={handleBlur}
                />
                <button disabled={isSubmitting} type="submit" >Submit</button> // disable button during form submission
            </form>
        </>
    );
}



// Formik is a higher order component
export default withFormik({
    mapPropsToValues(){
        return {
            firstName: '' // returning initial state value
        }
    },
    handleSubmit(values, {resetForm, setSubmitting}) {
        setTimeout( () => {
            setSubmitting(false);
            console.log(values);
        }, 1000);
    }
})(Register); // Receiving component as an argument and return with some extra capabilities