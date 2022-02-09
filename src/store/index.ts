// src/store/index.ts
import { createStore } from 'vuex'
import { ItodoItem } from '../type/index'

const todoList: Array<ItodoItem> = []

// state
const state = {
  todoList
}

// 创建一个新的 store 实例
const store = createStore({
  state,
  mutations: {
    // 改变state 往最后添加一个
    ADD_TODO(state, todo: ItodoItem) {
      if (todo?.title) {
        state.todoList.push(todo)
      }
    },
    // 改变state 删除一个
    REMOVE_TODO(state, id: number) {
      const index = state.todoList.findIndex((todo) => todo.id === id)
      if (index !== -1) {
        state.todoList.splice(index, 1)
      }
    },

    //改变state 更新指定的todo
    UPDATE_TODO_STATUS(state, todo: ItodoItem) {
      const index = state.todoList.findIndex((item) => item.id === todo.id)
      if (index !== -1) {
        state.todoList.splice(index, 1, todo)
      }
    },
    // 清空state
    CLEAR_TOFO(state){
        state.todoList = []
    }
  },
  actions: {
    // 添加todo
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo)
    },
    // 删除todo
    removeTodo({ commit }, todoId) {
      commit('REMOVE_TODO', todoId)
    },
    // 更新todo
    updateTodoStatus({ commit }, todo) {
      commit('UPDATE_TODO_STATUS', todo)
    },
    // 清空todo
    clearTodo({ commit }) {
        commit('CLEAR_TOFO')
    }
  }
})

export default store
