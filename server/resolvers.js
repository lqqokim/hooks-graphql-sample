import Todo from './models/Todo';
export const resolvers = {
  Query: {
    todos() {
      return Todo.find();
    },
    todo(root, { _id }) {
      return Todo.findById(_id);
    }
  },
  Mutation: {
    createTodo(root, { input }) {
      return Todo.create(input)
    },
    updateTodo(root, { _id, input }) {
      return Todo.findOneAndUpdate({ _id }, input, { new: true });
    },
    deleteUser(root, { _id }) {
      return Todo.findOneAndDelete({ _id });
    }
  }
};        