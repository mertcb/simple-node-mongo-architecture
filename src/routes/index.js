'use strict';

import express from 'express';

// set up router
const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).send({
    success: {
      message: "you've been connected successfully!!"
    }
  });
});

export default router;
