import * as yup from 'yup';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { RiMovie2Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchBar({ onChange }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('queryMovie') ?? '';

  const schema = yup.object().shape({
    queryMovie: yup
      .string()
      .matches(/^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я]+)*$/, 'Name is invalid')
      .required('Name is required'),
  });

  const initialValue = {
    queryMovie: movieName,
  };

  useEffect(() => {
    if (!movieName) {
      return;
    }

    onChange(movieName);
  }, [movieName, onChange]);

  const handleSearchForm = (values, { resetForm }) => {
    const queryMovie = values.queryMovie;
    const searchQuery = queryMovie !== '' ? { queryMovie } : {};

    setSearchParams(searchQuery);
    onChange(queryMovie);
    resetForm();
  };
  
  return (
    <Formik initialValues={initialValue} validationSchema={schema} onSubmit={handleSearchForm}>
      {({ handleSubmit, errors }) => (
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Field type="text" name="queryMovie" autoFocus placeholder="Search movies" />
          <button type="submit">
            <span>Search</span>
            <RiMovie2Line size={24} />
          </button>
          {errors.queryMovie && toast.error(errors.queryMovie.message)}
        </Form>
      )}
    </Formik>
  );
}