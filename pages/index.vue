<template>
  <div>
    <div id="promo" >
      <section 
        class="center-col horizontal v-padded ">
        <div class="h-padded m-third border-left">
          <h2 class="no-margin-top">Mentally Friendly has changed it's name to Future Friendly.</h2>
        </div>
        <div class="h-padded m-third border-left border-right">
          <p class="no-margin-top mini">We’re changing the name to better reflect our purpose — rapidly delivering products and services that build towards powerful visions of the future. </p>
          <p class="mini">While the name is changing, everything else remains the same. Same team. Same values. Same mission.</p>
          <p class="mini">The future isn’t something you wait for.</p>
          <p class="mini">The future is made today.</p>
          <p class="no-margin-bottom mini">Let’s go.</p>
        </div>
      </section>
    </div>


    <header id="header">
      <div class="center-col">
        <div 
          id="logo" 
          class="horizontal border-right">
          <span class="border-left">Future</span>
          <span class="border-left border-right">Friendly</span>
        </div>
      </div>
    </header>

    <section 
      id="main" 
      class="center-col horizontal v-center">
      <div>
        <h1 class="h-padded m-half v-padded">Digital services have the power to change peoples lives and build a better future.</h1>
      </div>
    </section>

    <section 
      id="partners" 
      class="center-col has-grid horizontal v-margin no-margin-top">

      <background-grid 
        class="grid-container center-col" 
        columns="xs-2 s-3 m-4 l-6"/>

      <div class="xs-half s-third m-quarter l-sixth h-padded">
        <p class="mini">Our partners</p>
      </div>

      <div 
        id="partner-list" 
        class="flex">
        <p 
          v-for="(partner, i) in partners"
          :key="`${i}-partner`" 
          class="partner mini h-padded">
          {{ partner }}
        </p>
      </div>
    </section>


    <work-block 
      v-for="(work, i) in caseStudies" 
      :key="`${i}-caseStudies`" 
      :work="work" 
      :index="i" />

    <section 
      id="process" 
      class="v-margin">
      
      <div class="center-col horizontal">

        <div class="m-half">
          <div class="horizontal border-left">
            <div class="h-padded xs-full">
              <h1 class="no-margin-top v-margin-bottom-big">A strategic product partner.</h1>
            </div>
          </div>
        </div>

        <div class="m-half">
          <div class="horizontal border-left border-right">
            <div class="h-padded l-half">
              <h2 class="no-margin-top v-margin-bottom-big">Strategic Design</h2>
              <p>A structured approach to problem solving.</p>
              <p>Make sense of internal and external data sources. Output clear decisions that focus on both organisation and customer value.</p>
              <ol class="body">
                <li>Proposition design.</li>
                <li>Service design.</li>
                <li>Experimentation and research.</li>
                <li>3 Horizon planning.</li>
              </ol>
            </div>
            <div class="h-padded border-left l-half">
              <h2 class="no-margin-top v-margin-bottom-big">Product Delivery</h2>
              <p>A rapid and continuous approach to the delivery & adoption of digital products and services.</p>
              <p>Ensure strategy makes its way to the real world quickly. </p>
              <ol class="body">
                <li>Proposition design.</li>
                <li>Service design.</li>
                <li>Experimentation and research.</li>
                <li>3 Horizon planning.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="center-col horizontal">
        <div 
          :style="{ marginTop: '-4rem'}" 
          class="xs-half h-padded border-left">
          <fixed-aspect 
            
            aspect="four-three">
            <img 
              v-lazy = "require('~/assets/strategic-design-1.jpg')" 
            >
          </fixed-aspect>
        </div>
        <div 
          :style="{marginLeft:'auto', marginTop:'-8rem'}" 
          class="xs-two-thirds h-padded border-left border-right">
          <fixed-aspect 
            :style="{mixBlendMode:'multiply'}" 
            aspect="four-three"><img 
              v-lazy = "require('~/assets/product-delivery-1.jpg')"></fixed-aspect>
        </div>
      </div>
    </section>

    <!-- <section 
      class="v-margin center-col has-grid" >
    
      <background-grid 
        :inset="true"
        class="grid-container center-col" 
        columns="xs-1 m-2"/>

      <div 
        class="horizontal scroll-lock-block" 
        sticky-container
      >

        <div class="xs-full m-half">
          <div v-sticky="windowWidth > 760" >

            <div 
              class="m-full-height service-block-content h-padded v-padded">
              <h1 class=" no-margin">Strategic Design</h1>
              <div class=" l-two-thirds copy">
                <p>A structured approach to problem solving.</p>
                <p>Make sense of internal and external data sources. Output clear decisions that focus on both organisation and customer value.</p>
                <p>We can help with;</p>
                <ol class="body">
                  <li>Proposition design.</li>
                  <li>Service design.</li>
                  <li>Experimentation and research.</li>
                  <li>3 Horizon planning.</li>
                </ol>
              </div>
            </div>

          </div>
        </div>

        <div class="xs-full m-half scroll-lock-block-spacer">
          <div 
            class="m-full-height service-block-image h-padded v-padded">
            <fixed-aspect aspect="three-four"/>
          </div>
        </div>
      </div>


      <div 
        class="horizontal scroll-lock-block m-reverse" 
        sticky-container>

        <div 
          class="xs-full m-half scroll-lock-block-overlap">
          <div 
            v-sticky="windowWidth > 760"
          >
            <div class="m-full-height service-block-content h-padded v-padded">
              <h1 class="no-margin">Product Delivery</h1>
              <div class="l-two-thirds copy">
                <p>A rapid and continuous approach to the delivery & adoption of digital products and services.</p>
                <p>Ensure strategy makes its way to the real world quickly. </p>
                <p>We can help with;</p>
                <ol class="body">
                  <li>Proposition design.</li>
                  <li>Service design.</li>
                  <li>Experimentation and research.</li>
                  <li>3 Horizon planning.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div 
          class="xs-full m-half" 
        >
          <div 
            class="m-full-height service-block-image h-padded v-padded">
            <fixed-aspect aspect="three-four"/>
          </div>
        </div>
      </div>
    </section> -->



    <footer id="footer">
      <section 
        id="callout" 
        class="center-col"> 
        <div class="h-padded v-padded">
          <h2 class="no-margin-top">The future isn’t something you wait for. <br>The future is made today.</h2>
        </div>
      </section>

      <section 
        id="footerStuff" 
        class="center-col horizontal has-grid v-padded">
        <!-- <background-grid 
          :inset="true"
          class="grid-container center-col" 
          columns="xs-1 s-2 m-4"/> -->
        <div class="xs-full s-half m-quarter h-padded footer-col border-left">
          <p class="mini no-margin-top">General Enquiries</p>
          <p class="mini ">hello@mentallyfriendly.com<br>
            Sydney — +61 (02) 9360 8667<br>
            Canberra — +61 431 277 652</p>
        </div>

        <div class="xs-full s-half m-quarter h-padded footer-col border-left">
          <p class="mini no-margin-top">New Business</p>
          <p class="mini ">partnerships@mentallyfriendly.com<br>+61 (02) 9360 8667</p>
        </div>

        <div class="xs-full s-half m-quarter h-padded footer-col border-left">
          <p class="mini no-margin-top">Future Friendly is a certified b-Corp.</p>
          <p class="mini ">We respect and honour Aboriginal and Torres Strait Islander Elders past, present and future.</p>
          <p class="mini">
            We acknowledge the stories, traditions and living cultures of Aboriginal and Torres Strait Islander peoples on this land and commit to building a brighter future together.
          </p>
        </div>

        <div class="xs-full s-half m-quarter h-padded footer-col border-left border-right">
          <p class="mini no-margin-top">General Enquiries</p>
          <p class="mini ">hello@mentallyfriendly.com<br>
            Sydney — +61 (02) 9360 8667<br>
            Canberra — +61 431 277 652</p>
        </div>

      </section>
    </footer>

  </div>
