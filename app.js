const express = require('express');
const app = express();
const path = require('path');

// Utility Variables
const port = process.env.PORT || 8000;
const viewpath = path.join(__dirname, '/templateFiles');
const staticpath = path.join(__dirname, 'staticFiles');

// Express related work
app.use("/", express.static(staticpath));

// HBS related work
app.set('view engine', 'hbs');
app.set('views', viewpath);

// End points
app.get('/', (req, res) => {
    res.status(200).render('base.hbs');
});

// Starting The Server 
app.listen(port, () => {
    console.log(`Application started successfully on port ${port}`);
});