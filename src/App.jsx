```jsx
import { useState } from "react";

const MTT_DATA = [
  {
    name: "MTT №1",
    children: 120,
    attendance: "94%",
    groups: 6,
  },
  {
    name: "MTT №2",
    children: 98,
    attendance: "91%",
    groups: 5,
  },
  {
    name: "MTT №3",
    children: 115,
    attendance: "93%",
    groups: 6,
  },
  {
    name: "MTT №4",
    children: 87,
    attendance: "90%",
    groups: 4,
  },
  {
    name: "MTT №5",
    children: 105,
    attendance: "95%",
    groups: 5,
  },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [page, setPage] = useState("dashboard");
  const [search, setSearch] = useState("");

  const [children, setChildren] = useState([
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

  const [newChild, setNewChild] = useState({
    name: "",
    mtt: "MTT №1",
    group: "Katta guruh",
    age: 6,
  });

  const [showAdd, setShowAdd] = useState(false);

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

  function addChild() {
    if (!newChild.name.trim()) {
      alert("Bolaning F.I.Sh. ni kiriting!");
      return;
    }

    const child = {
      id: Date.now(),
      name: newChild.name,
      mtt: newChild.mtt,
      group: newChild.group,
      age: Number(newChild.age),
    };

    setChildren([...children, child]);

    setNewChild({
      name: "",
      mtt: "MTT №1",
      group: "Katta guruh",
      age: 6,
    });

    setShowAdd(false);
  }

  function deleteChild(id) {
    setChildren(children.filter((child) => child.id !== id));
  }

  const filteredChildren = children.filter((child) =>
    child.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!loggedIn) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginBox}>
          <div style={styles.loginLogo}>CE</div>

          <h1 style={styles.loginTitle}>Central Edu</h1>

          <p style={styles.loginSubtitle}>
            Tizimga kirish
          </p>

          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={styles.loginInput}
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
            style={styles.loginInput}
          />

          <button
            style={styles.loginButton}
            onClick={handleLogin}
          >
            Kirish
          </button>

          <p style={styles.loginHint}>
            Login: admin &nbsp; | &nbsp; Parol: 12345
          </p>
        </div>
      </div>
    );
  }

  function Dashboard() {
    return (
      <>
        <h1>Dashboard</h1>

        <p style={styles.subtitle}>
          Centralized Online Education tizimi
        </p>

        <div style={styles.cards}>
          <Card
            icon="🏫"
            title="Ulangan MTTlar"
            value={MTT_DATA.length}
          />

          <Card
            icon="👧"
            title="Ro‘yxatdagi bolalar"
            value={children.length}
          />

          <Card
            icon="👨‍🏫"
            title="O‘qituvchilar"
            value="50"
          />

          <Card
            icon="📊"
            title="O‘rtacha davomat"
            value="92%"
          />
        </div>

        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <div>
              <h2 style={styles.panelTitle}>
                🏫 MTTlar holati
              </h2>

              <p style={styles.smallText}>
                Ulangan maktabgacha ta’lim muassasalari
              </p>
            </div>

            <button
              style={styles.blueButton}
              onClick={() => setPage("mtt")}
            >
              Barchasini ko‘rish →
            </button>
          </div>

          {MTT_DATA.map((mtt) => (
            <div
              key={mtt.name}
              style={styles.listRow}
            >
              <b>{mtt.name}</b>
              <span>👧 {mtt.children} bola</span>
              <span>📊 {mtt.attendance}</span>
              <span style={styles.green}>
                ● Faol
              </span>
            </div>
          ))}
        </div>
      </>
    );
  }

  function ChildrenPage() {
    return (
      <>
        <div style={styles.pageHeader}>
          <div>
            <h1>Bolalar</h1>

            <p style={styles.subtitle}>
              Barcha bolalar ro‘yxati
            </p>
          </div>

          <button
            style={styles.greenButton}
            onClick={() => setShowAdd(!showAdd)}
          >
            + Bola qo‘shish
          </button>
        </div>

        {showAdd && (
          <div style={styles.addPanel}>
            <h2 style={styles.panelTitle}>
              Yangi bola qo‘shish
            </h2>

            <input
              style={styles.input}
              placeholder="F.I.Sh."
              value={newChild.name}
              onChange={(e) =>
                setNewChild({
                  ...newChild,
                  name: e.target.value,
                })
              }
            />

            <select
              style={styles.input}
              value={newChild.mtt}
              onChange={(e) =>
                setNewChild({
                  ...newChild,
                  mtt: e.target.value,
                })
              }
            >
              {MTT_DATA.map((mtt) => (
                <option key={mtt.name}>
                  {mtt.name}
                </option>
              ))}
            </select>

            <select
              style={styles.input}
              value={newChild.group}
              onChange={(e) =>
                setNewChild({
                  ...newChild,
                  group: e.target.value,
                })
              }
            >
              <option>Kichik guruh</option>
              <option>O‘rta guruh</option>
              <option>Katta guruh</option>
              <option>Tayyorlov guruhi</option>
            </select>

            <input
              style={styles.input}
              type="number"
              min="1"
              max="10"
              value={newChild.age}
              onChange={(e) =>
                setNewChild({
                  ...newChild,
                  age: e.target.value,
                })
              }
            />

            <button
              style={styles.greenButton}
              onClick={addChild}
            >
              Saqlash
            </button>
          </div>
        )}

        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <h2 style={styles.panelTitle}>
              Bolalar ro‘yxati
            </h2>

            <input
              type="text"
              style={styles.search}
              placeholder="🔎 Bolani qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div style={styles.tableHeader}>
            <span>F.I.Sh.</span>
            <span>MTT</span>
            <span>Guruh</span>
            <span>Yosh</span>
            <span>Holat</span>
            <span>Amal</span>
          </div>

          {filteredChildren.length === 0 ? (
            <div style={styles.empty}>
              Bola topilmadi
            </div>
          ) : (
            filteredChildren.map((child) => (
              <div
                key={child.id}
                style={styles.childRow}
              >
                <b>{child.name}</b>

                <span>{child.mtt}</span>

                <span>{child.group}</span>

                <span>{child.age}</span>

                <span style={styles.activeBadge}>
                  Faol
                </span>

                <button
                  style={styles.deleteButton}
                  onClick={() => deleteChild(child.id)}
                >
                  O‘chirish
                </button>
              </div>
            ))
          )}
        </div>
      </>
    );
  }

  function MTTPage() {
    return (
      <>
        <h1>MTTlar</h1>

        <p style={styles.subtitle}>
          Ulangan maktabgacha ta’lim muassasalari
        </p>

        <div style={styles.panel}>
          {MTT_DATA.map((mtt) => (
            <div
              key={mtt.name}
              style={styles.mttCard}
            >
              <div>
                <h3>{mtt.name}</h3>

                <p>
                  👧 {mtt.children} bola
                </p>

                <p>
                  👥 {mtt.groups} ta guruh
                </p>
              </div>

              <div style={styles.mttRight}>
                <b>{mtt.attendance}</b>

                <span style={styles.green}>
                  ● Faol
                </span>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div style={styles.app}>
      <aside style={styles.sidebar}>
        <div style={styles.logoArea}>
          <div style={styles.sidebarLogo}>CE</div>

          <div>
            <b>Central Edu</b>

            <div style={styles.logoSmall}>
              Online Education
            </div>
          </div>
        </div>

        <div style={styles.menuTitle}>
          ASOSIY
        </div>

        <button
          style={
            page === "dashboard"
              ? styles.menuActive
              : styles.menuButton
          }
          onClick={() => setPage("dashboard")}
        >
          🏠 Dashboard
        </button>

        <button
          style={
            page === "mtt"
              ? styles.menuActive
              : styles.menuButton
          }
          onClick={() => setPage("mtt")}
        >
          🏫 MTTlar
        </button>

        <button
          style={
            page === "children"
              ? styles.menuActive
              : styles.menuButton
          }
          onClick={() => setPage("children")}
        >
          👧 Bolalar
        </button>

        <button
          style={styles.menuButton}
          onClick={() => alert("O‘qituvchilar bo‘limi tez orada")}
        >
          👨‍🏫 O‘qituvchilar
        </button>

        <button
          style={styles.menuButton}
          onClick={() => alert("Smart TV bo‘limi tez orada")}
        >
          📺 Smart TV
        </button>

        <button
          style={styles.menuButton}
          onClick={() => alert("Moliya bo‘limi tez orada")}
        >
          💰 Moliya
        </button>

        <button
          style={styles.logoutButton}
          onClick={handleLogout}
        >
          🚪 Chiqish
        </button>
      </aside>

      <main style={styles.main}>
        {page === "dashboard" && <Dashboard />}
        {page === "children" && <ChildrenPage />}
        {page === "mtt" && <MTTPage />}
      </main>
    </div>
  );
}

function Card({ icon, title, value }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>
        {icon}
      </div>

      <div style={styles.cardTitle}>
        {title}
      </div>

      <div style={styles.cardValue}>
        {value}
      </div>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "#f4f7fb",
    fontFamily: "Arial, sans-serif",
    color: "#172033",
  },

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
    background: "#ffffff",
    padding: "35px",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
  },

  loginLogo: {
    width: "58px",
    height: "58px",
    margin: "0 auto 15px",
    background: "#2563eb",
    color: "white",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },

  loginTitle: {
    textAlign: "center",
    margin: "0",
  },

  loginSubtitle: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: "25px",
  },

  loginInput: {
    width: "100%",
    padding: "13px",
    marginBottom: "12px",
    border: "1px solid #dbe2ea",
    borderRadius: "8px",
    outline: "none",
    boxSizing: "border-box",
    fontSize: "15px",
    fontFamily: "Arial, sans-serif",
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

  loginHint: {
    textAlign: "center",
    color: "#94a3b8",
    fontSize: "12px",
    marginTop: "18px",
  },

  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    width: "235px",
    background: "#111827",
    color: "white",
    padding: "24px 14px",
    boxSizing: "border-box",
  },

  logoArea: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "8px",
    marginBottom: "35px",
  },

  sidebarLogo: {
    width: "43px",
    height: "43px",
    borderRadius: "11px",
    background: "#2563eb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  logoSmall: {
    fontSize: "11px",
    color: "#94a3b8",
    marginTop: "3px",
  },

  menuTitle: {
    color: "#64748b",
    fontSize: "11px",
    margin: "0 10px 10px",
  },

  menuButton: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    color: "#cbd5e1",
    background: "transparent",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "14px",
    marginBottom: "4px",
  },

  menuActive: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    color: "white",
    background: "#2563eb",
    border: "none",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "14px",
    marginBottom: "4px",
  },

  logoutButton: {
    position: "absolute",
    left: "25px",
    bottom: "25px",
    background: "transparent",
    border: "none",
    color: "#94a3b8",
    cursor: "pointer",
    fontSize: "14px",
  },

  main: {
    marginLeft: "235px",
    padding: "35px",
    boxSizing: "border-box",
  },

  subtitle: {
    color: "#64748b",
    marginTop: 0,
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "18px",
    marginTop: "28px",
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

  cardTitle: {
    color: "#64748b",
    marginTop: "10px",
  },

  cardValue: {
    fontSize: "26px",
    fontWeight: "bold",
    marginTop: "5px",
  },

  panel: {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
    marginTop: "25px",
  },

  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    gap: "20px",
  },

  panelTitle: {
    margin: 0,
  },

  smallText: {
    color: "#94a3b8",
    fontSize: "13px",
  },

  blueButton: {
    padding: "11px 16px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  greenButton: {
    padding: "11px 16px",
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  green: {
    color: "#16a34a",
    fontWeight: "bold",
  },

  listRow: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
    gap: "15px",
    padding: "16px 0",
    borderTop: "1px solid #eef2f7",
    alignItems: "center",
  },

  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addPanel: {
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    marginTop: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #dbe2ea",
    borderRadius: "8px",
    boxSizing: "border-box",
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
    outline: "none",
  },

  search: {
    width: "280px",
    padding: "12px",
    border: "1px solid #dbe2ea",
    borderRadius: "8px",
    boxSizing: "border-box",
    fontSize: "15px",
    fontFamily: "Arial, sans-serif",
    outline: "none",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 0.5fr 0.7fr 0.8fr",
    gap: "10px",
    padding: "13px 0",
    borderBottom: "1px solid #e2e8f0",
    color: "#64748b",
    fontSize: "13px",
    fontWeight: "bold",
  },

  childRow: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 0.5fr 0.7fr 0.8fr",
    gap: "10px",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #eef2f7",
    fontSize: "14px",
  },

  activeBadge: {
    display: "inline-block",
    color: "#16a34a",
    fontWeight: "bold",
  },

  deleteButton: {
    padding: "7px 10px",
    background: "#fee2e2",
    color: "#dc2626",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  empty: {
    textAlign: "center",
    padding: "35px",
    color: "#94a3b8",
  },

  mttCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 0",
    borderBottom: "1px solid #eef2f7",
  },

  mttRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "8px",
  },
};

export default App;
```
