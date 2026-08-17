import { useState } from "react";

const MTT_DATA = [
  { name: "MTT №1", children: 120, attendance: "94%", groups: 6 },
  { name: "MTT №2", children: 98, attendance: "91%", groups: 5 },
  { name: "MTT №3", children: 115, attendance: "93%", groups: 6 },
  { name: "MTT №4", children: 87, attendance: "90%", groups: 4 },
  { name: "MTT №5", children: 105, attendance: "95%", groups: 5 },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [page, setPage] = useState("dashboard");
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
    {
      id: 4,
      name: "Zarina Abdullayeva",
      mtt: "MTT №3",
      group: "Katta guruh",
      age: 6,
    },
    {
      id: 5,
      name: "Javohir Xasanov",
      mtt: "MTT №4",
      group: "Kichik guruh",
      age: 4,
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
    setPage("dashboard");
  }

  const filteredChildren = children.filter((child) =>
    child.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!loggedIn) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginBox}>
          <div style={styles.logo}>CE</div>

          <h1 style={styles.loginTitle}>Central Edu</h1>

          <p style={styles.loginSubtitle}>Tizimga kirish</p>

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
              if (e.key === "Enter") handleLogin();
            }}
            style={styles.loginInput}
          />

          <button onClick={handleLogin} style={styles.loginButton}>
            Kirish
          </button>

          <p style={styles.loginHint}>
            Login: admin &nbsp; | &nbsp; Parol: 12345
          </p>
        </div>
      </div>
    );
  }

  function DashboardPage() {
    return (
      <>
        <h1 style={styles.pageTitle}>Dashboard</h1>
        <p style={styles.subtitle}>
          Centralized Online Education tizimi
        </p>

        <div style={styles.cards}>
          <Card icon="🏫" title="Ulangan MTTlar" value="10" />
          <Card
            icon="👧"
            title="Ro‘yxatdagi bolalar"
            value={children.length}
          />
          <Card icon="👨‍🏫" title="O‘qituvchilar" value="50" />
          <Card icon="📊" title="O‘rtacha davomat" value="92%" />
        </div>

        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <div>
              <h2 style={styles.panelTitle}>🏫 MTTlar holati</h2>
              <p style={styles.subtitle}>
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
            <div key={mtt.name} style={styles.listRow}>
              <b>{mtt.name}</b>
              <span>👧 {mtt.children} bola</span>
              <span>📊 {mtt.attendance}</span>
              <span style={styles.green}>● Faol</span>
            </div>
          ))}
        </div>

        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <div>
              <h2 style={styles.panelTitle}>👧 Bolalar ro‘yxati</h2>
              <p style={styles.subtitle}>
                Bolalarni ism bo‘yicha qidirish
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

          <ChildrenTable data={filteredChildren} />
        </div>
      </>
    );
  }

  function MTTPage() {
    return (
      <>
        <h1 style={styles.pageTitle}>🏫 MTTlar</h1>
        <p style={styles.subtitle}>
          Tizimga ulangan maktabgacha ta’lim muassasalari
        </p>

        <div style={styles.cards}>
          {MTT_DATA.map((mtt) => (
            <div key={mtt.name} style={styles.card}>
              <div style={styles.cardIcon}>🏫</div>
              <h3>{mtt.name}</h3>
              <p>{mtt.children} nafar bola</p>
              <p>{mtt.groups} ta guruh</p>
              <strong style={styles.green}>
                ● {mtt.attendance} davomat
              </strong>
            </div>
          ))}
        </div>
      </>
    );
  }

  function ChildrenPage() {
    return (
      <>
        <h1 style={styles.pageTitle}>👧 Bolalar</h1>
        <p style={styles.subtitle}>
          Ro‘yxatdagi barcha bolalar
        </p>

        <div style={styles.panel}>
          <input
            type="text"
            placeholder="🔎 Bolani qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.searchLarge}
          />

          <ChildrenTable data={filteredChildren} />
        </div>
      </>
    );
  }

  function TeachersPage() {
    return (
      <>
        <h1 style={styles.pageTitle}>👨‍🏫 O‘qituvchilar</h1>
        <p style={styles.subtitle}>
          MTTlarda faoliyat yuritayotgan o‘qituvchilar
        </p>

        <div style={styles.cards}>
          <Card icon="👨‍🏫" title="Jami o‘qituvchilar" value="50" />
          <Card icon="✅" title="Faol" value="47" />
          <Card icon="📚" title="Darslar" value="320" />
          <Card icon="📊" title="Davomat" value="95%" />
        </div>
      </>
    );
  }

  function SmartTVPage() {
    return (
      <>
        <h1 style={styles.pageTitle}>📺 Smart TV</h1>
        <p style={styles.subtitle}>
          MTTlardagi Smart TV va Smart Panel holati
        </p>

        <div style={styles.panel}>
          {MTT_DATA.map((mtt) => (
            <div key={mtt.name} style={styles.listRow}>
              <b>{mtt.name}</b>
              <span>📺 Smart TV</span>
              <span style={styles.green}>● Ulangan</span>
              <span>Online</span>
            </div>
          ))}
        </div>
      </>
    );
  }

  function FinancePage() {
    return (
      <>
        <h1 style={styles.pageTitle}>💰 Moliya</h1>
        <p style={styles.subtitle}>
          Central Edu moliyaviy ko‘rsatkichlari
        </p>

        <div style={styles.cards}>
          <Card icon="💰" title="Oylik tushum" value="120 mln" />
          <Card icon="📈" title="Daromad" value="95 mln" />
          <Card icon="💳" title="Xarajatlar" value="25 mln" />
          <Card icon="🤝" title="Investorlar" value="5" />
        </div>

        <div style={styles.panel}>
          <h2 style={styles.panelTitle}>Moliyaviy holat</h2>
          <p style={styles.subtitle}>
            Barcha ko‘rsatkichlar tizim orqali nazorat qilinadi.
          </p>
        </div>
      </>
    );
  }

  function renderPage() {
    if (page === "dashboard") return <DashboardPage />;
    if (page === "mtt") return <MTTPage />;
    if (page === "children") return <ChildrenPage />;
    if (page === "teachers") return <TeachersPage />;
    if (page === "smarttv") return <SmartTVPage />;
    if (page === "finance") return <FinancePage />;

    return <DashboardPage />;
  }

  return (
    <div style={styles.app}>
      <aside style={styles.sidebar}>
        <div style={styles.sidebarLogo}>CE</div>

        <h2 style={styles.sidebarTitle}>Central Edu</h2>

        <p style={styles.sidebarText}>
          Online Education
        </p>

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
          style={
            page === "teachers"
              ? styles.menuActive
              : styles.menuButton
          }
          onClick={() => setPage("teachers")}
        >
          👨‍🏫 O‘qituvchilar
        </button>

        <button style={styles.menuButton}>
          📚 Darslar
        </button>

        <button style={styles.menuButton}>
          📊 Davomat
        </button>

        <button
          style={
            page === "smarttv"
              ? styles.menuActive
              : styles.menuButton
          }
          onClick={() => setPage("smarttv")}
        >
          📺 Smart TV
        </button>

        <button
          style={
            page === "finance"
              ? styles.menuActive
              : styles.menuButton
          }
          onClick={() => setPage("finance")}
        >
          💰 Moliya
        </button>

        <button style={styles.menuButton}>
          🤝 Investor
        </button>

        <button onClick={logout} style={styles.logout}>
          🚪 Chiqish
        </button>
      </aside>

      <main style={styles.main}>
        {renderPage()}
      </main>
    </div>
  );
}

