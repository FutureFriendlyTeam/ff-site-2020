<template>
  <div 
    id="page" 
    :style="{backgroundColor: backgroundColor}">
    <main-header/>

    <section 
      v-observe-visibility="{
        callback: changeBackground,
        intersection: {
          rootMargin: '-50% 0px -50% 0px'
        },
      }"
      id="hero"
      data-enter-background="#FFF" 
      class="center-col horizontal v-center">
      <div 
        class="s-three-quarters m-two-thirds v-margin-mega">
        <h1 class="no-margin indent">Digital services have the power to change lives and build a better future.</h1>
      </div>

      <!-- <img 
        v-lazy ="require(`~/assets/arrow_loop.gif`)" 
        id="arrow"> -->
    </section>


    <!-- <section 
      v-observe-visibility="{
        callback: changeBackground,
        intersection: {
          rootMargin: '-50% 0px -50% 0px'
        },
      }"
      id="partners" 
      class="v-margin-mega"
      data-enter-background="#FFDAE3" 
    >

      <div class="center-col horizontal has-grid v-padded-bottom-big">
        <background-grid 
          class="grid-container center-col" 
          columns="xs-2 s-3 m-4"/>
        <div class="xs-half s-third m-quarter h-padded">
          <h2 class="no-margin">Client partners</h2>
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
      </div>
    </section> -->





    <section 
      class="center-col horizontal v-margin-small" >
      <work-block
        v-observe-visibility="{
          callback: changeBackground,
          intersection: {
            rootMargin: '-50% 0px -50% 0px'
          },
        }"
        v-for="(work, i) in caseStudies"
        :data-enter-background="work.color" 
        :key="`${i}-caseStudies`" 
        :work="work" 
        :i="i"
        :class="[i%2 === 0 ? 'start': 'end']"
        class="work-row" />
    </section>





    <section 
      v-observe-visibility="{
        callback: changeBackground,
        intersection: {
          rootMargin: '-50% 0px -50% 0px'
        },
      }"
      id="services" 
      data-enter-background="#FFF" 
      class="center-col v-margin-mega">
      <div 
        class="s-three-quarters m-two-thirds v-margin-mega" 
      >
        <h1>We define multi-year digital strategies, and support you to your first release.</h1>
      </div>

      <div class="border-left border-right">

        <div 
          id="strategic-design" 
          class="horizontal border-left service-row v-margin-bottom-small">
          <div class="xs-full m-two-thirds service-image border-left border-right">
            <div id="strategic-design-image">
              <div 
                id="strategic-design-image-1"
                class="h-padded flex" >

                <future-img 
                  :src="require(`~/assets/strategic-design.png`)" 
                  :scale="true" 
                  aspect="four-three"/>
              </div>

              <div 
                id="strategic-design-image-2"
                class="xs-half h-padded">
                <image-grid :images="['process-1.png','process-2.png','process-3.png','blank','blank','process-4.png','process-5.png', 'process-6.png']"/>
              </div>
            </div>
          </div>

          <div class="xs-full s-two-thirds m-third h-padded border-right service-copy v-padded-bottom-big">
            <h3 class="no-margin-top">Digital service strategy — define how digital products succeed today, tomorrow, and in the future.</h3>
            <ol class="body no-margin">
              <li>Proposition design </li>
              <li>Product innovation.</li>
              <li>Service design.</li>
              <li>Rapid prototyping & customer validation.</li>
              <li>Business cases & funding.</li>
              <li>Live trials & experimentation.</li>
              <li>3 horizons roadmaps.</li>
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
  
                <future-img 
                  :src="require(`~/assets/product-delivery.png`)" 
                  :scale="true" 
                  aspect="four-three"/>

              </div>
            </div>
          
          </div>

          <div class="xs-full s-two-thirds m-third h-padded border-left service-copy v-padded-bottom-big">
            <h3 class="no-margin-top">Delivery support — work together to launch new digital products, and set internal teams up for success.</h3>
            <ol class="body no-margin">
              <li>Team formation & acceleration.</li>
              <li>Product management.</li>
              <li>Product Design.</li>
              <li>Product engineering.</li>
              <li>MVP / First release delivery.</li>
              <li>Product roadmaps.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>



    <section 
      v-observe-visibility="{
        callback: changeBackground,
        intersection: {
          rootMargin: '-50% 0px -50% 0px'
        },
      }"
      id="partners" 
      class="v-margin-mega"
      data-enter-background="#FFDAE3" 
    >

      <div class="center-col horizontal has-grid v-padded-bottom-big">
        <background-grid 
          class="grid-container center-col" 
          columns="xs-2 s-3 m-4"/>
        <div class="xs-half s-third m-quarter h-padded">
          <h3 class="no-margin">Client partners</h3>
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
      </div>
    </section>



    <main-footer 
      v-observe-visibility="{
        callback: changeBackground,
        intersection: {
          rootMargin: '-50% 0px -50% 0px'
        },
      }" 
      data-enter-background="#CDCCC4"/>

  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'
