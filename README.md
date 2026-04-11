# 💊 Farmacias Cercanas

Web app PWA para encontrar farmacias cercanas con teléfono, distancia, cómo llegar y verificación de cobertura **Swiss Medical**.

**Sin registro · Sin API key · 100% gratuita · iOS y Android**

---

## ✨ Funcionalidades

- 📍 Detecta tu ubicación automáticamente
- 💊 Farmacias en 2 km ordenadas por distancia
- 📞 Teléfono grande y visible — tocás y llamás directo
- 🗺️ Botón "Cómo llegar" → abre Google Maps con la ruta
- 📏 Barra de distancia con minutos caminando
- 🔴 Botón Swiss Medical en cada farmacia → abre la cartilla oficial
- 🟢 Indicador abierta/cerrada
- 🌍 Mapa oscuro con todos los marcadores
- 📲 Instalable como app (PWA) en iPhone y Android

---

## 📁 Estructura

```
farmacias-cercanas/
├── index.html                ← App completa
├── manifest.json             ← Config PWA
├── sw.js                     ← Cache offline
├── README.md                 ← Este archivo
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    ├── apple-touch-icon.png
    ├── favicon-32.png
    └── favicon-16.png
```

---

## 🚀 Deploy en GitHub Pages

1. Crear repo público `farmacias-cercanas` en GitHub
2. Subir todos los archivos (respetar carpeta `icons/`)
3. Settings → Pages → Branch: main / root → Save
4. En 2 min disponible en `https://TU-USUARIO.github.io/farmacias-cercanas`

---

*Datos: OpenStreetMap · Mapa: Leaflet + CartoDB · Swiss Medical: cartilla oficial*
