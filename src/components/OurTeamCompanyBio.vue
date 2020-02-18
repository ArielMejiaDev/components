<template>
  <div class="our-team-company-bio">
      <div class="container">
        <div class="our-team-company-bio__title">
          <h1>Grupo Alta</h1>
          <p>Todo hecho con amor en familia. </p>
          <legend>100% guatemalteco.</legend>
        </div>
        <div class="our-team-company-bio__text">
            <p>
              Grupo en la industria de la hospitalidad, con fin de crear marcas energéticas. 
              Constantemente a la vanguardia de la gastronomía, el diseño, la moda y el entretenimiento. 
              A través del trabajo en equipo cultivamos caminos de innovación y curamos experiencias únicas para los ciudadanos del mundo.
            </p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'OurTeamCompanyBio', 
}
</script>

<style lang="scss" scoped>
    .our-team-company-bio {
        width: 100%;
        min-height: 168px;
        margin-top: 165.06px;
        margin-bottom: 134px;
        @include tablet {
            margin-top: 52px;
            margin-bottom: 6px;
        }
        .container {
            @include generalMaxWidth();
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas: "our-team-company-bio__title  our-team-company-bio__text";
            @include tablet {
                grid-template-columns: 1fr;
                grid-template-areas: "our-team-company-bio__title" "our-team-company-bio__text";
            }
            .our-team-company-bio__title {
                grid-area: our-team-company-bio__title;
                h1 {
                    @include goldTitle();
                }
                p {
                    color: black;
                    font-family: 'Gelasio', sans-serif;
                    font-size: 25px;
                    font-weight: 700;
                    letter-spacing: 0.63px;
                    line-height: 30px;
                    @include mobile {
                        font-size: 25px;
                        font-weight: 700;
                        letter-spacing: 0.63px;
                        line-height: 30px;
                    }
                }
                legend {
                    color: black;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 20px;
                    line-height: 30px;
                    @include mobile {
                        font-size: 18px;
                        line-height: 30px
                    }
                }
            }
            .our-team-company-bio__text {
                grid-area: our-team-company-bio__text;
                p {
                    color: $color-gray;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 22px;
                    letter-spacing: 1px;
                    line-height: 30px;
                    @include mobile {
                        font-size: 16px;
                        letter-spacing: 0.5px;
                        line-height: 24px;
                    }
                }
            }
        }
    }
</style>