import React, { useState, memo } from "react";

// Reusable Input Component
const Input = memo(({ label, type, value, onChange, placeholder }) => {
  return (
    <label style={styles.label}>
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={styles.input}
        placeholder={placeholder}
      />
    </label>
  );
});

// Reusable Button Component
const Button = memo(({ onClick, style, children, disabled }) => {
  return (
    <button onClick={onClick} style={style} disabled={disabled}>
      {children}
    </button>
  );
});

// Reusable Message Component
const Message = memo(({ message }) => {
  return message ? <p style={styles.message}>{message}</p> : null;
});

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = () => {
    if (password === confirmPassword) {
      setIsRegistered(true);
      setMessage("Successfully registered! You can now login.");
    } else {
      setMessage("Passwords do not match.");
    }
  };

  const handleLogin = () => {
    console.log("Redirect to login", { username, email });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Sign up</h2>
        </div>
        <div style={styles.form}>
          <Input
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
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
          <Input
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
          <Message message={message} />
          <div style={styles.buttonContainer}>
            <Button
              onClick={handleRegister}
              style={styles.registerButton}
              disabled={isRegistered}
            >
              Register
            </Button>
            <Button
              onClick={handleLogin}
              style={styles.loginButton}
              disabled={!isRegistered}
            >
              Login
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
    width: "400px",
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
    borderRadius: "5px",
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
    backgroundColor: "#44d27a",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  loginButton: {
    padding: "10px 20px",
    backgroundColor: "#e6a157",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  message: {
    color: "#5b4636",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "10px"
  }
};

export default SignUp;
