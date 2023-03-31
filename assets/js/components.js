const img = 'data:image/png;base64,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'

export const componentsInfoArray = [
    {
        title: 'Componentes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo et harum ducimus, aperiam ab numquam. Ipsum officia in, debitis officiis est explicabo ullam incidunt laborum tempore deleniti quibusdam illum praesentium tempora dignissimos reiciendis, eum earum minima impedit possimus recusandae! Excepturi nostrum consectetur, quod vel molestiae harum aperiam dignissimos temporibus amet voluptatem voluptatibus consequatur nesciunt adipisci saepe? Voluptatibus magni blanditiis doloribus. Sequi nostrum ad ipsam cumque voluptatibus! Aspernatur reiciendis delectus iusto beatae tempore quas recusandae laboriosam omnis, ratione assumenda? Assumenda illo aliquam porro perspiciatis obcaecati id consectetur voluptatum sequi molestiae, fugiat sunt ratione, iusto quae doloribus in minima! Ipsa, porro?',
        category: 'all'
    },

    {
        title: 'Navbar',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo et harum ducimus, aperiam ab numquam. Ipsum officia in, debitis officiis est explicabo ullam incidunt laborum tempore deleniti quibusdam illum praesentium tempora dignissimos reiciendis, eum earum minima impedit possimus recusandae! Excepturi nostrum consectetur, quod vel molestiae harum aperiam dignissimos temporibus amet voluptatem voluptatibus consequatur nesciunt adipisci saepe? Voluptatibus magni blanditiis doloribus. Sequi nostrum ad ipsam cumque voluptatibus! Aspernatur reiciendis delectus iusto beatae tempore quas recusandae laboriosam omnis, ratione assumenda? Assumenda illo aliquam porro perspiciatis obcaecati id consectetur voluptatum sequi molestiae, fugiat sunt ratione, iusto quae doloribus in minima! Ipsa, porro?',
        category: 'navbar'
    },

    {
        title: 'Carrousel',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo et harum ducimus, aperiam ab numquam. Ipsum officia in, debitis officiis est explicabo ullam incidunt laborum tempore deleniti quibusdam illum praesentium tempora dignissimos reiciendis, eum earum minima impedit possimus recusandae! Excepturi nostrum consectetur, quod vel molestiae harum aperiam dignissimos temporibus amet voluptatem voluptatibus consequatur nesciunt adipisci saepe? Voluptatibus magni blanditiis doloribus. Sequi nostrum ad ipsam cumque voluptatibus! Aspernatur reiciendis delectus iusto beatae tempore quas recusandae laboriosam omnis, ratione assumenda? Assumenda illo aliquam porro perspiciatis obcaecati id consectetur voluptatum sequi molestiae, fugiat sunt ratione, iusto quae doloribus in minima! Ipsa, porro?',
        category: 'carrousel'
    },

    {
        title: 'Footer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo et harum ducimus, aperiam ab numquam. Ipsum officia in, debitis officiis est explicabo ullam incidunt laborum tempore deleniti quibusdam illum praesentium tempora dignissimos reiciendis, eum earum minima impedit possimus recusandae! Excepturi nostrum consectetur, quod vel molestiae harum aperiam dignissimos temporibus amet voluptatem voluptatibus consequatur nesciunt adipisci saepe? Voluptatibus magni blanditiis doloribus. Sequi nostrum ad ipsam cumque voluptatibus! Aspernatur reiciendis delectus iusto beatae tempore quas recusandae laboriosam omnis, ratione assumenda? Assumenda illo aliquam porro perspiciatis obcaecati id consectetur voluptatum sequi molestiae, fugiat sunt ratione, iusto quae doloribus in minima! Ipsa, porro?',
        category: 'footer'
    },

    {
        title: 'Modal',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo et harum ducimus, aperiam ab numquam. Ipsum officia in, debitis officiis est explicabo ullam incidunt laborum tempore deleniti quibusdam illum praesentium tempora dignissimos reiciendis, eum earum minima impedit possimus recusandae! Excepturi nostrum consectetur, quod vel molestiae harum aperiam dignissimos temporibus amet voluptatem voluptatibus consequatur nesciunt adipisci saepe? Voluptatibus magni blanditiis doloribus. Sequi nostrum ad ipsam cumque voluptatibus! Aspernatur reiciendis delectus iusto beatae tempore quas recusandae laboriosam omnis, ratione assumenda? Assumenda illo aliquam porro perspiciatis obcaecati id consectetur voluptatum sequi molestiae, fugiat sunt ratione, iusto quae doloribus in minima! Ipsa, porro?',
        category: 'modal'
    },

    {
        title: 'Loader',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo et harum ducimus, aperiam ab numquam. Ipsum officia in, debitis officiis est explicabo ullam incidunt laborum tempore deleniti quibusdam illum praesentium tempora dignissimos reiciendis, eum earum minima impedit possimus recusandae! Excepturi nostrum consectetur, quod vel molestiae harum aperiam dignissimos temporibus amet voluptatem voluptatibus consequatur nesciunt adipisci saepe? Voluptatibus magni blanditiis doloribus. Sequi nostrum ad ipsam cumque voluptatibus! Aspernatur reiciendis delectus iusto beatae tempore quas recusandae laboriosam omnis, ratione assumenda? Assumenda illo aliquam porro perspiciatis obcaecati id consectetur voluptatum sequi molestiae, fugiat sunt ratione, iusto quae doloribus in minima! Ipsa, porro?',
        category: 'loader'
    },

    {
        title: 'Cookies',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo et harum ducimus, aperiam ab numquam. Ipsum officia in, debitis officiis est explicabo ullam incidunt laborum tempore deleniti quibusdam illum praesentium tempora dignissimos reiciendis, eum earum minima impedit possimus recusandae! Excepturi nostrum consectetur, quod vel molestiae harum aperiam dignissimos temporibus amet voluptatem voluptatibus consequatur nesciunt adipisci saepe? Voluptatibus magni blanditiis doloribus. Sequi nostrum ad ipsam cumque voluptatibus! Aspernatur reiciendis delectus iusto beatae tempore quas recusandae laboriosam omnis, ratione assumenda? Assumenda illo aliquam porro perspiciatis obcaecati id consectetur voluptatum sequi molestiae, fugiat sunt ratione, iusto quae doloribus in minima! Ipsa, porro?',
        category: 'cookies'
    },

    {
        title: 'Search',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo et harum ducimus, aperiam ab numquam. Ipsum officia in, debitis officiis est explicabo ullam incidunt laborum tempore deleniti quibusdam illum praesentium tempora dignissimos reiciendis, eum earum minima impedit possimus recusandae! Excepturi nostrum consectetur, quod vel molestiae harum aperiam dignissimos temporibus amet voluptatem voluptatibus consequatur nesciunt adipisci saepe? Voluptatibus magni blanditiis doloribus. Sequi nostrum ad ipsam cumque voluptatibus! Aspernatur reiciendis delectus iusto beatae tempore quas recusandae laboriosam omnis, ratione assumenda? Assumenda illo aliquam porro perspiciatis obcaecati id consectetur voluptatum sequi molestiae, fugiat sunt ratione, iusto quae doloribus in minima! Ipsa, porro?',
        category: 'search'
    },

    {
        title: 'Sidebar',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo et harum ducimus, aperiam ab numquam. Ipsum officia in, debitis officiis est explicabo ullam incidunt laborum tempore deleniti quibusdam illum praesentium tempora dignissimos reiciendis, eum earum minima impedit possimus recusandae! Excepturi nostrum consectetur, quod vel molestiae harum aperiam dignissimos temporibus amet voluptatem voluptatibus consequatur nesciunt adipisci saepe? Voluptatibus magni blanditiis doloribus. Sequi nostrum ad ipsam cumque voluptatibus! Aspernatur reiciendis delectus iusto beatae tempore quas recusandae laboriosam omnis, ratione assumenda? Assumenda illo aliquam porro perspiciatis obcaecati id consectetur voluptatum sequi molestiae, fugiat sunt ratione, iusto quae doloribus in minima! Ipsa, porro?',
        category: 'sidebar'
    },

    {
        title: 'Otros',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nemo et harum ducimus, aperiam ab numquam. Ipsum officia in, debitis officiis est explicabo ullam incidunt laborum tempore deleniti quibusdam illum praesentium tempora dignissimos reiciendis, eum earum minima impedit possimus recusandae! Excepturi nostrum consectetur, quod vel molestiae harum aperiam dignissimos temporibus amet voluptatem voluptatibus consequatur nesciunt adipisci saepe? Voluptatibus magni blanditiis doloribus. Sequi nostrum ad ipsam cumque voluptatibus! Aspernatur reiciendis delectus iusto beatae tempore quas recusandae laboriosam omnis, ratione assumenda? Assumenda illo aliquam porro perspiciatis obcaecati id consectetur voluptatum sequi molestiae, fugiat sunt ratione, iusto quae doloribus in minima! Ipsa, porro?',
        category: 'others'
    },
]

