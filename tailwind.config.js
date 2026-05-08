/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      colors: {
        lumen: {
          'bg-primary': 'var(--bg-primary)',
          'bg-secondary': 'var(--bg-secondary)',
          'bg-card': 'var(--bg-card)',
          'bg-header': 'var(--bg-header)',
          'bg-input': 'var(--bg-input)',
          'text': 'var(--text-primary)',
          'text-secondary': 'var(--text-secondary)',
          'text-light': 'var(--text-light)',
          'text-muted': 'var(--text-muted)',
          'accent': 'var(--accent)',
          'accent-light': 'var(--accent-light)',
          'accent-medium': 'var(--accent-medium)',
          'border': 'var(--border-color)',
          'error': 'var(--error)',
          'success': 'var(--success)',
          'btn-bg': 'var(--btn-primary-bg)',
          'btn-text': 'var(--btn-primary-text)',
          'btn-hover': 'var(--btn-primary-hover)',
          'btn-outline-border': 'var(--btn-outline-border)',
          'btn-outline-text': 'var(--btn-outline-text)',
          'link': 'var(--link-color)',
          'link-hover': 'var(--link-hover)',
          'table-header': 'var(--table-header)',
          'table-header-text': 'var(--table-header-text)',
          'table-row-alt': 'var(--table-row-alt)',
          'table-row-hover': 'var(--table-row-hover)',
          'modal-backdrop': 'var(--modal-backdrop)',
          'toggle-bg': 'var(--theme-toggle-bg)',
          'toggle-hover': 'var(--theme-toggle-hover)',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
