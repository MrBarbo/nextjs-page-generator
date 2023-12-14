"use client";
import { useCallback } from "react";
import FullNameForm from "./FullNameForm";
import { useNavigate } from "react-router-dom";
import "./CreateAccountForm.css";

import { useRouter } from 'next/navigation'

const CreateAccountForm = () => {  

  const router = useRouter();
  const onButtonCreateAccContainerClick = useCallback(() => {() => router.push('/Formulario')});

  const onLogInTextClick = useCallback(() => {
    // Please sync "Formulario" to the project
  }, []);

  const onText4Click = useCallback(() => {
    // Please sync "Formulario" to the project
  }, []);

  return (
    <div className="loginform">
      <div className="frame1">
        <div className="title">Create your Free Account</div>
      </div>
      <FullNameForm
        inputId="1"
        inputName="name"
        inputPlaceholder="Full Name"
        inputLabel="Enter full name here"
        inputAutocomplete="name"
        propOverflow="unset"
        propOverflow1="unset" 
      />
      <FullNameForm
        inputId="2"
        inputName="mail"
        inputPlaceholder="Email"
        inputLabel="Enter e-mail here"
        inputAutocomplete="email"
        propOverflow="unset"
        propOverflow1="unset" 
      />
      <FullNameForm
        inputId="3"
        inputName="password"
        inputPlaceholder="Password"
        inputLabel="Enter Password here"
        inputAutocomplete="current-password"
        inputType="password"       
        propOverflow="unset"
        propOverflow1="unset" 
      />
      <div className="frame2">
        <div
          className="buttoncreateacc"
          onClick={() => router.push('/Formulario')}
        >
          <div className="create-account">Create Account</div>
        </div>
      </div>
      <div className="frame3">        
        <div className="already-have-a">Already have an account?</div>
        <div className="log-in" onClick={() => router.push('/Formulario')}>
          Log in
        </div>        
      </div>
      <div className="frame1">
        <div className="create-account">- OR -</div>
      </div>
    </div>
  );
};

export default CreateAccountForm;
