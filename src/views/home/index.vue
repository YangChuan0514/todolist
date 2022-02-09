<template>
  <div>
    首页
    <el-button style="border: none;" @click="toTodoListPage()">todoList页面</el-button>
    <div>
      <p v-for="todo in doneTodos" :key="todo.id">
        <el-tag type="success" class="tasks-type">
          <span>{{ todo.id }}-</span>
          <span>{{ todo.title }}</span>
        </el-tag>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { ItodoItem } from '../../type/index'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const list = computed(() => store.state.todoList)
    const doneTodos = computed(() => list.value.filter((v: ItodoItem) => v.done))
    const toTodoListPage = () => {
      router.push({
          name:'TodoList'
      })
    }
    return {
      list,
      doneTodos,
      toTodoListPage,
    }
  }
})
</script>
<style lang="scss" scoped>
.tasks-type{
  display: flex;
  height: 30px;
  font-size: 16px;
  justify-content: space-between;
}
</style>
