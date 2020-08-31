<template>
  <div>


    <main-header/>
    <section 
      id="hero" 
      class="center-col horizontal v-center">
      <div class="s-three-quarters l-two-thirds v-margin-mega">
        <h1>Digital services have the power to change peoples lives and build a better future.</h1>
      </div>
    </section>

    <section 
      id="partners" 
      class="center-col horizontal has-grid">
      <background-grid 
        class="grid-container center-col" 
        columns="xs-2 s-3 m-4 l-6"/>
      <div class="xs-half s-third m-quarter l-sixth h-padded">
        <p class="no-margin mini">Our partners</p>
      </div>

      <div 
        id="partner-list" 
        class="flex">
        <p 
          v-for="(partner, i) in partners"
          :key="`${i}-partner`" 
          :delay="100+(i*50)" 
          class="h-padded partner no-margin-top mini">
          {{ partner }}
        </p>        
      </div>
    </section>



    <section class="center-col horizontal v-margin-mega">
      <work-block 
        v-for="(work, i) in caseStudies" 
        :key="`${i}-caseStudies`" 
        :work="work" 
        :i="i"
        :class="[i%2 === 0 ? 'start': 'end']"
        class="work-row" />
    </section>





    <section 
      id="services" 
      class="center-col v-margin-mega">
      <div class="s-three-quarters l-two-thirds v-margin-mega">
        <h1>We define multi-year strategies, and guide you to your first release.</h1>
      </div>

      <div class="border-left border-right">

        <div 
          id="strategic-design" 
          class="horizontal border-left service-row">
          <div class="xs-full m-two-thirds service-image border-left border-right">
            <div id="strategic-design-image">
              <div 
                id="strategic-design-image-1"
                class="h-padded flex" >
      
                <fixed-aspect 
                  aspect="four-three">
                  <img v-lazy="require(`~/assets/strategic-design.png`)">
                </fixed-aspect>
    
              </div>

              <div 
                id="strategic-design-image-2"
                class="xs-half h-padded">
                <image-grid :images="['process-1.png','process-2.png','process-3.png','blank','blank','process-4.png','process-5.png', 'process-6.png']"/>
              </div>
            </div>
          </div>

          <div class="xs-full s-two-thirds m-third h-padded border-right service-copy">
            <h2 class="no-margin-top v-margin-bottom">Digital service strategy </h2>
            <p>A structured approach to problem solving.</p>
            <p>Make sense of internal and external data sources. Output clear decisions that focus on both organisation and customer value.</p>
            <ol class="body no-margin">
              <li>Proposition design </li>
              <li>Service design and validation .</li>
              <li>Customer Research / validation </li>
              <li>Business/ funding strategy </li>
              <li>Live trials </li>
            </ol>
          </div>
        </div>

        <div 
          id="product-delivery" 
          class="horizontal s-reverse border-left service-row">
          <div class="xs-full m-two-thirds service-image border-left border-right">
            <div id="product-delivery-image">
              <div 
                id="product-delivery-image-1"
                class="h-padded flex" >
  
                <fixed-aspect 
                  aspect="square">
                  <img v-lazy="require(`~/assets/product-delivery.png`)">  
                </fixed-aspect>

              </div>
            </div>
          
          </div>

          <div class="xs-full s-two-thirds m-third h-padded border-left service-copy">
            <h2 class="no-margin-top v-margin-bottom">Delivery support </h2>
            <p>A rapid and continuous approach to the delivery & adoption of digital products and services.</p>
            <p>Ensure strategy makes its way to the real world quickly. </p>
            <ol class="body no-margin">
              <li>Team formation </li>
              <li>Product management </li>
              <li>Product Design </li>
              <li>Product engineering </li>
              <li>First release delivery MVP delivery  </li>
            </ol>
          </div>
        </div>
      </div>
    </section>



    <footer id="footer">
      <section class="center-col v-padded"> 
        <div class="s-three-quarters l-full">
          <h1>The future isn’t something you wait for.<br>The future is made today.</h1>
        </div>
      </section>

      <section 
        class="center-col horizontal v-padded">
        <div class="xs-full m-half h-padded footer-col">
          <p class=" no-margin-top">General Enquiries</p>
          <p class=" ">hello@mentallyfriendly.com<br>
            Sydney — +61 (02) 9360 8667<br>
            Canberra — +61 431 277 652</p>
        </div>

        <div class="xs-full m-half h-padded footer-col">
          <p class=" no-margin-top">New Business</p>
          <p class=" ">partnerships@mentallyfriendly.com<br>+61 (02) 9360 8667</p>
        </div>

        <div class="xs-full m-half h-padded footer-col">
          <p class="mini no-margin-top">Future Friendly is a certified b-Corp.</p>
          <p class="mini ">We respect and honour Aboriginal and Torres Strait Islander Elders past, present and future.</p>
          <p class="mini">
            We acknowledge the stories, traditions and living cultures of Aboriginal and Torres Strait Islander peoples on this land and commit to building a brighter future together.
          </p>
        </div>

      </section>
    </footer>

  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'
