<template>
  <div class="contact-main">
    <div class="contact-main__container">
        <div class="contact-main__container__invitation">
            <h1>Contáctanos</h1>
            <ul>
                <li>Email.  info@grupoalta.com.gt</li>
                <li>T. 2374-5000</li>
                <li>Facebook <span>•</span> Instagram</li>
            </ul>
            <h3>Forma parte de nuestro equipo</h3>
            <p>
                Si quieres formar parte de Grupo Alta o alguna de 
                nuestras empresas, envíanos tu CV a contrataciones@grupoalta.com.gt
            </p>
        </div>
        <div class="contact-main__container__form">
            <form action="">
                <input type="text" name="nombre" placeholder="Nombre">
                <input type="email" name="email" placeholder="Correo electrónico">
                <input type="phone" name="telefono" placeholder="Teléfono">
                <textarea name="comentario" id="" rows="10" placeholder="Escribe tu comentario o duda acá"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: '',
}
</script>

<style lang="scss" scoped>
    .contact-main {
        background-color: black;
        width: 100%;
        height: 100vh;
        @include respond-to(850px) {
            height: auto;
        }
        .contact-main__container {
            @include generalMaxWidth;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 40px;
            padding-top: 232px;
            @include respond-to(850px) {
                grid-template-columns: 1fr;
                padding-top: 50px;
            }
            .contact-main__container__invitation {
                h1 {
                    @include goldTitle;
                    margin-bottom: 40px;
                    text-align: left;
                }
                ul li {
                    color: white;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    letter-spacing: 1.31px;
                    line-height: 35px;
                    margin-bottom: 53px;
                }
                h3 {
                    color: $color-gold;
                    font-family: 'Gelasio', sans-serif;
                    font-size: 25px;
                    font-style: italic;
                    font-weight: 500;
                    line-height: 50px;
                    margin-bottom: 16px;
                }
                p {
                    color: white;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    letter-spacing: 0.88px;
                    line-height: 22px;
                }
            }
            .contact-main__container__form {
                form {
                    width: 100%;
                    input, textarea {
                        width: 100%;
                        padding: 12px 20px;
                        margin: 8px 0;
                        box-sizing: border-box;
                        background-color: transparent;
                        border: 1px solid white;
                        color: #ADACAB;
                        font-family: 'Montserrat', sans-serif;
                        font-size: 14px;
                        font-weight: 500;
                        letter-spacing: 1px;
                        line-height: 26px;
                        &:focus {
                            outline-color: white;
                        }
                    }
                    textarea {
                        resize: none;
                        border: 1px solid white;
                    }
                    button {
                        background-color: $color-gold;
                        padding: 17.5px 43px;
                        border: 1px solid $color-gold;
                        color: white;
                        font-family: 'Montserrat', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        letter-spacing: 0.88px;
                        line-height: 17px;
                        margin-bottom: 40px;
                        @include mobile {
                            display: block;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>