import MainFooter from '~/components/MainFooter.vue'
import FutureImg from '~/components/FutureImg.vue'
import BackgroundGrid from '~/components/BackgroundGrid.vue'
import WorkBlock from '~/components/WorkBlock.vue'
import ImageGrid from '~/components/ImageGrid.vue'

export default {
  components: {
    MainHeader,
    FutureImg,
    BackgroundGrid,
    WorkBlock,
    ImageGrid,
    MainFooter
  },
  data() {
    return {
      backgroundColor: '#ffffff',
      partners: [
        'ABC',
        'ASIC',
        'Ausgrid',
        'IAG',
        'Dept. of Education',
        'Dept. of Premier & Cabinet',
        'Dept. of Planning, Industry & Environment',
        'Dept. of Health',
        'Public Service Commission',
        'ACT Government',
        'Tasmanian Government',
        'Russell Investments',
        'Colonial First State',
        'Frasers Property',
        'SBS',
        'Service NSW',
        'National Film & Sound Archives'
      ],
      caseStudies: [
        {
          main:
            'With Service NSW we delivered a digital service to access government benefits – giving $3 billion back to NSW residents.',
          client: 'Service NSW.',
          img: {
            src: 'col-hero.jpg',
            aspect: 'four-three'
          },
          color: '#ECDFD8',
          link:
            'https://awards.good-design.org/gallery/mGNXVWjB/mkWPRlVZ?search=0319cbe7306fc0a3-1',
          badgeImg: {
            src: 'gda.png',
            alt: 'Good Design Award Winner Logo'
          }
        },
        {
          lead: 'Building financial resiliance.',
          main:
            'With Colonial First State we defined a digital strategy to help Australians build financial resiliance.',
          client: 'a leading superannuation provider.',
          img: {
            src: 'cfs-hero.jpg',
            aspect: 'four-three',
            alt: 'Foo'
          },
          color: '#DDEEEF',
          link:
            'https://awards.good-design.org/gallery/mGNXVWjB/mkWPRlVZ?search=0319cbe7306fc0a3-1',
          badgeImg: {
            src: 'gda.png',
            alt: 'Good Design Award Winner Logo'
          }
        },
        {
          lead: 'Mitigating domestic violence.',
          main:
            'With the ACT Government we designed a service to recognise & respond to financial abuse. ',
          client: 'the ACT Government',
          img: {
            src: 'fsh-hero.jpg',
            video: 'fsh-hero.mp4',
            aspect: 'four-three',
            alt: 'Foo'
          },
          color: '#DFE3D6',
          link:
            'https://awards.good-design.org/gallery/mGNXVWjB/mkWPRlVZ?search=0319cbe7306fc0a3-1',
          badgeImg: {
            src: 'gda.png',
            alt: 'Good Design Award Winner Logo'
          }
        },

        {
          lead: 'Improving early childhood learning.',
          main:
            'With the Department of Education, we built a digital service to create a safe environment for new primary school students.',
          client: 'the Dept. of Education.',
          img: {
            src: 'tts-hero.jpg',
            aspect: 'four-three',
            alt: 'Foo'
          },
          color: '#EEE8F3',
          link:
            'https://awards.good-design.org/gallery/mGNXVWjB/mkWPRlVZ?search=0319cbe7306fc0a3-1',
          badgeImg: {
            src: 'gda.png',
            alt: 'Good Design Award Winner Logo'
          }
        }
      ]
    }
  },

  methods: {
    changeBackground(visible, el) {
      if (visible) {
        this.backgroundColor = el.target.dataset.enterBackground
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';

#page {
  transition: background-color 600ms ease;
}

#hero {
  padding-top: 4rem;
  min-height: 80vh;
  overflow: hidden;

  #arrow {
    position: absolute;
    bottom: 0%;
    left: 50%;
    width: 320px;
    height: auto;
    transform: translate3d(-50%, 0, 0);
    mix-blend-mode: multiply;
    opacity: 0.5;
  }
}

#partners {
  .partner {
    margin-bottom: 1rem;
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
  .service-image {
    margin-bottom: 1.5rem;

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
  }

  #strategic-design-image-2 {
    margin-left: 50%;
    margin-top: 2rem;
    @media (min-width: $mid) {
      transform: translate3d(0, 33.33%, 0);
    }
    mix-blend-mode: multiply;
  }
}
</style>