function Card({ icon, title, value }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>{icon}</div>
      <p style={styles.cardTitle}>{title}</p>
      <h2 style={styles.cardValue}>{value}</h2>
    </div>
  );
}

function ChildrenTable({ data }) {
  return (
    <div>
      <div style={styles.tableHeader}>
        <b>F.I.Sh.</b>
        <b>MTT</b>
        <b>Guruh</b>
        <b>Yosh</b>
        <b>Holat</b>
      </div>

      {data.map((child) => (
        <div key={child.id} style={styles.childRow}>
          <b>{child.name}</b>
          <span>{child.mtt}</span>
          <span>{child.group}</span>
          <span>{child.age}</span>
          <span style={styles.green}>● Faol</span>
        </div>
      ))}

      {data.length === 0 && (
        <div style={styles.empty}>
          Bola topilmadi
        </div>
      )}
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
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
  },

  logo: {
    width: "60px",
    height: "60px",
    margin: "0 auto 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#2563eb",
    color: "#ffffff",
    borderRadius: "14px",
    fontWeight: "bold",
    fontSize: "20px",
  },

  loginTitle: {
    textAlign: "center",
    margin: 0,
    color: "#172033",
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
    boxSizing: "border-box",
    border: "1px solid #dbe2ea",
    borderRadius: "8px",
    fontSize: "15px",
    outline: "none",
    fontFamily: "Arial, sans-serif",
  },

  loginButton: {
    width: "100%",
    padding: "13px",
    background: "#2563eb",
    color: "#ffffff",
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
    color: "#ffffff",
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
    fontSize: "18px",
  },

  sidebarTitle: {
    margin: "12px 0 5px",
  },

  sidebarText: {
    color: "#94a3b8",
    fontSize: "12px",
    marginTop: 0,
    marginBottom: "25px",
  },

  menuActive: {
    width: "100%",
    padding: "12px",
    marginBottom: "5px",
    background: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "14px",
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
    fontSize: "14px",
  },

  logout: {
    position: "absolute",
    bottom: "25px",
    left: "25px",
    background: "transparent",
    color: "#94a3b8",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },

  main: {
    marginLeft: "235px",
    padding: "35px",
  },

  pageTitle: {
    margin: 0,
    fontSize: "30px",
  },

  subtitle: {
    color: "#64748b",
    marginTop: "8px",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "18px",
    marginTop: "25px",
  },

  card: {
    background: "#ffffff",
    padding: "22px",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
  },

  cardIcon: {
    fontSize: "28px",
  },

  cardTitle: {
    color: "#64748b",
    marginBottom: "5px",
  },

  cardValue: {
    marginTop: "5px",
  },

  panel: {
    background: "#ffffff",
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

  panelTitle: {
    margin: 0,
  },

  blueButton: {
    padding: "11px 16px",
    background: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  listRow: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 0.7fr",
    gap: "15px",
    padding: "16px 0",
    borderBottom: "1px solid #eef2f7",
    alignItems: "center",
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

  searchLarge: {
    width: "100%",
    padding: "13px",
    marginBottom: "20px",
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

  green: {
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
