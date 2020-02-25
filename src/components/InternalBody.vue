<template>
    <div class="internal-body">
        <div class="internal-body__container">
            <div class="internal-body__container__main">
            <h1>Helados con amor</h1>
            <p>
                Inspirados en la historia de amor de una abuelita, 
                Adela trae lo mejor de los helados en una versión de los años 50’s. 
                Helados 100% artesanales llenos de amor en la ciudad de Guatemala.
            </p>
            <img src="@/assets/internal/content-images/adela.jpg" alt="Adela picture">
            </div>
            <div class="internal-body__container__sidebar">
                <img class="logo" src="@/assets/internal/brands/adela.jpg" alt="Adela logo">
                <h3>Redes sociales</h3>
                <ul>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                </ul>
                <a class="site-link" href="#">Ir a sitio web</a>
                <div class="next-link">
                    <img src="@/assets/internal/assets/group.png" alt="menu">
                    <div class="next-links">
                        <h6>Bizu</h6>
                        <a class="arrow" href="#">
                            <img src="@/assets/internal/assets/arrow.png" alt="arrow">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InternalBody',
}
</script>

<style lang="scss" scoped>
    .internal-body {
        .internal-body__container {
            @include generalMaxWidth;
            display: grid;
            grid-template-columns: 1fr 350px;
            padding-top: 86px;
            padding-bottom: 113px;
            .internal-body__container__main {
                grid-column: 1;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                h1 {
                    color: $color-gold;
                    font-family: 'Gelasio', sans-serif;
                    font-size: 35px;
                    font-style: italic;
                    line-height: 50px;
                    margin-bottom: 38px;
                }
                p {
                    width: 520px;
                    color: $color-gray;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    line-height: 22px;
                    margin-bottom: 40px;
                }
                img {
                    width: 620px;
                    height: 400px;
                    object-fit: cover;
                }
            }
            .internal-body__container__sidebar {
                grid-column: 2;
                .logo {
                    height: 350px;
                    width: 350px;
                    margin-bottom: 81px;
                    margin-top: -200px;
                }
                h3 {
                    color: $color-gold;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    line-height: 20px;
                    margin-bottom: 25px;
                    text-transform: uppercase;
                }
                ul li a {
                    display: block;
                    color: black;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 15px;
                    letter-spacing: 1.21px;
                    line-height: 50px;
                    padding: 10px;
                    border-bottom: 1px solid #ADACAB;
                }
                .site-link {
                    margin: 44px 0 87.32px 0;
                    background-color: black;
                    color: white;
                    display: block;
                    text-align: center;
                    padding: 17.5px;
                }
                .next-link {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    img {
                        height: 50px;
                        width: 50px;
                    }
                    .next-links {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-bottom: 20px;
                        border-bottom: 1px solid $color-gray;
                        width: 100%;
                        margin: 0 20px;
                        h6 {
                            color: black;
                            font-family: 'Montserrat', sans-serif;
                            font-size: 16px;
                            letter-spacing: 1px;
                            line-height: 20px;
                            text-transform: uppercase;
                            // margin-right: 50px;
                            font-weight: normal;
                        }
                        a {
                            img {
                                width: 67.41px;
                                height: 15px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>