let source  = {
  user: {
    name: 'John doe'
  }
}

var app1 = new Vue({
  el: '#app1',
  data: source
})

var app2 = new Vue({
  el: '#app2',
  data: source
})