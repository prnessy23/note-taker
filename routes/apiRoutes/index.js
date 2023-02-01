const router =require('express').Router();
const { Server } = require('http');
const notesRoutes =require('./notesRoutes');

router.use("/notes",notesRoutes);

module.exports =router;