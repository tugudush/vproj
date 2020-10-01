Vue.component('coupon', {
  props: ['code'],

  template: `
    <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
  `,

  data() {
    return {
      invalids: ['ALLFREE', 'SOMETHINGELSE']
    }
  },

  methods: {

    updateCode(code) {

      // validation
      if (this.invalids.includes(code)) {
        alert('This coupon is no longer valid. Sorry!');
        this.$refs.input.value = ''
        return;
      }

      this.$emit('input', code);
    } // end of updateCode(code),

  }, // end of methods

});

var app = new Vue({
  el: '#app',
  data: {
    coupon: 'FREEBIE',
  }
});