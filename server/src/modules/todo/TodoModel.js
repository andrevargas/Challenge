import mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

export const TodoModel = mongoose.model('Todo', TodoSchema);
