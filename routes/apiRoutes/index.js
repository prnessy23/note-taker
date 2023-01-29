const router =require('express').Router();
const notesRouter =require('./notesRoutes');

router.use(notesRoutes);

module.exports =router;