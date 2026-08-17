```jsx
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");

  const [children] = useState([
    {
      id: 1,
      name: "Ali Valiyev",
      mtt: "MTT №1",
      group: "Katta guruh",
      age: 6,
    },
    {
      id: 2,
      name: "Madina Karimova",
      mtt: "MTT №2",
      group: "O‘rta guruh",
      age: 5,
    },
    {
      id: 3,
      name: "Muhammad Aliyev",
      mtt: "MTT №2",
      group: "O‘rta guruh",
      age: 5,
    },
  ]);

  function handleLogin() {
    if (login === "admin" && password === "12345") {
      setLoggedIn(true);
    } else {
      alert("Login yoki parol noto‘g‘ri!");
    }
  }

  function logout() {
    setLoggedIn(false);
    setLogin("");
    setPassword("");
  }

  const filteredChildren = children.filter((child) =>
    child.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!loggedIn) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginBox}>
          <div style={styles.logo}>CE</div>

          <h1 style={styles.title}>Central Edu</h1>

          <p style={styles.subtitle}>Tizimga kirish</p>

          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={styles.input}
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
            style={styles.input}
          />

          <button
            onClick={handleLogin}
            style={styles.loginButton}
          >
            Kirish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.app}>
      <aside style={styles.sidebar}>
        <div style={styles.sidebarLogo}>CE</div>

        <h2>Central Edu</h2>

        <p style={styles.sidebarText}>
          Online Education
        </p>

        <button style={styles.menuActive}>
          🏠 Dashboard
        </button>

        <button style={styles.menuButton}>
          🏫 MTTlar
        </button>

        <button style={styles.menuButton}>
          👧 Bolalar
        </button>

        <button style={styles.menuButton}>
          👨‍🏫 O‘qituvchilar
        </button>

        <button style={styles.menuButton}>
          📺 Smart TV
        </button>

        <button style={styles.menuButton}>
          💰 Moliya
        </button>

        <button
          onClick={logout}
          style={styles.logout}
        >
          🚪 Chiqish
        </button>
      </aside>

      <main style={styles.main}>
        <h1>Dashboard</h1>

        <p style={styles.subtitleLeft}>
          Centralized Online Education tizimi
        </p>

        <div style={styles.cards}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🏫</div>
            <p>Ulangan MTTlar</p>
            <h2>10</h2>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>👧</div>
            <p>Ro‘yxatdagi bolalar</p>
            <h2>{children.length}</h2>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>👨‍🏫</div>
            <p>O‘qituvchilar</p>
            <h2>50</h2>
          </div>

          <div style={styles.card}>
            <div style={styles.cardIcon}>📊</div>
            <p>O‘rtacha davomat</p>
            <h2>92%</h2>
          </div>
        </div>

        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <div>
              <h2>👧 Bolalar ro‘yxati</h2>
              <p style={styles.subtitleLeft}>
                Bolani qidirish
              </p>
            </div>

            <input
              type="text"
              placeholder="🔎 Bolani qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.search}
            />
          </div>

          <div style={styles.tableHeader}>
            <b>F.I.Sh.</b>
            <b>MTT</b>
            <b>Guruh</b>
            <b>Yosh</b>
            <b>Holat</b>
          </div>

          {filteredChildren.map((child) => (
            <div
              key={child.id}
              style={styles.childRow}
            >
              <b>{child.name}</b>
              <span>{child.mtt}</span>
              <span>{child.group}</span>
              <span>{child.age}</span>
              <span style={styles.active}>
                ● Faol
              </span>
            </div>
          ))}

          {filteredChildren.length === 0 && (
            <div style={styles.empty}>
              Bola topilmadi
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

const styles = {
  loginPage: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f7fb",
    fontFamily: "Arial, sans-serif",
  },

  loginBox: {
    width: "360px",
    padding: "35px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
  },

  logo: {
    width: "60px",
    height: "60px",
    margin: "0 auto 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#2563eb",
    color: "white",
    borderRadius: "14px",
    fontWeight: "bold",
    fontSize: "20px",
  },

  title: {
    textAlign: "center",
    margin: 0,
  },

  subtitle: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: "25px",
  },

  input: {
    width: "100%",
    padding: "13px",
    marginBottom: "12px",
    boxSizing: "border-box",
    border: "1px solid #dbe2ea",
    borderRadius: "8px",
    fontSize: "15px",
    outline: "none",
  },

  loginButton: {
    width: "100%",
    padding: "13px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  },

  app: {
    minHeight: "100vh",
    background: "#f4f7fb",
    fontFamily: "Arial, sans-serif",
    color: "#172033",
  },

  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: "235px",
    background: "#111827",
    color: "white",
    padding: "25px 15px",
    boxSizing: "border-box",
  },

  sidebarLogo: {
    width: "45px",
    height: "45px",
    background: "#2563eb",
    borderRadius: "11px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  sidebarText: {
    color: "#94a3b8",
    fontSize: "12px",
    marginBottom: "30px",
  },

  menuActive: {
    width: "100%",
    padding: "12px",
    marginBottom: "5px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    textAlign: "left",
    cursor: "pointer",
  },

  menuButton: {
    width: "100%",
    padding: "12px",
    marginBottom: "5px",
    background: "transparent",
    color: "#cbd5e1",
    border: "none",
    borderRadius: "8px",
    textAlign: "left",
    cursor: "pointer",
  },

  logout: {
    position: "absolute",
    bottom: "25px",
    left: "25px",
    background: "transparent",
    color: "#94a3b8",
    border: "none",
    cursor: "pointer",
  },

  main: {
    marginLeft: "235px",
    padding: "35px",
  },

  subtitleLeft: {
    color: "#64748b",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "18px",
    marginTop: "25px",
  },

  card: {
    background: "white",
    padding: "22px",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
  },

  cardIcon: {
    fontSize: "27px",
  },

  panel: {
    background: "white",
    marginTop: "25px",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
  },

  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  search: {
    width: "280px",
    padding: "12px",
    boxSizing: "border-box",
    border: "1px solid #dbe2ea",
    borderRadius: "8px",
    outline: "none",
    fontSize: "15px",
    fontFamily: "Arial, sans-serif",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 0.5fr 0.7fr",
    gap: "10px",
    padding: "13px 0",
    borderBottom: "1px solid #e2e8f0",
    color: "#64748b",
  },

  childRow: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 0.5fr 0.7fr",
    gap: "10px",
    padding: "15px 0",
    borderBottom: "1px solid #eef2f7",
    alignItems: "center",
  },

  active: {
    color: "#16a34a",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    padding: "30px",
    color: "#94a3b8",
  },
};

export default App;
```
