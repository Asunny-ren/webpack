require('./world.js')
require('style-loader!css-loader!./a.css')
//require('./a.css')
//webpack hello.js hello.bundle.js -module-bind 'css=style-loader!css-loader'

function hello(str) {
	alert(str)
}

hello('hello world!')