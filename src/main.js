import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/styles.css'


// Vue.config.productionTip = false; <-- v3ではエラー出る

createApp(App).use(store).mount('#app')

// 下の書き方は古い。
// new Vue({
//   store,
//   render: h => h(App)
// }).$mount('#app')

// フロントでもテスト
// UnitTest 関数単位で細かいテスト
// E2E(end to end) ユーザー体験 Cypress!!!
// git -> 常識

