"use client";
import Router from "next/router";
import "../app/globals.css";

import { useState } from "react";
import Input from "../components/Input";
import styles from "./Formulario.module.css";

const TestPage = () => {
  
  const [inputs, setInputs] = useState([]);
  const [idCounter, setIdCounter] = useState(3);

  const handleInputChange = (inputName, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [inputName]: value,
    }));
  };

  const addNewInput = () => {
    const newInput = {
      inputId: `${idCounter}`,
      inputName: `input${idCounter}`,
      inputTitle: "",
      inputLabel: `input ${idCounter} here...`,
      value: "",
    };
  
    setInputs((prevInputs) => [...prevInputs, newInput]);
    setIdCounter((prevCounter) => prevCounter + 1);
  };

  const link = "/"+inputs.name;

  //Manejador para mandar contenido por query a la pagina generada
  const handleSubmit2 = () => {
    const inputValues = inputs.reduce(
      (acc, input) => ({ ...acc, [input.inputName]: input.value }),
      {}
    );
  
    // Asegúrate de que todos los inputs y sus valores estén presentes en inputValues
    console.log("inputValues:", inputValues);
  
    Router.push({
      pathname: "/test2",
      query: inputValues,
    });
  };

  return (
    <div className={styles.formulario}>
      <main className={styles.input_parent}>
        <Input
          inputId="1"
          inputName={`input1`}
          inputTitle=""
          inputLabel="input1 here"
          onInputChange={(value) => handleInputChange('input1', value)}
        />
        <Input
          inputId="2"
          inputName={`input2`}
          inputTitle=""
          inputLabel="input2 here..."
          onInputChange={(value) => handleInputChange('input2', value)}
        />
        {Object.keys(inputs).map((inputName) => (
          <Input
            key={inputName}
            inputId={inputName}
            inputName={inputName}
            inputTitle={inputName}
            inputLabel={inputName}
            onInputChange={(value) => handleInputChange(input.inputName, value)}
          />
        ))}
        <button onClick={addNewInput}>This button should create a component 'Input' over it</button>
        <button onClick={handleSubmit2}>This button sends all the input values vya query to /Prefab</button>
       </main>
      </div> 
    
  );
};

export default TestPage;