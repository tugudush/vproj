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

var app4 = new Vue({
  el: '#app4',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}) // end of app4

var app5 = new Vue({
  el: '#app5',
  data: {
    isActive: true,
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}) // end of app5

Vue.component('my-component', {
  template: '<p class="foo bar">Example 6 - With Components</p>'
})

var app6 = new Vue({
  el: '#app6'
})

var app7 = new Vue({
  el: '#app7',
  data: {
    activeColor: 'red',
    fontSize: 30
  }
}) // end of app7

var app7b = new Vue({
  el: '#app7b',
  data: {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
}) // end of app7b

var app8 = new Vue({
  el: '#app8',
  data: {
    baseStyles: {
      'font-style': 'italic',
      'font-size': '24px',
      color: '#333'
    },
    overridingStyles: {
      fontSize: '60px'
    }
  }  
}) // end of app8