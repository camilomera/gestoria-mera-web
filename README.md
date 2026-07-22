# Gestoría Mera — Web de Seguros para Animales

Sitio web profesional para **Gestoría Mera Rancaño**, agencia de seguros familiar en A Cañiza (Pontevedra, Galicia) especializada en seguros de responsabilidad civil para perros y caballos.

## 🚀 Inicio Rápido

### Requisitos previos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar o copiar el proyecto
cd gestoria-mera-web

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

### Build para producción

```bash
# Generar build estático
npm run build

# Los archivos estáticos se generan en /out
```

## 📁 Estructura del Proyecto

```
gestoria-mera-web/
├── app/
│   ├── layout.tsx          # Layout principal (Header + Footer + WhatsApp)
│   ├── page.tsx            # Página de inicio
│   ├── globals.css         # Estilos globales + Tailwind
│   ├── seguros-perros/
│   │   └── page.tsx        # Página de seguros para perros
│   ├── seguros-caballos/
│   │   └── page.tsx        # Página de seguros para caballos
│   └── contacto/
│       └── page.tsx        # Página de contacto
├── components/
│   ├── Header.tsx          # Navegación con menú móvil
│   ├── Footer.tsx          # Pie de página con info legal
│   └── WhatsAppButton.tsx  # Botón flotante de WhatsApp
├── package.json
├── next.config.js          # Configuración Next.js (output: export)
├── tailwind.config.js      # Configuración Tailwind con paleta personalizada
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Diseño

- **Paleta de colores:** Navy profundo (#102a43 - #1f3a5f) + Amber/Gold (#f59e0b) + Cream backgrounds (#fefdfb)
- **Tipografía:** Inter (Google Fonts)
- **Estilo:** Moderno, cálido, familiar, profesional
- **Responsive:** Mobile-first, adaptado a todos los dispositivos

## 🌐 Despliegue en Vercel

1. Sube el proyecto a un repositorio Git (GitHub, GitLab, etc.)
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Vercel detectará automáticamente Next.js y configurará el build
4. El sitio se desplegará como sitio estático gracias a `output: 'export'`

### Despliegue manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 📞 Datos de Contacto (configurados en el sitio)

- **Teléfono:** 986 651 478
- **WhatsApp:** wa.me/34986651478
- **Dirección:** Rúa Oriente 1 baixo, 36880 A Cañiza (Pontevedra)

## 📋 Productos

### Seguros para Perros
| Tipo | Precio |
|------|--------|
| PPP (potencialmente peligrosos) | Desde 30€/año |
| No PPP (compañía) | Desde 20,40€/año |
| Perros de caza (2 perros) | 32€/año + 6€ c/u adicional |
| Criadores y adiestradores | Desde 58,75€/trimestre |

### Seguros para Caballos
| Tipo | Precio |
|------|--------|
| RC caballos | Desde 47,38€/año |
| RC + retirada de cadáveres | Desde 52,94€/año |

## 🛠️ Tecnologías

- **Next.js 14** — App Router, generación estática
- **React 18** — Componentes funcionales con hooks
- **TypeScript** — Tipado completo
- **Tailwind CSS 3** — Utility-first styling
- **Google Fonts** — Inter

## 📄 Información Legal

- Gestoría Mera Rancaño, agencia vinculada de seguros, S.L.N.E.
- Inscrita en el registro de la Dirección General de Política Financiera y Tesoro de la Xunta de Galicia clave AJ0016XG
- Seguro de responsabilidad civil profesional con Allianz

---

Desarrollado con ❤️ para Gestoría Mera
