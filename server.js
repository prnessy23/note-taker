const express = require('express');

const PORT = process.env.PORT || 3001;
const app =express();
const apiRoutes =require('./routes/htmlRoutes');

// parse urlencoded and json
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
//  use these api routes
app.use('/api, apiRoutes');
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Api server now on port ${PORT}!`);

});