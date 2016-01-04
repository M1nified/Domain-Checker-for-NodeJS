'use strict';
var http = require('http');
var fs = require('fs');

var check = function(args){
  // console.log(args);
  let promise = new Promise((resolve,reject)=>{
    // console.log(args);
    let host = args.host;
    let path = args.path || '/';
    let req = http.request({
      host,
      port : '80',
      path,
      method : 'GET',
      headers : {

      }
    },(response)=>{
      resolve(response);
    })
    req.on('error',(e)=>{
      reject('FAIL');
    })
    req.write('')
    req.end();
  })
  return promise;
}
var logresult = function(target,statusCode){
  fs.writeFile('score.txt',`${target}\t${statusCode}\r\n`,{
    flag : 'a'
  })
}

var targets = fs.readFileSync('targets.txt','utf8');
targets = targets.split('\n');
for(let target of targets){
  target = target.trim();
  if(target && target.length>0){
    (function(target){
      console.log(`TESTING: ${target}`);
      check({
        host : target
      }).then((response)=>{
        console.log('DONE');
        // console.log(response.headers);
        // console.log(response.statusCode);
        // var file = fs.openSync('response','w+')
        // let js = '';
        // for(let i in response){
        //   js += '\n'+i+':'+response[i];
        // }
        // fs.writeFileSync('response.txt',js,{
        //   flag : 'w+'
        // })
        logresult(target,response.statusCode)
      }).catch((err)=>{
        console.log('FAIL');
        // console.error('ERROR:',err);
        logresult(target,'FAIL')
      })
    }(target))
  }
}
// while(true){
//
// }
