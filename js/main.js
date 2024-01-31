const { createApp } = Vue

createApp({
  data() {
    return {
      activeSlide: 0,
      slides: [
        "./img/01.webp",
        "./img/02.webp",
        "./img/03.webp",
        "./img/04.webp",
        "./img/05.webp"
      ]
    }
  },

  methods: {
    prevClick() {
      if (this.activeSlide <= 0) {
        this.activeSlide = this.slides.length - 1;
      } else {
        this.activeSlide--;
      }
    },

    nextClick() {

      if (this.activeSlide >= this.slides.length - 1) {
        this.activeSlide = 0;
      }
      this.activeSlide++;
    },


    gotoSlide(index){
      this.activeSlide = index;
    }


  }


}).mount('#app')