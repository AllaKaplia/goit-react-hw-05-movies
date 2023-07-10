import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import { RiMovie2Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchBar({ onChange }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('queryMovie') ?? '';

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
    const queryMovie = values.queryMovie.trim();
  
    if (queryMovie === '') {
      toast.error('Name is required');
      return;
    }
  
    if (queryMovie.includes(' ')) {
      toast.error('Name cannot contain spaces');
      return;
    }
  
    const searchQuery = { queryMovie };
    setSearchParams(searchQuery);
    onChange(queryMovie);
    resetForm();
  };
  
  return (
    <Formik initialValues={initialValue} onSubmit={handleSearchForm}>
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