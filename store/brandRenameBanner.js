export const state = () => ({
  isBannerVisible: true,
  isFromMfReferrer: false,
})

export const mutations = {
  toggleBannerState (state) {
    state.isBannerVisible = !state.isBannerVisible;
  },
  setIsFromMfReferrer (state, value) {
    state.isFromMfReferrer = value
  },

}

export const getters = {
  isBannerVisible (state) {
    return state.isFromMfReferrer && state.isBannerVisible;
  },
  isFromMfReferrer (state) {
    return state.isFromMfReferrer;
  }
}
