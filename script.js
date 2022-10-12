// request.response
// var request=new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all");
// request.send();
// request.onload=function()
// {
//     var res=JSON.parse(request.response);
//     console.log(res);
//     for(i=0;i<res.length;i++)
//     {
//         console.log(res[i].name,res[i].region,res[i].subregion);
//     }
// };



// var request=new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v2/all");
// request.send();
// request.onload=function()
// {
//     var res=JSON.parse(request.response);
//     console.log(res);
//     for(i=0;i<res.length;i++)
//     {
//         console.log("contry name is" +res[i].name,"captail is"+res[i].capital);
//     }
// };


var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function()
{
    var res=JSON.parse(request.response);
    console.log(res);
    
    // var coun =res.filter((ele)=>ele.region=="europe");
    // console.log(coun);
    // var result=coun.map((ele)=>ele.name);
    // console.log(result);
    //  var coun =res.filter((ele)=>ele.region=="Europe").map((ele)=>ele.name);
    //  console.log(coun);
    var
};