// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
//console.log("-----------------------Starting stringify for: " + obj);
 //console.log(typeof obj);
 
  var result ='';
if(typeof obj === 'object')
{


	if(obj ==null)
{
result = 'null';
}
else if( Object.prototype.toString.call( obj ) === '[object Array]' ) {
    

result += '[';
for(var key in obj)
  {
  	 result += stringifyJSON(obj[key]);
  	 result += ",";
  }
  
  if(result.substring(result.length, result.length -1) == ",")
  	{
result = result.substring(0,result.length-1);
  	}
  result += ']';
}
else
{
	result += '{';
for(var key in obj)
   {if(key === "functions")
   	{

   	}
   	else if(key === "undefined")
   	{

   	}
   	else
   	{
   result += stringifyJSON(key);
  	 result += ':';
  	 result +=  stringifyJSON(obj[key]);
  	 result += ",";
  }
}
  
  if(result.substring(result.length, result.length -1) == ",")
  	{
result = result.substring(0,result.length-1);
  	}
  result += '}';
}
// if(obj =='')
// {
// result = '[]';
// }


}
else if(typeof obj === 'boolean')
{if(obj ==true)
{
	result ='true';
}
else
{
	result ='false';
}
}
else if(typeof obj === 'number')
{
result =obj.toString();
}
else if(typeof obj === 'string')
{
result = '"' +obj + '"';
}
//console.log("-------------ENDING stringify for: " + obj);

  return result;

};
