import { showMessage } from "../components/showMessage/js/showMessage.js"
import { componentsArray, componentsInfoArray } from "./components.js"

const component = document.querySelector('.all-components')
const componetInfo = document.querySelector('.componet-info')

function innerBlank() {
    component.innerHTML = ''
    componetInfo.innerHTML = ''
}

function innerComponentInfo(data) {
    if (componetInfo !== null) {
        componetInfo.innerHTML += `
            <h1>${data.title}</h1>
            <p>${data.description}</p>
        `
    }
}

function componentsInfoArrayForEach() {
    if (componetInfo !== null) componetInfo.innerHTML = ''
    componentsInfoArray.filter(category => category.category == 'all').forEach((data) => {
        innerComponentInfo(data)
    })
}

componentsInfoArrayForEach()

function innerComponent(data) {
    if (component !== null) {
        component.innerHTML += `
        <div class="component">
            <div class="component-img btnImg">
                <img data-id="${data.id}" src="${data.img}" alt="${data.name}">
            </div>
            <div class="title-download">
                <h1>${data.name}</h1>
                <a href="${data.hrefDownload}" download="${data.name}" class="btn-download" title="Descargar ${data.name}">
                    <span><i class="fa-solid fa-download"></i></span>
                </a>
            </div>
            <div class="component-btn">
                <a class="btnHtml" data-id="${data.id}"><i class="fa-regular fa-paste"></i> HTML</a>
                <a class="btnCss" data-id="${data.id}"><i class="fa-regular fa-paste"></i> CSS</a>
                <a class="btnJs" data-id="${data.id}"><i class="fa-regular fa-paste"></i> JS</a>
            </div>
        </div>
        `
        btnCode()
    }
}

function btnCode() {
    const btnHtml = component.querySelectorAll('.btnHtml')
    const btnCss = component.querySelectorAll('.btnCss')
    const btnjs = component.querySelectorAll('.btnJs')
    const btnImg = component.querySelectorAll('.btnImg')

    btnImg.forEach((e) => {
        e.addEventListener('click', ({ target: { dataset } }) => {
            componentsArray.filter(id => id.id == dataset.id).forEach((r) => {
                console.log(r.id)
            })
        })
    })

    btnHtml.forEach((e) => {
        e.addEventListener('click', ({ target: { dataset } }) => {
            componentsArray.filter(id => id.id == dataset.id).forEach((r) => {
                if (r.infoCode.html !== '') {
                    navigator.clipboard.writeText(r.infoCode.html)
                    showMessage('HTML copiado con exito!', 'success')
                } else {
                    showMessage('No contiene HTML', 'success')
                }
            })
        })
    })

    btnCss.forEach((e) => {
        e.addEventListener('click', ({ target: { dataset } }) => {
            componentsArray.filter(id => id.id == dataset.id).forEach((r) => {
                if (r.infoCode.css !== '') {
                    navigator.clipboard.writeText(r.infoCode.css)
                    showMessage('CSS copiado con exito!', 'success')
                } else {
                    showMessage('No contiene CSS', 'success')
                }
            })
        })
    })

    btnjs.forEach((e) => {
        e.addEventListener('click', ({ target: { dataset } }) => {
            componentsArray.filter(id => id.id == dataset.id).forEach((r) => {
                if (r.infoCode.js !== '') {
                    navigator.clipboard.writeText(r.infoCode.js)
                    showMessage('JS copiado con exito!', 'success')
                } else {
                    showMessage('No contiene JS', 'success')
                }
            })
        })
    })
}

function componentsArrayForEach() {
    componentsArray.forEach((data) => {
        innerComponent(data)
    })
}

componentsArrayForEach()

const allBtn = document.querySelector('#allBtn')
const navbarBtn = document.querySelector('#navbarBtn')
const carrouselBtn = document.querySelector('#carrouselBtn')
const footerBtn = document.querySelector('#footerBtn')
const modalBtn = document.querySelector('#modalBtn')
const loaderBtn = document.querySelector('#loaderBtn')
const cookiesBtn = document.querySelector('#cookiesBtn')
const searchBtn = document.querySelector('#searchBtn')
const sidebarBtn = document.querySelector('#sidebarBtn')
const othersBtn = document.querySelector('#othersBtn')

function lengthCategory(actualCategory) {
    const fill = componentsArray.filter(category => category.category.includes(`${actualCategory}`))
    return fill.length
}

if (document.querySelector('.sidebar') !== null) {
    document.querySelector('#spanAll').innerHTML = componentsArray.length
    document.querySelector('#spanNavbar').innerHTML = lengthCategory('navbar')
    document.querySelector('#spanCarrousel').innerHTML = lengthCategory('carrousel')
    document.querySelector('#spanFooter').innerHTML = lengthCategory('footer')
    document.querySelector('#spanModal').innerHTML = lengthCategory('modal')
    document.querySelector('#spanLoader').innerHTML = lengthCategory('loader')
    document.querySelector('#spanCookies').innerHTML = lengthCategory('cookies')
    document.querySelector('#spanSearch').innerHTML = lengthCategory('search')
    document.querySelector('#spanSidebar').innerHTML = lengthCategory('sidebar')
    document.querySelector('#spanOthers').innerHTML = lengthCategory('others')
}

function filterCategory(actualCategory) {
    innerBlank()
    const fill = componentsArray.filter(category => category.category.includes(`${actualCategory}`))
    fill.forEach((data) => {
        innerComponent(data)
    })
    const fillInfo = componentsInfoArray.filter(category => category.category.includes(`${actualCategory}`))
    fillInfo.forEach((data) => {
        innerComponentInfo(data)
    })
}

allBtn?.addEventListener('click', function () {
    innerBlank()
    componentsArrayForEach()
    const fillInfo = componentsInfoArray.filter(category => category.category.includes('all'))
    fillInfo.forEach((data) => {
        innerComponentInfo(data)
    })
})

navbarBtn?.addEventListener('click', function () {
    filterCategory('navbar')
})

carrouselBtn?.addEventListener('click', function () {
    filterCategory('carrousel')
})

footerBtn?.addEventListener('click', function () {
    filterCategory('footer')
})

modalBtn?.addEventListener('click', function () {
    filterCategory('modal')
})

loaderBtn?.addEventListener('click', function () {
    filterCategory('loader')
})

cookiesBtn?.addEventListener('click', function () {
    filterCategory('cookies')
})

searchBtn?.addEventListener('click', function () {
    filterCategory('search')
})

sidebarBtn?.addEventListener('click', function () {
    filterCategory('sidebar')
})

othersBtn?.addEventListener('click', function () {
    filterCategory('others')
})


document?.addEventListener('keyup', (e) => {
    if (e.target.matches('#search')) {
        const search = document.querySelectorAll(".component")
        search.forEach((name) => {
            if (name.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                name.classList.remove("filtro")
            } else {
                name.classList.add('filtro')
            }
        })
    }
})
