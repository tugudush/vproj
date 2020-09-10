Vue.component('task-list', {
  template: `
    <ul>
      <task v-for="task in tasks">{{ task.description }}</task>
    </ul>`,
  data() {
    return {
      tasks: [
        {description: 'Go to the store', completed: true},
        {description: 'Finish screencast', completed: false},
        {description: 'Make donation', completed: false},
        {description: 'Clear inbox', completed: false},
        {description: 'Make dinner', completed: false},
        {description: 'Clean room', completed: true}
      ]
    }
  } // end of data()
});

Vue.component('task', {
  template: '<li><slot></slot></li>',
});

var app = new Vue({
  el: '#app',
});