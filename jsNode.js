
var demoNode = {
	element:'div',//节点名
	attributes:{//节点属性集合
		id:'nodeId',
		name:'nodeName',
		style:'margin: 20px 0 0 0;',
		"data-url":'dataurl'
	},
	innerText:'',//innerHTML
	childrens://孩子节点集合
	[
		{
			element:'img',
			attributes:{
				id:'nodeId2',
				src:'http://url.img'
			}
		},
		{
			element:'button',
			attributes:{
				type:'submit'
			},
			innerText:'Submit',
			childrens:[
				{
					element:'span'
				}
			]
		}
	]
};

var nodes = [
	demoNode , demoNode
];

for(var item in node.attributes)
{
	var key = item;
	var value = node.attributes[key];
	console.log(key + ":" + value);
}

//构建dom结构
var jsNode = {
	//根据指定格式的json创建dom节点
	createELementByJson : function (jsonObject) {
		var root = document.createElement(jsonObject.element);
		for (var key in jsonObject.attributes) {
			var key = key;
			var value = jsonObject.attributes[key];
			if(value == undefined){
				continue;
			}
			root.setAttribute(key, value);
		}
		if (jsonObject.innerText != undefined && jsonObject.innerText != '') {
			root.innerHTML = jsonObject.innerText;
		}
		var childrens = jsonObject.childrens;
		if (childrens != undefined && childrens.length != 0) {
			root.appendChild(this.createDocumentFragmentByJsonArray(childrens));
		}
		return root;
	},
	//根据指定格式的json数组创建dom文件碎片节点数组
	createDocumentFragmentByJsonArray : function (jsonObjectArray) {
		var domcumentFragment = document.createDocumentFragment();
		for (var i = 0; i < jsonObjectArray.length; i++) {
			var tempElement = this.createELementByJson(jsonObjectArray[i]);
			domcumentFragment.appendChild(tempElement);
		}
		return domcumentFragment;
	},
	//根据指定格式json数组创建dom节点数组
	createElementsByJsonArray : function (jsonObjectArray) {
		var domArray = new Array();
		for (var i = 0; i < jsonObjectArray.length; i++) {
			var tempElement = this.createELementByJson(jsonObjectArray[i]);
			domArray.push(tempElement);
		}
		return domArray;
	}
};


//sample
jsNode.createELementByJson(demoNode);



