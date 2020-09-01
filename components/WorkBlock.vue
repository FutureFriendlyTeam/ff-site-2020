<template>

  <article

    :class="i%2 === 0 ? 'start': 'end'" 
    class="work-block xs-full m-three-quarters l-two-thirds border-left border-right v-margin-bottom-small">

    <a 
      href="https://good-design.org/"
      target="_blank" 
      class="wrapper-link">

      <section class="work-image h-padded v-margin-bottom-small">
        <fixed-aspect 
          :aspect="work.img.aspect" 
          class="scale-image-wrapper">
          <figure>
            <!--         
          <LazyVideoAsGIF 
            v-if="work.img.video"
            :poster="require(`~/assets/${work.img.src}`)"
            :src="require(`~/assets/video/${work.img.video}`)"
            class="video"/> -->
          
            <img 
              v-lazy ="require(`~/assets/${work.img.src}`)" 
              v-inview:class="['visible']" 
              class="scale-image">
          </figure>
        </fixed-aspect>
      </section>

      <section class="work-block-copy horizontal">
        <div 
          class="xs-full s-half h-padded border-left border-right work-block-copy-text">
          <h3 class="no-margin-top v-margin-bottom-big">{{ work.main }}</h3>
          <h3 
            id="link" 
            class="no-margin hover-accent">Case Study &#8594;</h3>
        </div>
      
        <aside id="mini-text">
          <p 
            id="mini-text-inner" 
            class="mini hover-accent">Lorem ipsum dolor sit amet.</p>
        </aside>
      </section>
    </a>
  </article>
</template>

<script>
import FixedAspect from '~/components/FixedAspect.vue'
import WipeIn from '~/components/WipeIn.vue'
export default {
  name: 'WorkBlock',
  components: {
    FixedAspect,
    WipeIn
  },
  props: {
    work: {
      type: Object,
      default: null
    },
    i: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables.scss';

.work-block {
  // margin-bottom: 8rem;

  @media (min-width: $mid) {
    margin-bottom: 1.5rem;
  }

  &:not(:first-child) {
    &.end {
      .work-block-copy-text {
        margin-left: auto;
      }
    }

    &.start {
      .work-block-copy-text {
        margin-right: auto;
      }
    }
  }

  &:last-child {
    margin-bottom: 0px;
  }

  &:hover {
    .hover-accent {
      color: $accent;
    }
  }
}

.work-block-copy {
  position: relative;
}

.work-block-copy-text {
  min-height: 18rem;
  // position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // padding-right: 4rem;
  // padding-bottom: 8rem;

  @media (min-width: $mid) {
    padding-right: 1.5rem;
  }
}

.video {
  width: 100%;
  height: 100%;
}

#mini-text {
  position: absolute;
  right: 1rem;
  bottom: 0.25rem;
  transform-origin: 0% 0%;
  width: 0px;
  height: 0px;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(-90deg);

  @media (min-width: $mid) {
    right: 1.5rem;
  }
}

.end {
  @media (min-width: $mid) {
    #mini-text {
      left: 1.5rem;
    }

    #mini-text-inner {
      transform: translate(0%, -50%);
    }
  }
}

#mini-text-inner {
  width: 8rem;
  height: auto;
  transform: translate(0%, -100%);
}

// #link{
//   position: ;
// }
</style>
