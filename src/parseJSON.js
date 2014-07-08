// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
//  function SecondIndexOf(Val, Str)  
//  {  
//    var Fst = Str.indexOf(Val);  
//    var Snd = Str.indexOf(Val, Fst+1);
//    return Snd; 

//  }  
// console.log("---------------------------Starting PARSE for: " + json);
// json = json.trim();
//  console.log(json);
//  // var first = json.lastIndexOf();
//  // var last = json.lastIndexOf();

//  if(json.substring(0,1) == '"')
//  {
// var first = json.indexOf('"');
//  var last = json.lastIndexOf('"');

//  }
//  else if(json.substring(0,1) == '[')
//  {

//  }
//  else if(json.substring(0,1) == '{')
//  {
// var temp = {};

// var newstring = json.substring(json.indexOf('{'), json.lastIndexOf('}'));




// return temp;

//  }
// }
// else
// {

// }
// console.log("---------------------------Starting PARSE for: " + json);
// json = json.trim();
//  console.log(json);
//  // var first = json.lastIndexOf();
//  // var last = json.lastIndexOf();

//  if(json.substring(0,1) == '"')
//  {
// var first = json.indexOf('"');
//  var last = json.lastIndexOf('"');

//  }
//  else if(json.substring(0,1) == '[')
//  {

//  }
//  else if(json.substring(0,1) == '{')
//  {
// var temp = {};

// var newstring = json.substring(json.indexOf('{'), json.lastIndexOf('}'));




// return temp;

//  }
// }
// else
// {

// }














 
// console.log("----------------------------ending PARSE for: " + json);














 
// console.log("----------------------------ending PARSE for: " + json);
// ;








