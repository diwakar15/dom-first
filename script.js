

function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
//it is returning an HTML element
//<label for="email">Mail</label>

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}
var label=createlabels("label","for","fname","firstname");
var br1=createlinebreak("br");
var input=createinput("input","type","firstname","id","fname");
var br2=createlinebreak("br");

var middlename=createlabels("label","for","mname","middlename");
var br3=createlinebreak("br");
var minput=createinput("input","type","middlename","id","mname");
var br4=createlinebreak("br");


var lastname=createlabels("label","for","lname","lastname");
var br5=createlinebreak("br");
var linput=createinput("input","type","lastname","id","lname");
var br6=createlinebreak("br");


var phonenumber=createlabels("label","for","phn","phonenumber");
var br7=createlinebreak("br");
var phoneinput=createinput("input","type","phonenumber","id","phn");
var br8=createlinebreak("br");
document.body.append(label,br1,input,br2,middlename,br3,minput,br4,lastname,br5,linput,br6,phonenumber,br7,phoneinput,br8);
