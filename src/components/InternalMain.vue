<template>
    <div class="internal-body">

        <div class="internal-body__container">

            <div class="internal-body__container__main">

                <h1 v-if="company.slogan">{{ company.slogan }}</h1>

                <h1 v-else>{{ company.name }}</h1>

                <p>{{ company.phrase }}</p>

                <img :src="require(`@/assets/internals/content-images/${company.images.feature}`)" alt="Adela picture">

            </div>

            <div class="internal-body__container__sidebar">

                <h3>Redes sociales</h3>

                <ul>
                    <li>
                        <a v-show="company.facebook" :href="`https://www.facebook.com/${company.facebook}`" target="_blank">Facebook</a>
                    </li>
                    <li>
                        <a v-show="company.instagram" :href="`https://www.instagram.com/${company.instagram}`" target="_blank">Instagram</a>
                    </li>
                </ul>

                <a v-show="company.website" class="site-link" :href="`https://${company.website}`" target="_blank">Ir a sitio web</a>

                <div class="next-link">

                    <a class="home-icon" href="#">
                        <img src="@/assets/internals/assets/home.svg" alt="menu">
                    </a>
                    
                    <div class="next-links">
                        <h6>{{ company.next.routeName }}</h6>
                        <router-link class="arrow" :to="`/empresa/${company.next.route}`">
                            <img src="@/assets/internals/assets/arrow.png" alt="arrow">
                        </router-link>
                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'InternalMain',
    props: ['company']
}
</script>

<style lang="scss" scoped>
    .internal-body {
        .internal-body__container {
            @include generalMaxWidth;
            @include tablet {
                padding: 0;
            }
            margin-top: 80px;
            margin-bottom: 113px;
            display: grid;
            grid-template-columns: 1fr 350px;
            @include tablet {
                grid-template-columns: 1fr;
            }
            grid-column-gap: 80px;
            .internal-body__container__main {
                grid-column: 1;
                @include tablet {
                    padding-top: 150px;
                }
                h1 {
                    color: $color-gold;
                    font-family: 'Gelasio', sans-serif;
                    font-size: 35px;
                    font-style: italic;
                    line-height: 50px;
                    margin-bottom: 38px;
                    @include tablet {
                        padding: 0 50px;
                    }
                    @include mobile {
                        padding: 0 20px;
                    }
                }
                p {
                    color: $color-gray;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    line-height: 22px;
                    margin-bottom: 40px;
                    width: 520px;
                    @include tablet {
                        width: 80%;
                        padding: 0 50px;
                    }
                    @include mobile {
                        padding: 0 20px;
                    }
                }
                img {
                    height: 400px;
                    width: 90%;
                    @include tablet {
                        width: 100%;
                    }
                    object-fit: cover;
                }
            }
            .internal-body__container__sidebar {
                grid-column: 2;
                margin-top: 150px;
                @include tablet {
                    grid-column: 1;
                    margin-top: 70px;
                    grid-column: 1;
                    margin-top: 35px;
                    padding: 0 50px;
                }
                @include mobile {
                    padding: 0 20px;
                }
                h3 {
                    color: $color-gold;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;
                    line-height: 20px;
                    text-transform: uppercase;
                    margin-bottom: 25px;
                }
                ul {
                    margin-bottom: 44px;
                    li a {
                        color: black;
                        font-family: 'Montserrat', sans-serif;
                        font-size: 15px;
                        letter-spacing: 1.21px;
                        line-height: 50px;
                        display: block;
                        border-bottom: 1px solid #ADACAB;
                    }
                }
                .site-link {
                    background-color: black;
                    color: white;
                    font-family: 'Montserrat';
                    font-size: 16px;
                    letter-spacing: 1px;
                    line-height: 20px;
                    text-align: center;
                    display: block;
                    padding: 17.5px;
                    margin-bottom: 87px;
                }
                .next-link {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .home-icon {
                        padding-bottom: 20px;
                    }
                    .next-links {
                        width: 100%;
                        padding: 0 20px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #ADACAB;
                        h6 {
                            color: black;
                            font-family: 'Montserrat', sans-serif;
                            text-transform: uppercase;
                            font-size: 16px;
                            letter-spacing: 1px;
                            line-height: 20px;
                            font-weight: normal;
                        }
                    }
                }

            }

        }
    }
</style>