var express = require('express');
var bodyparser = require('body-parser');
const extractFrames = require('ffmpeg-extract-frames');

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

var app = express();

app.use(bodyparser.urlencoded({
    extended: true
  }));

app.use(bodyparser.json());

app.listen(8080,()=>console.log("Express Server Started"));

app.get('/api',(req,res)=>{

	res.sendStatus(200);
});

const video2Frames = async function(){
    await extractFrames({
        input: 'footages/footage1.mov',
        output: 'out/frame-%d.png'
      })
}

app.get('/api/frame',(req,res)=>{

    video2Frames();
      res.sendStatus(200)
});


