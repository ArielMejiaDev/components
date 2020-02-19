<template>
  <div class="publication-grid">
      <div class="publication-grid__container">
          
          <div class="publication-grid__container__publication" v-for="publication in publications" :key="publication.id">
              <div class="label">{{ publication.name }} <span v-show="publication.year">|</span> {{ publication.year }} </div>
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
                        name: 'Casa Palopó', year: 'Top 2018', 
                        content: '7 Luxury Hotels to Witness Natural Wonders from Your Room', 
                        url: 'https://www.architecturaldigest.com/gallery/luxury-hotels-witness-natural-wonders-from-your-room', 
                        source: 'Architectural Digest'
                    },
                    {
                        id: 2,
                        name: 'Casa Palopó', year: 'Top 2018', 
                        content: 'Top Resorts in Central America & The Caribbean', 
                        url: 'https://www.cntraveler.com/readers-choice-awards/caribbean-atlantic/carribean-central-america-top-hotels', 
                        source: 'CNTraveler.com'
                    },
                    {
                        id: 3,
                        name: 'Casa Palopó', 
                        year: 'Top 2018', 
                        content: 'The Most Colorful Hotel Suites in the World', 
                        url: 'https://www.departures.com/travel/hotels/worlds-most-colorful-hotel-suites', 
                        source: 'Departures.com'
                    },
                    {
                        id: 4,
                        name: 'Casa Palopó', 
                        year: 'Top 2018', 
                        content: '12 Jaw-Dropping Honeymoon Resorts with Breathtaking Views', 
                        url: 'https://www.brides.com/story/honeymoon-resorts-with-amazing-views', 
                        source: 'Brides.com'
                    },
                    {
                        id: 5,
                        name: 'Casa Palopó', 
                        year: 'Top 2018', 
                        content: 'The 7 Most Stunning, Gravity-Defying Cliffside Hotels', 
                        url: 'https://www.mensjournal.com/travel/the-7-most-stunning-gravity-defying-cliffside-hotels-in-the-world-2018/', 
                        source: 'MensJournal.com'
                    },
                    {
                        id: 6,
                        name: 'Casa Palopó', 
                        year: 'Top 2018', 
                        content: 'You’ll Want to Curl Up in One of These Unforgettable Hotel Libraries', 
                        url: 'https://www.afar.com/magazine/youll-want-to-curl-up-in-one-of-these-unforgettable-hotel-libraries', 
                        source: 'AFAR.com'
                    },
                    {
                        id: 7,
                        name: 'Casa Palopó', 
                        year: 'Top 2018', 
                        content: 'Discover the Wonders of Guatemala', 
                        url: 'https://www.travelchannel.com/destinations/guatemala/articles/discover-the-wonders-of-guatemala', 
                        source: 'TravelChannel.com'
                    },
                    {
                        id: 8,
                        name: 'Casa Palopó', 
                        year: 'Top 2019', 
                        content: 'Delta Sky Magazine - Descubramos el pasado en Guatemala', 
                        url: 'https://view.imirus.com/209/document/13056/page/79', 
                        source: 'Delta Sky Magazine'
                    },
                    {
                        id: 9,
                        name: 'Casa Palopó', 
                        year: 'Top 2019', 
                        content: 'The 24 Most Romantic Couples and Honeymoon Packages in the World', 
                        url: 'https://www.instyle.com/weddings/most-romantic-couples-honeymoon-hotel-packages', 
                        source: 'Instyle.com'
                    },
                    {
                        id: 10,
                        name: 'Casa Palopó', 
                        year: 'Top 2019', 
                        content: '14 Technicolor Resorts to Brighten Your Winter Blues', 
                        url: 'https://www.brides.com/gallery/technicolor-honeymoon-resorts', 
                        source: 'Brides.com'
                    },
                    {
                        id: 11, 
                        name: 'Casa Palopó', 
                        year: 'Top 2019', 
                        content: 'Life Changing Luxury Spiritual Experiences', 
                        url: 'https://www.departures.com/travel/luxury-spiritual-experiences', 
                        source: 'Departures.com'
                    },
                    {
                        id: 12, 
                        name: 'Casa Palopó', 
                        year: 'Top 2019', 
                        content: 'A Colofrul Destination Wedding at Casa Palopo in Guatemala', 
                        url: 'https://www.theknot.com/real-weddings/a-colorful-destination-wedding-at-casa-palop-in-guatemala-album', 
                        source: 'The Knot.com'
                    },
                    {
                        id: 13, 
                        name: 'Casa Palopó', 
                        year: 'Top 2019', 
                        content: 'A Hotels Complimentary Amenities Can Make All the Difference', 
                        url: 'https://www.travelpulse.com/news/hotels-and-resorts/a-hotels-complimentary-amenities-can-make-all-the-difference.html', 
                        source: 'Travel Pulse.com'
                    },
                    {
                        id: 14, 
                        name: 'Casa Palopó', 
                        year: 'Top 2019', 
                        content: 'Conde Nast Traveler Magazine - Top 15 Hotels in the Caribbean and Central America', 
                        url: 'https://www.cntraveler.com/readers-choice-awards/caribbean-atlantic/carribean-central-america-top-hotels', 
                        source: 'CN Traveler'
                    },
                    {
                        id: 15, 
                        name: 'Casa Palopó', 
                        year: 'Top 2019', 
                        content: 'Conde Nast Traveler Magazine - Top 15 Hotels in the Caribbean and Central America', 
                        url: 'https://www.cntraveler.com/readers-choice-awards/caribbean-atlantic/carribean-central-america-top-hotels', 
                        source: 'CN Traveler'
                    },
                    {
                        id: 16,
                        name: 'Casa Palopó', 
                        year: 'Top 2019', 
                        content: 'Forbes - Trade Overcrowded Destinations for these Quieter Gems', 
                        url: 'https://www.forbes.com/sites/cassidyrandall/2019/10/03/trade-overcrowded-destinations-for-these-quieter-gems/#2d3acb4571dc', 
                        source: 'CN Traveler'
                    },
                    {
                        id: 17,
                        name: 'Casa Palopó', 
                        year: 'Top 2019', 
                        content: 'Travel and Leisure - The Best Solo Trips to Take Before the Year is Over', 
                        url: 'https://www.travelandleisure.com/trip-ideas/solo-travel/solo-travel-trips-to-take-this-year', 
                        source: 'CN Traveler'
                    },
                    {
                        id: 18,
                        name: 'La esquina', 
                        year: '', 
                        content: 'In Doral Magazine - Getaway to Guatemala (pagina 32)', 
                        url: 'https://issuu.com/inweston/docs/binder2indoral_julyaug', 
                        source: 'Doral Magazine'
                    },
                    {
                        id: 19,
                        name: 'La esquina', 
                        year: '', 
                        content: 'Rose & Ivy Journal - A Land of Many Colors (pagina 146)', 
                        url: 'https://issuu.com/roseandivyjournal/docs/11_r_i_2019_issue-2?fr=xKAE9_zU1NQ', 
                        source: 'Rose & Ivy Journal'
                    },
                    {
                        id: 20, 
                        name: 'La esquina', 
                        year: '', 
                        content: 'QuePasa - El primer Food Hall guatemalteco', 
                        url: 'https://quepasa.gt/mercadito-esquina-antigua-foodie-hall-guatemala/?lang=es', 
                        source: 'Quepasa.gt'
                    },
                    {
                        id: 21, 
                        name: 'La esquina', 
                        year: '', 
                        content: 'Restaurantes coloridos en Guatemala', 
                        url: 'https://www.guatemala.com/guias/gastronomia/restaurantes-coloridos-en-guatemala/la-esquina-antigua.html', 
                        source: 'Guatemala.com'
                    },
                    {
                        id: 22,
                        name: 'La esquina', 
                        year: '', 
                        content: 'Restaurantes con murales en Guatemala', 
                        url: 'https://www.guatemala.com/guias/gastronomia/restaurantes-con-murales-en-guatemala/la-esquina-antigua.html', 
                        source: 'Guatemala.com'
                    },
                    {
                        id: 23,
                        name: 'La esquina', 
                        year: '', 
                        content: 'Restaurantes de tacos en Antigua', 
                        url: 'https://www.guatemala.com/guias/gastronomia/restaurantes-de-tacos-en-antigua-guatemala/la-esquina-antigua.html', 
                        source: 'Guatemala.com'
                    },
                    {
                        id: 24,
                        name: 'Adela', 
                        year: '', 
                        content: 'Helados Adela. Autenticos artesanales ahora en zona 14', 
                        url: 'https://republica.gt/2019/08/09/helados-adela-deliciosa-heladeria-ahora-en-zona-14/', 
                        source: 'República'
                    },
                    {
                        id: 25,
                        name: 'Adela', 
                        year: '', 
                        content: 'Deliciosas heladerías que debes probar en la Ciudad de Guatemala', 
                        url: 'https://www.guatemala.com/guias/gastronomia/heladerias-en-guatemala/helados-adela-postres-artesanales-y-cremosos-.html', 
                        source: 'Guatemala.com'
                    },
                    {
                        id: 26,
                        name: 'Adela', 
                        year: '', 
                        content: 'Adela ToGo, helados artesanales a domicilio en Guatemala', 
                        url: 'https://www.guatemala.com/noticias/sociedad/adela-togo-helados-artesanales-a-domicilio-guatemala.html', 
                        source: 'Guatemala.com'
                    },
                    {
                        id: 27,
                        name: 'Bizu', 
                        year: '', 
                        content: 'Moda amigable con el planeta', 
                        url: 'https://republica.gt/2019/08/06/bizu-moda-amigable-con-el-planeta/', 
                        source: 'República'
                    },
                    {
                        id: 28,
                        name: 'Grupo Alta', 
                        year: '', 
                        content: 'Keep it between the family', 
                        url: 'https://issuu.com/scuro/docs/scuro_11_digital', 
                        source: 'Scuro Magazine'
                    },
                    {
                        id: 29,
                        name: 'Villa Bokeh', 
                        year: '', 
                        content: 'Where to Go in 2020', 
                        url: 'https://www.bloomberg.com/features/best-places-to-travel-2020/', 
                        source: 'Bloomberg'
                    },
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
        .publication-grid__container {
            @include generalMaxWidth();
            @include mobile {
                padding: 0 47px;
                // box-sizing: border-box;
            }
            @include sm-mobile {
                padding: 0 20px;
                // box-sizing: border-box;
            }
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            @include mobile {
                grid-template-columns: 1fr;
            }
            grid-column-gap: 44.75px;
            grid-row-gap: 61px;
            @include mobile {
                grid-column-gap: 0;
            }
            justify-items: center;
            .publication-grid__container__publication {
                width: 280px;
                @include mobile {
                    width: 100%;
                }
                min-height: 146px;
                .label {
                    width: max-content;
                    background-color: black;
                    color: white;
                    padding: 5px 25px 5px 10px;
                    font-family: Montserrat;
                    font-size: 13px;
                    letter-spacing: 0.43px;
                    line-height: 22px;
                    text-transform: uppercase;
                    span {
                        margin: 0 10px;
                        font-weight: bold;
                    }
                }
                p {
                    color: #000;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 18px;
                    letter-spacing: 0.9px;
                    line-height: 25px;
                }
                legend {
                    color: $color-gold;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    line-height: 20px;
                }
            }
        }
    }

</style>