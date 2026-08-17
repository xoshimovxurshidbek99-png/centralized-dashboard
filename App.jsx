import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

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
            width: "360px",
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 5px 25px rgba(0,0,0,0.1)",
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            Central Edu
          </h1>

          <p style={{ textAlign: "center", color: "#64748b" }}>
            Tizimga kirish
          </p>

          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "12px",
              boxSizing: "border-box",
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
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
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Dashboard</h1>

      <p>Centralized Online Education tizimi</p>

      <input
        type="text"
        placeholder="🔎 Bolani qidirish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "12px",
          fontSize: "16px",
        }}
      />

      <p>Qidiruv: {search}</p>
    </div>
  );
}

export default App;
