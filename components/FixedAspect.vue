<template>
  <div :class="[aspect, aspect ? 'fixed-aspect' : '' ]" class="aspect-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FixedAspect',
  props: {
    aspect: {
      type: String,
      default: 'square'
    }
  }
}
</script>

<style scoped lang="scss">
.aspect-wrapper {
  position: relative;
}

@mixin aspect-ratio($width, $height) {
  &:before {
    content: '';
    display: block;
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: ($height / $width) * 100%;
  }

  &:after {
    content: '';
    display: table;
    clear: both;
  }
}

.fixed-aspect.sixteen-nine {
  @include aspect-ratio(16, 9);
}

.fixed-aspect.four-three {
  @include aspect-ratio(4, 3);
}

.fixed-aspect.three-four {
  @include aspect-ratio(3, 4);
}

.fixed-aspect.square {
  @include aspect-ratio(1, 1);
}
</style>
