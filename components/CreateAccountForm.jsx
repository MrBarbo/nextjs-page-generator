"use client";
import { useCallback } from "react";
import FullNameForm from "./FullNameForm";
import { useNavigate } from "react-router-dom";
import styles from "./CreateAccountForm.module.css";

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
    <div className={styles.loginform}>
      <div className={styles.frame1}>
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
      <div className={styles.frame2}>
        <div
          className={styles.buttoncreateacc}
          onClick={() => router.push('/Formulario')}
        >
          <div className={styles.create_account}>Create Account</div>
        </div>
      </div>
      <div className={styles.frame3}>        
        <div className={styles.already_have_a}>Already have an account?</div>
        <div className={styles.log_in} onClick={() => router.push('/Formulario')}>
          Log in
        </div>        
      </div>
    </div>
  );
};

export default CreateAccountForm;
