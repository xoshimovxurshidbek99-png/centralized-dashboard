import { useState } from "react";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    if (login === "admin" && password === "12345") {
      setLoggedIn(true);
    } else {
      alert("Login yoki parol noto‘g‘ri!");
    }
  }

  if (!loggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f4f7fb",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: 360,
            padding: 30,
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              margin: "0 auto 15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#2563eb",
              color: "#fff",
              borderRadius: 14,
              fontWeight: "bold",
              fontSize: 22,
            }}
          >
            CE
          </div>

          <h1 style={{ textAlign: "center", marginBottom: 8 }}>
            Central Edu
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              marginBottom: 25,
            }}
          >
            Tizimga kirish
          </p>

          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={{
              width: "100%",
              padding: 13,
              boxSizing: "border-box",
              marginBottom: 12,
              border: "1px solid #dbe2ea",
              borderRadius: 8,
              fontSize: 16,
            }}
          />

          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
            style={{
              width: "100%",
              padding: 13,
              boxSizing: "border-box",
              marginBottom: 15,
              border: "1px solid #dbe2ea",
              borderRadius: 8,
              fontSize: 16,
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: 13,
              border: "none",
              borderRadius: 8,
              background: "#2563eb",
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Kirish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 40,
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Dashboard</h1>

      <p style={{ color: "#64748b" }}>
        Centralized Online Education tizimi
      </p>

      <button
        onClick={() => setLoggedIn(false)}
        style={{
          padding: "10px 20px",
          background: "#dc2626",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Chiqish
      </button>
    </div>
  );
}

export default App;
