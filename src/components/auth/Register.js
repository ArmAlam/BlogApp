import React, {useState} from "react";
import {withFormik, Form, ErrorMessage, Field} from "formik";
import * as Yup from 'yup';


const Register = ({
    isSubmitting
    }) => {

    return (
        <>
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field name='firstName' type='text'/>
                <ErrorMessage name='firstName' component='div' />
                <button disabled={isSubmitting} type="submit" >Submit</button> {/*{disable button during form submission}*/}
            </Form>
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
    validationSchema:Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Must be 2 characters')
            .max(10, 'Can \'t be more than 10')
            .required('First name is required')
    }),
    handleSubmit(values, {resetForm, setSubmitting}) {
        setTimeout( () => {
            setSubmitting(false);
            console.log(values);
        }, 1000);
    }
})(Register); // Receiving component as an argument and return with some extra capabilities