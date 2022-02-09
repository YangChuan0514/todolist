<template>
  <div>
    <h1>TodoList</h1>
    <div class="add-content">
      <el-input v-model="title" placeholder="请输入todolist内容" @keyup.enter="handleAdd" />
      <el-button type="primary" @click="handleAdd">新增</el-button>
    </div>
    <div>
      <p>计划任务</p>
      <p v-for="undoTodo in undoTodos" :key="undoTodo.id" class="tasks-type">
        <el-tag type="primary" closable @close="handleRemove(undoTodo.id)" class="task">
          <span>{{ undoTodo.id }}-</span>
          <span>{{ undoTodo.title }}</span>
        </el-tag>
         <el-button type="primary" @click="handleUpdate(undoTodo)">完成</el-button>
      </p>
    </div>
    <div>
      <p><span>完成任务</span></p>
      <p v-for="doneTodo in doneTodos" :key="doneTodo.id">
        <el-tag type="success" @close="handleRemove(doneTodo.id)" closable class="tasks-type">
          <span>{{ doneTodo.id }}-</span>
          <span>{{ doneTodo.title }}</span>
        </el-tag>
      </p>
    </div>
    <p class="tasks-type">
        <el-button type="primary" @click="goBack()">回到首页</el-button>
        <el-button type="primary" @click="handleClear()">清空所有任务</el-button>
    </p>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ItodoItem } from '../../type/index'
export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const list = computed(() => store.state.todoList)
    const undoTodos = computed(() => list.value.filter((v: ItodoItem) => !v.done))
    const doneTodos = computed(() => list.value.filter((v: ItodoItem) => v.done))
    const state = reactive({
      title: '',
      dialogVisible: false
    })
    // 添加todo
    const handleAdd = () => {
      const { title } = state
      if (title) {
        const endTodo = list.value[list.value.length - 1]
        const id = endTodo?.id || 0
        store.dispatch('addTodo', { title, id: id + 1 })
        state.title = ''
      }
    }
    // 删除todo
    const handleRemove = (id: number) => {
      store.dispatch('removeTodo', id)
    }
    // 修改todo
    const handleUpdate = (todo: ItodoItem) => {
      todo.done = true;
      store.dispatch('updateTodoStatus',  todo)
    }
    const handleClear = () => {
      store.dispatch('clearTodo')
    }
    const goBack = () => {
      router.push({
          name:'Home'
      })
    }
    return {
      ...toRefs(state),
      handleAdd,
      handleRemove,
      handleUpdate,
      handleClear,
      goBack,
      undoTodos,
      doneTodos
    }
  },
})
</script>
<style lang="scss" scoped>
.add-content{
  display: flex;
}
.tasks-type{
  display: flex;
  height: 30px;
  font-size: 16px;
  justify-content: space-between;
}
.task{
  flex: 1;
  justify-content: space-between;
  height: 32px;
}
p{
  height: 30px;
}
</style>