var parseJSON = function(json) {
  // your code goes here

console.log("-----------------------Starting PARSE for: " + json);
 console.log(json);
   if(json.substring(0,1) == "[" && json.substring(json.length, json.length- 1) == "]")
  	{
var temp = [];
var newstring = json.substring(1, json.length-1);
   var arrayList = newstring.split(',');
  	console.log("newstring: " + newstring);
  	console.log("arrayList: " + arrayList);

  		  if(arrayList !="")
        {
 console.log("--------propertyList--------");
      
 for(var i =0; i <arrayList.length; i++)	
{
if(arrayList[i].substring(1,2) == "{"&&  arrayList[i].substring(0,1) == " ")
{
	arrayList[i]= arrayList[i].substring(1,arrayList[i].length);
}

if(arrayList[i].substring(1,2) == "[" &&  arrayList[i].substring(0,1) == " ")
{
	arrayList[i]= arrayList[i].substring(1,arrayList[i].length);
}



if(arrayList[i].substring(0,1) == '[' &&arrayList[i].substring(arrayList[i].length-1,arrayList[i].length) =="]")
	{
 console.log("Hope this works!");

arrayList[i] = parseJSON(arrayList[i]);
temp.push(arrayList[i]);
	}
else if(arrayList[i].substring(0,1) == '{' &&arrayList[i].substring(arrayList[i].length-1,arrayList[i].length) =="}")
	{
 console.log("Hope this works!");

arrayList[i] = parseJSON(arrayList[i]);
temp.push(arrayList[i]);
	}
 else if(!isNaN(parseFloat(arrayList[i])))
 {
arrayList[i] = parseFloat(arrayList[i]);
temp.push(arrayList[i]);
 }
 else if(arrayList[i] == 'true')
	{
arrayList[i] = true;
temp.push(arrayList[i]);
	}
	else if(arrayList[i] == 'false')
	{
arrayList[i] = false;
temp.push(arrayList[i]);
	}
	else if(arrayList[i] == 'null')
	{
arrayList[i] = null;
temp.push(arrayList[i]);
	}
else
{
	if(i ==0)
	{
	arrayList[i] = arrayList[i].substring(1, arrayList[i].length-1);
if(arrayList[i].indexOf("\\") > -1 )
{
var forwardIndex =arrayList[i].indexOf('\\');
arrayList[i] = arrayList[i].toString();
	console.log("it works: " + arrayList[i] + "typeof: " + typeof arrayList[i]);

if(arrayList[i].substring(forwardIndex,forwardIndex+1)=='\\')
{

}
else if(arrayList[i].substring(forwardIndex,forwardIndex+1)=='r')
{

}
else if(arrayList[i].substring(forwardIndex,forwardIndex+1)=='t')
{

}
else if(arrayList[i].substring(forwardIndex,forwardIndex+1)=='n')
{

}
}
	}
	else
	{
	

		arrayList[i] = arrayList[i].substring(2, arrayList[i].length-1);
	
		if(arrayList[i].indexOf("\\") > -1 )
{
	console.log("it works?");
}

	}




temp.push(arrayList[i]);


}



	
}
    console.log(typeof temp[0]);
     	
        	  }
 console.log("--------propertyList--------");

  		return temp;
  	}
else if(json.substring(0,1) == "{" && json.substring(json.length, json.length- 1) == "}")
  	{
var temp = {};
  		var newstring = json.substring(1, json.length-1);
  		console.log("newstring: " + newstring);
  		
        var propertyList = newstring.split(',');
        if(propertyList !="")
        {
        console.log("--------propertyList--------");
for(var i =0; i <propertyList.length; i++)
{
console.log("New property set"+propertyList[i] +"----->"+ propertyList[i+1]);

for(var r =0; r <propertyList.length; r++)
{

console.log(propertyList[r]);
}
	//console.log(propertyList[i].substring(propertyList[i].length-1,propertyList[i].length));

var keyVal = propertyList[i].split(':');
var a = propertyList[i].split(/:/);
keyVal[0] = a.shift();
keyVal[1] = a.join(':');
console.log("Right before the if statement:" +keyVal[1]);
console.log("key0:"+keyVal[0]);

if(keyVal[1] != null)
{

if(keyVal[1] != undefined)
{
console.log(keyVal[1].indexOf('[') > -1 );
if(keyVal[1].indexOf('[') > -1)
if(keyVal[1].indexOf('[') > -1 )
{
	console.log("IS THE LAST VALUE A CLOSED BRACKET?: "+ keyVal[1].substring(keyVal[1].length-1,keyVal[1].length));

	console.log(keyVal[1].substring(keyVal[1].length-1,keyVal[1].length) != "]");

if(keyVal[1].substring(keyVal[1].length-1,keyVal[1].length) != "]")
	{
	console.log("Bracket Trigger");
	var flag = true;
	var firstTime = false;
	// var p = i;
	var combinedString =keyVal[1];
	while(flag)
	{
			if(combinedString.substring(combinedString.length-1,combinedString.length) == ']')
		{
			break;
		}

combinedString = combinedString + "," + propertyList[i+1];
	
if(i== 0)
{
	firstTime =true;
}


i++;
	}

keyVal[1] = combinedString;
}

}
}
}

	if(keyVal[0].substring(keyVal[0].length-1,keyVal[0].length) !='"')
	{

		keyVal = propertyList[i] + "," + propertyList[i+1];
	//console.log("triggered: " +keyVal);
	keyVal = keyVal.split(':');
	
	if(i ==0 )
{
keyVal[0] = keyVal[0].substring(1, keyVal[0].length-1);
 }
 else
 {
 	keyVal[0] = keyVal[0].substring(2, keyVal[0].length-1);
 }
	i++;
	}
else
{
	if(i ==0||firstTime)
{
	if(firstTime ==true)
		firstTime =false;

keyVal[0] = keyVal[0].substring(1, keyVal[0].length-1);
 }
 else
 {




 if(keyVal[0].substring(0,1) == '"' && keyVal[0].substring(keyVal[0].length-1,keyVal[0].length) == '"')
 	keyVal[0]= keyVal[0].substring(1,keyVal[0].length- 1);
else
keyVal[0] = keyVal[0].substring(2, keyVal[0].length-1);
 
 }
}






if(keyVal[1].substring(1,2) == "{")
{
	keyVal[1]= keyVal[1].substring(1,keyVal[1].length);
}





 //console.log(keyVal[0]);

	//  if(keyVal[1] === "")
	//  {
	//  keyVal[1] = undefined;
 // }
 //console.log("before: " + keyVal[1]);









 if(keyVal[1].substring(0,1) == '[' &&keyVal[1].substring(keyVal[1].length-1,keyVal[1].length) =="]")
	{
 console.log("Hope this works!");
keyVal[1] = parseJSON(keyVal[1]);
	}
 else if(keyVal[1].substring(0,1) == '{' &&keyVal[1].substring(keyVal[1].length-1,keyVal[1].length) =="}")
	{
 console.log("Hope this works!");
keyVal[1] = parseJSON(keyVal[1]);
	}
else if(keyVal[1].trim() == 'true')
	{
keyVal[1] = true;

	}
	else if(keyVal[1].trim() == 'false')
	{
keyVal[1] = false;

	}
	else if(keyVal[1].trim()== 'null')
	{
keyVal[1] = null;

	}
else
{
	
if(keyVal[1].substring(0, 1) == '"')
{
 keyVal[1] = keyVal[1].substring(1, keyVal[1].length-1);
}
else
{
 keyVal[1] = keyVal[1].substring(2, keyVal[1].length-1);
 }







 }
 //console.log("after: " +keyVal[1]);

 temp[keyVal[0]] = keyVal[1];
 console.log(temp);

}
  console.log("--------propertyList END--------");
}
  		var newKey;
console.log("-----------------------ending PARSE for: " + json);

  		return temp ;
  	}

};
