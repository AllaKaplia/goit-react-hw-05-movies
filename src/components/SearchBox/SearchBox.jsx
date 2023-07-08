import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { RiMovie2Line } from 'react-icons/ri';


export default function SearchBar(){
    const schema = yup.object().shape({
        queryMovie: yup
        .string()
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name is invalid')
        .required('Name is required'),
    })

    const initialValue = {
        queryMovie: ''
    }

    
   
    return (
        <Formik initialValues={initialValue} validationSchema={schema} >
            <Form autoComplete="off">
                <Field 
                type="text" 
                name='queryMovie'
                autoFocus
                placeholder="Search movies"
                />
                <button type='submit'>
                    <span>Search</span>
                    <RiMovie2Line />
                </button>
            </Form>
        </Formik>
    )
}