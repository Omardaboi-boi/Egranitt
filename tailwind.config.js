/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html"],

                theme: {
                    extend: {
                        colors: {
                            primary: "#76ac7a",
                            secondary: "#5a3921",
                            accent: "#8b7355"
                        },
                        fontFamily: {
                            sans: ['Helvetica', 'Arial', 'sans-serif'],
                            serif: ['Georgia', 'serif']
                        }
                    }
                }
}

