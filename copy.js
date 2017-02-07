/*node 复制模块*/
module.exports.copy=function(fileName,copyFileName){
	var fs = require('fs');
	function copyFile(){
		fs.readFile(fileName,'utf-8',function(err,data){
			if(err){
				console.log('readFile error');
			}else{
				writeFile(data);
				return data;
			}
		});
	}
	function writeFile(data){
		fs.writeFile(copyFileName,data,'utf-8',function(err){
			if(err){
				throw err;
			}else{
				
			}
		});
	}
	copyFile();
}
