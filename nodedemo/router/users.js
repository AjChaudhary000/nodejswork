const express = require('express')
const router = express.Router();
router.use(express.json());
router.get('/login', (req, res) =>{
    res.json({data:"hello"})
});
router.get('/reg', (req, res) => res.send('my reg page '));
module.exports = router;