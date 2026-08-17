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

  function handleLogout() {
    setLoggedIn(false);
    setLogin("");
    setPassword("");
  }

  if (!loggedIn) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#f4f7fb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "360px",
            background: "#ffffff",
            padding: "35px",
            borderRadius: "16px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
          }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              margin: "0 auto 15px",
              background: "#2563eb",
              color: "white",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            CE
          </div>

          <h1
            style={{
              textAlign: "center",
              margin: "0",
              color: "#172033",
            }}
          >
            Central Edu
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#64748b",
              marginBottom: "25px",
            }}
          >
            Tizimga kirish
          </p>

          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            autoComplete="username"
            style={{
              width: "100%",
              padding: "13px",
              marginBottom: "12px",
              border: "1px solid #dbe2ea",
              borderRadius: "8px",
              outline: "none",
              boxSizing: "border-box",
              fontSize: "15px",
            }}
          />

          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
            style={{
              width: "100%",
              padding: "13px",
              marginBottom: "15px",
              border: "1px solid #dbe2ea",
              borderRadius: "8px",
              outline: "none",
              boxSizing: "border-box",
              fontSize: "15px",
            }}
          />

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "13px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Kirish
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "12px",
              marginTop: "18px",
            }}
          >
            Centralized Online Education
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        fontFamily: "Arial, sans-serif",
        color: "#172033",
      }}
    >
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: "235px",
          background: "#111827",
          color: "white",
          padding: "24px 14px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              width: "43px",
              height: "43px",
              borderRadius: "11px",
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            CE
          </div>

          <div>
            <b>Central Edu</b>
            <div
              style={{
                fontSize: "11px",
                color: "#94a3b8",
                marginTop: "3px",
              }}
            >
              Online Education
            </div>
          </div>
        </div>

        <div
          style={{
            color: "#64748b",
            fontSize: "11px",
            margin: "0 10px 10px",
          }}
        >
          ASOSIY
        </div>

        <div
          style={{
            padding: "12px",
            borderRadius: "8px",
            background: "#2563eb",
            marginBottom: "5px",
            fontSize: "14px",
          }}
        >
          🏠 Dashboard
        </div>

        <div
          style={{
            padding: "12px",
            borderRadius: "8px",
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          🏫 MTTlar
        </div>

        <div
          style={{
            padding: "12px",
            borderRadius: "8px",
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          👧 Bolalar
        </div>

        <div
          style={{
            padding: "12px",
            borderRadius: "8px",
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          👨‍🏫 O‘qituvchilar
        </div>

        <div
          style={{
            padding: "12px",
            borderRadius: "8px",
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          📺 Smart TV
        </div>

        <div
          style={{
            padding: "12px",
            borderRadius: "8px",
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          💰 Moliya
        </div>

        <button
          onClick={handleLogout}
          style={{
            position: "absolute",
            bottom: "25px",
            left: "25px",
            background: "transparent",
            border: "none",
            color: "#94a3b8",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          🚪 Chiqish
        </button>
      </div>

      <div
        style={{
          marginLeft: "235px",
          padding: "35px",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ marginBottom: "5px" }}>Dashboard</h1>

        <p
          style={{
            color: "#64748b",
            marginTop: 0,
          }}
        >
          Centralized Online Education tizimi
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18px",
            marginTop: "28px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "27px" }}>🏫</div>
            <div style={{ color: "#64748b", marginTop: "10px" }}>
              Ulangan MTTlar
            </div>
            <div
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              10
            </div>
          </div>

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "27px" }}>👧</div>
            <div style={{ color: "#64748b", marginTop: "10px" }}>
              Ro‘yxatdagi bolalar
            </div>
            <div
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              525
            </div>
          </div>

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "27px" }}>👨‍🏫</div>
            <div style={{ color: "#64748b", marginTop: "10px" }}>
              O‘qituvchilar
            </div>
            <div
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              50
            </div>
          </div>

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "27px" }}>📊</div>
            <div style={{ color: "#64748b", marginTop: "10px" }}>
              O‘rtacha davomat
            </div>
            <div
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              92%
            </div>
          </div>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "14px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div>
              <h2 style={{ margin: 0 }}>👧 Bolalar</h2>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "13px",
                }}
              >
                Bolalarni qidirish
              </p>
            </div>

            <input
              type="text"
              placeholder="🔎 Bolani qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "280px",
                padding: "12px",
                border: "1px solid #dbe2ea",
                borderRadius: "8px",
                outline: "none",
                boxSizing: "border-box",
                fontSize: "15px",
              }}
            />
          </div>

          <div
            style={{
              padding: "18px",
              background: "#f8fafc",
              borderRadius: "10px",
            }}
          >
            <b>Qidiruv:</b>{" "}
            {search === "" ? "Hozircha hech narsa yozilmadi" : search}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
