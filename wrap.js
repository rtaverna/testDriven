/* eslint-disable no-unused-vars */


function wrap(str,integer){
  if(str.length===0)
  return str;
  let arr=str.split(" ");
  let finalStr='';
  let count=0;
  for(let i=0;i<arr.length;i++){
    if((count+arr[i].length+1)<=integer||((count+arr[i].length)<=integer)){
      finalStr+=arr[i]+' ';
      count+=arr[i].length+1;
    }else{
      finalStr=finalStr.trim();
      count=arr[i].length+1;
      finalStr+='\n';
      finalStr+=arr[i]+' ';
    }
  }
  return finalStr.trim();
}
module.exports=wrap;

console.log(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20))
