#! /usr/bin/env node
'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();
app
    .use(morgan('dev'))
    .use(express.static('public'))
    .listen(3000, () => {
        console.log('Listening on localhost:3000')
    });

// Sample api
app.get('/api/data', (req, res) => {
    res.json({
        text: 'sample text',
        label: 'label text'
    });
});