var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
  // This callback will be called when `vm.a` changes
  console.log('a is being changed');
  console.log('oldValue: ' + oldValue);
  console.log('newValue: ' + newValue);
})

new Vue({
  data: {
    b: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('b is: ' + this.b)
  }
})
// => "a is: 1"