/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // Nova Paleta Global Cinematográfica Oficial (baseada na imagem)
        "bg-primary": "#020817",
        "bg-secondary": "#06132B",
        "bg-tertiary": "#0A1D3B",
        "surface-primary": "#0B1B32",
        "surface-secondary": "#102744",
        "blue-primary": "#049CFE",
        "blue-electric": "#087CFF",
        "orange-primary": "#FF7900",
        "orange-light": "#FF9A24",
        "text-primary": "#FFFFFF",
        "text-secondary": "#B9C9DF",
        "border-subtle": "rgba(4, 156, 254, 0.18)",

        "surface": "#020817",
        "surface-container-lowest": "#01040D",
        "surface-container-low": "#06132B",
        "surface-container": "#0B1B32",
        "surface-container-high": "#102744",
        "surface-container-highest": "#16345C",
        "primary": "#049CFE",
        "primary-container": "#087CFF",
        "secondary": "#FF7900",
        "secondary-container": "#FF9A24",
        "on-surface": "#FFFFFF",
        "on-surface-variant": "#B9C9DF",
        "outline": "#1e293b",
        "outline-variant": "rgba(4, 156, 254, 0.18)",
        dark: {
          main: '#03060D',      // Preto profundo conforme especificação
          alt: '#07111F',       // Azul-marinho profundo
          card: '#0C1B2A',      // Superfície dos cards
          elevated: '#102337',  // Fundo elevado
          subtle: '#091522',    // Tonalidade intermediária
          border: 'rgba(4, 156, 254, 0.15)',
          'border-hover': 'rgba(4, 156, 254, 0.40)',
          'border-active': '#049CFE',
        },
        cinematic: {
          text: '#F5F8FC',      // Texto principal
          muted: '#A8B7C8',     // Texto secundário
          dim: '#65788D',       // Texto atenuado
        },
        brand: {
          blue: '#049CFE',
          'blue-dark': '#0275C0',
          'blue-deep': '#06203D',
          'blue-navy': '#0A1B2E',
          'blue-glow': 'rgba(4, 156, 254, 0.20)',
          orange: '#FF751F',
          'orange-hover': '#EB620D',
          'orange-glow': 'rgba(255, 117, 31, 0.35)',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(4, 156, 254, 0.25)',
        'glow-blue-lg': '0 0 60px -10px rgba(4, 156, 254, 0.35)',
        'glow-orange': '0 8px 30px -4px rgba(255, 117, 31, 0.45)',
        'cta': '0 8px 25px -4px rgba(255, 117, 31, 0.45), 0 0 15px rgba(255, 117, 31, 0.20)',
        'cta-hover': '0 12px 35px -2px rgba(255, 117, 31, 0.65), 0 0 25px rgba(255, 117, 31, 0.35)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'card-dark-hover': '0 20px 40px -12px rgba(0, 0, 0, 0.8), 0 0 25px -5px rgba(4, 156, 254, 0.25), inset 0 1px 0 0 rgba(4, 156, 254, 0.3)',
        'plan-highlight-dark': '0 20px 50px -10px rgba(0, 0, 0, 0.9), 0 0 40px -5px rgba(4, 156, 254, 0.40), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
      },
      maxWidth: {
        'container': '1240px',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
