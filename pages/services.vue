<template>
  <div 
    id="page">

    <!-- <main-header/> -->

    <section 
      class="v-padding-top-mega v-padding-bottom-big">
      <div class="center-col">
        <h1 class="mega xs-full s-three-quarters no-margin">We define how products & services create impact today and in the future.</h1>
      </div>
    </section>

    <section>
      <div class="center-col">
        <div class="horizontal">

          <article class="border-block xs-full s-half m-half v-padding-bottom-mega v-margin-bottom">
            <h2 class="big v-margin-top-none v-margin-bottom">01. Service Strategy</h2>
            <future-img :aspect="'three-four'" class="v-margin-bottom"/>
            <p class="big">Define how products & services succeed today and in the future.</p>
            <ul class="body">
              <li>Proposition design</li>
              <li>Product innovation</li>
              <li>Service design</li>
              <li>Rapid prototyping & customer validation</li>
              <li>Business cases & funding</li>
              <li>Live trials & experimentation</li>
              <li>3 horizons roadmaps</li>
            </ul>
          </article>

          <article :class="valueFromMq({tiny:'', small:'', mid: 'v-padding-top-mega', big: 'v-padding-top-mega', max: 'v-padding-top-mega'})" class="border-block xs-full s-half m-half v-padding-bottom-mega v-margin-bottom">
            <h2 class="big v-margin-top-none v-margin-bottom">02. Delivery Support</h2>
            <future-img :aspect="'three-four'" class="v-margin-bottom"/>
            <p class="big">Work together to launch new services, and set internal teams up for success.</p>
            <ul class="body">
              <li>Team formation & acceleration</li>
              <li>Product management</li>
              <li>Product design</li>
              <li>Product engineering</li>
              <li>User testing</li>
              <li>MVP / First release delivery</li>
              <li>Product roadmaps</li>
            </ul>
          </article>

        </div>
      </div>
    </section>


    <section>
      <div class="center-col">
        <div class="horizontal reverse">

          <article class="xs-full s-two-thirds v-padding-right v-margin-bottom">
            <fixed-aspect :aspect="'four-three'">
              <div class="big-quote">
                <blockquote class="big">“The best thing about this whole process is that we’ve taken customer research, and then actually validated something tangible. It’s not just all talk, it’s not just high level stuff. The results have been really positive.”</blockquote>

                <p class="body quote-attribution v-margin-bottom-none">
                  — Jeremy Chee,<br> Director of Customer Strategy & Transformation,<br>  Ausgrid
                </p>
              </div>
            </fixed-aspect>
          </article>

          <div id="quote-image" class="h-padding flex self-end border-block v-margin-bottom">
            <future-img :aspect="'three-four'"/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="center-col">
        <div class="xs-full vertical between">

          <div class="xs-third gridbreaker-left v-margin-bottom">
            <future-img :aspect="'four-three'"/>
          </div>

          <div class="xs-half v-margin-bottom self-end">
            <future-img :aspect="'four-three'"/>
          </div>

        </div>
      </div>
    </section>


    <section>
      <div class="center-col">

        <article class="horizontal v-margin-bottom">
          <div class="xs-full s-half border-block v-padding-bottom-mega">
            <aside class="super v-margin-top-none v-margin-bottom-none">01.</aside>
          </div>
          <div class="xs-full s-half h-padding-none border-block horizontal v-padding-bottom-mega">
            <h1 class="big h-padding xs-full m-half v-margin-top-none">Makers not managers.</h1>
            <div class="h-padding xs-full m-half">
              <p class="body v-margin-top-none">Our most senior team members are all active practitioners,  and work full-time on projects.</p>
              <p class="body">Teams benefit from their deep domain expertise, and years of experience – driving immediate progress.</p>
            </div>
          </div>
        </article>



        <article class="horizontal v-margin-bottom">
          <div class="xs-full s-half border-block v-padding-bottom-mega">
            <aside class="super v-margin-top-none v-margin-bottom-none">02.</aside>
          </div>
          <div class="xs-full s-half h-padding-none border-block horizontal v-padding-bottom-mega">
            <h1 class="big h-padding xs-full m-half v-margin-top-none">Make it real, fast. </h1>
            <div class="h-padding xs-full m-half">
              <p class="body v-margin-top-none">The only way to build evidence in a solution is to make it and test it.</p>
              <p class="body">We build working prototypes in the first 2 weeks of a project, and test with at least 5 customers ever sprint.</p>
            </div>
          </div>
        </article>


        <article class="horizontal v-margin-bottom">
          <div class="xs-full s-half border-block v-padding-bottom-mega">
            <aside class="super v-margin-top-none v-margin-bottom-none">03.</aside>
          </div>
          <div class="xs-full s-half h-padding-none border-block horizontal v-padding-bottom-mega">
            <h1 class="big h-padding xs-full m-half v-margin-top-none">Accelerate your teams.</h1>
            <div class="h-padding xs-full m-half">
              <p class="body v-margin-top-none">We’ll work alongside your teams to deliver project outputs and up-skill along the way.</p>
              <p class="body">We record and teach what works with simple playbooks, so your teams can take it forward.</p>
            </div>
          </div>
        </article>





      </div>
    </section>

    <!-- 

    <section>
      <div class="center-col v-margin-bottom">
        <div class="horizontal border-right">
          <div class="xs-full s-three-quarters v-padding-right">
            <future-img :aspect="'four-three'"/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="center-col">
        <div class="horizontal">

          <div class="border-block xs-full s-half m-half vertical between v-margin-bottom">
            <div>
              <span class="super v-margin-top-none">2004 —</span>
            </div>

            <div class="xs-third self-end v-margin-bottom">
              <future-img :aspect="'square'"/>
            </div>

            <div class="xs-half gridbreaker-left v-margin-bottom">
              <future-img :aspect="'four-three'"/>
            </div>

            <div class="self-end">
              <span class="super v-margin-bottom-none">— 2020</span>
            </div>
          </div>

          <div class="border-block h-padding-none xs-full s-half m-half v-margin-bottom">

            <article class="xs-full m-half h-padding v-padding-bottom-mega">
              <h2 class="big v-margin-top-none v-margin-bottom">Founded in 2004.</h2>
              <p class="body">Over 15 years we have come to understand what we are good at and what we aren’t. When we commit to helping an organisation we bring all 15 years of that experience to making sure we add value from day 1.</p>
            </article>

            <article class="xs-full m-half h-padding v-padding-bottom-mega">
              <h2 class="big v-margin-top-none v-margin-bottom">Studios in Sydney and Canberra.</h2>
              <p class="body">While we work across Australia, we started in Sydney and felt so strongly about the Government and policy work we do that we opened a full time space in Canberra.  </p>
            </article>

            <article class="xs-full m-half h-padding v-padding-bottom-mega">
              <h2 class="big v-margin-top-none v-margin-bottom">B-Corp Certified.</h2>
              <p class="body">While we work across Australia, we started in Sydney and felt so strongly about the Government and policy work we do that we opened a full time space in Canberra.  </p>
            </article>

            <article class="xs-full m-half h-padding v-padding-bottom-mega">
              <h2 class="big v-margin-top-none v-margin-bottom">Independently and Australian owned.</h2>
              <p class="body">While we work across Australia, we started in Sydney and felt so strongly about the Government and policy work we do that we opened a full time space in Canberra.  </p>
            </article>

          </div>
        </div>
      </div>
    </section>


    <section>
      <div class="center-col">
        <div class="horizontal border-right">

          <article class="xs-full s-two-thirds v-padding-right v-margin-bottom">
            <fixed-aspect :aspect="'four-three'">
              <div class="big-quote">
                <blockquote class="big">“It's very rare you get external consultants who come in and not just understand your industry, but can teach you things about it. It makes your work very credible.”</blockquote>

                <p class="body quote-attribution v-margin-bottom-none">
                  — Kelly Fisher,<br>Branch Manager,<br>VET Market Information
                </p>
              </div>
            </fixed-aspect>
          </article>

          <div class="h-padding flex self-end v-margin-bottom">
            <future-img :aspect="'square'"/>
          </div>
        </div>
      </div>
    </section>


    <section>
      <div class="center-col v-margin-bottom">
        <div class="horizontal">
          <div class="border-block xs-full s-half m-half"/>
          <article class="border-block h-padding-none xs-full s-half m-half v-padding-bottom-mega">
            <h2 class="v-margin-top-none big h-padding">Our team</h2>

            <div class="horizontal h-padding-left">

              <div v-for="(portrait, i) in [...Array(30)]" :key="`${i}-portrait`" class="xs-third h-padding-right v-margin-bottom">
                <future-img :aspect="'square'"/>
              </div>
            </div>

          </article>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import FutureImg from '~/components/FutureImg.vue'
import FixedAspect from '~/components/FixedAspect.vue'

export default {
  components: {
    FutureImg,
    FixedAspect
  },
  data() {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/borders.scss';

#quote-image {
  @media (min-width: $small) {
    &:after {
      display: none;
    }
  }
}
</style>
