import mongoose from 'mongoose';

import exampleSchema from '../schema/exampleSchema';

const Example = mongoose.model('Example', exampleSchema);

export default Example;
