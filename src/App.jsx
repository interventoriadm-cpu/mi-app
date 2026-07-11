import { useState, useEffect } from "react";

const COLORS = {
  primary: "#7B3F8B",
  primaryLight: "#A855C8",
  primaryDark: "#5A2D6B",
  secondary: "#F4A7B9",
  secondaryLight: "#FDE8F0",
  accent: "#E8B4D0",
  gold: "#D4AF7A",
  cream: "#FDF8F5",
  white: "#FFFFFF",
  text: "#2D1B3D",
  textLight: "#7A6080",
  textMuted: "#B09ABF",
  bg: "#FDF6FA",
  bgCard: "#FFFFFF",
  border: "#EDD5F0",
};

const VERSICULOS = [
  {
    id: 1,
    texto: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal.",
    referencia: "Jeremías 29:11",
    tema: "Esperanza",
  },
  {
    id: 2,
    texto: "Todo lo puedo en Cristo que me fortalece.",
    referencia: "Filipenses 4:13",
    tema: "Fortaleza",
  },
  {
    id: 3,
    texto: "El Señor es mi pastor; nada me faltará.",
    referencia: "Salmos 23:1",
    tema: "Provision",
  },
  {
    id: 4,
    texto: "Encomienda tu camino a Jehová; confía en él, y él hará.",
    referencia: "Salmos 37:5",
    tema: "Confianza",
  },
  {
    id: 5,
    texto: "La mujer virtuosa es corona de su marido.",
    referencia: "Proverbios 12:4",
    tema: "Mujer",
  },
  {
    id: 6,
    texto: "Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo.",
    referencia: "Deuteronomio 31:6",
    tema: "Valor",
  },
  {
    id: 7,
    texto: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.",
    referencia: "Mateo 6:33",
    tema: "Fe",
  },
  {
    id: 8,
    texto: "Echa sobre Jehová tu carga, y él te sustentará; no dejará para siempre caído al justo.",
    referencia: "Salmos 55:22",
    tema: "Descanso",
  },
  {
    id: 9,
    texto: "El amor es sufrido, es benigno; el amor no tiene envidia.",
    referencia: "1 Corintios 13:4",
    tema: "Amor",
  },
  {
    id: 10,
    texto: "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.",
    referencia: "Jeremías 33:3",
    tema: "Oración",
  },
  {
    id: 11,
    texto: "No os afanéis por nada; sino sean conocidas vuestras peticiones delante de Dios.",
    referencia: "Filipenses 4:6",
    tema: "Paz",
  },
  {
    id: 12,
    texto: "Bendita tú entre las mujeres, y bendito el fruto de tu vientre.",
    referencia: "Lucas 1:42",
    tema: "Bendición",
  },
];

const ORACIONES = [
  {
    id: 1,
    titulo: "Oración de la Mañana",
    texto: "Señor, gracias por este nuevo día. Guía mis pasos, ilumina mi mente y llena mi corazón de tu amor. Que todo lo que haga hoy sea para tu gloria. Amén.",
    icono: "🌅",
  },
  {
    id: 2,
    titulo: "Oración por la Paz",
    texto: "Padre celestial, en medio de las tormentas de la vida, dame tu paz que sobrepasa todo entendimiento. Que mi corazón descanse en ti. Amén.",
    icono: "🕊️",
  },
  {
    id: 3,
    titulo: "Oración por la Familia",
    texto: "Dios de amor, protege y bendice a mi familia. Pon un cerco de protección sobre cada uno de ellos. Úne nuestros corazones en tu amor. Amén.",
    icono: "👨‍👩‍👧‍👦",
  },
  {
    id: 4,
    titulo: "Oración de la Noche",
    texto: "Señor, gracias por tu fidelidad de este día. Perdona mis faltas y renueva mi espíritu mientras descanso. En tus manos encomiendo mi sueño. Amén.",
    icono: "🌙",
  },
  {
    id: 5,
    titulo: "Oración por Fortaleza",
    texto: "Dios todopoderoso, cuando me siento débil, recuérdame que tu fuerza se perfecciona en mi debilidad. Dame valentía para enfrentar cada reto. Amén.",
    icono: "💪",
  },
];

const DEVOCIONALES = [
  {
    id: 1,
    titulo: "Mujer de Fe",
    subtitulo: "Caminando con confianza",
    texto: "Dios te creó con un propósito único y hermoso. Cada mañana es una nueva oportunidad para confiar en sus planes. La fe no significa ausencia de dudas, sino elegir creer a pesar de ellas. Hoy, da un paso de fe y observa cómo Dios obra en tu vida.",
    versiculo: "Jeremías 29:11",
    duracion: "5 min",
    icono: "🌸",
    tag: "Fe",
  },
  {
    id: 2,
    titulo: "Descanso en Sus Brazos",
    subtitulo: "Encontrando paz verdadera",
    texto: "En un mundo que constantemente demanda más de nosotras, Jesús nos invita a venir a él con todo nuestro cansancio. Su yugo es fácil y su carga es ligera. Hoy, suelta lo que llevas y permite que él cargue contigo.",
    versiculo: "Mateo 11:28",
    duracion: "4 min",
    icono: "🕊️",
    tag: "Paz",
  },
  {
    id: 3,
    titulo: "Guerreras de Oración",
    subtitulo: "El poder de interceder",
    texto: "La oración es nuestra arma más poderosa. Cuando oramos, movemos el corazón de Dios y cambiamos circunstancias. Tú, como mujer de Dios, tienes acceso directo al trono de la gracia. No subestimes el poder de tus oraciones.",
    versiculo: "Santiago 5:16",
    duracion: "6 min",
    icono: "🙏",
    tag: "Oración",
  },
];

const PLANES = [
  {
    id: 1,
    titulo: "31 Días con Dios",
    descripcion: "Un versículo especial cada día del mes para mujeres",
    progreso: 12,
    total: 31,
    icono: "📅",
    color: "#A855C8",
  },
  {
    id: 2,
    titulo: "Proverbios para la Mujer",
    descripcion: "Sabiduría bíblica para cada aspecto de tu vida",
    progreso: 5,
    total: 31,
    icono: "📖",
    color: "#E8B4D0",
  },
  {
    id: 3,
    titulo: "Salmos de Consuelo",
    descripcion: "150 salmos para fortalecer tu corazón",
    progreso: 0,
    total: 30,
    icono: "💜",
    color: "#D4AF7A",
  },
  {
    id: 4,
    titulo: "Mujeres de la Biblia",
    descripcion: "Aprende de las grandes heroínas de la fe",
    progreso: 0,
    total: 14,
    icono: "👑",
    color: "#F4A7B9",
  },
];

