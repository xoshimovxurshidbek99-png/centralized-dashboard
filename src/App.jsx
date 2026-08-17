import { useState } from "react";

function App() {
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

  const mtts = [
    { name: "MTT №1", children: 40, attendance: "94%" },
    { name: "MTT №2", children: 42, attendance: "91%" },
    { name: "MTT №3", children: 38, attendance: "93%" },
    { name: "MTT №4", children: 41, attendance: "89%" },
    { name: "MTT №5", children: 43, attendance: "95%" },
    { name: "MTT №6", children: 39, attendance: "90%" },
    { name: "MTT №7", children: 44, attendance: "92%" },
    { name: "MTT №8", children: 40, attendance: "94%" },
    { name: "MTT №9", children: 46, attendance: "91%" },
    { name: "MTT №10", children: 47, attendance: "93%" },
  ];

  const menu = [
    ["dashboard", "🏠", "Dashboard"],
    ["mtt", "🏫", "MTTlar"],
    ["children", "👧", "Bolalar"],
    ["teachers", "👨‍🏫", "O‘qituvchilar"],
    ["lessons", "📚", "Darslar"],
    ["attendance", "📊", "Davomat"],
    ["tv", "📺", "Smart TV"],
    ["finance", "💰", "Moliyaviy"],
    ["investor", "💼", "Investor"],
  ];

  function openMTT(mtt) {
    setSelectedMTT(mtt);
    setPage("mtt-detail");
  }

  function addChild() {
    if (newChild.name.trim() === "") {
      alert("Bolaning F.I.Sh. ni kiriting.");
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

  function Dashboard() {
    return (
      <>
        <h1>Dashboard</h1>
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
          <Card icon="👨‍🏫" title="O‘qituvchilar" value="10" />
          <Card icon="📊" title="O‘rtacha davomat" value="92%" />
        </div>

        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <div>
              <h2 style={styles.panelTitle}>🏫 MTTlar holati</h2>
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

          {mtts.slice(0, 5).map((mtt) => (
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
        <h1>🏫 MTTlar</h1>

        <p style={styles.subtitle}>
          Markaziy online ta’lim tizimiga ulangan 10 ta MTT
        </p>

        <div style={styles.mttGrid}>
          {mtts.map((mtt) => (
            <div key={mtt.name} style={styles.mttCard}>
              <div style={styles.mttTop}>
                <div style={styles.mttIcon}>🏫</div>

                <div>
                  <h2 style={styles.mttName}>{mtt.name}</h2>
                  <span style={styles.activeBadge}>● Faol</span>
                </div>
              </div>

              <div style={styles.mttInfo}>
                <span>👧 Bolalar</span>
                <b>{mtt.children}</b>
              </div>

              <div style={styles.mttInfo}>
                <span>📊 Davomat</span>
                <b>{mtt.attendance}</b>
              </div>

              <div style={styles.mttInfo}>
                <span>📺 Smart TV</span>
                <b style={styles.green}>Faol</b>
              </div>

              <button
                style={styles.blueButtonFull}
                onClick={() => openMTT(mtt)}
              >
                Batafsil →
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
          <h2>MTT tanlanmagan</h2>

          <button
            style={styles.blueButton}
            onClick={() => setPage("mtt")}
          >
            MTTlar
          </button>
        </div>
      );
    }

    return (
      <>
        <button
          style={styles.backButton}
          onClick={() => setPage("mtt")}
        >
          ← MTTlar
        </button>

        <h1>{selectedMTT.name}</h1>

        <p style={styles.subtitle}>
          Markaziy online ta’lim tizimiga ulangan MTT
        </p>

        <div style={styles.cards}>
          <Card
            icon="👧"
            title="Bolalar"
            value={selectedMTT.children}
          />

          <Card
            icon="📊"
            title="Davomat"
            value={selectedMTT.attendance}
          />

          <Card icon="📺" title="Smart TV" value="Faol" />

          <Card icon="💰" title="Oylik to‘lov" value="1.5 mln" />
        </div>

        <div style={styles.twoColumns}>
          <div style={styles.panel}>
            <h2 style={styles.panelTitle}>📚 Bugungi dars</h2>

            <div style={styles.lessonBox}>
              <h3>English for Kids</h3>
              <p>🕙 10:00 — 10:40</p>
              <p>👨‍🏫 Markaziy o‘qituvchi</p>
              <p>📺 Smart TV orqali online dars</p>

              <span style={styles.onlineBadge}>
                🟢 Online
              </span>
            </div>
          </div>

          <div style={styles.panel}>
            <h2 style={styles.panelTitle}>📊 MTT holati</h2>

            <div style={styles.infoRow}>
              <span>Bolalar</span>
              <b>{selectedMTT.children}</b>
            </div>

            <div style={styles.infoRow}>
              <span>Davomat</span>
              <b>{selectedMTT.attendance}</b>
            </div>

            <div style={styles.infoRow}>
              <span>Smart TV</span>
              <b style={styles.green}>Faol</b>
            </div>

            <div style={styles.infoRow}>
              <span>Online tizim</span>
              <b style={styles.green}>Faol</b>
            </div>
          </div>
        </div>
      </>
    );
  }

  function ChildrenPage() {
    return (
      <>
        <div style={styles.pageHeader}>
          <div>
            <h1>👧 Bolalar</h1>
            <p style={styles.subtitle}>
              Tizimdagi barcha bolalar
            </p>
          </div>

          <button
            style={styles.blueButton}
            onClick={() => setShowAdd(!showAdd)}
          >
            + Bola qo‘shish
          </button>
        </div>

        {showAdd && (
          <div style={styles.panel}>
            <h2 style={styles.panelTitle}>
              ➕ Yangi bola qo‘shish
            </h2>

            <div style={styles.formGrid}>
              <input
                style={styles.input}
                placeholder="Bolaning F.I.Sh."
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
                {mtts.map((mtt) => (
                  <option key={mtt.name}>{mtt.name}</option>
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
                min="3"
                max="7"
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
              style={styles.search}
                fontFamily: "Times New Roman, sans-serif",
  fontSize: "14px",
  boxSizing: "border-box",
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
            <div key={child.id} style={styles.childRow}>
              <b>{child.name}</b>
              <span>{child.mtt}</span>
              <span>{child.group}</span>
              <span>{child.age}</span>
              <span style={styles.activeBadge}>Faol</span>

              <button
                style={styles.deleteButton}
                onClick={() => deleteChild(child.id)}
              >
                🗑️
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
    );
  }

  function SimplePage({ icon, title }) {
    return (
      <>
        <h1>
          {icon} {title}
        </h1>

        <div style={styles.panel}>
          <h2>{title} bo‘limi</h2>

          <p style={styles.subtitle}>
            Ushbu modul keyingi bosqichda to‘liq ishga
            tushiriladi.
          </p>
        </div>
      </>
    );
  }

  return (
    <div style={styles.app}>
      <aside style={styles.sidebar}>
        <div style={styles.logo}>
          <div style={styles.logoBox}>CE</div>

          <div>
            <b>Central Edu</b>
            <small>Online Education</small>
          </div>
        </div>

        <div style={styles.menuTitle}>ASOSIY MENU</div>

        {menu.map((item) => (
          <div
            key={item[0]}
            onClick={() => setPage(item[0])}
            style={{
              ...styles.menuItem,
              background:
                page === item[0] ? "#2563eb" : "transparent",
              color:
                page === item[0] ? "white" : "#cbd5e1",
            }}
          >
            <span>{item[1]}</span>
            <span>{item[2]}</span>
          </div>
        ))}

        <div style={styles.sidebarBottom}>
          ⚙️ Sozlamalar
        </div>
      </aside>

      <main style={styles.main}>
        {page === "dashboard" && <Dashboard />}

        {page === "mtt" && <MTTPage />}

        {page === "mtt-detail" && <MTTDetail />}

        {page === "children" && <ChildrenPage />}

        {page === "teachers" && (
          <SimplePage
            icon="👨‍🏫"
            title="O‘qituvchilar"
          />
        )}

        {page === "lessons" && (
          <SimplePage
            icon="📚"
            title="Darslar"
          />
        )}

        {page === "attendance" && (
          <SimplePage
            icon="📊"
            title="Davomat"
          />
        )}

        {page === "tv" && (
          <SimplePage
            icon="📺"
            title="Smart TV"
          />
        )}

        {page === "finance" && (
          <SimplePage
            icon="💰"
            title="Moliyaviy"
          />
        )}

        {page === "investor" && (
          <SimplePage
            icon="💼"
            title="Investor"
          />
        )}
      </main>
    </div>
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

  menuTitle: {
    color: "#64748b",
    fontSize: "11px",
    margin: "0 10px 10px",
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
  },

  sidebarBottom: {
    position: "absolute",
    bottom: "25px",
    left: "25px",
    color: "#94a3b8",
  },

  main: {
    marginLeft: "235px",
    padding: "35px",
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
  },

  search: {
    width: "250px",
    padding: "11px",
    border: "1px solid #dbe2ea",
    borderRadius: "8px",
    outline: "none",
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
};

export default App;
