import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const SearchForm = styled(Form)`
  display: flex;
  margin: 0 auto;
  justify-content: center;

  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.normal};
  overflow: hidden;
`;

const Button = styled.button`
  color: white;
  background-color: rgb(63, 81, 181);
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 4px 0 0 4px;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const Searchbar = ({ onSubmit, value }) => {
  return (
    <Formik
      initialValues={{ query: value ?? '' }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <SearchForm>
        <Button type="submit">
          <BsSearch />
        </Button>
        <Field type="text" name="query" />
      </SearchForm>
    </Formik>
  );
};
