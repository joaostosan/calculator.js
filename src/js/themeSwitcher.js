export default function () {
    const main = document.querySelector('main')
    const root = document.querySelector(':root')

    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#D5D5D8')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#201B5D')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#7AB1C5')
        main.dataset.theme = 'dark'
    }
}