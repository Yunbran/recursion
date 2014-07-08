// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentNode, index){

var list = [];
	if(currentNode == undefined)
	{
		currentNode = document.body;
	}

	// console.log("------------------" + "STARTING FUNCTION FOR: " + currentNode+ "------------------");
 // console.log(currentNode);
 if(currentNode.classList != undefined)
 {
 	if(currentNode.classList.contains(className))
 {

 list.push(currentNode);

  }
//  console.log("Contains: " +currentNode.classList.contains(className));
// console.log("Classlist: " + currentNode.classList);
// console.log("List: " + list);
}
else
{
// console.log(currentNode.classList);
}
// console.log("Child Nodes: " + currentNode.childNodes);
if(currentNode.hasChildNodes()){
var children = currentNode.childNodes;

 for (var i = 0; i < children.length; i++) {
 
 var tempStor = getElementsByClassName(className,children[i]);
if(tempStor.length >0)
{
for (var n = 0; n < tempStor.length; n++) {
 list.push(tempStor[n]);
 // console.log("***********************ADDED: " + tempStor[i]);
 // console.log("NEW LIST: " + list);
 // console.log("*********************************************************");

 }

}
   }

}
// console.log("------------------" + "END OF FUNCTION FOR: " + currentNode+ "------------------");

return list;




};
