<template>
  <header class="studio_plus_banner">
    <span class="studio_plus_banner-l">We’re becoming EY Studio+</span>
    <span class="studio_plus_banner-m">Everything you love about EY Future Friendly, at a global scale.</span>
    <a class="studio_plus_banner-r" href="https://studio.ey.com" target="_blank">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25 14.25H3.75V3.75H9V2.25H3.75C2.9175 2.25 2.25 2.925 2.25 3.75V14.25C2.25 15.075 2.9175 15.75 3.75 15.75H14.25C15.075 15.75 15.75 15.075 15.75 14.25V9H14.25V14.25ZM10.5 2.25V3.75H13.1925L5.82 11.1225L6.8775 12.18L14.25 4.8075V7.5H15.75V2.25H10.5Z" fill="white"/>
      </svg>
      Explore EY Studio+
    </a>
  </header>
</template>

<script>
export default {
  name: 'StudioPlusBanner'
}
</script>

<style scoped>
/* style reset for demo */
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* banner styles */
header.studio_plus_banner {
  background: #1a1a24;
  height: 3.5rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: EYInterstate, Noto Sans, Arial, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell,
    Helvetica Neue, Liberation Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-weight: 300;
  font-size: 0.875rem;
  position: relative;
}

header.studio_plus_banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    #ffe600 0%,
    #ffe600 25%,
    #b432ff 65%,
    #4696ff 90%,
    #4690ff 100%
  );
}

.studio_plus_banner-r {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: inherit;
}
.studio_plus_banner-r svg {
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.studio_plus_banner-r:hover svg {
  transform: translateX(-3px);
}

@media (max-width: 50rem) {
  header.studio_plus_banner {
    height: auto;
    flex-wrap: wrap;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    gap: 4px;
    justify-content: center;
    align-items: center;
  }

  .studio_plus_banner-m {
    flex-grow: 4;
    text-align: center;
  }

  .studio_plus_banner-l,
  .studio_plus_banner-r {
    display: flex;
    flex-grow: 4;
    justify-content: center;
  }
}
</style>
