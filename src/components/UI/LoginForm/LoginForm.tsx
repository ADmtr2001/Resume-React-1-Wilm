import React, {FC, useState} from 'react';

import Button from "../Button/Button";
import NavbarIconButton from "../../Navbar/NavbarIconButton";
import {useFormik} from 'formik';

import {signInWithGoogle} from "../../../common/firebase/firebase-config";
import {login, register} from "../../../common/firebase/auth";
import {useAppDispatch} from "../../../hooks/redux";
import {setIsLoginVisible} from "../../../store/reducers/global/globalSlice";

import {Wrapper} from "./LoginForm.styles";
import {AiOutlineGoogle} from '../../../common/react-icons/icons';

import * as Yup from 'yup';

let timer: ReturnType<typeof setTimeout> | null = null;

const LoginForm: FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [authError, setAuthError] = useState('');

  const dispatch = useAppDispatch();

  const loginWithGoogle = () => {
    signInWithGoogle();
    hideModal();
  }

  const handleChangeOnLoginButton = () => {
    setIsLogin(true);
    setAuthError('');
    if (timer) clearTimeout(timer);
  }

  const handleChangeOnRegisterButton = () => {
    setIsLogin(false);
    setAuthError('');
    if (timer) clearTimeout(timer);
  }

  const hideModal = () => {
    dispatch(setIsLoginVisible(false));
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Must be 6 characters or more').max(15, 'Must be 15 characters or less').required('Required'),
    }),
    onSubmit: (values) => {
      if (!!formik.errors.email || !!formik.errors.password) return;

      if (isLogin) {
        login(values.email, values.password)
          .then((user) => {
            if (user) {
              hideModal();
            } else {
              setAuthError('Wrong email/password')
              timer = setTimeout(() => {
                setAuthError('');
                timer = null;
              }, 3000);
            }
          });
      } else {
        register(values.email, values.password)
          .then((user) => {
            if (user) {
              hideModal();
            } else {
              setAuthError('Wrong email/password')
              timer = setTimeout(() => {
                setAuthError('');
                timer = null;
              }, 3000);
            }
          });
      }
    }
  });

  return (
    <>
      <div className='blur-container' onClick={hideModal}/>
      <Wrapper>
        <div className='buttons-container'>
          <Button color='white' hoverColor='black' hoverBackground='white'
                  onClick={handleChangeOnLoginButton} className={isLogin ? 'active' : ''}>Login</Button>
          <Button color='white' hoverColor='black' hoverBackground='white' onClick={handleChangeOnRegisterButton}
                  className={isLogin ? '' : 'active'}>
            Sign Up
          </Button>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            placeholder="emilia.wolst@gmail.com"
            type="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && <div className='error-container'>{formik.errors.email}</div>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="jq42lxi43"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password &&
						<div className='error-container'>{formik.errors.password}</div>}

          <div className='auth-error-container'>
            {authError && <p>{authError}</p>}
          </div>

          <Button type='submit'>{isLogin ? 'Login' : 'Sign Up'}</Button>
        </form>

        <div className='additional-container'>
          <NavbarIconButton icon={<AiOutlineGoogle/>} onClick={loginWithGoogle}/>
        </div>
      </Wrapper>
    </>
  );
};

export default LoginForm;