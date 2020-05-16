import express from 'express';
const router = express.Router();

router.get('/', (req, res) => res.json({data:'this is index.'}));

module.exports = router