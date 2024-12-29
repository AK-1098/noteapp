import { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Home = () => {
  const [landingPage, setLandingPage] = useState(false);

  useEffect(() => {
    setLandingPage(true);
  }, []);

  const handleRegisterClick = () => {
    setLandingPage(false);
  };

  const handleTitleClick = () => {
    setLandingPage(true); // Reset to landing page when title is clicked
  };

  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <h1 style={styles.title} onClick={handleTitleClick}>
            Keep Notes
          </h1>
        </div>
        <div style={styles.navRight}>
          <span style={styles.navItem}>About</span>
          <span style={styles.navItem}>Notes</span>
          <span style={styles.navItem}>Account</span>
          <span style={styles.navItem}>Login</span>
        </div>
      </nav>
      {landingPage ? (
        <>
          <div style={{ marginTop: "10px", marginLeft: "50px" }}>
            Home Page/Login page
          </div>
          <SignIn onRegisterClick={handleRegisterClick} />
        </>
      ) : (
        <>
          <div style={{ marginTop: "10px", marginLeft: "50px" }}>
            Home Page/Register page
          </div>
          <SignUp />
        </>
      )}
    </div>
  );
};
export default Home;
const styles = {
  page: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#fdf5e6",
    height: "100vh",
    overflow: "hidden"
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between", // Distributes space between left and right sections
    alignItems: "center",
    backgroundColor: "#b3d4d8"
  },
  navLeft: {
    display: "flex",
    alignItems: "center",
    marginLeft: "50px"
  },
  title: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000"
  },
  navRight: {
    display: "flex",
    gap: "20px",
    marginRight: "30px"
  },
  navItem: {
    color: "#000",
    cursor: "pointer"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px"
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px"
  },
  form: {
    backgroundColor: "#fef8e6",
    padding: "60px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px"
  },
  label: {
    display: "block",
    marginBottom: "10px",
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "15px"
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#ff7f50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  error: {
    color: "red",
    marginBottom: "10px",
    fontSize: "14px"
  }
};
