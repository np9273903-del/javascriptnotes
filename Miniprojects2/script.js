const form=document.querySelector("form");
//like in form we use submit not click
//click we use in button
form.addEventListener('submit',function(e){
     e.preventDefault();
     //prevent default selection of any value
const height=parseInt(document.querySelector('#height').value);
//(document.querySelector('#height').value); this will give use value from 
//from the form
//parseint we use it because the value is in string we parse it in string
const weight=parseInt(document.querySelector('#weight').value);
const result=document.querySelector("#results");
if(height<0 || isNaN(height)){
    result.innerHTML=`please a give a valid height`;

}
if(weight<0 || isNaN(weight)){
    result.innerHTML=`please a give a valid weight`;
}
 const bmi = (weight / ((height * height) / 10000)).toFixed(2);
 results.innerHTML=`<span>${bmi}</span>`;
 if(bmi<18.6){
    results.innerHTML=`underweight`;
      }
 else if(bmi<24.9){
    results.innerHTML=`normal range`;
 }
 else if(bmi>24.9){
       results.innerHTML=`overweight range`;
 }
}) 