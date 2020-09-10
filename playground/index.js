var app = new Vue({
  el: '#app',
  data: {
    input_message: '',
    display_message: ''
  },
  watch: {
    input_message: function (new_input_message, old_input_message) {
      this.display_message = 'Typing...';
      this.delay_display_message();
    } // end of input_message()
  }, // end of watch,
  created: function () {
    this.delay_display_message = _.debounce(this.debounced_display_message, 500);
  }, // end of created()
  methods: {
    debounced_display_message: function () {
      this.display_message = this.input_message;
    } // end of debounced_display_message: function()
  } // end of methods
}) // end of app