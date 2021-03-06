import React, {useState} from "react";
import {withFormik, Form, ErrorMessage, Field} from "formik";
import {Button, TextField, Typography} from "@material-ui/core";
import * as Yup from 'yup';


const Register = ({
    values,
    isSubmitting,
    handleChange,
    handleBlur
    }) => {

    return (
        <>
            <Typography variant='h5' component='h2'>
                Register
            </Typography>
            <Form noValidate>
                {/*<label htmlFor="firstName">First Name</label>*/}
                {/*<Field name='firstName' type='text'/>*/}
                {/*<ErrorMessage name='firstName' component='div' />*/}
                <TextField
                    type='text'
                    label='First Name'
                    name='firstName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    fullWidth
                />
                <ErrorMessage name='firstName' component='div' />
                <TextField
                    type='text'
                    label='Last Name'
                    name='lastName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    fullWidth
                />
                <ErrorMessage name='lastName' component='div' />
                <TextField
                    type='email'
                    label='Email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    fullWidth
                />
                <ErrorMessage name='email' component='div' />
                <TextField
                    type='password'
                    label='Password'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    fullWidth
                />
                <ErrorMessage name='password' component='div' />
                <TextField
                    type='password'
                    label='Confirm Password'
                    name='confirmPassword'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    fullWidth
                />
                <ErrorMessage name='confirmPassword' component='div' />
                <Button disabled={isSubmitting}
                        type="submit"
                        variant='contained'
                        color='primary' >
                    Register
                </Button> {/*{disable button during form submission}*/}
            </Form>
        </>
    );
}



// Formik is a higher order component
export default withFormik({
    mapPropsToValues(){
        return {
            firstName: '', // returning initial state value
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    validationSchema:Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Must be 2 characters')
            .max(10, 'Can \'t be more than 10')
            .required('First name is required'),
        lastName: Yup.string()
            .min(2, 'Must be 2 characters')
            .max(10, 'Can \'t be more than 10')
            .required('First name is required'),
        email: Yup.string()
            .email('Must be a valid email')
            .required('Email is required'),
        password: Yup.string()
            .min(5, 'Minimum 5 characters')
            .max(10, 'Max 10 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must be matched')
            .required('Please match'),

    }),
    handleSubmit(values, {resetForm, setSubmitting}) {
        setTimeout( () => {
            setSubmitting(false);
            console.log(values);
        }, 1000);
    }
})(Register); // Receiving component as an argument and return with some extra capabilities