var person={};
var manifest = {
	"data": { name:"", metrics:{ age:"" }},
	"init": function ($node, formRuntimeObj) {
		$node.html(
			'<div><input id="name" type="text" /></div>' +
			'<div><input id="age" type="number" /></div>'
		);
	},
	"ui":{
		"#name": { bind: "name" },
		"#age" : { bind: "metrics.age" }
	}
};
// Init $.my
$("#form").my(manifest, person);