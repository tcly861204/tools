/**
 * Created by Administrator on 2017/2/6.
 */
var projectData = {
    'name':'webapp',
    'fileData':[
        {
            'name' : 'js',
            'type' : 'dir'
        },
        {
            'name' : 'css',
            'type' : 'dir'
        },
        {
            'name' : 'images',
            'type' : 'dir'
        },
        {
            'name' : 'index.html',
            'type' : 'file',
            'content' : '<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title>Title</title>\n</head>\n<body>\n</body>\n</html>'
        }
    ]
};
var fs = require('fs');
if(projectData.name){
    fs.mkdirSync(projectData.name);
    var fileData = projectData.fileData;
    if(fileData && fileData.forEach){
        fileData.forEach(function(f){
            f.path = projectData.name+'/'+f.name;
            f.content = f.content || '';
            switch(f.type){
                case 'dir':
                    fs.mkdirSync(f.path);
                    break;
                case 'file':
                    fs.writeFileSync(f.path,f.content,{encoding:'utf8'});
                    break;
                default :
                    break;
            }
        });
    }
}
