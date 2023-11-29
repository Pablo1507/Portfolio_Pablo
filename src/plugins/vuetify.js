// Styles
import "@mdi/font/css/materialdesignicons.css";
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const darkTheme = {
    dark: true,
    colors: {
        background: '#19161F',
        primary: '#28AB74',
        secondary: '#5CBBF6',
        darken_primary: '#FFFFFF',
        text: '#FFFFFF'
    }
}

const lightTheme = {
    dark: false,
    colors: {
        background: '#D7CDBB',
        primary: '#1e8656',
        secondary: '#5CBBF6',
        darken_primary: '#135438',
        text: '#000000',
    },

}
//#ede7d3,
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        defaultTheme: 'lightTheme',
        themes: {
            darkTheme,
            lightTheme
        },
    },
    icons: {
        iconfont: 'mdi',
    },
})