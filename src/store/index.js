import { createStore } from 'vuex'

/* LocalStorageからStoreデータを取得する */
const savedLists = localStorage.getItem('trello-lists')

/* Storeを作成する */
const store = createStore({ // storeという名前でインスタンス化する
  
  state: { // 管理している各State
    lists: savedLists
      ? JSON.parse(savedLists) // savedListsにデータがあるときオブジェクト型に変換
      : [ // なければ以下デフォルトの配列
      // 1) Backlog
      {
        title: 'Backlog',
        cards: [
          {body: 'English'},
          {body: 'Mathematics'}
        ]
      },
      // 2) Todo
      {
        title: 'Todo',
        cards: [
          {body: 'Science'}
        ]
      },
      // 3) Doing
      {
        title: 'Doing',
        cards: []
      }
    ]
  },

  mutations: { // 変更をstoreに送信するためのもの
    addlist(state, payload) { // 引数1: 変更を加えるtargetステート、引数2: コミットで受け取るpayload
      state.lists.push({title: payload.title, cards:[]}) // stateのlists配列末尾にpayloadからtitleとcardをセットにして追加
    }
  },

  actions: { // ListAdd.vueで定義したaddlistメソッドをmutationsにコミットする
    addlsit(context, payload) {
      context.commit('addlist', payload)
    }
  },

  // modules: {
  // }
  getters: {

  }

})

/* storeにデータを保存する */
store.subscribe((mutation, state) => { // 上記mutation後に呼ばれる処理
  localStorage.setItem('trello-lists', JSON.stringify(state.lists)) // 引数1: キーを設定、引数2: 格納したいデータを文字列でセット
})


export default store
