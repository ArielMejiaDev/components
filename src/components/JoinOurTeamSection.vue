<template>
  <div class="join-our-team-section">
    <div class="join-our-team-section__container">
      <div class="join-our-team-section__text">
        <h1>Forma parte de nuestro equipo</h1>
        <p>
          Etiam accumsan sit amet libero vel viverra. Donec eu leo eget purus cursus placerat sodales et elit. Maecenas congue, libero id auctor lacinia.
        </p>
        <p>
          Nulla sit amet leo nec metus varius posuere vitae non erat. 
          Maecenas tempor felis ac sodales auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
      <div class="join-our-team-section__form">
        <form action="">
          <input type="text" placeholder="Nombre y apellido" name="nombre">
          <input type="text" placeholder="Correo electrónico" name="email">
          <input type="text" placeholder="Teléfono" name="phone">
          <input type="text" placeholder="Puesto al que aplica">
          <button type="submit">Subir CV</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'JoinOurTeamSection',
}
</script>

<style lang="scss" scoped>
  .join-our-team-section {
    background-color: #2B2B2B;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .join-our-team-section__container {
      @include generalMaxWidth();
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "join-our-team-section__text join-our-team-section__form";
      @include tablet {
        grid-template-columns: 1fr;
        grid-template-areas: "join-our-team-section__text" "join-our-team-section__form";
      }
      .join-our-team-section__text {
        grid-area: join-our-team-section__text;
        h1 {
          @include goldTitle();
          margin-top: 182px;
          margin-bottom: 42px;
          @include tablet {
            margin-top: 60px;
            margin-bottom: 17px;
          }
        }
        p {
          color: #ADACAB;
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          letter-spacing: 0.5px;
          line-height: 24px;
        }
        p:last-child {
          margin-bottom: 334px;
          @include tablet {
            margin-bottom: 34px;
          }
        }
      }
      .join-our-team-section__form {
        grid-area: join-our-team-section__form;
        form {
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 26px;
          margin-left: 127px;
          margin-top: 324px;
          margin-bottom: 191px;
          @include tablet {
            margin-left: 0;
            margin-top: 0;
            margin-bottom: 73px;
          }
          input {
            border: 1px solid $color-gray;
            outline-color: $color-gray;
            color: $color-gray;
            background-color: transparent;
            padding: 13px 315.4px 16px 53.6px;
            @include tablet {
              width: 100%;
              padding: 13px 0 16px 0;
              text-indent: 30px;
            }
            margin-bottom: 15px;
          }
          button {
            display: block;
            background-color: $color-gold;
            border: 1px solid $color-gold;
            outline-color: $color-gold;
            color: white;
            padding: 14.5px 56px;
            cursor: pointer;
            @include mobile {
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>