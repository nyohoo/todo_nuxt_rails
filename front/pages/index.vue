<template>
  <div>
    <AddTodo @submit="addTodo" />
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';

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
    addTodo(title) {
      this.todos.push({
        title,
      });
    },
  },
};
</script>
