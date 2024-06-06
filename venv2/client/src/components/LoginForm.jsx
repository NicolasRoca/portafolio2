import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setShowAlert(true);
      return;
    }
    if (password.trim() === "") {
      setShowPasswordAlert(true);
      return;
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#f5f5f5'
    },
    card: {
      background: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      width: '100%'
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px'
    },
    formGroup: {
      marginBottom: '15px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold'
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    button: {
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      background: '#000000', // Fondo negro
        color: '#ff0000', // Letras rojas
      cursor: 'pointer',
      textAlign: 'center',
      width: '100%',
      marginTop: '10px'
    },
    alert: {
      marginTop: '10px',
      background: '#f8d7da',
      color: '#721c24',
      padding: '8px',
      borderRadius: '4px'
    }
  };

  return (
    <>
       <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2>Iniciar Sesión</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="username">Usuario</label>
            <input
              style={styles.input}
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {showAlert && (
              <div style={styles.alert}>
                Por favor, ingresa un nombre de usuario.
              </div>
            )}
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="password">Contraseña</label>
            <input
              style={styles.input}
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPasswordAlert && (
              <div style={styles.alert}>
                Por favor, ingresa una contraseña.
              </div>
            )}
          </div>
          <button type="submit" style={styles.button}>Entrar</button>
        </form>
        <p style={{textAlign: 'center', marginTop: '20px'}}>O Iniciar sesión con redes sociales</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button className="btn btn-outline-primary" style={{marginRight: '10px'}}>
            <i className="fab fa-facebook-f me-1"></i> Facebook
          </button>
          <button className="btn btn-outline-info" style={{marginRight: '10px'}}>
            <i className="fab fa-twitter me-1"></i> Twitter
          </button>
          <button className="btn btn-outline-danger" style={{marginRight: '10px'}}>
            <i className="fab fa-google me-1"></i> Google
          </button>
          <button className="btn btn-outline-dark">
            <i className="fab fa-linkedin-in me-1"></i> LinkedIn
          </button>
        </div>
        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <a href="/home">Volver al Inicio</a>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginForm;
