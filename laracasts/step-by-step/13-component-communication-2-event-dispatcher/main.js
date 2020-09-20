window.Event = new Vue();

Vue.component('coupon', {
  template: `
    <input placeholder="Enter your coupon code" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied() {
      Event.$emit('applied');
    } // end of onCouponApplied()
  } // end of methods
}); // end of component coupon

var app = new Vue({
  el: '#root',
  data: {
    couponApplied: false
  }, // end of data
  created() {
    Event.$on('applied', () => alert('Handling it'));
  },
  
}); // end of app