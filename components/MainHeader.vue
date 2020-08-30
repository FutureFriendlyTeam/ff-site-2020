<template>
  <header 
    id="header" 
    class="v-padded-small">
    <div class="center-col">
      <div 
        id="logo" 
        class="horizontal border-right">
        <span class="border-left">Future</span>
        <span class="border-left border-right">Friendly</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>


<style lang="scss" scoped>
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
</style>
