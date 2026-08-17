import { useState } from "react";

const MTT_DATA = [
  { name: "MTT №1", children: 120, attendance: "94%", groups: 6 },
  { name: "MTT №2", children: 98, attendance: "91%", groups: 5 },
  { name: "MTT №3", children: 115, attendance: "93%", groups: 6 },
  { name: "MTT №4", children: 87, attendance: "90%", groups: 4 },
  { name: "MTT №5", children: 105, attendance: "95%", groups: 5 },
];

const INITIAL_CHILDREN = [
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
    name: "Zuhra Abdullayeva",
    mtt: "MTT №3",
    group: "Katta guruh",
    age: 6,
  },
  {
    id: 5,
    name: "Sardor Karimov",
    mtt: "MTT №4",
    group: "Kichik guruh",
    age: 4,
  },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [page, setPage] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [children, setChildren] = useState(INITIAL_CHILDREN);
  const [showAdd, setShowAdd] = useState(false);

  const [newChild, setNewChild] = useState({
    name: "",
    mtt: "MTT №1",
    group: "Katta guruh",
    age: 6,
  });

  function handleLogin() {
    if (login.trim() === "admin" && password === "12345") {
      setLoggedIn(true);
      setPage("dashboard");
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
            Centralized Online Education
          </p>

          <label style={styles.label}>Login</label>

          <input
            type="text"
            placeholder="Loginni kiriting"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            style={styles.loginInput}
          />

          <label style={styles.label}>Parol</label>

          <input
            type="password"
            placeholder="Parolni kiriting"
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
            onClick={handleLogin}
            style={styles.loginButton}
          >
            🔐 Kirish
          </button>

          <p style={styles.loginHint}>
            Demo: admin / 12345
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.app}>
      <aside style={styles.sidebar}>
        <div style={styles.brand}>
          <div style={styles.brandLogo}>CE</div>

          <div>
            <div style={styles.brandName}>Central Edu</div>
            <div style={styles.brandSub}>Online Education</div>
          </div>
        </div>

        <div style={styles.menuTitle}>ASOSIY</div>

        <button
          onClick={() => setPage("dashboard")}
          style={
            page === "dashboard"
              ? styles.menuActive
              : styles.menuButton
          }
        >
          🏠 <span>Dashboard</span>
        </button>

        <button
          onClick={() => setPage("mtt")}
          style={
            page === "mtt"
              ? styles.menuActive
              : styles.menuButton
          }
        >
          🏫 <span>MTTlar</span>
        </button>

        <button
          onClick={() => setPage("children")}
          style={
            page === "children"
              ? styles.menuActive
              : styles.menuButton
          }
        >
          👧 <span>Bolalar</span>
        </button>

        <button
          onClick={() => setPage("teachers")}
          style={
            page === "teachers"
              ? styles.menuActive
              : styles.menuButton
          }
        >
          👨‍🏫 <span>O‘qituvchilar</span>
        </button>

        <div style={styles.menuTitle}>TIZIM</div>

        <button
          onClick={() => setPage("smarttv")}
          style={
            page === "smarttv"
              ? styles.menuActive
              : styles.menuButton
          }
        >
          📺 <span>Smart TV</span>
        </button>

        <button
          onClick={() => setPage("finance")}
          style={
            page === "finance"
              ? styles.menuActive
              : styles.menuButton
          }
        >
          💰 <span>Moliya</span>
        </button>

        <div style={styles.sidebarBottom}>
          <div style={styles.userBox}>
            <div style={styles.userAvatar}>A</div>

            <div>
              <div style={styles.userName}>Administrator</div>
              <div style={styles.userRole}>Tizim administratori</div>
            </div>
          </div>

          <button
            onClick={logout}
            style={styles.logoutButton}
          >
            🚪 Chiqish
          </button>
        </div>
      </aside>

      <main style={styles.main}>
        <div style={styles.topbar}>
          <div>
            <div style={styles.breadcrumb}>
              Central Edu /{" "}
              {page === "dashboard"
                ? "Dashboard"
                : page === "mtt"
                ? "MTTlar"
                : page === "children"
                ? "Bolalar"
                : page === "teachers"
                ? "O‘qituvchilar"
                : page === "smarttv"
                ? "Smart TV"
                : "Moliya"}
            </div>

            <h1 style={styles.pageTitle}>
              {page === "dashboard"
                ? "Dashboard"
                : page === "mtt"
                ? "MTTlar"
                : page === "children"
                ? "Bolalar"
                : page === "teachers"
                ? "O‘qituvchilar"
                : page === "smarttv"
                ? "Smart TV"
                : "Moliya"}
            </h1>
          </div>

          <div style={styles.status}>
            <span style={styles.statusDot}></span>
            Tizim faol
          </div>
        </div>

        {page === "dashboard" && (
          <>
            <p style={styles.subtitle}>
              Centralized Online Education tizimining boshqaruv paneli
            </p>

            <div style={styles.cards}>
              <div style={styles.card}>
                <div style={styles.cardTop}>
                  <div style={styles.cardIconBlue}>🏫</div>
                  <span style={styles.cardArrow}>↗</span>
                </div>
                <div style={styles.cardLabel}>Ulangan MTTlar</div>
                <div style={styles.cardNumber}>10</div>
                <div style={styles.cardInfo}>
                  <span style={styles.greenText}>+2</span> bu oy
                </div>
              </div>

              <div style={styles.card}>
                <div style={styles.cardTop}>
                  <div style={styles.cardIconGreen}>👧</div>
                  <span style={styles.cardArrow}>↗</span>
                </div>
                <div style={styles.cardLabel}>
                  Ro‘yxatdagi bolalar
                </div>
                <div style={styles.cardNumber}>
                  {children.length}
                </div>
                <div style={styles.cardInfo}>
                  <span style={styles.greenText}>Faol</span>
                </div>
              </div>

              <div style={styles.card}>
                <div style={styles.cardTop}>
                  <div style={styles.cardIconPurple}>👨‍🏫</div>
                  <span style={styles.cardArrow}>↗</span>
                </div>
                <div style={styles.cardLabel}>O‘qituvchilar</div>
                <div style={styles.cardNumber}>50</div>
                <div style={styles.cardInfo}>
                  <span style={styles.greenText}>48</span> faol
                </div>
              </div>

              <div style={styles.card}>
                <div style={styles.cardTop}>
                  <div style={styles.cardIconOrange}>📊</div>
                  <span style={styles.cardArrow}>↗</span>
                </div>
                <div style={styles.cardLabel}>O‘rtacha davomat</div>
                <div style={styles.cardNumber}>92%</div>
                <div style={styles.cardInfo}>
                  <span style={styles.greenText}>+3.2%</span> o‘tgan oyga
                </div>
              </div>
            </div>

            <div style={styles.twoColumns}>
              <div style={styles.panel}>
                <div style={styles.panelHeader}>
                  <div>
                    <h2 style={styles.panelTitle}>
                      🏫 MTTlar holati
                    </h2>
                    <p style={styles.panelSub}>
                      Ulangan maktabgacha ta’lim muassasalari
                    </p>
                  </div>

                  <button
                    onClick={() => setPage("mtt")}
                    style={styles.smallBlueButton}
                  >
                    Barchasi →
                  </button>
                </div>

                {MTT_DATA.map((mtt) => (
                  <div
                    key={mtt.name}
                    style={styles.mttRow}
                    onClick={() => setPage("mtt")}
                  >
                    <div style={styles.mttIcon}>🏫</div>

                    <div style={styles.mttInfo}>
                      <b>{mtt.name}</b>
                      <span>
                        {mtt.children} bola · {mtt.groups} guruh
                      </span>
                    </div>

                    <div style={styles.attendance}>
                      <b>{mtt.attendance}</b>
                      <span>davomat</span>
                    </div>

                    <span style={styles.activeBadge}>
                      ● Faol
                    </span>
                  </div>
                ))}
              </div>

              <div style={styles.panel}>
                <div style={styles.panelHeader}>
                  <div>
                    <h2 style={styles.panelTitle}>
                      📊 Umumiy ko‘rsatkichlar
                    </h2>
                    <p style={styles.panelSub}>
                      Tizimning asosiy statistikasi
                    </p>
                  </div>
                </div>

                <div style={styles.statBox}>
                  <div style={styles.statIcon}>👧</div>
                  <div style={styles.statContent}>
                    <span>Jami bolalar</span>
                    <b>{children.length}</b>
                  </div>
                </div>

                <div style={styles.statBox}>
                  <div style={styles.statIcon}>🏫</div>
                  <div style={styles.statContent}>
                    <span>Jami MTT</span>
                    <b>10</b>
                  </div>
                </div>

                <div style={styles.statBox}>
                  <div style={styles.statIcon}>👨‍🏫</div>
                  <div style={styles.statContent}>
                    <span>Jami o‘qituvchilar</span>
                    <b>50</b>
                  </div>
                </div>

                <div style={styles.statBox}>
                  <div style={styles.statIcon}>📺</div>
                  <div style={styles.statContent}>
                    <span>Ulangan Smart TV</span>
                    <b>10</b>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {page === "mtt" && (
          <div style={styles.panel}>
            <div style={styles.panelHeader}>
              <div>
                <h2 style={styles.panelTitle}>
                  🏫 Maktabgacha ta’lim muassasalari
                </h2>
                <p style={styles.panelSub}>
                  Tizimga ulangan MTTlar ro‘yxati
                </p>
              </div>
            </div>

            <div style={styles.mttGrid}>
              {MTT_DATA.map((mtt) => (
                <div key={mtt.name} style={styles.mttCard}>
                  <div style={styles.bigMttIcon}>🏫</div>
                  <h2>{mtt.name}</h2>
                  <p>{mtt.children} nafar bola</p>
                  <p>{mtt.groups} ta guruh</p>
                  <div style={styles.mttAttendance}>
                    Davomat: <b>{mtt.attendance}</b>
                  </div>
                  <span style={styles.activeBadge}>● Faol</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "children" && (
          <>
            <div style={styles.panel}>
              <div style={styles.panelHeader}>
                <div>
                  <h2 style={styles.panelTitle}>
                    👧 Bolalar ro‘yxati
                  </h2>
                  <p style={styles.panelSub}>
                    Barcha ro‘yxatdan o‘tgan bolalar
                  </p>
                </div>

                <button
                  onClick={() => setShowAdd(!showAdd)}
                  style={styles.greenButton}
                >
                  + Bola qo‘shish
                </button>
              </div>

              {showAdd && (
                <div style={styles.addBox}>
                  <h3>Yangi bola qo‘shish</h3>

                  <div style={styles.formGrid}>
                    <input
                      style={styles.formInput}
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
                      style={styles.formInput}
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
                      style={styles.formInput}
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
                    </select>

                    <input
                      type="number"
                      min="3"
                      max="7"
                      style={styles.formInput}
                      value={newChild.age}
                      onChange={(e) =>
                        setNewChild({
                          ...newChild,
                          age: e.target.value,
                        })
                      }
                    />
                  </div>

                  <button
                    onClick={addChild}
                    style={styles.greenButton}
                  >
                    Saqlash
                  </button>
                </div>
              )}

              <div style={styles.searchBox}>
                🔎
                <input
                  placeholder="Bolani qidirish..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div style={styles.tableHeader}>
                <b>F.I.Sh.</b>
                <b>MTT</b>
                <b>Guruh</b>
                <b>Yosh</b>
                <b>Holat</b>
                <b>Amal</b>
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

                  <span style={styles.activeText}>
                    ● Faol
                  </span>

                  <button
                    onClick={() => deleteChild(child.id)}
                    style={styles.deleteButton}
                  >
                    O‘chirish
                  </button>
                </div>
              ))}

              {filteredChildren.length === 0 && (
                <div style={styles.empty}>
                  Bola topilmadi
                </div>
              )}
            </div>
          </>
        )}

        {page === "teachers" && (
          <div style={styles.panel}>
            <h2 style={styles.panelTitle}>
              👨‍🏫 O‘qituvchilar
            </h2>

            <p style={styles.panelSub}>
              Tizimdagi o‘qituvchilar boshqaruvi
            </p>

            <div style={styles.bigEmpty}>
              <div>👨‍🏫</div>
              <h2>50 nafar o‘qituvchi</h2>
              <p>
                O‘qituvchilar moduli keyingi bosqichda
                kengaytiriladi.
              </p>
            </div>
          </div>
        )}

        {page === "smarttv" && (
          <div style={styles.panel}>
            <h2 style={styles.panelTitle}>
              📺 Smart TV
            </h2>

            <p style={styles.panelSub}>
              MTTlarda o‘rnatilgan Smart TV qurilmalari
            </p>

            <div style={styles.tvGrid}>
              {MTT_DATA.map((mtt) => (
                <div key={mtt.name} style={styles.tvCard}>
                  <div style={styles.tvIcon}>📺</div>
                  <h3>{mtt.name}</h3>
                  <span style={styles.activeBadge}>
                    ● Ulangan
                  </span>
                  <p>Online</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {page === "finance" && (
          <div style={styles.panel}>
            <h2 style={styles.panelTitle}>
              💰 Moliya
            </h2>

            <p style={styles.panelSub}>
              Central Edu tizimining moliyaviy ko‘rsatkichlari
            </p>

            <div style={styles.financeGrid}>
              <div style={styles.financeCard}>
                <span>Oylik tushum</span>
                <b>25 000 000 so‘m</b>
              </div>

              <div style={styles.financeCard}>
                <span>MTTlar to‘lovi</span>
                <b>18 500 000 so‘m</b>
              </div>

              <div style={styles.financeCard}>
                <span>Investor daromadi</span>
                <b>6 500 000 so‘m</b>
              </div>
            </div>
          </div>
        )}
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
    background: "linear-gradient(135deg, #eff6ff, #f8fafc)",
    fontFamily: "Arial, sans-serif",
  },

  loginBox: {
    width: "390px",
    padding: "40px",
    background: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12)",
    boxSizing: "border-box",
  },

  loginLogo: {
    width: "68px",
    height: "68px",
    margin: "0 auto 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "18px",
    background: "#2563eb",
    color: "#fff",
    fontSize: "22px",
    fontWeight: "bold",
  },

  loginTitle: {
    textAlign: "center",
    margin: "0",
    color: "#172033",
    fontSize: "30px",
  },

  loginSubtitle: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: "30px",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    color: "#334155",
    fontWeight: "bold",
    fontSize: "14px",
  },

  loginInput: {
    width: "100%",
    padding: "14px",
    marginBottom: "16px",
    boxSizing: "border-box",
    border: "1px solid #dbe2ea",
    borderRadius: "10px",
    fontSize: "15px",
    outline: "none",
  },

  loginButton: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
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
    width: "250px",
    background: "#111827",
    color: "#fff",
    padding: "25px 16px",
    boxSizing: "border-box",
    zIndex: 10,
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "35px",
  },

  brandLogo: {
    width: "46px",
    height: "46px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#2563eb",
    borderRadius: "12px",
    fontWeight: "bold",
  },

  brandName: {
    fontWeight: "bold",
    fontSize: "17px",
  },

  brandSub: {
    color: "#94a3b8",
    fontSize: "11px",
    marginTop: "3px",
  },

  menuTitle: {
    color: "#64748b",
    fontSize: "10px",
    fontWeight: "bold",
    margin: "18px 10px 8px",
  },

  menuButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "13px 14px",
    marginBottom: "5px",
    background: "transparent",
    color: "#cbd5e1",
    border: "none",
    borderRadius: "9px",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "14px",
  },

  menuActive: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "13px 14px",
    marginBottom: "5px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "9px",
    textAlign: "left",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  },

  sidebarBottom: {
    position: "absolute",
    left: "16px",
    right: "16px",
    bottom: "20px",
  },

  userBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px",
    background: "#1f2937",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  userAvatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  userName: {
    fontSize: "12px",
    fontWeight: "bold",
  },

  userRole: {
    fontSize: "10px",
    color: "#94a3b8",
    marginTop: "3px",
  },

  logoutButton: {
    width: "100%",
    padding: "11px",
    border: "none",
    borderRadius: "8px",
    background: "#374151",
    color: "#cbd5e1",
    cursor: "pointer",
  },

  main: {
    marginLeft: "250px",
    padding: "35px",
    minHeight: "100vh",
    boxSizing: "border-box",
  },

  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  breadcrumb: {
    color: "#94a3b8",
    fontSize: "12px",
    marginBottom: "8px",
  },

  pageTitle: {
    margin: 0,
    fontSize: "30px",
  },

  subtitle: {
    color: "#64748b",
    marginTop: "8px",
  },

  status: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    padding: "9px 13px",
    background: "#ecfdf5",
    color: "#16a34a",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  statusDot: {
    width: "8px",
    height: "8px",
    background: "#22c55e",
    borderRadius: "50%",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "18px",
    marginTop: "25px",
  },

  card: {
    background: "#fff",
    padding: "22px",
    borderRadius: "15px",
    boxShadow: "0 3px 15px rgba(15,23,42,0.05)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardIconBlue: {
    fontSize: "25px",
    background: "#eff6ff",
    padding: "10px",
    borderRadius: "10px",
  },

  cardIconGreen: {
    fontSize: "25px",
    background: "#ecfdf5",
    padding: "10px",
    borderRadius: "10px",
  },

  cardIconPurple: {
    fontSize: "25px",
    background: "#f5f3ff",
    padding: "10px",
    borderRadius: "10px",
  },

  cardIconOrange: {
    fontSize: "25px",
    background: "#fff7ed",
    padding: "10px",
    borderRadius: "10px",
  },

  cardArrow: {
    color: "#94a3b8",
  },

  cardLabel: {
    color: "#64748b",
    fontSize: "13px",
    marginTop: "15px",
  },

  cardNumber: {
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "5px",
  },

  cardInfo: {
    color: "#94a3b8",
    fontSize: "12px",
    marginTop: "8px",
  },

  greenText: {
    color: "#16a34a",
    fontWeight: "bold",
  },

  twoColumns: {
    display: "grid",
    gridTemplateColumns: "1.6fr 1fr",
    gap: "20px",
    marginTop: "20px",
  },

  panel: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 3px 15px rgba(15,23,42,0.05)",
  },

  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  panelTitle: {
    margin: 0,
    fontSize: "19px",
  },

  panelSub: {
    margin: "6px 0 0",
    color: "#64748b",
    fontSize: "12px",
  },

  smallBlueButton: {
    border: "none",
    background: "#eff6ff",
    color: "#2563eb",
    padding: "9px 13px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  mttRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 0",
    borderBottom: "1px solid #eef2f7",
    cursor: "pointer",
  },

  mttIcon: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#eff6ff",
    borderRadius: "10px",
  },

  mttInfo: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    fontSize: "13px",
  },

  mttInfoSpan: {
    color: "#94a3b8",
  },

  attendance: {
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
    fontSize: "12px",
  },

  activeBadge: {
    color: "#16a34a",
    background: "#ecfdf5",
    padding: "6px 9px",
    borderRadius: "15px",
    fontSize: "11px",
    fontWeight: "bold",
  },

  statBox: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
    padding: "14px 0",
    borderBottom: "1px solid #eef2f7",
  },

  statIcon: {
    fontSize: "20px",
    background: "#f8fafc",
    padding: "9px",
    borderRadius: "9px",
  },

  statContent: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    color: "#64748b",
    fontSize: "13px",
  },

  mttGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
  },

  mttCard: {
    border: "1px solid #e2e8f0",
    borderRadius: "13px",
    padding: "20px",
  },

  bigMttIcon: {
    fontSize: "35px",
  },

  mttAttendance: {
    margin: "15px 0",
    color: "#64748b",
  },

  greenButton: {
    padding: "11px 17px",
    background: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  addBox: {
    background: "#f8fafc",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 0.7fr",
    gap: "10px",
    marginBottom: "15px",
  },

  formInput: {
    padding: "12px",
    border: "1px solid #dbe2ea",
    borderRadius: "8px",
    outline: "none",
    boxSizing: "border-box",
    width: "100%",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "300px",
    padding: "11px 13px",
    border: "1px solid #dbe2ea",
    borderRadius: "9px",
    marginBottom: "20px",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 0.5fr 0.7fr 0.7fr",
    gap: "10px",
    padding: "13px 0",
    borderBottom: "1px solid #e2e8f0",
    color: "#64748b",
    fontSize: "13px",
  },

  childRow: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 0.5fr 0.7fr 0.7fr",
    gap: "10px",
    alignItems: "center",
    padding: "15px 0",
    borderBottom: "1px solid #eef2f7",
    fontSize: "13px",
  },

  activeText: {
    color: "#16a34a",
    fontWeight: "bold",
  },

  deleteButton: {
    border: "none",
    background: "#fef2f2",
    color: "#dc2626",
    padding: "7px 9px",
    borderRadius: "7px",
    cursor: "pointer",
    fontSize: "11px",
  },

  empty: {
    textAlign: "center",
    padding: "40px",
    color: "#94a3b8",
  },

  bigEmpty: {
    textAlign: "center",
    padding: "70px 20px",
    color: "#64748b",
  },

  tvGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
  },

  tvCard: {
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "20px",
  },

  tvIcon: {
    fontSize: "35px",
  },

  financeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "18px",
    marginTop: "25px",
  },

  financeCard: {
    padding: "25px",
    borderRadius: "12px",
    background: "#f8fafc",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};

export default App;
