<template>
  <div>
    <header id="header">
      <div class="center-col has-grid">
        <background-grid 
          class="grid-container center-col" 
          columns="xs-1"/>
        <div id="logo"/>
      </div>
    </header>

    <section 
      id="main" 
      class="center-col horizontal v-center">
      <div>
        <h1 class="h-padded m-half v-padded">Digital services have the power to change peoples lives and build a better future.</h1>
        <!-- <div class="h-padded s-half m-half">
          <p>We’re changing the name to better reflect our purpose — rapidly delivering products and services that build towards powerful visions of the future. </p>
          <p>While the name is changing, everything else remains the same. Same team. Same values. Same mission.</p>
          <p>The future isn’t something you wait for.</p>
          <p>The future is made today.</p>
          <p>Let’s go.</p>
        </div> -->
      </div>
    </section>

    <section 
      v-waypoint="{ active: true, callback: onWaypoint, options: {threshold: [1, 0]} }" 
      id="partners" 
      class="center-col has-grid horizontal">

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
      :reverse="i%2 === 1" />

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
          <h2>The future isn’t something you wait for. <br>The future is made today.</h2>
        </div>
      </section>

      <section 
        id="footerStuff" 
        class="center-col horizontal has-grid">
        <background-grid 
          :inset="true"
          class="grid-container center-col" 
          columns="xs-1 s-2 m-4"/>
        <div class="xs-full s-half m-quarter h-padded v-padded footer-col">
          <p class="mini no-margin-top">General Enquiries</p>
          <p class="mini ">hello@mentallyfriendly.com<br>
            Sydney — +61 (02) 9360 8667<br>
            Canberra — +61 431 277 652</p>
        </div>

        <div class="xs-full s-half m-quarter h-padded v-padded footer-col">
          <p class="mini no-margin-top">New Business</p>
          <p class="mini ">partnerships@mentallyfriendly.com<br>+61 (02) 9360 8667</p>
        </div>

        <div class="xs-full s-half m-quarter h-padded v-padded footer-col">
          <p class="mini no-margin-top">Future Friendly is a certified b-Corp.</p>
          <p class="mini ">We respect and honour Aboriginal and Torres Strait Islander Elders past, present and future.</p>
          <p class="mini">
            We acknowledge the stories, traditions and living cultures of Aboriginal and Torres Strait Islander peoples on this land and commit to building a brighter future together.
          </p>
        </div>

        <div class="xs-full s-half m-quarter h-padded v-padded footer-col">
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
          video: 'COL.mp4'
        },
        {
          lead: 'Improving early childhood learning.',
          main:
            'We built a service to create a safe environment for new primary school students.',
          client: 'the Dept. of Education.'
        },
        {
          lead: 'Building financial resiliance.',
          main:
            'We built a product to help Australians build financial resiliance.',
          client: 'a leading superannuation provider.'
        },
        {
          lead: 'Mitigating domestic violence.',
          main:
            'We delivered strategic service design to recognise & respond to financial abuse. ',
          client: 'the ACT Government',
          video: 'FSH.mp4'
        }
      ]
    }
  },

  methods: {
    onWaypoint(e) {
      // this.isVisible = isVisible
      console.log('waypoint', e)
    },
    vidError(e) {
      console.log(e)
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      // this.$refs.videobackground.player.play()
    },
    vidReady(e) {
      console.log(e)
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      // this.$refs.videobackground.player.play()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

#logo {
  height: 2rem;
  width: 4rem;
}

#header {
  padding-top: 1rem;
}

#main {
  min-height: 80vh;
  // padding-top: 8rem;
  // padding-bottom: 8rem;
}

#partners {
  padding-bottom: 2rem;
  margin-bottom: 8rem;
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
  background-color: #cccccc;

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
