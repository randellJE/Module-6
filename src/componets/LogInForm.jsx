import { useState } from "react";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submutResult, setSubmitResult] = useState("");
  const [passwordAttempts, setPasswordAttempts] = useState(0);
  const [showButton, setShowButton] = useState(true)

  //   we need state to keep track of how many attempts

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentPasswordAttempts = passwordAttempts
    if (userPassword.length < 5) {
        currentPasswordAttempts += 1
        
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
        currentPasswordAttempts += 1
        
      setSubmitResult("Password must not match email address");
    } else if (userPassword === userEmail) {
        currentPasswordAttempts += 1
        
      setSubmitResult("Password must not match email address");
    } else if (userPassword[0] === userPassword[0].toLocaleLowerCase) {
      setSubmitResult(
        "Password does not contain uppercase at the first letter"
      );
    } else {
      setSubmitResult("successful login");
    }
    setPasswordAttempts(currentPasswordAttempts)
    console.log('Current attempts', currentPasswordAttempts)
    if(currentPasswordAttempts >= 3) {
        // alert('You suck at this password stuff')
        setShowButton(false)
    }
  };

  const handleUpdateEmail = (e) => {
    console.log("handleUpdateEmail", e.target.value);
    if (e.target.value.includes("@")) {
      console.log("Validate Form");
    } else {
      console.log("Email requires @");
    }
    setUserEmail(e.target.value);
  };

  return (
    <div className="LoginForm componetBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => handleUpdateEmail(e)} //setUserEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>
        {
            // showButton ? <button>Log In</button> : null
            <button disabled={!showButton}>Log In</button>

        }
        <p>{submutResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;
