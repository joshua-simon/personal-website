const Form = () => {

    const errors ={
        password: "Password needs to contain 8 or more characters",
        email: "Please enter a valid email"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('it got here')
    }

  return (
    <div className="form-container">
      <p>Contact form</p>
      <form onSubmit = {handleSubmit}>
        <input className="form-element" type="text" placeholder = "Enter email address" />
        <p className = "errors">{errors.email}</p>
        <input className="form-element" type="password" placeholder = "Enter password"/>
        <p className = "errors">{errors.password}</p>
        <fieldset className="form-element">
          <legend>Please select a colour</legend>
          <select name="colours" id="colours">
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
            <input type="checkbox" id="Tiger" name="Tiger" />
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
        {/* <textarea id = "tiger-type" name = "tiger-type" rows="4" cols="50"/> */}
        <button type = "submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
