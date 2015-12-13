var express = require('express');
var url = require('url');
var superagent = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');

var targetUrl = 'http://www.baidu.com/';
superagent.get(targetUrl)
    .end(function(err, res){
        console.log(res);
    });