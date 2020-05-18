import Todo from './models/Todo';
export const resolvers = {
  Query: {
    async todos() {
      return await Todo.find();
    },
    todo(root, { _id }) {
      return Todo.findById(_id);
    }
  },
  Mutation: {
    createTodo(root, { input }) {
      const todo = new Todo(input)


      return Todo.create(todo);
    },
    updateTodo(root, { _id, input }) {
      return Todo.findOneAndUpdate({ _id }, input, { new: true });
    },
    deleteTodo(root, { _id }) {
      return Todo.findOneAndDelete({ _id });
    }
  }
};        