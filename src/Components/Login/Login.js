import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import useAuth from "../../Hooks/UseAuth";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const auth = getAuth();

  const { singInUsingGoogle } = useAuth();

  const handleRagistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password should be at least 6 character");
      return;
    }
    isLogin ? prossesLogin(email, password) : createNewUser(email, password);
  };

  const prossesLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const taggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setError("");
        varifyEmail();
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  const varifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email).then((result) => {});
  };
  return (
    <div className="w-50  mx-auto border my-5">
      <h1 className="text-center">Please {isLogin ? "login" : "Register"}</h1>
      <Form onSubmit={handleRagistration} className="my-3">
        {!isLogin && (
          <div className="mb-3" controlId="formBasicEmail">
            <label>Name</label>
            <input
              className="w-100"
              onBlur={handleNameChange}
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
        )}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailChange}
            type="email"
            placeholder="Enter Email Or Phone"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={taggleLogin}
            type="checkbox"
            label="Already Registerd?"
          />
        </Form.Group>
        <div className="text-danger">{error}</div>
        <div className="text-center">
          <Button
            className="px-4 border mx-2 fs-5 rounded"
            variant="primary"
            type="submit"
          >
            {isLogin ? "Login" : "Register"}
          </Button>
          {isLogin ? (
            <Button
              className="px-3 border fs-5 rounded"
              onClick={handleResetPassword}
              variant="primary"
              type="submit"
            >
              Forget Passwerd?
            </Button>
          ) : (
            ""
          )}
        </div>
      </Form>
      <div className="text-center">
        <h4>Or Sing Up Using</h4>
        <br />
        <Button onClick={singInUsingGoogle} className="rounded m-2">
          Google Sign Up
        </Button>
        <Button className="rounded m-2">Facbook Sing Up</Button>
      </div>
    </div>
  );
};

export default Login;
