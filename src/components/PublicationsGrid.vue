<template>
    <div class="publication-grid">

    <div class="publication-grid__container">
        
        <div class="publication-grid__container__publication" v-for="publication in publications" :key="publication.id">
            <img :src="require(`@/assets/${publication.image}`)" alt="">
            <div class="publication-grid__container__publication__label">{{ publication.name }} <span v-show="publication.year">|</span> {{ publication.year }} </div>
            <p>{{ publication.content }}</p>
            <a :href="publication.url" target="_blank">
                <legend>{{ publication.source }}</legend>
            </a>
        </div>

    </div>

    </div>
</template>

<script>
export default {
    name: 'PublicationsGrid',
    data: function() {
        return {
            publications: [
                {
                    id: 1,
                    name: 'Casa Palopó', 
                    year: 'Top 2018', 
                    content: '7 Luxury Hotels to Witness Natural Wonders from Your Room', 
                    url: 'https://www.architecturaldigest.com/gallery/luxury-hotels-witness-natural-wonders-from-your-room', 
                    source: 'Architectural Digest',
                    image: 'publications/casa_palopo.jpg'
                },
                {
                    id: 2,
                    name: 'La Esquina', 
                    year: 'Top 2018', 
                    content: 'Foodie Culture Hits Central America', 
                    url: 'https://www.cntraveler.com/readers-choice-awards/caribbean-atlantic/carribean-central-america-top-hotels', 
                    source: 'Forbes',
                    image: 'publications/la_esquina.jpg'
                },
                {
                    id: 3,
                    name: 'Helados Adela', 
                    year: 'Top 2018', 
                    content: 'Helados Adela. Autenticos artesanales ahora en zona 14.', 
                    url: 'https://www.departures.com/travel/hotels/worlds-most-colorful-hotel-suites', 
                    source: 'Republica',
                    image: 'publications/adela.jpg'
                },
                {
                    id: 4,
                    name: 'La Esquina La antigua', 
                    year: 'Top 2018', 
                    content: 'Get away to Guatemala', 
                    url: 'https://www.brides.com/story/honeymoon-resorts-with-amazing-views', 
                    source: 'In Doral Magazine',
                    image: 'publications/la_esquina_antigua.jpg'
                },
                {
                    id: 5,
                    name: 'Casa Palopó', 
                    year: 'Top 2018', 
                    content: '12 Jaw-Dropping Honeymoon Resorts with Breathtaking Viewss', 
                    url: 'https://www.mensjournal.com/travel/the-7-most-stunning-gravity-defying-cliffside-hotels-in-the-world-2018/', 
                    source: 'Brides.com',
                    image: 'publications/casa_palopo_2.jpg'
                },
                {
                    id: 6,
                    name: 'Bizu', 
                    year: 'Top 2018', 
                    content: 'Moda amigable con el planeta.', 
                    url: 'https://www.afar.com/magazine/youll-want-to-curl-up-in-one-of-these-unforgettable-hotel-libraries', 
                    source: 'Republica',
                    image: 'publications/bizu.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    .publication-grid {
        width: 100%;
        box-sizing: border-box;
        margin-top: 72px;
        margin-bottom: 72px;
        .publication-grid__container {
            @include generalMaxWidth();
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            @include tablet {
                grid-template-columns: repeat(2, 1fr);
            }
            @include mobile {
                grid-template-columns: 1fr;
            }
            grid-row-gap: 66px;
            grid-column-gap: 50px;
            img {
                margin-bottom: 25px;
                width: 100%;
            }
            .publication-grid__container__publication__label {
                background-color: black;
                color: white;
                font-family: 'Montserrat', sans-serif;
                font-size: 12px;
                letter-spacing: 0.8px;
                line-height: 25px;
                width: fit-content;
                padding: 5px 30px 5px 15px;
                margin-bottom: 20px;
            }
            p {
                color: black;
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
                letter-spacing: 0.8px;
                line-height: 25px;
                margin-bottom: 14px;
            }
            a {
                color: $color-gold;
                font-family: 'Montserrat', sans-serif;
                font-size: 14px;
                letter-spacing: 0.5px;
                line-height: 20px;
            }
        }
    }

</style>