export const componentsArray = [
    {
        id: 1,
        name: 'Navbar claro',
        img: 'https://i.ibb.co/L10hhZT/navbar.png',
        hrefDownload: '../../assets/templateComponents/navbar/navbar1.zip',
        infoCode: {
            html: `
            <header class="header">
        <div class="container">
            <section class="wrapper">
                <h2><a href="index.html" class="brand">Brand</a></h2>
                <button type="button" class="btn-open-close opened-menu">
                    <i class="size-icon fa-solid fa-bars"></i>
                </button>
                <div class="overlay"></div>
                <nav class="navbar">
                    <div class="container-btn">
                        <button type="button" class="btn-open-close closed-menu">
                            <i class="size-icon fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <ul class="menu">
                        <li class="menu-item"><a href="index.html">Inicio</a></li>
                        <li class="menu-item"><a href="#">About</a></li>
                        <li class="menu-item menu-item-has-children">
                            <a href="#" data-toggle="sub-menu">Article <i class="expand"></i></a>
                            <ul class="sub-menu">
                                <li class="menu-item"><a href="#">Article One</a></li>
                                <li class="menu-item"><a href="#">Article Two</a></li>
                                <li class="menu-item"><a href="#">Article Three</a></li>
                                <li class="menu-item"><a href="#">Article Four</a></li>
                                <li class="menu-item"><a href="#">Article Five</a></li>
                                <li class="menu-item"><a href="#">Article Six</a></li>
                                <li class="menu-item"><a href="#">Article Seven</a></li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <a class="a-search ">
                                <input class="search" type="search" name="" id="" placeholder="Buscar...">
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    </header>
            `,
            css: `
            *{margin:0;padding:0;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);}html{position:relative;min-height:100%;}body{font-weight:400;line-height:1.5;}body.scrolling{overflow-y:hidden;}.btn-open-close{font-family:inherit;font-size:inherit;line-height:inherit;cursor:pointer;border:none;outline:none;background:0 0;text-decoration:none}.container{max-width:1440px;width:100%;height:auto;padding:0 57px;margin:auto;}@media only screen and (max-width:768px){.container{padding:0 1rem;margin:0 auto;}}
            .brand{font-family:inherit;font-size:1.75rem;font-weight:700;line-height:inherit;border:none;outline:none;color:red;text-transform:uppercase;text-rendering:optimizeLegibility;}.header{position: fixed;left:0;top:0;width:100%;height:auto;z-index:999;border:none;outline:none;background:#f1f5f9;-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}
            .header .wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:2rem;max-width:100%;height:auto;padding:.30rem 0}.header .navbar{max-width:100%;height:auto;display:flex;}.header .menu>.menu-item{position:relative;display:inline-block;margin:0 .75rem;}.header .menu>.menu-item>a{display:block;font-family:inherit;font-size:1rem;font-weight:600;line-height:inherit;padding:1rem 0;border:none;outline:none;color:black;text-transform:uppercase;text-rendering:optimizeLegibility;-webkit-transition:all .35s ease;-o-transition:all .35s ease;transition:all .35s ease}
            .header .menu>.menu-item>a .expand{position:relative;display:inline-block;height:.75rem;width:.75rem;margin-left:.35rem;border:none;outline:none;pointer-events:none;}.header .menu>.menu-item>a .expand:before, .header .menu>.menu-item>a .expand:after{position:absolute;-webkit-box-sizing:inherit;box-sizing:inherit;content:'';left:50%;top:50%;width:100%;height:2px;background:black;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .35s ease;-o-transition:all .35s ease;transition:all .35s ease;}
            .header .menu>.menu-item:hover>a{color:red;}.header .menu>.menu-item:hover>a .expand::before, .header .menu>.menu-item:hover>a .expand::after{background:red;}.header .menu>.menu-item>a .expand::after{-webkit-transform:translate(-50%,-50%)rotate(-90deg);-ms-transform: translate(-50%,-50%)rotate(-90deg);transform:translate(-50%,-50%)rotate(-90deg)}.header .menu>.menu-item>.sub-menu>.menu-item>a:hover{background-color:#cbd5e1;color:red;border-radius:13px;}.header .menu>.menu-item>.sub-menu {position:absolute;left:-1rem;top:100%;width:13rem;height:auto;padding:.75rem 0;border:none;outline:none;opacity:0;visibility:hidden;border-top:3px solid red;background:#f1f5f9;-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);-webkit-transform:translateY(1rem);-ms-transform:translateY(1rem);transform:translateY(1rem);-webkit-transition:all .35s ease;-o-transition:all .35s ease;transition:all .35s ease;}
            .header .menu>.menu-item>.sub-menu>.menu-item{display:block}.header .menu>.menu-item>.sub-menu>.menu-item>a{display:block;font-family:inherit;font-size:1rem;font-weight:600;line-height:inherit;padding:.5rem 1.25rem;color:black;text-transform:capitalize;text-rendering:optimizeLegibility;-webkit-transition:all .35s ease;-o-transition:all .35s ease;transition:all .35s ease;}.header .opened-menu{position:relative;display:none;cursor:pointer;border:none;outline:none;opacity:0;visibility:hidden;background:0 0;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:all .35s ease;-o-transition:all .35s ease;transition:all .35s ease;}
            .a-search{text-align:center;}.search{padding:6px;outline:none;}.size-icon{font-size:26px;}.size-icon-account{font-size:25px;}.header .closed-menu{display:none;*-webkit-box-align:center;*-ms-flex-align:center;*align-items:center;*-webkit-box-pack:center;*-ms-flex-pack:center;*justify-content:center;cursor:pointer;*width:2.5rem;*height:2.5rem;*border:none;*outline:none;*background:0 0;*background-color:red;*margin-top:-5px;}/*.header .closed-menu img.closed-icon{display:block;width:1rem;height:auto}*/.header .overlay{position:fixed;left:0;top:0;height:100%;width:100%;z-index:999;opacity:0;visibility:hidden;background:rgba(0,0,0,.6);-webkit-transition:all .35s ease;-o-transition:all .35s ease;transition:all .35s ease;}@media only screen and (min-width:993px){.header .menu>.menu-item-has-children:hover>.sub-menu{display:block;opacity:1;visibility:visible;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}
            .header .menu>.menu-item-has-children:hover>a .expand::after{-webkit-transform:translate(-50%,-50%)rotate(0deg);-ms-transform:translate(-50%,-50%)rotate(0deg);transform:translate(-50%,-50%)rotate(0deg);}}@media only screen and (max-width:992px){.container-nav-footer{display:block;}.header .overlay.active{display:block;opacity:1;visibility:visible;}.header .navbar{display:block;position:fixed;top:0;left:-18rem;width:18rem;height:100%;padding:1rem 0;z-index:999;opacity:0;overflow-y:auto;visibility:hidden;background:#f1f5f9;-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);-webkit-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;}
            .header .navbar.active{left:0;opacity:1;visibility:visible;}.header .navbar::-webkit-scrollbar{width:5px;}.header .navbar::-webkit-scrollbar-thumb{border-radius:1rem;background:#e6e6e6;-webkit-box-shadow:inset 0 2px 6px rgba(0,0,0,.12);box-shadow:inset 0 2px 6px rgba(0,0,0,.12);}.header .menu{width:100%;height:auto;margin-top:1.5rem;}.header .menu>.menu-item{display:block;margin:0;}.header .menu>.menu-item-has-children>a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header .menu>.menu-item>a {padding:.75rem 1rem;color:black;border-bottom:1px solid #c7cdd4;}
            .header .menu>.menu-item:first-child>a{border-top: 1px solid #c7cdd4;}.header .menu>.menu-item>a .expand::before, .header .menu>.menu-item>a .expand::after{background: black;}.header .menu>.menu-item-has-children.active>a .expand:after{-webkit-transform:translate(-50%,-50%)rotate(0deg);-ms-transform:translate(-50%,-50%)rotate(0deg);transform:translate(-50%,-50%)rotate(0deg);}.header .menu>.menu-item>.sub-menu{position:relative;top:auto;left:auto;width:100%;max-height:0;padding:0;border:none;outline:none;opacity:1;overflow:hidden;visibility:visible;background:0 0;-webkit-box-shadow:none;box-shadow:none;-webkit-transform:translateY(0px);-ms-transform:translateY(0px);transform:translateY(0px)}.header .menu>.menu-item>.sub-menu>.menu-item>a{padding:.75rem 2rem;color:black;border-bottom:1px solid #c7cdd4;background-color:#e2e8f0;font-size:14px;}.header .opened-menu{display:block;opacity:1;visibility:visible}
            .header .closed-menu{*position:absolute;display:-webkit-box;*display:-ms-flexbox;*display:flex;*top:1rem;*right:.5rem;*background-color:red;}.container-btn{padding:.75rem 1rem;height:8%;align-items:center;justify-content:space-between;flex-direction:row-reverse;*background-color:aqua;display:flex;}.search{width: 100%;}}
            `,
            js: `
            const openedMenu = document.querySelector('.opened-menu'); 
            const closedMenu = document.querySelector('.closed-menu');
            const navbarMenu = document.querySelector('.navbar');
            const menuOverlay = document.querySelector('.overlay');

            openedMenu.addEventListener('click', toggleMenu);
            closedMenu.addEventListener('click', toggleMenu);
            menuOverlay.addEventListener('click', toggleMenu);

            function toggleMenu() {
                navbarMenu.classList.toggle('active');
                menuOverlay.classList.toggle('active');
                document.body.classList.toggle('scrolling');
            }

            navbarMenu.addEventListener('click', (event) => {
                if (event.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
                    event.preventDefault();
                    const menuItemHasChildren = event.target.parentElement;
                    if (menuItemHasChildren.classList.contains('active')) {
                        collapseSubMenu();
                    } else {
                        if (navbarMenu.querySelector('.menu-item-has-children.active')) {
                            collapseSubMenu();
                        }
                        menuItemHasChildren.classList.add('active');
                        const subMenu = menuItemHasChildren.querySelector('.sub-menu');
                        subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
                    }
                }
            });

            function collapseSubMenu() {
                navbarMenu.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute('style');
                navbarMenu.querySelector('.menu-item-has-children.active').classList.remove('active');
            }

            function resizeScreen() {
                if (navbarMenu.classList.contains('active')) {
                    toggleMenu();
                }
                if (navbarMenu.querySelector('.menu-item-has-children.active')) {
                    collapseSubMenu();
                }
            }

            window.addEventListener('resize', () => {
                if (this.innerWidth > 992) {
                    resizeScreen();
                }
            });
            `,
        },
        category: 'navbar'
    },

    {
        id: 2,
        name: 'Navbar2',
        img: img,
        hrefDownload: 'components.html',
        infoCode: {
            html: 'navbar2Html',
            css: 'navbar2Css',
            js: 'navbar2Js',
        },
        category: 'navbar'
    },

    {
        id: 3,
        name: 'Modal1',
        img: img,
        hrefDownload: 'components.html',
        infoCode: {
            html: 'modal1Html',
            css: 'modal1Css',
            js: 'modal1Js',
        },
        category: 'modal'
    },

    {
        id: 4,
        name: 'Footer',
        img: 'https://i.ibb.co/ysqY3wp/footer1.png',
        hrefDownload: '../../assets/templateComponents/footer/footer-main.zip',
        infoCode: {
            html: `
            <footer class="footer">
                    <div class="container-footer">
                        <span class="text-muted"><a href="#">&copy; Brand</a></span>
                    </div>
                    </footer>
            `,
            css: `.footer{bottom:0;position:fixed;width:100%;height:60px;background:#cbd5e1;text-align:center;}.container-footer{width:100%;height:100%;justify-content:center;display:flex;align-items:center;}.footer a {color:black;text-decoration:none;}`,
            js: '',
        },
        category: 'footer'
    },

    {
        id: 5,
        name: 'Modal2',
        img: img,
        hrefDownload: '',
        infoCode: {
            html: '',
            css: '',
            js: '',
        },
        category: 'modal'
    },

    {
        id: 6,
        name: 'Cookies',
        img: img,
        hrefDownload: '',
        infoCode: {
            html: '',
            css: '',
            js: '',
        },
        category: 'cookies'
    },

    {
        id: 7,
        name: 'Search',
        img: img,
        hrefDownload: '',
        infoCode: {
            html: '',
            css: '',
            js: '',
        },
        category: 'search'
    },

    {
        id: 8,
        name: 'Sidebar',
        img: img,
        hrefDownload: '',
        infoCode: {
            html: '',
            css: '',
            js: '',
        },
        category: 'sidebar'
    },
]