var app = new Vue({
  el: '#app',
  data : {
    isActive: true
  }
}) // end of app

var app2 = new Vue({
  el: '#app2',
  data: {
    isActive: true,
    hasError: true
  }
})

var app3 = new Vue({
  el: '#app3',
  data: {
    isActive: true,
    error: null
  }, // end of data:
  computed: {
    classObject: function() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error
      } // end of return
    } // end of assObject: function()
  } // end of computed:
}) // end of app3