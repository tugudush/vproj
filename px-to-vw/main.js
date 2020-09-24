var app = new Vue({
  el: '#app',
  data: {
    px: '',
    viewport: 1440,    
  },
  computed: {
    vw() {
      var px = parseFloat(this.px) || 0;
      var viewport = parseFloat(this.viewport) || 0;
      var vw = px/viewport*100;
      vw = vw.toFixed(4);

      return vw;
    } // end of vw()
  }, // end of computed
  methods: {
    copy() {
      var copyText = document.querySelector('#vw').innerHTML;
      console.log('copyText: ' + copyText);
    } // end of copyText()
  }, // end of methods
});