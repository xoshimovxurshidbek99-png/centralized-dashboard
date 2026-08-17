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
  const [selectedMTT, setSelectedMTT] = useState(null);

  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(false);

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
      mtt: "MTT №1",
      group: "Katta guruh",
      age: 6,
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

  function addChild() {
    if (!newChild.name.trim()) {
      alert("Bolaning F.I.Sh. ni kiriting!");
      return;
    }

    const child = {
      id: Date.now(),
      name: newChild.name.trim(),
      mtt: newChild.mtt,
      group: newChild.group,
      age: Number(newChild.age),
    };

    setChildren((prev) => [...prev, child]);

    setNewChild({
      name: "",
      mtt: "MTT №1",
      group: "Katta guruh",
      age: 6,
    });

    setShowAdd(false);
  }

  function deleteChild(id) {
    setChildren((prev) => prev.filter((child) => child.id !== id));
  }

  function openMTT(mtt) {
    setSelectedMTT(mtt);
    setPage("mtt-detail");
  }

  const filteredChildren = children.filter((child) =>
    child.name.toLowerCase().includes(search.toLowerCase())
  );

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
            value="10"
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

          {MTT_DATA.slice(0, 5).map((mtt) => (
            <div
              key={mtt.name}
              style={styles.listRow}
              onClick={() => openMTT(mtt)}
            >
              <b>{mtt.name}</b>
              <span>👧 {mtt.children} bola</span>
              <span>📊 {mtt.attendance}</span>
              <span style={styles.green}>● Faol</span>
            </div>
          ))}
        </div>
      </>
    );
  }

  function MTTPage() {
    return (
      <>
        <div style={styles.pageHeader}>
          <div>
            <h1>MTTlar</h1>
            <p style={styles.subtitle}>
              Ulangan maktabgacha ta’lim muassasalari
            </p>
          </div>
        </div>

        <div style={styles.mttGrid}>
          {MTT_DATA.map((mtt) => (
            <div
              key={mtt.name}
              style={styles.mttCard}
            >
              <div style={styles.mttTop}>
                <div style={styles.mttIcon}>🏫</div>

                <div>
                  <h2 style={styles.mttName}>
                    {mtt.name}
                  </h2>

                  <span style={styles.activeBadge}>
                    ● Faol
                  </span>
                </div>
              </div>

              <div style={styles.mttInfo}>
                <span>Bolalar</span>
                <b>{mtt.children}</b>
              </div>

              <div style={styles.mttInfo}>
                <span>Guruhlar</span>
                <b>{mtt.groups}</b>
              </div>

              <div style={styles.mttInfo}>
                <span>Davomat</span>
                <b>{mtt.attendance}</b>
              </div>

              <button
                style={styles.blueButtonFull}
                onClick={() => openMTT(mtt)}
              >
                Batafsil
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }

  function MTTDetail() {
    if (!selectedMTT) {
      return (
        <div style={styles.panel}>
          MTT tanlanmagan.
        </div>
      );
    }

    return (
      <>
        <button
          style={styles.backButton}
          onClick={() => setPage("mtt")}
        >
          ← Orqaga
        </button>

        <div style={styles.panel}>
          <h1>{selectedMTT.name}</h1>

          <div style={styles.infoRow}>
            <span>Bolalar soni</span>
            <b>{selectedMTT.children}</b>
          </div>

          <div style={styles.infoRow}>
            <span>Guruhlar</span>
            <b>{selectedMTT.groups}</b>
          </div>

          <div style={styles.infoRow}>
            <span>Davomat</span>
            <b>{selectedMTT.attendance}</b>
          </div>

          <span style={styles.onlineBadge}>
            ● Tizimga ulangan
          </span>
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
              Barcha MTTlardagi bolalar ro‘yxati
            </p>
          </div>

          <button
            style={styles.blueButton}
            onClick={() => setShowAdd((prev) => !prev)}
          >
            {showAdd ? "Bekor qilish" : "+ Bola qo‘shish"}
          </button>
        </div>

        {showAdd && (
          <div style={styles.panel}>
            <h2 style={styles.panelTitle}>
              Yangi bola qo‘shish
            </h2>

            <div style={styles.formGrid}>
              <input
                style={styles.input}
                placeholder="F.I.Sh."
                value={newChild.name}
                onChange={(e) =>
                  setNewChild((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />

              <select
                style={styles.input}
                value={newChild.mtt}
                onChange={(e) =>
                  setNewChild((prev) => ({
                    ...prev,
                    mtt: e.target.value,
                  }))
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
                  setNewChild((prev) => ({
                    ...prev,
                    group: e.target.value,
                  }))
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
                min="2"
                max="7"
                value={newChild.age}
                onChange={(e) =>
                  setNewChild((prev) => ({
                    ...prev,
                    age: e.target.value,
                  }))
                }
              />
            </div>

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
            <div>
              <h2 style={styles.panelTitle}>
                Bolalar ro‘yxati
              </h2>

              <p style={styles.smallText}>
                Jami: {children.length} nafar
              </p>
            </div>

            <input
              style={styles.search}
              type="text"
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

          {filteredChildren.map((child) => (
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
                🗑
              </button>
            </div>
          ))}

          {filteredChildren.length === 0 && (
            <div style={styles.empty}>
              Qidiruv bo‘yicha bola topilmadi.
            </div>
          )}
        </div>
      </>
    );
  }

  function TeachersPage() {
    return (
      <>
        <h1>O‘qituvchilar</h1>

        <p style={styles.subtitle}>
          MTT o‘qituvchilari
        </p>

        <div style={styles.panel}>
          <div style={styles.infoRow}>
            <span>Jami o‘qituvchilar</span>
            <b>10</b>
          </div>

          <div style={styles.infoRow}>
            <span>Faol o‘qituvchilar</span>
            <b style={styles.green}>10</b>
          </div>
        </div>
      </>
    );
  }

  function LessonsPage() {
    return (
      <>
        <h1>Darslar</h1>

        <p style={styles.subtitle}>
          Onlayn darslar va mashg‘ulotlar
        </p>

        <div style={styles.twoColumns}>
          <div style={styles.lessonBox}>
            <h3>📚 Ingliz tili</h3>
            <p>Bugungi dars</p>

            <span style={styles.onlineBadge}>
              ONLINE
            </span>
          </div>

          <div style={styles.lessonBox}>
            <h3>🎨 Ijodiy mashg‘ulot</h3>
            <p>Bugungi mashg‘ulot</p>

            <span style={styles.onlineBadge}>
              ONLINE
            </span>
          </div>
        </div>
      </>
    );
  }

  function AttendancePage() {
    return (
      <>
        <h1>Davomat</h1>

        <p style={styles.subtitle}>
          Bugungi davomat ko‘rsatkichi
        </p>

        <div style={styles.cards}>
          <Card
            icon="📊"
            title="O‘rtacha davomat"
            value="92%"
          />

          <Card
            icon="👧"
            title="Kelganlar"
            value="92"
          />

          <Card
            icon="❌"
            title="Kelmaganlar"
            value="8"
          />

          <Card
            icon="🏫"
            title="MTTlar"
            value={MTT_DATA.length}
          />
        </div>
      </>
    );
  }

  function SmartTVPage() {
    return (
      <>
        <h1>Smart TV</h1>

        <p style={styles.subtitle}>
          Ulangan Smart TV qurilmalari
        </p>

        <div style={styles.panel}>
          <div style={styles.infoRow}>
            <span>Smart TV №1</span>
            <b style={styles.green}>● Online</b>
          </div>

          <div style={styles.infoRow}>
            <span>Smart TV №2</span>
            <b style={styles.green}>● Online</b>
          </div>

          <div style={styles.infoRow}>
            <span>Smart TV №3</span>
            <b style={styles.green}>● Online</b>
          </div>
        </div>
      </>
    );
  }

  function FinancePage() {
    return (
      <>
        <h1>Moliya</h1>

        <p style={styles.subtitle}>
          Moliyaviy ko‘rsatkichlar
        </p>

        <div style={styles.cards}>
          <Card
            icon="💰"
            title="Oylik tushum"
            value="25 mln"
          />

          <Card
            icon="📈"
            title="Daromad"
            value="18 mln"
          />

          <Card
            icon="💳"
            title="Xarajat"
            value="7 mln"
          />

          <Card
            icon="📊"
            title="Sof natija"
            value="11 mln"
          />
        </div>
      </>
    );
  }

  function InvestorPage() {
    return (
      <>
        <h1>Investor</h1>

        <p style={styles.subtitle}>
          Investor loyihalari va ko‘rsatkichlari
        </p>

        <div style={styles.panel}>
          <div style={styles.infoRow}>
            <span>Loyiha</span>
            <b>Central Edu</b>
          </div>

          <div style={styles.infoRow}>
            <span>Ulangan MTTlar</span>
            <b>{MTT_DATA.length}</b>
          </div>

          <div style={styles.infoRow}>
            <span>Holat</span>
            <b style={styles.green}>Faol</b>
          </div>
        </div>
      </>
    );
  }

  function Card({ icon, title, value }) {
    return (
      <div style={styles.card}>
        <div style={styles.cardIcon}>{icon}</div>

        <div style={styles.cardTitle}>
          {title}
        </div>

        <div style={styles.cardValue}>
          {value}
        </div>
      </div>
    );
  }

  function renderPage() {
    if (page === "dashboard") return <Dashboard />;
    if (page === "mtt") return <MTTPage />;
    if (page === "mtt-detail") return <MTTDetail />;
    if (page === "children") return <ChildrenPage />;
    if (page === "teachers") return <TeachersPage />;
    if (page === "lessons") return <LessonsPage />;
    if (page === "attendance") return <AttendancePage />;
    if (page === "smarttv") return <SmartTVPage />;
    if (page === "finance") return <FinancePage />;
    if (page === "investor") return <InvestorPage />;

    return <Dashboard />;
  }

  if (!loggedIn) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginBox}>
          <div style={styles.loginLogo}>CE</div>

          <h1 style={styles.loginTitle}>
            Central Edu
          </h1>

          <p style={styles.loginSubtitle}>
            Tizimga kirish
          </p>

          <input
            style={styles.loginInput}
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <input
            style={styles.loginInput}
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            style={styles.loginButton}
            onClick={handleLogin}
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
        <div style={styles.logo}>
          <div style={styles.logoBox}>CE</div>

          <div>
            <b>Central Edu</b>
            <div style={styles.logoSub}>
              Online Education
            </div>
          </div>
        </div>

        <div style={styles.menuTitle}>
          ASOSIY
        </div>

        <MenuItem
          icon="📊"
          text="Dashboard"
          active={page === "dashboard"}
          onClick={() => setPage("dashboard")}
        />

        <MenuItem
          icon="🏫"
          text="MTTlar"
          active={page === "mtt" || page === "mtt-detail"}
          onClick={() => setPage("mtt")}
        />

        <MenuItem
          icon="👧"
          text="Bolalar"
          active={page === "children"}
          onClick={() => setPage("children")}
        />

        <MenuItem
          icon="👨‍🏫"
          text="O‘qituvchilar"
          active={page === "teachers"}
          onClick={() => setPage("teachers")}
        />

        <MenuItem
          icon="📚"
          text="Darslar"
          active={page === "lessons"}
          onClick={() => setPage("lessons")}
        />

        <MenuItem
          icon="📅"
          text="Davomat"
          active={page === "attendance"}
          onClick={() => setPage("attendance")}
        />

        <div style={styles.menuTitle}>
          XIZMATLAR
        </div>

        <MenuItem
          icon="📺"
          text="Smart TV"
          active={page === "smarttv"}
          onClick={() => setPage("smarttv")}
        />

        <MenuItem
          icon="💰"
          text="Moliya"
          active={page === "finance"}
          onClick={() => setPage("finance")}
        />

        <MenuItem
          icon="🤝"
          text="Investor"
          active={page === "investor"}
          onClick={() => setPage("investor")}
        />

        <button
          style={styles.logoutButton}
          onClick={logout}
        >
          🚪 Chiqish
        </button>
      </aside>

      <main style={styles.main}>
        {renderPage()}
      </main>
    </div>
  );
}

function MenuItem({
  icon,
  text,
  active,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        ...styles.menuItem,
        ...(active ? styles.menuItemActive : {}),
      }}
    >
      <span>{icon}</span>
      <span>{text}</span>
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

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "8px",
    marginBottom: "35px",
  },

  logoBox: {
    width: "43px",
    height: "43px",
    borderRadius: "11px",
    background: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  logoSub: {
    color: "#94a3b8",
    fontSize: "11px",
    marginTop: "3px",
  },

  menuTitle: {
    color: "#64748b",
    fontSize: "11px",
    margin: "18px 10px 10px",
  },

  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    marginBottom: "5px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background 0.15s",
  },

  menuItemActive: {
    background: "#2563eb",
  },

  logoutButton: {
    position: "absolute",
    bottom: "25px",
    left: "25px",
    right: "25px",
    background: "#1f2937",
    color: "#cbd5e1",
    border: "none",
    borderRadius: "8px",
    padding: "11px",
    cursor: "pointer",
  },

  main: {
    marginLeft: "235px",
    padding: "35px",
    minHeight: "100vh",
    boxSizing: "border-box",
  },

  subtitle: {
    color: "#64748b",
    marginTop: "-8px",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "18px",
    marginTop: "28px",
    marginBottom: "25px",
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
    fontSize: "14px",
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
    marginBottom: "20px",
  },

  panelHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
    gap: "20px",
  },

  panelTitle: {
    margin: 0,
  },

  smallText: {
    color: "#94a3b8",
    fontSize: "13px",
  },

  listRow: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    padding: "17px 5px",
    borderBottom: "1px solid #edf0f4",
    cursor: "pointer",
  },

  green: {
    color: "#16a34a",
  },

  mttGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "25px",
  },

  mttCard: {
    background: "white",
    padding: "24px",
    borderRadius: "14px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
  },

  mttTop: {
    display: "flex",
    gap: "14px",
    alignItems: "center",
    marginBottom: "20px",
  },

  mttIcon: {
    fontSize: "30px",
  },

  mttName: {
    margin: "0 0 5px",
  },

  activeBadge: {
    color: "#16a34a",
    fontSize: "13px",
  },

  mttInfo: {
    display: "flex",
    justifyContent: "space-between",
    padding: "11px 0",
    borderBottom: "1px solid #edf0f4",
  },

  blueButton: {
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "11px 16px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  blueButtonFull: {
    width: "100%",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "11px",
    cursor: "pointer",
    marginTop: "18px",
  },

  greenButton: {
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "11px 20px",
    cursor: "pointer",
    marginTop: "15px",
    border: "none",
  },

  backButton: {
    background: "#374151",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    cursor: "pointer",
    marginBottom: "20px",
  },

  twoColumns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  lessonBox: {
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "10px",
  },

  onlineBadge: {
    display: "inline-block",
    marginTop: "10px",
    color: "#16a34a",
    background: "#dcfce7",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "14px 0",
    borderBottom: "1px solid #edf0f4",
  },

  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: "12px",
  },

  input: {
    padding: "12px",
    border: "1px solid #dbe2ea",
    borderRadius: "8px",
    outline: "none",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    boxSizing: "border-box",
    width: "100%",
  },

  search: {
    width: "250px",
    padding: "11px",
    border: "1px solid #dbe2ea",
    borderRadius: "8px",
    outline: "none",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    boxSizing: "border-box",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr 1.2fr .5fr .7fr .5fr",
    padding: "12px 0",
    color: "#94a3b8",
    fontSize: "12px",
    borderBottom: "1px solid #e5e7eb",
  },

  childRow: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr 1.2fr .5fr .7fr .5fr",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #edf0f4",
    fontSize: "13px",
  },

  deleteButton: {
    background: "#fee2e2",
    color: "#dc2626",
    border: "none",
    borderRadius: "6px",
    padding: "7px",
    cursor: "pointer",
  },

  empty: {
    textAlign: "center",
    padding: "35px",
    color: "#94a3b8",
  },

  loginPage: {
    minHeight: "100vh",
    background: "#f4f7fb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },

  loginBox: {
    width: "380px",
    background: "white",
    padding: "35px",
    borderRadius: "16px",
    boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
    boxSizing: "border-box",
  },

  loginLogo: {
    width: "60px",
    height: "60px",
    borderRadius: "15px",
    background: "#2563eb",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 18px",
    fontSize: "20px",
    fontWeight: "bold",
  },

  loginTitle: {
    textAlign: "center",
    margin: "0 0 5px",
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
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
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
};

export default App;
```
