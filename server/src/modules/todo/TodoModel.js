import mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: String,
      required: false,
      default: false,
    },
    date: {
      type: Date,
      required: false,
      default: new Date(),
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
