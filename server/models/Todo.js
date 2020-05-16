import mongoose from 'mongoose';

const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

export default mongoose.model('todo', TodoSchema);