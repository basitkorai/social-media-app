const themes = {
    redline: {
        primary: {
            main: '#ff416c',
            dark: '#f64a2d',
        },
        info: {
            main: '#00CCFF'
        },
        navbarGradient: 'linear-gradient(to right, #ff416c, #ff4b2b)',
        textGradient: 'linear-gradient(#ff416c, #ff4b2b)'

    },
    bluevine: {
        primary: {
            main: '#00CCFF',
            dark: '#5243e4',
        },
        info: {
            main: '#ff416c'
        },
        navbarGradient: 'radial-gradient(circle at -0.8% 4.3%, rgb(59, 176, 255) 0%, rgb(76, 222, 250) 83.6%)',
        textGradient: 'linear-gradient( #0063e6, #05ff8a)'
    }
}

const chooseTheme = (isTheme) => {
    if (isTheme === 'redline') {
        return themes.redline
    } else {
        return themes.bluevine
    }
}

export { chooseTheme }
export default themes