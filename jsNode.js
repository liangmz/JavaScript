
var node = {
	element:'div',//节点名
	attrs:{//节点属性集合
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
			attrs:{
				id:'nodeId2',
				src:'http://url.img'
			}
		},
		{
			element:'button',
			attrs:{
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
	node , node
];

for(var item in node.attrs)
{
	var key = item;
	var value = node.attrs[key];
	console.log(key + ":" + value);
}

//构建dom结构
var jsNode = {
	/*对单个json对象*/
	createELementByJson:function(jsonObject){
		var root = document.createElement(jsonObject.element);
		for(var key in jsonObject.attrs){
			var key = key;
			var value = jsonObject.attrs[key];
			root.setAttribute(key,value);
		}
		if(jsonObject.innerText != undefined && jsonObject.innerText != ''){
			root.innerHTML = jsonObject.innerText;
		}
		var childrens = jsonObject.childrens;
		if(childrens != undefined && childrens.length != 0){
			for(var i=0 ;i < childrens.length ;i++){
				var childrenNode = this.createELementByJson(childrens[i]);
				root.appendChild(childrenNode);
			}
		}
		return root;
	},
	/*json对象数组*/
	createELementByJsonArray:function(jsonObjectArray){
		var domArray = new Array();
		for(var i=0 ;i < jsonObjectArray.length ;i++){
			var tempElement = this.createELementByJson(jsonObjectArray[i]);
			domArray.push(tempElement);
		}
		return domArray;
	}
};

//sample
jsNode.createELementByJson(node);



