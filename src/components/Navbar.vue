<template>
    <div class="navbar">
        
    <div id="overlay-menu" class="overlay" onclick="closeMenu(this)"></div>
    <header id="main-header">
        <div class="container">
            <a href="#" id="logo" class="logo">
                <img src="@/assets/navbar/logo.png" alt="Grupo Alta">
            </a>
            <button class="toggle" onclick="openMenu()">Menu</button>
            <nav>
                <ul>
                    <li><a href="#">Nuestro Equipo</a></li>
                    <li class="text-gold"><a href="#">La Esquina</a></li>
                    <li class="text-gold"><a href="#">Casa Palopó</a></li>
                    <li class="text-gold"><a href="#">SBT</a></li>
                    <li class="text-gold"><a href="#">Helados Adela</a></li>
                    <li class="text-gold"><a href="#">Bizú</a></li>
                    <li class="text-gold"><a href="#">Queseso</a></li>
                    <li><a href="#">Responsabilidad social</a></li>
                    <li><a href="#">Publicaciones</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>

    </div>
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        openMenu: function() {
            openMenu()
            closeMenu('e')
            scrollIsGreaterThenNav()

            //Open Menu
            function openMenu(){
                document.getElementById("main-header").classList.toggle('open')
                document.getElementById("overlay-menu").classList.toggle('show')
            }

            //Close Menu
            function closeMenu(element){
                document.getElementById("main-header").classList.remove('open')
                element.classList.remove('show')
            }

            const nav = document.querySelector('#main-header').offsetHeight
            const logo = document.querySelector('#logo');
            const scrollIsGreaterThenNav = () => window.scrollY >= nav
            const fullLogo = () => {
                logo.classList.remove('on-scroll')
                if (scrollIsGreaterThenNav()) {
                    logo.classList.add('on-scroll')
                }
            }

            window.addEventListener('scroll', fullLogo);
        }
    }
}

</script>

<style lang="scss" scoped>

    header{
    width: 100%;
    height: 198px;
    position: fixed;
    top: 0;
    left: 0;
    background: url('../assets/navbar/gradient.png') repeat-x top left;
    text-align: center;
    overflow: hidden;
    transition: allt 0.3s;
    z-index: 2;
    .logo{
        width: 81px;
        height: 99px;
        overflow: hidden;
        display: block;
        margin: 20px auto 18px;
        transition: height 0.3s;
        &.on-scroll{
            height: 61px;
        }
    }
    button{
        font-size: 13px;
        line-height: 16px;
        text-transform: uppercase;
        padding: 0;
        color: white;
        background: transparent;
        border:0;
        outline: none;
        cursor: pointer;

    }
    nav{
        margin-top: 40px;
        ul{
            li{
                opacity: 0;
                a{
                    color: white;
                    line-height: 40px;
                    font-size: 13px;
                    letter-spacing: 1px;
                    text-decoration: none;
                    transition: opacity 0.3s;
                    display: block;
                    &:hover{
                        opacity: .6;
                    }
                }
                &.text-gold{
                    a{
                        color: $color-gold;
                    }                  
                }
            }
        }
    }
    // This class open the Menu
    &.open{
        height: auto;
        button{
            font-size: 0;
            &:before{
                content: 'Close';
                font-size: 13px;
                display: block;
                cursor: pointer;
                
            }
        }
        nav{
            li{
                transition: height 0.5s,opacity 0.3s;
                opacity: 1;

                &:nth-child(1){
                    transition-delay: 0.1s;
                }
                &:nth-child(2){
                    transition-delay: 0.2s;
                }
                &:nth-child(3){
                    transition-delay: 0.3s;
                }
                &:nth-child(4){
                    transition-delay: 0.4s;

                }
                &:nth-child(5){
                    transition-delay: 0.5s;
                }
                &:nth-child(6){
                    transition-delay: 0.6s;
                }
                &:nth-child(7){
                    transition-delay: 0.7s;
                }
                &:nth-child(8){
                    transition-delay: 0.8s;
                }
                &:nth-child(9){
                    transition-delay: 0.9s;
                }
                &:nth-child(10){
                    transition-delay: 1s;
                }
            }
        }
    }
    @include mobile{
        nav{
            margin-top: 20px;
            ul{
                li{
                    a{
                        line-height: 30px;
                    }
                }
            }
        }
    }
}

.overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 1;
    // This class show the overlay
    &.show{
        opacity: .6;
        visibility: visible;
    }
}

</style>