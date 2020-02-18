<template>
  <div class="contact-main">
    <div class="container">
        <div class="contact-invitation">
            <h1>Contáctanos</h1>
            <ul>
                <li>Email.  info@grupoalta.com.gt</li>
                <li>T. 2374-5000</li>
                <li>Facebook <span>•</span> Instagram</li>
            </ul>
            <a href="#">Forma parte de nuestro equipo</a>
        </div>
        <div class="contact-form">
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

}
</script>

<style lang="scss" scoped>
    .contact-main {
        background-color: black;
        width: 100%;
        height: calc(100vh - 151px);
        min-height: 550px;
        display: flex;
        align-items: center;
        .container {
            @include contactMaxWidth;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "contact-form-contact-invitation contact-form-contact-form";
            .contact-invitation {
                grid-area: contact-form-contact-invitation;
            }
            .contact-invitation h1 {
                @include goldTitle();
            }
            .contact-invitation ul {
                margin-top: 61px;
                color: white;
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
                letter-spacing: 1.5px;
                line-height: 50px;
                text-align: initial;
            }
            .contact-invitation ul {
                 li {
                     span{
                          margin: 0 10px;
                     }
                 }
               
            }
            .contact-invitation a {
                margin-top: 69px;
                @include btn--gold--outline;
            }
            .contact-form {
                grid-area: contact-form-contact-form;
            }
            .contact-form form input, .contact-form form textarea {
                border: 1px solid $color-gray;
                color: $color-gray;
                background-color: transparent;
                font-family: 'Montserrat', sans-serif;
                padding: 13px 309px 16px 43px;
                margin: 7.5px 0;
                outline-color: transparent;
            }
            .contact-form form textarea {
                padding-right: 320px;
            }
            .contact-form button {
                background-color: $color-gold;
                padding: 17.5px 41px 21.6px 43px;
                border: none;
                outline-color: transparent;
                color: white;
                font-family: 'Montserrat', sans-serif;
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 0.88px;
                line-height: 17px;
            }
        }
    }
</style>