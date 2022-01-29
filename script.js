function ssuraj(){
  var first = document.getElementById("text1").value;
  var second = parseFloat(document.getElementById("text2").value);
  var third = parseFloat(document.getElementById("text3").value);
  var four = parseFloat(document.getElementById("text4").value);
  var sol1 = (third*third)-(4*second*four);
  var positive = Math.abs(sol1);
  var sol2 = (-third+Math.sqrt(positive))/2*second;
  var sol3 = (-third-Math.sqrt(positive))/2*second;
  
  if (sol2 < "0"){
    document.getElementById("dd").innerHTML = "Positive Or True Value ="+"&nbsp &nbsp &nbsp &nbsp" +"="+first+"&nbsp &nbsp"+"="+  sol3 + "<br>" + "Negative Or False Value Is ="+"&nbsp &nbsp &nbsp"+first+"&nbsp &nbsp"+"="+ sol2;
    document.getElementById("ee").innerHTML = first +"&nbsp &nbsp"+"="+"&nbsp &nbsp"+ sol3 +"<br>"+first +"&nbsp &nbsp"+"="+"&nbsp &nbsp"+ sol2;
    }
  else if (sol2 > "0"){
    document.getElementById("dd").innerHTML = "Positive or True Value ="+ "&nbsp &nbsp &nbsp" +first+"&nbsp &nbsp"+"="+  sol2 +"<br>" + "Negative Or False Value Is ="+"&nbsp &nbsp &nbsp"+first+"&nbsp &nbsp"+"="+sol3;
    document.getElementById("ee").innerHTML = first +"&nbsp &nbsp"+"="+"&nbsp &nbsp"+ sol2 +"<br>"+first +"&nbsp &nbsp"+"="+"&nbsp &nbsp"+ sol3;
  }
  else {
    document.getElementById("dd").innerHTML = "Just Retry With Shutting Off Your Mouth" ;
    }
  if (sol1 < "0"){
    document.getElementById("negative").innerHTML = "This Equation Does Not Have Any Solutions Or Roots Because Discriminant Is Negative";
  }
  else if (sol1 == "0"){
    document.getElementById("negative").innerHTML = "This Equation Have Two Equal Roots Or Solution Because Discriminant Is = to  0";
  }
  else if (sol1 > "0"){
    document.getElementById("negative").innerHTML = "This Equation Have Two Distinct Roots Because Discriminant Is Greater Than 0";
  }
  else {
    document.getElementById("negative").innerHTML = "Shut Up And Retry";
  }
    
}
function aaa(){
  document.getElementById("text1").value = "";
  document.getElementById("text2").value = "";
  document.getElementById("text3").value = "";
  document.getElementById("text4").value = "";
  document.getElementById("dd").innerHTML = "";
  document.getElementById("ee").innerHTML = "";
  document.getElementById("negative").innerHTML = "";
}
function clear4(){
  document.getElementById("text1").value = "";
}
function clear1(){
  document.getElementById("text2").value = "";
}
function clear2(){
  document.getElementById("text3").value = "";
}
function clear3(){
  document.getElementById("text4").value = "";
}
