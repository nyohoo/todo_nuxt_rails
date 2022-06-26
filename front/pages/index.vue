<template>
  <div>
    <AddTodo @submit="addTodo" />
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import axios from '@/plugins/axios';

export default {
  components: {
    TodoList,
    AddTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    async addTodo(title) {
      await axios.post('/v1/todos', { title });
      this.todos.push({
        title,
      });
    },
  },
};
</script>
