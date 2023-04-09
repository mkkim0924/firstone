import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import InputField from '../../UI/InputField/InputField';
import './styles.scss';

const LoginPage = () => {
  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .email('Must be a valid email address')
      .required('Please enter email address'),
    password: Yup.string().required('Must enter a valid password'),
  });
  const handleBlur = (e) => {
    e.target.onBlur();
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: loginUserSchema,
    validateOnBlur: handleBlur,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="login-signup-container">
      <div className="login-singup-form-container">
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaWQ9IlRhc2tSYWJiaXQiCiAgIGRhdGEtbmFtZT0iVGFza1JhYmJpdCBMb2dvdHlwZSIKICAgdmlld0JveD0iMCAwIDU5MiAxMDEiCiAgIHZlcnNpb249IjEuMSIKICAgc29kaXBvZGk6ZG9jbmFtZT0idHJfbG9nb19uZXcuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjEuMiAoYjhlMjViZTgsIDIwMjItMDItMDUpIgogICB3aWR0aD0iNTkyIgogICBoZWlnaHQ9IjEwMSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMzIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXczMCIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTpzbmFwLWdsb2JhbD0idHJ1ZSIKICAgICBpbmtzY2FwZTp6b29tPSIxLjQwOTM3MTEiCiAgICAgaW5rc2NhcGU6Y3g9IjQwNS41IgogICAgIGlua3NjYXBlOmN5PSIxNTAuMDY2OTMiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMzEyIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk2OSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMjE2IgogICAgIGlua3NjYXBlOndpbmRvdy15PSI4NyIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IlRhc2tSYWJiaXQiCiAgICAgd2lkdGg9IjU5MnB4IiAvPgogIDxnCiAgICAgaWQ9ImcxMjQiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwMy4zMSwtMTAwLjE2KSI+CiAgICA8cGF0aAogICAgICAgZD0ibSAxMTUuODMsMTc4LjQ1IHYgLTM3LjY2IGggLTEyLjUyIHYgLTEzIGggMTIuNTIgViAxMDkuNSBoIDE0LjQxIHYgMTguMjYgaCAxNy44OCB2IDEzIGggLTE3Ljg4IHYgMzcuNjYgYyAwLDQuODEgMi4xMSw3LjM2IDYuNzYsNy4zNiBoIDEwLjQ4IHYgMTMgSCAxMzcgYyAtMTIuMywwLjA0IC0yMS4xNywtNy44OCAtMjEuMTcsLTIwLjMzIHoiCiAgICAgICBzdHlsZT0iZmlsbDojMGEyYjE0IgogICAgICAgaWQ9InBhdGg5IiAvPgogICAgPHBhdGgKICAgICAgIGQ9Im0gMTg2LjU0LDE4Ny4yMiBjIDEyLjUyLDAgMjIuMDksLTguNjQgMjIuMDksLTIzLjkyIDAsLTE1LjI4IC05LjU3LC0yMy45MSAtMjIuMDksLTIzLjkxIC0xMi41MiwwIC0yMi4yNyw4LjYxIC0yMi4yNywyMy45MSAwLDE1LjMgOS42LDIzLjkyIDIyLjI3LDIzLjkyIHogTSAxNDkuMzcsMTYzLjMgYyAwLC0yNC40OCAxNi40NywtMzcuNTEgMzQuMjEsLTM3LjUxIDEwLjU1LDAgMTkuNTcsNC4xMSAyNSwxMiBWIDEyNy43NiBIIDIyMyB2IDcxLjA2IGggLTE0LjM3IHYgLTEwLjA3IGMgLTUuNDgsNy45IC0xNC41LDEyIC0yNSwxMiAtMTcuNzEsMCAtMzQuMjEsLTEzIC0zNC4yMSwtMzcuNSB6IgogICAgICAgc3R5bGU9ImZpbGw6IzBhMmIxNCIKICAgICAgIGlkPSJwYXRoMTEiIC8+CiAgICA8cGF0aAogICAgICAgZD0ibSAyMzEuODYsMTc5LjE1IGggMTUgYyAxLjY5LDYuMSA2LjA1LDguOTEgMTIuMjQsOC45MSA2LjQ4LDAgMTEsLTMuMzggMTEsLTkuMDUgMCwtMTYuNTYgLTM3LjQ0LC0yLjI2IC0zNy40NCwtMzEuMjggMCwtMTMuMTggMTEuNTMsLTIxLjkzIDI1LjE5LC0yMS45MyAxMy42NiwwIDI0LjA3LDcuOTEgMjUuNjIsMjAuMzggaCAtMTUgYyAtMS41NSwtNSAtNS4yNSwtNy42NCAtMTAuNywtNy42NCAtNS40NSwwIC0xMC4yNywzLjEyIC0xMC4yNyw4LjUgMCwxNi4xNCAzNy40MywyIDM3LjQzLDMxLjQzIDAsMTIuODggLTExLjI0LDIyLjQgLTI1LjkzLDIyLjQgLTE0LjY5LDAgLTI1LjYsLTguMTcgLTI3LjE0LC0yMS43MiB6IgogICAgICAgc3R5bGU9ImZpbGw6IzBhMmIxNCIKICAgICAgIGlkPSJwYXRoMTMiIC8+CiAgICA8cGF0aAogICAgICAgZD0ibSAzMzIuNjgsMTI3LjggaCAxNS42MyBMIDMyNC44MywxNjAgMzUxLDE5OC44MiBoIC0xNi43NSBsIC0yNS41LC0zNy43NCB6IE0gMjk0LjQsMTA5LjM2IGggMTQuNDEgdiA4OS40NiBoIC0xNC40IHoiCiAgICAgICBzdHlsZT0iZmlsbDojMGEyYjE0IgogICAgICAgaWQ9InBhdGgxNSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIDM1NS4zNCwxMjcuNzYgaCAxNC40MSB2IDEwLjU0IGEgMjguODcsMjguODcgMCAwIDEgMjQsLTEyLjUxIHYgMTQuOTQgYyAtMTMuNzksLTIuNCAtMjQuMDgsNC4xMiAtMjQuMDgsMTguNTYgdiAzOS41MyBIIDM1NS4zIFoiCiAgICAgICBzdHlsZT0iZmlsbDojMGEyYjE0IgogICAgICAgaWQ9InBhdGgxNyIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIDQyMC45MiwxODguMzYgYyA4LjU5LDAgMTcuNzUsLTUuNTIgMTcuNzUsLTE2LjI5IHYgLTcuNTEgbCAtMTkuNDMsNS4xIGMgLTYuNDgsMS44NSAtOSw0LjY4IC05LDkuNDkgLTAuMDIsNi4zNyA0Ljc2LDkuMjEgMTAuNjgsOS4yMSB6IG0gLTI1LjIsLTguMjEgYyAwLC0xMS42MiA2Ljc2LC0xNy45NCAyMC40MiwtMjEuNjcgbCAyMi41MywtNiB2IC00IGMgMCwtNS4yOCAtNC4zNywtOS4yMiAtMTIuMTEsLTkuMjIgLTYuMzQsMCAtMTIuMzksMi4zOSAtMTQuNDEsMTAuNjEgaCAtMTUuNDQgYyAyLjU0LC0xNi4xNCAxNC40LC0yNC4yIDI5Ljg1LC0yNC4yIDE2LjYsMCAyNi40Niw5IDI2LjQ2LDIyLjc4IHYgNTAuMzMgaCAtMTQuNDEgdiAtNy42NCBjIC01LjA3LDcgLTEzLjUyLDkuNjQgLTIwLjg0LDkuNjQgLTEyLjQ3LDAuMDQgLTIyLjA1LC02Ljk0IC0yMi4wNSwtMjAuNjMgeiIKICAgICAgIHN0eWxlPSJmaWxsOiMwYTJiMTQiCiAgICAgICBpZD0icGF0aDE5IiAvPgogICAgPHBhdGgKICAgICAgIGQ9Im0gNDk5LjIzLDE4Ny4yMiBjIDEyLjU0LDAgMjIuMTEsLTguNjQgMjIuMTEsLTIzLjkyIDAsLTE1LjI4IC05LjU3LC0yMy45MSAtMjIuMTEsLTIzLjkxIC0xMi41NCwwIC0yMi4yMyw4LjYxIC0yMi4yMywyMy45MSAwLDE1LjMgOS41NywyMy45MiAyMi4yMywyMy45MiB6IG0gLTIyLjIzLDEuNyB2IDkuOSBIIDQ2Mi41NSBWIDEwOS4zNiBIIDQ3NyB2IDI4LjMyIGMgNS42MiwtNy43OSAxNC40OSwtMTEuODYgMjUuMTksLTExLjg2IDE3LjYsMCAzNC4yMSwxMyAzNC4yMSwzNy41MiAwLDI0LjUyIC0xNi42MiwzNy40OCAtMzQuMjIsMzcuNDggLTEwLjcsMCAtMTkuNTcsLTQuMTcgLTI1LjE5LC0xMS45IHoiCiAgICAgICBzdHlsZT0iZmlsbDojMGEyYjE0IgogICAgICAgaWQ9InBhdGgyMSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIDU4MS44LDE4Ny4yMiBjIDEyLjUxLDAgMjIuMDksLTguNjQgMjIuMDksLTIzLjkyIDAsLTE1LjI4IC05LjU4LC0yMy45MSAtMjIuMDksLTIzLjkxIC0xMi41MSwwIC0yMi4yNyw4LjYxIC0yMi4yNywyMy45MSAwLDE1LjMgOS41NywyMy45MiAyMi4yNCwyMy45MiB6IG0gLTIyLjI3LDEuNyB2IDkuOSBoIC0xNC40MiB2IC04OS40NiBoIDE0LjQxIHYgMjguMzIgYyA1LjYyLC03Ljc5IDE0LjUsLTExLjg2IDI1LjIsLTExLjg2IDE3LjU5LDAgMzQuMiwxMyAzNC4yLDM3LjUyIDAsMjQuNTIgLTE2LjYsMzcuNDggLTM0LjE5LDM3LjQ4IC0xMC43MywwIC0xOS41OCwtNC4xNyAtMjUuMiwtMTEuOSB6IgogICAgICAgc3R5bGU9ImZpbGw6IzBhMmIxNCIKICAgICAgIGlkPSJwYXRoMjMiIC8+CiAgICA8cGF0aAogICAgICAgZD0ibSA2MjcuNCwxMjcuNzYgaCAxNC40NCB2IDcxLjA2IGggLTE0LjQxIHogbSA3LjE4LC0yNy42IGEgOS4yNCw5LjI0IDAgMCAxIDMuOTMsMC45MSA5LjIsOS4yIDAgMCAxIDUsMTAuMTEgOS4xNiw5LjE2IDAgMCAxIC0xOC4xNiwtMS44IDksOSAwIDAgMSAwLjYyLC0zLjU4IDguODUsOC44NSAwIDAgMSAyLC0zIDksOSAwIDAgMSAzLC0yIDguODYsOC44NiAwIDAgMSAzLjU2LC0wLjYyIHoiCiAgICAgICBzdHlsZT0iZmlsbDojMGEyYjE0IgogICAgICAgaWQ9InBhdGgyNSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIDY2Mi4xNywxNzguNDUgdiAtMzcuNjYgaCAtMTIuNTQgdiAtMTMgaCAxMi41NCBWIDEwOS41IGggMTQuNDEgdiAxOC4yNiBoIDE3Ljg4IHYgMTMgaCAtMTcuODggdiAzNy42NiBjIDAsNC44MSAyLjEsNy4zNiA2Ljc1LDcuMzYgaCAxMC40OCB2IDEzIEggNjgzLjMzIEMgNjcxLDE5OC44MiA2NjIuMTcsMTkwLjkgNjYyLjE3LDE3OC40NSBaIgogICAgICAgc3R5bGU9ImZpbGw6IzBhMmIxNCIKICAgICAgIGlkPSJwYXRoMjciIC8+CiAgPC9nPgo8L3N2Zz4K"
          alt="TaskRabbit logo"
          //   style="margin-left: auto; margin-right: auto;"
        />
        <FormikProvider value={formik}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <div className="form-control">
              <label htmlFor="email">Email Address</label>
              <InputField
                type="text"
                placeholder="Email address"
                name="email"
                value={formik.values.email}
                onHandleChange={formik.handleChange}
                error={Boolean(formik.touched.email && formik.errors.email)}
                helpertext={formik.errors.email}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Password</label>
              <InputField
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onHandleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                helpertext={formik.errors.password}
              />
            </div>
            <div className="forgot-password">
              <Link to={'/'}>Forgot password?</Link>
            </div>
            <button type="submit" className="login-signup-signupBtn">
              Log in
            </button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default LoginPage;
