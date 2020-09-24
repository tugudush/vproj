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
      this.delayCopy();
      return vw;
    } // end of vw()
  }, // end of computed  
  methods: {
    delayCopy() {

    },
    onCopy(e) {
      console.log('copied: ' + e.text);
    },
    onError() {
      alert('Failed to copy to clipboard');
    }
  }, // end of methods
});