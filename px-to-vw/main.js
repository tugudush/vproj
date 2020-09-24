var app = new Vue({
  el: '#app',
  data: {
    px: '',
    viewport: '',        
  },
  computed: {
    vw() {      
      var px = parseFloat(this.px) || 0;
      var viewport = parseFloat(this.viewport) || 0;
      var vw = px/viewport*100;
      vw = vw.toFixed(4);
      
      if (isNaN(vw) || !isFinite(vw)) {
        vw = '';
      }
      
      return vw + 'vw';
    } // end of vw()
  }, // end of computed 
  methods: {   
    onCopy(e) {
      console.log('copied: ' + e.text);
    },
    onError() {
      alert('Failed to copy to clipboard');
    }

  }, // end of methods
});