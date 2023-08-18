const btn = document.getElementById('toggle-mode')

export function darkMode() {
    btn.addEventListener('click', (event) =>{
        document.documentElement.classList.toggle('dark')
    })
}