const QUIZ_PREGUNTAS = [
  {
    id: 1,
    pregunta: "¿Quién fue la madre de Jesús?",
    opciones: ["María", "Marta", "Sara", "Rebeca"],
    correcta: 0,
  },
  {
    id: 2,
    pregunta: "¿En qué libro de la Biblia encontramos 'El Señor es mi pastor'?",
    opciones: ["Proverbios", "Isaías", "Salmos", "Job"],
    correcta: 2,
  },
  {
    id: 3,
    pregunta: "¿Quién fue la esposa de Abraham?",
    opciones: ["Raquel", "Sara", "Débora", "Ester"],
    correcta: 1,
  },
  {
    id: 4,
    pregunta: "¿Qué mujer salvó a su pueblo de la destrucción en el libro que lleva su nombre?",
    opciones: ["Rut", "Judit", "Ester", "Débora"],
    correcta: 2,
  },
  {
    id: 5,
    pregunta: "¿Cuántos libros tiene la Biblia?",
    opciones: ["64", "66", "68", "72"],
    correcta: 1,
  },
];

const getDiasDelMes = () => {
  const hoy = new Date();
  const año = hoy.getFullYear();
  const mes = hoy.getMonth();
  const diasEnMes = new Date(año, mes + 1, 0).getDate();
  const primerDia = new Date(año, mes, 1).getDay();
  return { diasEnMes, primerDia, hoy: hoy.getDate() };
};

const getNombreMes = () => {
  const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  return meses[new Date().getMonth()];
};

