'use strict';
import { Schema } from 'mongoose';

const exampleSchema = new Schema(
  {
    example: {
      type: Schema.Types.ObjectId,
      ref: 'example',
      required: true
    }
  },
  { collection: 'example', timestamps: true }
);

export default exampleSchema;
