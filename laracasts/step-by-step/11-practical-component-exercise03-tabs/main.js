Vue.component('tabs', {
  template: `
  <div class="tabs-wrap">

    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div><!--/.tabs-->

    <div class="tabs-details">
      <slot></slot>
    </div><!--.tabs-details-->

  </div><!--/.tabs-wrap-->
  `,

  data() {
    return {
      tabs: []
    }
  }, // end of data()

  created() {
    this.tabs = this.$children
  }, // end of created

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name)
      })
    }
  }, // end of methods
}) // end of component tabs

Vue.component('tab', { 
  props: {
    name: { required: true },
    selected: { default: false }
  },

  template: `
    <div v-show="isActive"><slot></slot></div>
  `,

  data() {
    return {
      isActive: false
    }
  }, // end of data()

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  }, // end of computed

  mounted() {
    this.isActive = this.selected;
  },

}) // end of component tab

var app = new Vue({
  el: '#root'
})