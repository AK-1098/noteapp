import React, { useState, memo } from "react";

// Reusable Input Component
const Input = memo(({ label, type, value, onChange, placeholder }) => {
  return (
    <label style={styles.label}>
      {label}:
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={styles.input}
      />
    </label>
  );
});

// Reusable Button Component
const Button = memo(({ onClick, style, children }) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
});

// Reusable Error Message Component
const ErrorMessage = memo(({ message }) => {
  return message ? <p style={styles.error}>{message}</p> : null;
});

const SignIn = ({ onRegisterClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = () => {
    if (password) {
      setError("Passwords do not match");
      console.log(email, password);
      return;
    }
    alert("Sign up successful!");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Login</h2>
        </div>
        <div style={styles.form}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <ErrorMessage message={error} />
          <div style={styles.buttonContainer}>
            <Button onClick={handleSignIn} style={styles.loginButton}>
              Login
            </Button>
            <Button onClick={onRegisterClick} style={styles.registerButton}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fdf6e4"
  },
  card: {
    width: "300px",
    border: "2px solid #d1c4b5",
    borderRadius: "10px",
    backgroundColor: "#fff7e6",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  },
  header: {
    backgroundColor: "#f2d1b3",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    padding: "10px",
    display: "flex",
    justifyContent: "center"
  },
  title: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
    color: "#5b4636"
  },
  form: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#5b4636",
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  },
  input: {
    padding: "10px",
    border: "1px solid #d1c4b5",
    borderRadius: "10px",
    fontSize: "14px",
    color: "#5b4636",
    backgroundColor: "#fff"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px"
  },
  registerButton: {
    padding: "10px 20px",
    backgroundColor: "#add8e6",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  loginButton: {
    padding: "10px 20px",
    backgroundColor: "#e6a157",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "5px"
  }
};

export default SignIn;
