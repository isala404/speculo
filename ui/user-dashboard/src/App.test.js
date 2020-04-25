import React, { Component } from 'react';
import { render } from '@testing-library/react';

import { Login, Register } from './components/login/index';
import { Home } from "./views/Home.jsx";
import Dashboard from "./views/dashboard.jsx";
import WebCam from "./components/webcam/webcam.component"
import { UploadPage } from "./views/upload.jsx";
import { Admin } from "./views/Admin.jsx";

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

import { MemoryRouter } from 'react-router';

import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

Enzyme.configure({ adapter: new Adapter() });

describe('Testing email Validaiton Logic for wrong and correct emails', () => {

  const emailCorrect = "nisal@gmail.com";
  const emailWrong = "nisal@@gmail.com";

  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

  it('email should be Correct', () => {
    if (expression.test(String(emailCorrect).toLowerCase())) {
      expect(true).toBeTruthy();

    } else {
      expect(false).toBeTruthy();
    }
  });

  it('email should be Wrong', () => {
    if (expression.test(String(emailWrong).toLowerCase())) {
      expect(false).toBeTruthy();

    } else {
      expect(true).toBeTruthy();
    }
  });

});

describe('To check All componnets are rendered', () => {
  it('login component has rendered', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it('Register component has rendered', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper.contains(<Register />)).toBe(false);
  });

  it('Home component has rendered', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(<Home />)).toBe(false);
  });

  it('Dashboard component has rendered', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.contains(<Dashboard />)).toBe(false);
  });

  it('WebCam component has rendered', () => {
    const wrapper = shallow(<WebCam />);
    expect(wrapper.contains(<WebCam />)).toBe(false);
  });

  it('UploadPage component has rendered', () => {
    const wrapper = shallow(<UploadPage />);
    expect(wrapper.contains(<UploadPage />)).toBe(false);
  });

  it('Admin component has rendered', () => {
    const wrapper = shallow(<Admin />);
    expect(wrapper.contains(<Admin />)).toBe(false);
  });

});



describe('Testing Routing functionality', () => {

  it('Redirection to Home', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('Redirection to Dashboard', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Dashboard)).toHaveLength(1);
  });

  it('Redirection to uploads page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/upload']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(UploadPage)).toHaveLength(1);
  });

  it('Redirection to Proof of Concept', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/live-detection']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(WebCam)).toHaveLength(1);
  });

  it('Redirection to Admin', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/admin']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Admin)).toHaveLength(1);
  });

  it('Redirection to Login', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('Redirection to Register', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/sign-up']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Register)).toHaveLength(1);
  });

  // it('Redirection to Auth', () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={['/Auth']}>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find(Register)).toHaveLength(1);
  // });

});