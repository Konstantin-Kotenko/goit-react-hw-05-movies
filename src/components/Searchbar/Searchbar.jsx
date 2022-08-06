import { Formik, Field, Form } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ query }, { resetForm }) => {
    onSubmit(query);
    resetForm();
  };
  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      <Form>
        <button type="submit">click</button>
        <Field type="text" name="query" />
      </Form>
    </Formik>
  );
};
