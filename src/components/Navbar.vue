<template>
    <div class="navbar">
        
    <div id="overlay-menu" class="overlay" :class="show" v-on:click="menu = ! menu"></div>
    <header id="main-header" :class="open" >
        <div class="container">
            <router-link to="/" id="logo" class="logo" :class="onScroll">
                <img src="@/assets/navbar/logo_white.svg" alt="Grupo Alta">
            </router-link>
            <button class="toggle" v-on:click="menu = ! menu" >Menú</button>
            <nav>
                <ul>
                    <li>
                        <router-link to="/nosotros">Nosotros</router-link>
                    </li>
                    <li class="text-gold" v-for="company in companies" :key="company.id">
                        <router-link :to="`/empresa/${company.slug}`">{{ company.name }}</router-link>
                    </li>
                    <li>
                        <router-link to="/responsabilidad-social">Responsabilidad social</router-link>
                    </li>
                    <li>
                        <router-link to="/publicaciones">Publicaciones</router-link>
                    </li>
                    <li>
                        <router-link to="/contacto">Contacto</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    </div>
</template>

<script>
import companies from "@/data/companies"
export default {
    name: 'Navbar',
    data: function () {
        return {
            menu: false,
            showMenu: false,
            companies: companies
        }
    },
    computed: {
        show: function() {
            return { 'show': this.menu }
        },
        open: function() {
            return { 'open': this.menu }
        },
        onScroll: function() {
            return { 'on-scroll':this.showMenu }
        },
        headerHeight: function() {
            return document.querySelector('#main-header').offsetHeight
        }
    },
    mounted() {
        addEventListener('scroll', this.toggleMenu)
    },
    methods: {
        scrolledPixelsAreGreaterThenHeaderHeight: function() {
            return window.scrollY >= this.headerHeight
        },
        toggleMenu: function() {
            this.showMenu = false
            if (this.scrolledPixelsAreGreaterThenHeaderHeight()) {
                this.showMenu = true
            }
        }
    }
}

</script>

<style lang="scss" scoped>

    header {
    width: 100%;
    height: 198px;
    position: fixed;
    top: 0;
    left: 0;
    background: url('../assets/navbar/gradient.png') repeat-x top left;
    text-align: center;
    overflow: hidden;
    transition: allt 0.3s;
    z-index: 3;
    .logo {
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
    button {
        font-size: 13px;
        line-height: 16px;
        text-transform: uppercase;
        padding: 0;
        color: white;
        background: transparent;
        border:0;
        outline: none;
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        text-align: center;

    }
    nav {
        margin-top: 40px;
        ul {
            li {
                opacity: 0;
                a {
                    color: white;
                    line-height: 40px;
                    font-size: 13px;
                    letter-spacing: 1px;
                    text-decoration: none;
                    transition: opacity 0.3s;
                    display: block;
                    font-family: 'Montserrat', sans-serif;
                    letter-spacing: 1px;

                    &:hover{
                        opacity: .6;
                    }
                }
                &.text-gold {
                    a{
                        color: $color-gold;
                    }                  
                }
            }
        }
    }
    // This class open the Menu
    &.open {
        height: auto;
        button {
            font-size: 0;
            &:before{
                content: 'Cerrar';
                font-size: 13px;
                display: block;
                cursor: pointer;
            }
        }
        nav {
            li {
                transition: height 0.5s, opacity 0.3s;
                opacity: 1;
                @for $i from 1 through 10 {
                    &:nth-child(#{$i}) {
                        transition-delay: #{$i / 10}s;
                    }
                }

            }
        }
    }
    @include mobile {
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
.overlay {
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
    &.show {
        opacity: .6;
        visibility: visible;
    }
}

</style>