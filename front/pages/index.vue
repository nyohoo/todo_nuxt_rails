<template>
  <div v-if="user">
    <p>名前: {{user.name}}</p>
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
  computed: {
    user() {
      return this.$store.state.auth.currentUser;
    }
  },
  created() {
    console.log("API_KEY:", process.env.API_KEY);
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
