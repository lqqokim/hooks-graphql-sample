import Todo from './models/Todo';
export const resolvers = {
  Query: {
    async todos() {
      return await Todo.find();
    },
    todo(_, { _id }) {
      return Todo.findById(_id);
    }
  },
  Mutation: {
    createTodo(_, { input }) {
      return Todo.create(input);
    },
    updateTodo(_, { _id, input }) {
      return Todo.findOneAndUpdate({ _id }, input, { new: true });
    },
    deleteTodo(_, { _id }) {
      return Todo.findOneAndDelete({ _id });
    }
  }
};        