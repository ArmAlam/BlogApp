import React, {useState} from "react";
import {withFormik, Form, ErrorMessage, Field} from "formik";
import {TextField, Button, Typography, withStyles} from "@material-ui/core";
import * as Yup from 'yup';
import styles from "./styles";

const Login = ({
                      values,
                      isSubmitting,
                      handleChange,
                      handleBlur,
                      classes
                  }) => {

    return (
        <div className={classes.form}>
            <Typography variant='h5' component='h2'>
                Login
            </Typography>
            <Form noValidate>
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
                <Button
                    className={classes.button}
                    disabled={isSubmitting}
                    type="submit"
                    variant='contained'
                    color='primary'
                >
                    Login
                </Button> {/*{disable button during form submission}*/}
            </Form>
        </div>
    );
}



// Formik is a higher order component
export default withStyles(styles)(withFormik({
    mapPropsToValues(){
        return {
            email: '', // returning initial state value
            password: '',
        }
    },
    validationSchema:Yup.object().shape({
        email: Yup.string()
            .email('Must be a valid email')
            .required('Email is required'),
        password: Yup.string()
            .min(5, 'Minimum 5 characters')
            .max(10, 'Max 10 characters')
            .required('Password is required'),

    }),
    handleSubmit(values, {resetForm, setSubmitting}) {
        setTimeout( () => {
            setSubmitting(false);
            console.log(values);
        }, 1000);
    }
})(Login)); // Receiving component as an argument and return with some extra capabilities