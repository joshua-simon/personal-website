import { useState, useEffect } from "react";

const Form = () => {
  const [{ email, password, colour }, setFormDetails] = useState({
    email: "",
    password: "",
    colour: "",
  });
  const [ errors, setErrors ] = useState({})
  const [isTigerChecked, setTigerChecked] = useState(false);

  useEffect(() => {
    document.title = "Contact form";
  }, []);

  const errorMessages = {
    password: "Password needs to contain 8 or more characters",
    email: "Please enter a valid email",
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormDetails((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
    if(errors.name){
      setErrors(prevState => {
        delete prevState[name];
        return prevState;
      })
    }
  };

  const validateEmailAndPassword = (email, password) => {
    const emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorsObj = {}
    if(!email.match(emailRegEx)) errorsObj.email = errorMessages.email;
    if(!(password.length > 8)) errorsObj.password = errorMessages.password;
    setErrors(errorsObj)
  };

  const handleClick = (e) => {
    e.target.checked ? setTigerChecked(true) : setTigerChecked(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <p>Contact form</p>
      <form onSubmit={handleSubmit}>
        <input
          className="form-element"
          type="text"
          placeholder="Enter email address"
          name="email"
          onChange={handleChange}
        />
        {!!errors.email && <p className="errors">{errors.email}</p>}
        <input
          className="form-element"
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
        {!!errors.password && <p className="errors">{errors.password}</p>}
        <fieldset className="form-element">
          <legend>Please select a colour</legend>
          <select name="colour" id="colour" onChange={handleChange}>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
            <option value="Black">Black</option>
            <option value="Brown">Brown</option>
          </select>
        </fieldset>

        <fieldset className="form-element">
          <legend>Please select your animals</legend>
          <div className="checkbox">
            <input type="checkbox" id="bear" name="bear" />
            <label for="bear"> Bear</label>
            <br></br>
            <input
              type="checkbox"
              id="Tiger"
              name="Tiger"
              onClick={handleClick}
            />
            <label for="Tiger"> Tiger</label>
            <br></br>
            <input type="checkbox" id="Snake" name="Snake" />
            <label for="Snake"> Snake</label>
            <br></br>
            <input type="checkbox" id="Donkey" name="Donkey" />
            <label for="Donkey"> Donkey</label>
            <br></br>
          </div>
        </fieldset>
        {isTigerChecked ? (
          <textarea
            id="tiger-type"
            name="tiger-type"
            rows="4"
            cols="50"
            placeholder="Please enter type of Tiger"
          />
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
