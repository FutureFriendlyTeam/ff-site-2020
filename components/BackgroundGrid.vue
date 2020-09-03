<template>
  <div class="grid-wrapper">
    <div 
      
      v-for="i in lineCount" 
      :key="i"
      :class="[inset ? 'inset' : '' ]" 
      class="grid-line"/>
  </div>
</template>

<script>
export default {
  name: 'FixedAspect',
  props: {
    columns: {
      type: String,
      default: 'xs-6'
    },
    inset: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    lineCount() {
      const order = ['xs', 's', 'm', 'l']
      const breakpoints = {
        xs: 0,
        s: 639,
        m: 959,
        l: 1199
      }

      let currBreakpoint = 'xs'
      for (const [key, value] of Object.entries(breakpoints)) {
        if (this.windowWidth > value) {
          currBreakpoint = key
        }
      }
      // console.log('current breakpoint is', currBreakpoint)

      const definitionParts = this.columns.split(' ')

      const colDefinitions = definitionParts.reduce((acc, curr) => {
        const currParts = curr.split('-')
        acc[currParts[0]] = parseInt(currParts[1])
        return acc
      }, {})

      //

      Object.keys(colDefinitions).forEach(key => {
        const index = Object.keys(breakpoints).indexOf(key)
        const value = colDefinitions[key]

        // console.log(order[index], value)

        for (let i = index - 1; i >= 0; i--) {
          if (colDefinitions[order[i]]) {
            break
          } else {
            colDefinitions[order[i]] = value
          }
        }

        for (let i = index + 1; i < order.length; i++) {
          if (colDefinitions[order[i]]) {
            break
          } else {
            colDefinitions[order[i]] = value
          }
        }
      })

      // console.log(colDefinitions)

      return colDefinitions[currBreakpoint] + 1
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables.scss';
.grid-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // margin-right: -1px;
}

.grid-line {
  width: 1px;
  background-color: #272727;
}
</style>