export default function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [versiculo, setVersiculo] = useState(VERSICULOS[0]);
  const [favoritos, setFavoritos] = useState(() => JSON.parse(localStorage.getItem("favoritos") || "[]"));
  const [notas, setNotas] = useState(() => JSON.parse(localStorage.getItem("notas") || "{}"));
  const [reflexiones, setReflexiones] = useState(() => JSON.parse(localStorage.getItem("reflexiones") || "{}"));
  const [oracionSeleccionada, setOracionSeleccionada] = useState(null);
  const [amen, setAmen] = useState(false);
  const [amenContador, setAmenContador] = useState(0);
  const [devocionalSeleccionado, setDevocionalSeleccionado] = useState(null);
  const [quizActivo, setQuizActivo] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizRespuesta, setQuizRespuesta] = useState(null);
  const [quizPuntaje, setQuizPuntaje] = useState(0);
  const [quizTerminado, setQuizTerminado] = useState(false);
  const [recordatorio, setRecordatorio] = useState({ activo: false, hora: "07:00" });
  const [reflexionMañana, setReflexionMañana] = useState("");
  const [reflexionNoche, setReflexionNoche] = useState("");
  const [reflexionDia, setReflexionDia] = useState(() => new Date().toDateString());
  const [mostrarReflexion, setMostrarReflexion] = useState(false);
  const [versiculoBuscado, setVersiculoBuscado] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [notaActual, setNotaActual] = useState("");
  const [versiculoNota, setVersiculoNota] = useState(null);
  const [diasFavoritos, setDiasFavoritos] = useState(() => JSON.parse(localStorage.getItem("diasFavoritos") || "[]"));
  const [planSeleccionado, setPlanSeleccionado] = useState(null);
  const [animFav, setAnimFav] = useState(false);
  const [mostrarGuardado, setMostrarGuardado] = useState(false);

  useEffect(() => {
    const hoy = new Date().getDay();
    const idx = hoy % VERSICULOS.length;
    setVersiculo(VERSICULOS[idx]);
    const r = JSON.parse(localStorage.getItem("reflexiones") || "{}");
    const hoyStr = new Date().toDateString();
    setReflexionMañana(r[hoyStr]?.mañana || "");
    setReflexionNoche(r[hoyStr]?.noche || "");
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  useEffect(() => {
    localStorage.setItem("notas", JSON.stringify(notas));
  }, [notas]);

  useEffect(() => {
    localStorage.setItem("diasFavoritos", JSON.stringify(diasFavoritos));
  }, [diasFavoritos]);

  const guardarReflexion = () => {
    const hoyStr = new Date().toDateString();
    const nuevas = { ...reflexiones, [hoyStr]: { mañana: reflexionMañana, noche: reflexionNoche } };
    setReflexiones(nuevas);
    localStorage.setItem("reflexiones", JSON.stringify(nuevas));
    setMostrarGuardado(true);
    setTimeout(() => setMostrarGuardado(false), 2000);
  };

  const toggleFavorito = (v) => {
    setAnimFav(true);
    setTimeout(() => setAnimFav(false), 400);
    const existe = favoritos.find((f) => f.id === v.id);
    if (existe) {
      setFavoritos(favoritos.filter((f) => f.id !== v.id));
    } else {
      setFavoritos([...favoritos, v]);
      const hoy = new Date().getDate();
      if (!diasFavoritos.includes(hoy)) {
        setDiasFavoritos([...diasFavoritos, hoy]);
      }
    }
  };

  const esFavorito = (id) => favoritos.some((f) => f.id === id);

  const handleAmen = () => {
    setAmen(true);
    setAmenContador(4);
    const intervalo = setInterval(() => {
      setAmenContador((c) => {
        if (c <= 1) {
          clearInterval(intervalo);
          setAmen(false);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  };

  const buscarVersiculos = (q) => {
    setVersiculoBuscado(q);
    if (q.length < 2) { setResultadosBusqueda([]); return; }
    const r = VERSICULOS.filter(
      (v) =>
        v.texto.toLowerCase().includes(q.toLowerCase()) ||
        v.referencia.toLowerCase().includes(q.toLowerCase()) ||
        v.tema.toLowerCase().includes(q.toLowerCase())
    );
    setResultadosBusqueda(r);
  };

  const handleQuizRespuesta = (idx) => {
    if (quizRespuesta !== null) return;
    setQuizRespuesta(idx);
    if (idx === QUIZ_PREGUNTAS[quizIndex].correcta) setQuizPuntaje((p) => p + 1);
    setTimeout(() => {
      if (quizIndex + 1 >= QUIZ_PREGUNTAS.length) {
        setQuizTerminado(true);
      } else {
        setQuizIndex((i) => i + 1);
        setQuizRespuesta(null);
      }
    }, 1500);
  };

  const reiniciarQuiz = () => {
    setQuizIndex(0);
    setQuizRespuesta(null);
    setQuizPuntaje(0);
    setQuizTerminado(false);
    setQuizActivo(true);
  };

  const { diasEnMes, primerDia, hoy: diaHoy } = getDiasDelMes();

  const styles = {
    app: {
      maxWidth: 430,
      margin: "0 auto",
      minHeight: "100vh",
      background: COLORS.bg,
      fontFamily: "'Georgia', 'Palatino', serif",
      position: "relative",
      overflowX: "hidden",
    },
    header: {
      background: `linear-gradient(135deg, ${COLORS.primaryDark} 0%, ${COLORS.primary} 60%, ${COLORS.primaryLight} 100%)`,
      padding: "18px 20px 16px",
      color: COLORS.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 4px 20px rgba(91,45,107,0.35)",
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      letterSpacing: 0.5,
      margin: 0,
    },
    headerSub: {
      fontSize: 11,
      opacity: 0.8,
      margin: 0,
      letterSpacing: 1,
    },
    nav: {
      position: "fixed",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      maxWidth: 430,
      background: COLORS.white,
      borderTop: `1px solid ${COLORS.border}`,
      display: "flex",
      justifyContent: "space-around",
      padding: "8px 0 12px",
      zIndex: 100,
      boxShadow: "0 -4px 20px rgba(123,63,139,0.12)",
    },
    navBtn: (activo) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3,
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "4px 8px",
      borderRadius: 12,
      transition: "all 0.2s",
      color: activo ? COLORS.primary : COLORS.textMuted,
    }),
    navIcon: { fontSize: 22 },
    navLabel: (activo) => ({
      fontSize: 10,
      fontWeight: activo ? "bold" : "normal",
      color: activo ? COLORS.primary : COLORS.textMuted,
    }),
    content: {
      padding: "16px 16px 90px",
    },
    card: {
      background: COLORS.white,
      borderRadius: 18,
      padding: 20,
      marginBottom: 16,
      boxShadow: "0 2px 16px rgba(123,63,139,0.08)",
      border: `1px solid ${COLORS.border}`,
    },
    cardGradient: {
      background: `linear-gradient(135deg, ${COLORS.primaryDark}, ${COLORS.primary})`,
      borderRadius: 18,
      padding: 22,
      marginBottom: 16,
      color: COLORS.white,
      boxShadow: "0 6px 24px rgba(91,45,107,0.3)",
    },
    tagChip: (color) => ({
      display: "inline-block",
      background: color || COLORS.secondaryLight,
      color: COLORS.primary,
      borderRadius: 20,
      padding: "3px 12px",
      fontSize: 11,
      fontWeight: "bold",
      marginBottom: 8,
    }),
    btn: {
      background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight})`,
      color: COLORS.white,
      border: "none",
      borderRadius: 50,
      padding: "12px 28px",
      fontSize: 15,
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0 4px 16px rgba(123,63,139,0.3)",
      transition: "transform 0.15s, box-shadow 0.15s",
      letterSpacing: 0.5,
    },
    btnSecondary: {
      background: COLORS.secondaryLight,
      color: COLORS.primary,
      border: `1px solid ${COLORS.border}`,
      borderRadius: 50,
      padding: "10px 22px",
      fontSize: 14,
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.2s",
    },
    btnAmen: (activo) => ({
      background: activo
        ? `linear-gradient(135deg, ${COLORS.gold}, #E8C890)`
        : `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight})`,
      color: COLORS.white,
      border: "none",
      borderRadius: 50,
      padding: "13px 32px",
      fontSize: 16,
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: activo
        ? "0 4px 20px rgba(212,175,122,0.5)"
        : "0 4px 16px rgba(123,63,139,0.3)",
      transition: "all 0.3s",
      transform: activo ? "scale(1.05)" : "scale(1)",
      letterSpacing: 1,
    }),
    versiculoTexto: {
      fontSize: 18,
      lineHeight: 1.7,
      color: COLORS.white,
      fontStyle: "italic",
      marginBottom: 14,
    },
    versiculoRef: {
      fontSize: 13,
      color: "rgba(255,255,255,0.8)",
      fontWeight: "bold",
      letterSpacing: 1,
    },
    titulo: {
      fontSize: 22,
      fontWeight: "bold",
      color: COLORS.text,
      marginBottom: 6,
    },
    subtitulo: {
      fontSize: 15,
      color: COLORS.textLight,
      marginBottom: 16,
    },
    input: {
      width: "100%",
      border: `1.5px solid ${COLORS.border}`,
      borderRadius: 12,
      padding: "12px 14px",
      fontSize: 14,
      color: COLORS.text,
      background: COLORS.cream,
      outline: "none",
      boxSizing: "border-box",
      fontFamily: "inherit",
    },
    textarea: {
      width: "100%",
      border: `1.5px solid ${COLORS.border}`,
      borderRadius: 12,
      padding: "12px 14px",
      fontSize: 14,
      color: COLORS.text,
      background: COLORS.cream,
      outline: "none",
      boxSizing: "border-box",
      fontFamily: "inherit",
      resize: "vertical",
      minHeight: 90,
    },
    oracionCard: {
      background: COLORS.white,
      borderRadius: 16,
      padding: 18,
      marginBottom: 12,
      border: `1px solid ${COLORS.border}`,
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      display: "flex",
      alignItems: "center",
      gap: 14,
      boxShadow: "0 2px 10px rgba(123,63,139,0.06)",
    },
    devocionalCard: {
      background: COLORS.white,
      borderRadius: 18,
      padding: 18,
      marginBottom: 14,
      border: `1px solid ${COLORS.border}`,
      cursor: "pointer",
      boxShadow: "0 2px 12px rgba(123,63,139,0.07)",
      transition: "transform 0.2s",
    },
    progressBar: (pct) => ({
      height: 6,
      borderRadius: 4,
      background: COLORS.border,
      overflow: "hidden",
      position: "relative",
    }),
    progressFill: (pct, color) => ({
      height: "100%",
      width: `${pct}%`,
      background: color || COLORS.primary,
      borderRadius: 4,
      transition: "width 0.5s ease",
    }),
    calDay: (esFav, esHoy) => ({
      width: 34,
      height: 34,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      fontWeight: esHoy ? "bold" : "normal",
      background: esHoy
        ? `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight})`
        : "transparent",
      color: esHoy ? COLORS.white : COLORS.text,
      cursor: "pointer",
      position: "relative",
      transition: "transform 0.15s",
    }),
    quizOpcion: (estado) => ({
      background:
        estado === "correcta"
          ? "#E8F5E9"
          : estado === "incorrecta"
          ? "#FFEBEE"
          : COLORS.white,
      border: `2px solid ${
        estado === "correcta"
          ? "#66BB6A"
          : estado === "incorrecta"
          ? "#EF5350"
          : COLORS.border
      }`,
      borderRadius: 12,
      padding: "13px 16px",
      marginBottom: 10,
      cursor: estado ? "default" : "pointer",
      fontSize: 14,
      color: COLORS.text,
      textAlign: "left",
      width: "100%",
      transition: "all 0.2s",
      fontFamily: "inherit",
    }),
    toast: {
      position: "fixed",
      bottom: 90,
      left: "50%",
      transform: "translateX(-50%)",
      background: COLORS.primary,
      color: COLORS.white,
      borderRadius: 50,
      padding: "10px 24px",
      fontSize: 14,
      fontWeight: "bold",
      zIndex: 200,
      boxShadow: "0 4px 20px rgba(123,63,139,0.4)",
      whiteSpace: "nowrap",
    },
  };

  // ======================= PANTALLAS =======================

  const PantallaInicio = () => (
    <div>
      {/* Saludo */}
      <div style={styles.cardGradient}>
        <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 4 }}>🌸 {new Date().toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}</div>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "0 0 14px" }}>Versículo del día</p>
        <p style={styles.versiculoTexto}>"{versiculo.texto}"</p>
        <p style={styles.versiculoRef}>— {versiculo.referencia}</p>
        <div style={{ display: "flex", gap: 10, marginTop: 16, alignItems: "center" }}>
          <button
            style={{
              background: "none",
              border: "2px solid rgba(255,255,255,0.6)",
              borderRadius: 50,
              width: 40,
              height: 40,
              fontSize: 20,
              cursor: "pointer",
              color: esFavorito(versiculo.id) ? "#FFD700" : "white",
              transition: "all 0.3s",
              transform: animFav ? "scale(1.3)" : "scale(1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => toggleFavorito(versiculo)}
          >
            {esFavorito(versiculo.id) ? "❤️" : "🤍"}
          </button>
          <button style={{ ...styles.btn, padding: "10px 20px", fontSize: 14 }} onClick={() => setMostrarReflexion(true)}>
            ✍️ Mi reflexión
          </button>
          <button style={{ ...styles.btnSecondary, background: "rgba(255,255,255,0.15)", color: "white", border: "none", padding: "10px 16px" }} onClick={() => { navigator.share && navigator.share({ text: `"${versiculo.texto}" — ${versiculo.referencia}` }); }}>
            🔗 Compartir
          </button>
        </div>
      </div>

      {/* Modal Reflexión */}
      {mostrarReflexion && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(45,27,61,0.7)", zIndex: 300, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div style={{ background: COLORS.white, borderRadius: "24px 24px 0 0", padding: 24, width: "100%", maxWidth: 430, boxSizing: "border-box", paddingBottom: 36 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <h3 style={{ margin: 0, color: COLORS.primary, fontSize: 18 }}>✍️ Mi Reflexión del Día</h3>
              <button onClick={() => setMostrarReflexion(false)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: COLORS.textMuted }}>✕</button>
            </div>
            <p style={{ fontSize: 12, color: COLORS.textMuted, marginBottom: 4, fontStyle: "italic" }}>"{versiculo.referencia}"</p>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 13, fontWeight: "bold", color: COLORS.primary, display: "block", marginBottom: 6 }}>🌅 Reflexión de la Mañana</label>
              <textarea
                style={styles.textarea}
                placeholder="¿Qué te habla Dios esta mañana con este versículo?"
                value={reflexionMañana}
                onChange={(e) => setReflexionMañana(e.target.value)}
                rows={3}
              />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontSize: 13, fontWeight: "bold", color: COLORS.primary, display: "block", marginBottom: 6 }}>🌙 Reflexión de la Noche</label>
              <textarea
                style={styles.textarea}
                placeholder="Al cerrar el día, ¿cómo viviste este versículo?"
                value={reflexionNoche}
                onChange={(e) => setReflexionNoche(e.target.value)}
                rows={3}
              />
            </div>
            {mostrarGuardado && (
              <div style={{ textAlign: "center", color: "#66BB6A", fontWeight: "bold", marginBottom: 10, fontSize: 14 }}>✅ ¡Reflexión guardada!</div>
            )}
            <button style={{ ...styles.btn, width: "100%" }} onClick={guardarReflexion}>
              Guardar reflexión 💜
            </button>
          </div>
        </div>
      )}

      {/* Accesos rápidos */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
        {[
          { label: "Oraciones", icono: "🙏", pantalla: "oraciones", color: "#F3E5FA" },
          { label: "Devocionales", icono: "📖", pantalla: "devocionales", color: "#FDE8F0" },
          { label: "Planes de lectura", icono: "📅", pantalla: "planes", color: "#E8F4FD" },
          { label: "Quiz Bíblico", icono: "💡", pantalla: "quiz", color: "#FFF8E1" },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => setPantalla(item.pantalla)}
            style={{
              background: item.color,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 16,
              padding: "18px 12px",
              cursor: "pointer",
              textAlign: "center",
              transition: "transform 0.15s",
              boxShadow: "0 2px 10px rgba(123,63,139,0.06)",
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 6 }}>{item.icono}</div>
            <div style={{ fontSize: 13, fontWeight: "bold", color: COLORS.text }}>{item.label}</div>
          </button>
        ))}
      </div>

      {/* Favoritos recientes */}
      {favoritos.length > 0 && (
        <div style={styles.card}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <h3 style={{ margin: 0, fontSize: 16, color: COLORS.primary }}>❤️ Mis Favoritos</h3>
            <button onClick={() => setPantalla("favoritos")} style={{ background: "none", border: "none", color: COLORS.primaryLight, fontSize: 13, cursor: "pointer", fontWeight: "bold" }}>Ver todos</button>
          </div>
          {favoritos.slice(-2).map((f) => (
            <div key={f.id} style={{ background: COLORS.secondaryLight, borderRadius: 12, padding: 12, marginBottom: 8 }}>
              <p style={{ margin: "0 0 4px", fontSize: 13, fontStyle: "italic", color: COLORS.text }}>" {f.texto.slice(0, 80)}..."</p>
              <p style={{ margin: 0, fontSize: 11, color: COLORS.primary, fontWeight: "bold" }}>{f.referencia}</p>
            </div>
          ))}
        </div>
      )}

      {/* Recordatorio */}
      <div style={styles.card}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 28 }}>🔔</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: "bold", color: COLORS.text }}>Recordatorio de Oración</div>
            <div style={{ fontSize: 12, color: COLORS.textMuted }}>
              {recordatorio.activo ? `Activo a las ${recordatorio.hora}` : "Sin recordatorio activo"}
            </div>
          </div>
          <button
            style={{
              background: recordatorio.activo ? COLORS.primary : COLORS.secondaryLight,
              color: recordatorio.activo ? COLORS.white : COLORS.primary,
              border: "none",
              borderRadius: 50,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => setRecordatorio((r) => ({ ...r, activo: !r.activo }))}
          >
            {recordatorio.activo ? "Activo" : "Activar"}
          </button>
        </div>
        {recordatorio.activo && (
          <div style={{ marginTop: 12 }}>
            <input
              type="time"
              value={recordatorio.hora}
              onChange={(e) => setRecordatorio((r) => ({ ...r, hora: e.target.value }))}
              style={{ ...styles.input, width: "auto" }}
            />
            {/* TODO: Implementar notificaciones push reales con Service Workers */}
          </div>
        )}
      </div>
    </div>
  );

  const PantallaBiblia = () => (
    <div>
      <h2 style={{ ...styles.titulo, marginBottom: 16 }}>📖 Biblia</h2>

      {/* Buscador */}
      <div style={{ marginBottom: 16 }}>
        <input
          style={styles.input}
          placeholder="🔍 Buscar versículo, tema..."
          value={versiculoBuscado}
          onChange={(e) => buscarVersiculos(e.target.value)}
        />
      </div>

      {resultadosBusqueda.length > 0 && (
        <div style={styles.card}>
          <h4 style={{ margin: "0 0 12px", color: COLORS.primary, fontSize: 14 }}>Resultados ({resultadosBusqueda.length})</h4>
          {resultadosBusqueda.map((v) => (
            <VersiculoItem key={v.id} v={v} />
          ))}
        </div>
      )}

      {versiculoBuscado === "" && (
        <>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
            {["Amor", "Fe", "Paz", "Esperanza", "Fortaleza", "Mujer", "Oración"].map((t) => (
              <button
                key={t}
                onClick={() => buscarVersiculos(t)}
                style={{ background: COLORS.secondaryLight, border: `1px solid ${COLORS.border}`, borderRadius: 20, padding: "6px 14px", fontSize: 12, color: COLORS.primary, cursor: "pointer", fontWeight: "bold" }}
              >
                {t}
              </button>
            ))}
          </div>
          <h3 style={{ fontSize: 15, color: COLORS.textLight, marginBottom: 12 }}>📚 Versículos para la Mujer</h3>
          {VERSICULOS.map((v) => (
            <VersiculoItem key={v.id} v={v} />
          ))}
        </>
      )}
    </div>
  );

  const VersiculoItem = ({ v }) => {
    const [expandido, setExpandido] = useState(false);
    const fav = esFavorito(v.id);
    return (
      <div
        style={{
          background: COLORS.white,
          borderRadius: 14,
          padding: 16,
          marginBottom: 12,
          border: `1px solid ${fav ? COLORS.secondary : COLORS.border}`,
          boxShadow: fav ? "0 2px 12px rgba(244,167,185,0.2)" : "0 2px 8px rgba(123,63,139,0.05)",
          transition: "all 0.2s",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={styles.tagChip()}>{v.tema}</span>
          <button
            onClick={() => toggleFavorito(v)}
            style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer", transition: "transform 0.2s" }}
          >
            {fav ? "❤️" : "🤍"}
          </button>
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: COLORS.text, fontStyle: "italic", margin: "6px 0 8px", cursor: "pointer" }} onClick={() => setExpandido(!expandido)}>
          "{expandido ? v.texto : v.texto.slice(0, 80) + (v.texto.length > 80 ? "..." : "")}"
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ margin: 0, fontSize: 12, color: COLORS.primary, fontWeight: "bold" }}>— {v.referencia}</p>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => { setVersiculoNota(v); setNotaActual(notas[v.id] || ""); }}
              style={{ background: "none", border: "none", fontSize: 15, cursor: "pointer" }}
              title="Añadir nota"
            >✏️</button>
            <button
              onClick={() => navigator.share && navigator.share({ text: `"${v.texto}" — ${v.referencia}` })}
              style={{ background: "none", border: "none", fontSize: 15, cursor: "pointer" }}
            >🔗</button>
          </div>
        </div>
        {notas[v.id] && (
          <div style={{ background: "#FFFDE7", borderRadius: 8, padding: "8px 10px", marginTop: 8, fontSize: 12, color: "#795548", borderLeft: `3px solid ${COLORS.gold}` }}>
            📝 {notas[v.id]}
          </div>
        )}
      </div>
    );
  };

  const PantallaOraciones = () => (
    <div>
      <h2 style={{ ...styles.titulo, marginBottom: 4 }}>🙏 Oraciones</h2>
      <p style={{ ...styles.subtitulo, marginBottom: 20 }}>Palabras para hablar con Dios</p>

      {oracionSeleccionada ? (
        <div>
          <button onClick={() => { setOracionSeleccionada(null); setAmen(false); }} style={{ background: "none", border: "none", color: COLORS.primary, fontSize: 14, cursor: "pointer", marginBottom: 16, fontWeight: "bold", display: "flex", alignItems: "center", gap: 6 }}>
            ← Volver
          </button>
          <div style={styles.cardGradient}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>{oracionSeleccionada.icono}</div>
            <h3 style={{ margin: "0 0 16px", fontSize: 20, color: COLORS.white }}>{oracionSeleccionada.titulo}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,0.92)", fontStyle: "italic", margin: "0 0 24px" }}>
              {oracionSeleccionada.texto}
            </p>
            {amen ? (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>🙏</div>
                <div style={{ fontSize: 16, color: COLORS.gold, fontWeight: "bold" }}>Amén... ({amenContador}s)</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>Tómate un momento para sentir la presencia de Dios</p>
              </div>
            ) : (
              <button style={styles.btnAmen(false)} onClick={handleAmen}>
                🙏 Amén
              </button>
            )}
          </div>
          {/* Espacio de reflexión */}
          <div style={styles.card}>
            <h4 style={{ margin: "0 0 12px", color: COLORS.primary, fontSize: 15 }}>✍️ Mi reflexión de esta oración</h4>
            <textarea
              style={styles.textarea}
              placeholder="¿Qué sientes después de orar? Escribe aquí tu reflexión..."
              rows={4}
              // TODO: guardar reflexión por oración
            />
            <button style={{ ...styles.btn, marginTop: 10, padding: "10px 20px", fontSize: 13 }}>
              Guardar reflexión
            </button>
          </div>
        </div>
      ) : (
        ORACIONES.map((o) => (
          <div
            key={o.id}
            style={styles.oracionCard}
            onClick={() => setOracionSeleccionada(o)}
          >
            <span style={{ fontSize: 32 }}>{o.icono}</span>
            <div>
              <div style={{ fontSize: 15, fontWeight: "bold", color: COLORS.text, marginBottom: 3 }}>{o.titulo}</div>
              <div style={{ fontSize: 12, color: COLORS.textMuted, lineHeight: 1.5 }}>{o.texto.slice(0, 60)}...</div>
            </div>
            <span style={{ marginLeft: "auto", color: COLORS.textMuted, fontSize: 18 }}>›</span>
          </div>
        ))
      )}
    </div>
  );

  const PantallaDevocionales = () => (
    <div>
      <h2 style={{ ...styles.titulo, marginBottom: 4 }}>📖 Devocionales</h2>
      <p style={{ ...styles.subtitulo, marginBottom: 20 }}>Meditaciones para tu corazón</p>

      {devocionalSeleccionado ? (
        <div>
          <button onClick={() => setDevocionalSeleccionado(null)} style={{ background: "none", border: "none", color: COLORS.primary, fontSize: 14, cursor: "pointer", marginBottom: 16, fontWeight: "bold" }}>
            ← Volver
          </button>
          <div style={styles.card}>
            <span style={{ fontSize: 36 }}>{devocionalSeleccionado.icono}</span>
            <div style={styles.tagChip(COLORS.secondaryLight)}>{devocionalSeleccionado.tag}</div>
            <h2 style={{ margin: "10px 0 4px", color: COLORS.text, fontSize: 22 }}>{devocionalSeleccionado.titulo}</h2>
            <p style={{ margin: "0 0 16px", color: COLORS.textMuted, fontSize: 14 }}>{devocionalSeleccionado.subtitulo}</p>
            <div style={{ background: COLORS.secondaryLight, borderRadius: 10, padding: "10px 14px", marginBottom: 16, borderLeft: `3px solid ${COLORS.primary}` }}>
              <p style={{ margin: 0, fontSize: 12, color: COLORS.primary, fontWeight: "bold" }}>📖 {devocionalSeleccionado.versiculo}</p>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: COLORS.text, marginBottom: 20 }}>
              {devocionalSeleccionado.texto}
            </p>
          </div>
          {/* Reflexión mañana y noche */}
          <div style={styles.card}>
            <h4 style={{ margin: "0 0 16px", color: COLORS.primary, fontSize: 16 }}>✍️ Mi Reflexión</h4>
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 13, fontWeight: "bold", color: COLORS.textLight, display: "block", marginBottom: 6 }}>🌅 Mañana</label>
              <textarea
                style={styles.textarea}
                placeholder="¿Qué te habla Dios esta mañana con este devocional?"
                value={reflexionMañana}
                onChange={(e) => setReflexionMañana(e.target.value)}
                rows={3}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 13, fontWeight: "bold", color: COLORS.textLight, display: "block", marginBottom: 6 }}>🌙 Noche</label>
              <textarea
                style={styles.textarea}
                placeholder="Al cerrar el día, ¿cómo aplicaste este devocional?"
                value={reflexionNoche}
                onChange={(e) => setReflexionNoche(e.target.value)}
                rows={3}
              />
            </div>
            {mostrarGuardado && <div style={{ color: "#66BB6A", fontWeight: "bold", marginBottom: 10, fontSize: 13 }}>✅ ¡Guardado!</div>}
            <button style={{ ...styles.btn, width: "100%" }} onClick={guardarReflexion}>
              Guardar reflexión 💜
            </button>
          </div>
        </div>
      ) : (
        DEVOCIONALES.map((d) => (
          <div key={d.id} style={styles.devocionalCard} onClick={() => setDevocionalSeleccionado(d)}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <span style={{ fontSize: 30 }}>{d.icono}</span>
              <div>
                <span style={styles.tagChip(COLORS.secondaryLight)}>{d.tag}</span>
                <div style={{ fontSize: 15, fontWeight: "bold", color: COLORS.text }}>{d.titulo}</div>
              </div>
              <span style={{ marginLeft: "auto", color: COLORS.textMuted, fontSize: 18 }}>›</span>
            </div>
            <p style={{ margin: "0 0 8px", fontSize: 13, color: COLORS.textLight, lineHeight: 1.5 }}>{d.texto.slice(0, 90)}...</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 11, color: COLORS.textMuted }}>⏱ {d.duracion}</span>
              <span style={{ fontSize: 11, color: COLORS.textMuted }}>•</span>
              <span style={{ fontSize: 11, color: COLORS.primary }}>📖 {d.versiculo}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const PantallaPlanes = () => (
    <div>
      <h2 style={{ ...styles.titulo, marginBottom: 4 }}>📅 Planes de Lectura</h2>
      <p style={{ ...styles.subtitulo, marginBottom: 20 }}>Crece paso a paso con Dios</p>

      {planSeleccionado ? (
        <div>
          <button onClick={() => setPlanSeleccionado(null)} style={{ background: "none", border: "none", color: COLORS.primary, fontSize: 14, cursor: "pointer", marginBottom: 16, fontWeight: "bold" }}>
            ← Volver a planes
          </button>
          <div style={{ ...styles.cardGradient, marginBottom: 16 }}>
            <span style={{ fontSize: 36 }}>{planSeleccionado.icono}</span>
            <h2 style={{ margin: "10px 0 6px", fontSize: 20 }}>{planSeleccionado.titulo}</h2>
            <p style={{ margin: "0 0 16px", fontSize: 13, opacity: 0.8 }}>{planSeleccionado.descripcion}</p>
            <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 8, height: 8, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${(planSeleccionado.progreso / planSeleccionado.total) * 100}%`, background: COLORS.gold, borderRadius: 8, transition: "width 0.5s" }} />
            </div>
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 6 }}>{planSeleccionado.progreso} / {planSeleccionado.total} días completados</div>
          </div>
          {/* Lista de días del plan */}
          <div style={styles.card}>
            <h3 style={{ margin: "0 0 14px", color: COLORS.primary, fontSize: 16 }}>Días del plan</h3>
            {Array.from({ length: Math.min(planSeleccionado.total, 7) }, (_, i) => i + 1).map((dia) => (
              <div key={dia} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: `1px solid ${COLORS.border}` }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: dia <= planSeleccionado.progreso ? COLORS.primary : COLORS.border,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: dia <= planSeleccionado.progreso ? "white" : COLORS.textMuted,
                  fontSize: 13, fontWeight: "bold",
                }}>
                  {dia <= planSeleccionado.progreso ? "✓" : dia}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: "bold", color: COLORS.text }}>Día {dia}</div>
                  <div style={{ fontSize: 12, color: COLORS.textMuted }}>{VERSICULOS[(dia - 1) % VERSICULOS.length].referencia}</div>
                </div>
                {dia <= planSeleccionado.progreso && <span style={{ marginLeft: "auto", color: COLORS.primary }}>✅</span>}
              </div>
            ))}
            <p style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 10, textAlign: "center" }}>... y {planSeleccionado.total - 7} días más</p>
          </div>
          {/* TODO: Marcar días como completados y guardar en localStorage */}
        </div>
      ) : (
        PLANES.map((p) => (
          <div key={p.id} style={{ ...styles.card, cursor: "pointer" }} onClick={() => setPlanSeleccionado(p)}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: p.color + "30", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{p.icono}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: "bold", color: COLORS.text, marginBottom: 2 }}>{p.titulo}</div>
                <div style={{ fontSize: 12, color: COLORS.textMuted }}>{p.descripcion}</div>
              </div>
              <span style={{ color: COLORS.textMuted, fontSize: 18 }}>›</span>
            </div>
            <div style={styles.progressBar((p.progreso / p.total) * 100)}>
              <div style={styles.progressFill((p.progreso / p.total) * 100, p.color)} />
            </div>
            <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 5, display: "flex", justifyContent: "space-between" }}>
              <span>{p.progreso > 0 ? `${p.progreso} de ${p.total} días` : "Sin comenzar"}</span>
              <span>{Math.round((p.progreso / p.total) * 100)}%</span>
            </div>
          </div>
        ))
      )}
    </div>
  );

  const PantallaCalendario = () => {
    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const celdas = Array.from({ length: primerDia }, (_, i) => null).concat(
      Array.from({ length: diasEnMes }, (_, i) => i + 1)
    );

    return (
      <div>
        <h2 style={{ ...styles.titulo, marginBottom: 4 }}>📆 Calendario</h2>
        <p style={{ ...styles.subtitulo, marginBottom: 16 }}>{getNombreMes()} · Versículos favoritos</p>
        <div style={styles.card}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 8 }}>
            {dias.map((d) => (
              <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: "bold", color: COLORS.textMuted, padding: "4px 0" }}>{d}</div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
            {celdas.map((dia, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {dia ? (
                  <div style={styles.calDay(diasFavoritos.includes(dia), dia === diaHoy)}>
                    {dia}
                    {diasFavoritos.includes(dia) && (
                      <span style={{ position: "absolute", top: -2, right: -2, fontSize: 10 }}>❤️</span>
                    )}
                  </div>
                ) : (
                  <div style={{ width: 34, height: 34 }} />
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 14 }}>❤️</span>
            <span style={{ fontSize: 12, color: COLORS.textMuted }}>= Día con versículo favorito guardado</span>
          </div>
        </div>
        {favoritos.length === 0 && (
          <div style={{ ...styles.card, textAlign: "center", padding: 32 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🤍</div>
            <p style={{ color: COLORS.textMuted, fontSize: 14 }}>Aún no tienes versículos favoritos. ¡Toca el corazón en cualquier versículo para guardarlo aquí!</p>
          </div>
        )}
        {favoritos.length > 0 && (
          <div>
            <h3 style={{ fontSize: 15, color: COLORS.primary, marginBottom: 12 }}>Mis versículos favoritos ❤️</h3>
            {favoritos.map((f) => (
              <div key={f.id} style={styles.card}>
                <div style={styles.tagChip()}>{f.tema}</div>
                <p style={{ fontSize: 14, fontStyle: "italic", color: COLORS.text, margin: "8px 0 8px", lineHeight: 1.65 }}>"{f.texto}"</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ margin: 0, fontSize: 12, color: COLORS.primary, fontWeight: "bold" }}>— {f.referencia}</p>
                  <button onClick={() => toggleFavorito(f)} style={{ background: "none", border: "none", fontSize: 18, cursor: "pointer" }}>❤️</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const PantallaQuiz = () => {
    if (!quizActivo && !quizTerminado) {
      return (
        <div>
          <h2 style={{ ...styles.titulo, marginBottom: 4 }}>💡 Quiz Bíblico</h2>
          <p style={{ ...styles.subtitulo, marginBottom: 24 }}>Pon a prueba tu conocimiento</p>
          <div style={{ ...styles.cardGradient, textAlign: "center" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>💡</div>
            <h3 style={{ margin: "0 0 10px", fontSize: 20 }}>Desafío Bíblico</h3>
            <p style={{ fontSize: 14, opacity: 0.85, marginBottom: 24 }}>{QUIZ_PREGUNTAS.length} preguntas para crecer en tu fe y conocimiento de la Biblia.</p>
            <button style={{ ...styles.btn, background: COLORS.gold + "ee", boxShadow: "0 4px 16px rgba(212,175,122,0.4)" }} onClick={() => { setQuizActivo(true); setQuizIndex(0); setQuizPuntaje(0); setQuizTerminado(false); setQuizRespuesta(null); }}>
              ¡Comenzar Quiz! 🎯
            </button>
          </div>
        </div>
      );
    }

    if (quizTerminado) {
      const pct = Math.round((quizPuntaje / QUIZ_PREGUNTAS.length) * 100);
      return (
        <div>
          <h2 style={{ ...styles.titulo, marginBottom: 20 }}>💡 Resultado</h2>
          <div style={{ ...styles.cardGradient, textAlign: "center" }}>
            <div style={{ fontSize: 52, marginBottom: 12 }}>{pct >= 80 ? "🏆" : pct >= 60 ? "⭐" : "💪"}</div>
            <h3 style={{ margin: "0 0 8px", fontSize: 22 }}>{pct >= 80 ? "¡Excelente!" : pct >= 60 ? "¡Muy bien!" : "¡Sigue practicando!"}</h3>
            <div style={{ fontSize: 40, fontWeight: "bold", color: COLORS.gold, margin: "16px 0" }}>{quizPuntaje}/{QUIZ_PREGUNTAS.length}</div>
            <p style={{ fontSize: 14, opacity: 0.85, marginBottom: 20 }}>{pct}% de respuestas correctas</p>
            <button style={{ ...styles.btn, background: COLORS.gold + "ee" }} onClick={reiniciarQuiz}>
              Volver a intentar 🔄
            </button>
          </div>
          <div style={{ ...styles.card, marginTop: 16 }}>
            <p style={{ margin: 0, fontSize: 14, fontStyle: "italic", color: COLORS.text, lineHeight: 1.6 }}>
              "Todo lo puedo en Cristo que me fortalece." — Filipenses 4:13
            </p>
          </div>
        </div>
      );
    }

    const pregunta = QUIZ_PREGUNTAS[quizIndex];
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ ...styles.titulo, margin: 0, fontSize: 18 }}>💡 Quiz Bíblico</h2>
          <span style={{ fontSize: 13, color: COLORS.textMuted, fontWeight: "bold" }}>{quizIndex + 1}/{QUIZ_PREGUNTAS.length}</span>
        </div>
        <div style={{ ...styles.progressBar(0), marginBottom: 20 }}>
          <div style={styles.progressFill(((quizIndex + 1) / QUIZ_PREGUNTAS.length) * 100)} />
        </div>
        <div style={styles.card}>
          <p style={{ fontSize: 16, fontWeight: "bold", color: COLORS.text, lineHeight: 1.5, marginBottom: 20 }}>{pregunta.pregunta}</p>
          {pregunta.opciones.map((op, idx) => {
            let estado = null;
            if (quizRespuesta !== null) {
              if (idx === pregunta.correcta) estado = "correcta";
              else if (idx === quizRespuesta) estado = "incorrecta";
            }
            return (
              <button key={idx} style={styles.quizOpcion(estado)} onClick={() => handleQuizRespuesta(idx)}>
                <span style={{ marginRight: 10, fontWeight: "bold", color: COLORS.primary }}>{String.fromCharCode(65 + idx)}.</span>
                {op}
                {estado === "correcta" && <span style={{ marginLeft: 8 }}>✅</span>}
                {estado === "incorrecta" && <span style={{ marginLeft: 8 }}>❌</span>}
              </button>
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 16 }}>
          {QUIZ_PREGUNTAS.map((_, i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i < quizIndex ? COLORS.primary : i === quizIndex ? COLORS.gold : COLORS.border, transition: "all 0.3s" }} />
          ))}
        </div>
      </div>
    );
  };

  const PantallaFavoritos = () => (
    <div>
      <h2 style={{ ...styles.titulo, marginBottom: 4 }}>❤️ Mis Favoritos</h2>
      <p style={{ ...styles.subtitulo, marginBottom: 20 }}>Versículos que hablan a tu corazón</p>
      {favoritos.length === 0 ? (
        <div style={{ ...styles.card, textAlign: "center", padding: 40 }}>
          <div style={{ fontSize: 50, marginBottom: 16 }}>🤍</div>
          <p style={{ color: COLORS.textMuted, fontSize: 15 }}>Aún no tienes favoritos. Explora los versículos y toca ❤️ para guardarlos aquí.</p>
          <button style={{ ...styles.btn, marginTop: 16 }} onClick={() => setPantalla("biblia")}>Explorar Biblia</button>
        </div>
      ) : (
        favoritos.map((f) => (
          <div key={f.id} style={styles.card}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <span style={styles.tagChip()}>{f.tema}</span>
              <button onClick={() => toggleFavorito(f)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer" }}>❤️</button>
            </div>
            <p style={{ fontSize: 15, fontStyle: "italic", color: COLORS.text, margin: "0 0 10px", lineHeight: 1.7 }}>"{f.texto}"</p>
            <p style={{ margin: 0, fontSize: 13, color: COLORS.primary, fontWeight: "bold" }}>— {f.referencia}</p>
            {notas[f.id] && (
              <div style={{ background: "#FFFDE7", borderRadius: 8, padding: "8px 12px", marginTop: 10, fontSize: 12, color: "#795548", borderLeft: `3px solid ${COLORS.gold}` }}>
                📝 {notas[f.id]}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );

  const navItems = [
    { id: "inicio", icono: "🏠", label: "Inicio" },
    { id: "biblia", icono: "📖", label: "Biblia" },
    { id: "oraciones", icono: "🙏", label: "Orar" },
    { id: "calendario", icono: "📅", label: "Calendario" },
    { id: "quiz", icono: "💡", label: "Quiz" },
  ];

  const renderPantalla = () => {
    switch (pantalla) {
      case "inicio": return <PantallaInicio />;
      case "biblia": return <PantallaBiblia />;
      case "oraciones": return <PantallaOraciones />;
      case "devocionales": return <PantallaDevocionales />;
      case "planes": return <PantallaPlanes />;
      case "calendario": return <PantallaCalendario />;
      case "quiz": return <PantallaQuiz />;
      case "favoritos": return <PantallaFavoritos />;
      default: return <PantallaInicio />;
    }
  };

  // Modal nota
  const ModalNota = () => {
    if (!versiculoNota) return null;
    return (
      <div style={{ position: "fixed", inset: 0, background: "rgba(45,27,61,0.7)", zIndex: 300, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
        <div style={{ background: COLORS.white, borderRadius: "24px 24px 0 0", padding: 24, width: "100%", maxWidth: 430, boxSizing: "border-box", paddingBottom: 36 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
            <h3 style={{ margin: 0, color: COLORS.primary }}>✏️ Nota personal</h3>
            <button onClick={() => setVersiculoNota(null)} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: COLORS.textMuted }}>✕</button>
          </div>
          <p style={{ fontSize: 12, color: COLORS.textMuted, marginBottom: 14, fontStyle: "italic" }}>"{versiculoNota.referencia}"</p>
          <textarea
            style={{ ...styles.textarea, minHeight: 100 }}
            placeholder="Escribe tu nota o reflexión sobre este versículo..."
            value={notaActual}
            onChange={(e) => setNotaActual(e.target.value)}
          />
          <button
            style={{ ...styles.btn, width: "100%", marginTop: 12 }}
            onClick={() => {
              setNotas((n) => ({ ...n, [versiculoNota.id]: notaActual }));
              setVersiculoNota(null);
            }}
          >
            Guardar nota 💜
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.app}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <p style={styles.headerSub}>La luz de Dios ✨</p>
          <h1 style={styles.headerTitle}>🌸 Biblia para ti</h1>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setPantalla("favoritos")}
            style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 50, width: 38, height: 38, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            ❤️
          </button>
          <button
            onClick={() => setPantalla("devocionales")}
            style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 50, width: 38, height: 38, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            📖
          </button>
        </div>
      </div>

      {/* Main content */}
      <div style={styles.content}>{renderPantalla()}</div>

      {/* Bottom Nav */}
      <nav style={styles.nav}>
        {navItems.map((item) => (
          <button
            key={item.id}
            style={styles.navBtn(pantalla === item.id)}
            onClick={() => setPantalla(item.id)}
          >
            <span style={styles.navIcon}>{item.icono}</span>
            <span style={styles.navLabel(pantalla === item.id)}>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Modal nota */}
      <ModalNota />

      {/* Toast guardado */}
      {mostrarGuardado && (
        <div style={styles.toast}>✅ ¡Reflexión guardada!</div>
      )}
    </div>
  );
}