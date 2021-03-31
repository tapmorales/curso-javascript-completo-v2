const fs = require('fs')
const path = require('path')
const util = require('util');

const readdir = util.promisify(fs.readdir);
const lstat = util.promisify(fs.lstat);
const unlink = util.promisify(fs.unlink);
const rmdir = util.promisify(fs.rmdir);

const afs = fs.promises;

const _root = __dirname;

const deleteNodeModules = async (_path) => {	

	if(fs.existsSync(_path)){
		for (let file of await afs.readdir(_path)) {
		// fs.readdirSync(_path).forEach( function(file, index){
			
			let currPath = path.join(_path, file)
			
			if ((await afs.lstat(currPath)).isDirectory()){
				if(file === 'node_modules'){
                    console.log("deleteFolder: ", currPath)
					await deleteFolder(currPath)
				} else {
                    console.log("deleteNodeModules: ", currPath)
					await deleteNodeModules(currPath)
				}				
			} 
	    //})
		}
	}
}

const deleteFolder = async (_path) => {	
	if(fs.existsSync(_path)){
		for (let file of await afs.readdir(_path)) {
		//fs.readdirSync(_path).forEach( function(file, index){
			let currPath = path.join(_path, file)

			if ((await afs.lstat(currPath)).isDirectory()){
				await deleteFolder(currPath)
			} else {
				await afs.unlink(currPath)
			}
	    //})
		}

	    //typeof cb === 'function' && cb(_path)
	    //fs.rmdirSync(_path)
	    await afs.rmdir(_path);
	}
}



deleteNodeModules(_root)