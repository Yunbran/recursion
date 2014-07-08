var htmlStrings = [
  '<p class="targetClassName"></p>',
  '<p class="otherClassName targetClassName"></p>',
  '<p><p class="targetClassName"></p></p>',
  '<p><p class="targetClassName"><p class="targetClassName"></p></p></p>',
  '<p><p></p><p><p class="targetClassName"></p></p></p>',
  '<p><p class="targetClassName"></p><p class="targetClassName"></p></p>',
  '<p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></p>'
];

describe('getElementsByClassName', function(){

  it('should match the results of calling the built-in function', function(){
    $('body').addClass('targetClassName');
    htmlStrings.forEach(function(htmlString){
      var $rootElement = $(htmlString);
      $('body').append($rootElement);

      var result = getElementsByClassName('targetClassName');
       // console.log("---------------------------------");    
// console.log("result: " + result);
//       for(var i =0; i <result.length;i++)
//       {
// console.log(result[i])
//       }
// console.log("---------------------------------");
      var expectedNodeList = document.getElementsByClassName('targetClassName');
//       console.log("expectedNodeList: " +expectedNodeList);
//        for(var i =0; i <expectedNodeList.length;i++)
//       {
// console.log(expectedNodeList[i]);
//       }
//       console.log("---------------------------------");
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
//       console.log("expectedArray: " +expectedArray);
//        for(var i =0; i <expectedArray.length;i++)
//       {
// console.log(expectedArray[i]);
//       }
//       console.log("---------------------------------");
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
   $('body').removeClass('targetClassName');
  });

});