import FixedAspect from '~/components/FixedAspect.vue'
import BackgroundGrid from '~/components/BackgroundGrid.vue'
import WorkBlock from '~/components/WorkBlock.vue'
import ImageGrid from '~/components/ImageGrid.vue'
import WipeIn from '~/components/WipeIn.vue'

export default {
  components: {
    MainHeader,
    FixedAspect,
    BackgroundGrid,
    WorkBlock,
    ImageGrid,
    WipeIn
  },
  data() {
    return {
      partners: [
        'ABC',
        'Ausgrid',
        'Dept. of Education',
        'Russell Investments',
        'Dept. of Premier & Cabinet',
        'IAG',
        'Public Service Commission',
        'ACT Family Saftey Hub',
        'Frasers Property',
        'Russell Investments',
        'Dept. of Premier & Cabinet',
        'IAG',
        'ABC',
        'Ausgrid'
      ],
      caseStudies: [
        {
          lead: 'Managing the rising cost of living.',
          main:
            'We built a platform that delivered $1.5 billion to the people that need it most. ',
          client: 'Service NSW.',
          img: {
            src: 'col-hero.jpg',
            video: 'col-hero.mp4',
            aspect: 'four-three',
            alt: 'Foo'
          }
        },
        {
          lead: 'Mitigating domestic violence.',
          main:
            'We designed a service to recognise & respond to financial abuse. ',
          client: 'the ACT Government',
          img: {
            src: 'fsh-hero.jpg',
            video: 'fsh-hero.mp4',
            aspect: 'four-three',
            alt: 'Foo'
          }
        },

        {
          lead: 'Building financial resiliance.',
          main:
            'We built a product to help Australians build financial resiliance.',
          client: 'a leading superannuation provider.',
          img: {
            src: 'cfs-hero.jpg',
            aspect: 'four-three',
            alt: 'Foo'
          }
        },
        {
          lead: 'Improving early childhood learning.',
          main:
            'We built a service to create a safe environment for new primary school students.',
          client: 'the Dept. of Education.',
          img: {
            src: 'tts-hero.jpg',
            aspect: 'four-three',
            alt: 'Foo'
          }
        }
      ]
    }
  },

  methods: {
    onWaypoint(e) {
      console.log('waypoint', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

#hero {
  min-height: 95vh;
}

// #promo {
//   background-color: #ff4873;
//   position: relative;
// }

#partners {
  padding-bottom: 4rem;

  .partner {
    margin-bottom: 0.5rem;
  }

  #partner-list {
    columns: 1;
    column-fill: balance;

    @media (min-width: $small) {
      columns: 2;
    }

    @media (min-width: $mid) {
      columns: 3;
    }

    @media (min-width: $big) {
      columns: 5;
    }

    column-gap: 0px;
  }
}

.work-row {
  &.end {
    @media (min-width: $mid) {
      margin-left: 25%;
    }

    @media (min-width: $big) {
      margin-left: 33.33%;
    }
  }
}

#services {
  .service-row {
    margin-bottom: 8rem;

    @media (min-width: $mid) {
      margin-bottom: 1rem;
    }
  }

  .service-image {
    margin-bottom: 1rem;

    @media (min-width: $mid) {
      margin-bottom: 0rem;
    }
  }

  #strategic-design {
    z-index: 99;
    mix-blend-mode: multiply;
  }

  #strategic-design-image-1 {
    position: absolute;
    left: 0rem;
    top: 0rem;
    right: 25%;

    // @media (min-width: $mid) {
    //   right: 8rem;
    // }
  }

  #strategic-design-image-2 {
    margin-left: 50%;
    margin-top: 2rem;
    @media (min-width: $mid) {
      transform: translate3d(0, 33.33%, 0);
    }
    mix-blend-mode: multiply;
  }

  #product-delivery-image-1 {
    @media (min-width: $mid) {
      margin-left: 25%;
    }
  }
}

#footer {
  background-color: #cdccc4;

  #callout {
    min-height: 50vh;
  }

  #footerStuff {
    min-height: 50vh;
  }

  .footer-col {
    margin-top: 2rem;
  }
}
</style>