</template>

<script>
import FixedAspect from '~/components/FixedAspect.vue'
import BackgroundGrid from '~/components/BackgroundGrid.vue'
import WorkBlock from '~/components/WorkBlock.vue'
import { jarallax, jarallaxVideo } from 'jarallax'

export default {
  components: {
    FixedAspect,
    BackgroundGrid,
    WorkBlock
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
          image: 'col-hero.jpg'
        },
        {
          lead: 'Improving early childhood learning.',
          main:
            'We built a service to create a safe environment for new primary school students.',
          client: 'the Dept. of Education.',
          image: 'tts-hero.jpg'
        },
        {
          lead: 'Building financial resiliance.',
          main:
            'We built a product to help Australians build financial resiliance.',
          client: 'a leading superannuation provider.',
          image: 'cfs-hero.jpg'
        },
        {
          lead: 'Mitigating domestic violence.',
          main:
            'We delivered strategic service design to recognise & respond to financial abuse. ',
          client: 'the ACT Government',
          image: 'fsh-hero.jpg'
        }
      ]
    }
  },

  methods: {
    onWaypoint(e) {
      // this.isVisible = isVisible
      console.log('waypoint', e)
    }
    // vidError(e) {
    //   console.log(e)
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    //   // @ts-ignore
    //   // this.$refs.videobackground.player.play()
    // },
    // vidReady(e) {
    //   console.log(e)
    //   // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    //   // @ts-ignore
    //   // this.$refs.videobackground.player.play()
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

#logo {
  span {
    display: block;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-weight: bold;
    padding-bottom: 1rem;
    font-size: 1.25rem;
  }
}

#header {
  padding-top: 1rem;
}

#main {
  min-height: 90vh;
}

#promo {
  background-color: #ff4873;
  position: relative;
}

#partners {
  padding-bottom: 2rem;
  #partner-list {
    columns: 1;

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

.service-block-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  position: relative;
  .copy {
    margin-top: 8rem;
  }
}

.service-block-image {
  margin-top: 50vh;
}

@media (min-width: $mid) {
  .scroll-lock-block-spacer {
    margin-bottom: 100vh;
  }

  .scroll-lock-block-overlap {
    position: relative;
    top: -100vh;
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
}

.prlx-img-wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

.side-prlx {
  margin-left: -25%;
  height: 100%;
}
</style>
