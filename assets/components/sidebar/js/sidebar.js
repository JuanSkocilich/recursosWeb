const featBtn = document.querySelector('.feat-btn')
const menuBtn = document.querySelector('.btn')

const featShow = document.querySelector('.feat-show')
const first = document.querySelector('.first')
const sidebar = document.querySelector('.sidebar')

const move2 = document.querySelectorAll('.move2')

featBtn?.addEventListener('click', function () {
    featShow.classList.toggle('show')
    first.classList.toggle('rotate')
})

menuBtn?.addEventListener('click', function (e) {
    this.classList.toggle('click')
    sidebar.classList.toggle('show')
    document.querySelector('.components').classList.toggle('componentsMove')
    if (screen.width <= 993) {
        document.querySelector('body').classList.toggle('overflow-hidden')
    }
})

if (screen.width <= 993) {
    move2.forEach((e) => {
        e.addEventListener('click', function () {
            menuBtn.classList.toggle('click')
            sidebar.classList.toggle('show')
            document.querySelector('.components').classList.toggle('componentsMove')
            document.querySelector('body').classList.toggle('overflow-hidden')
        })
    })
}