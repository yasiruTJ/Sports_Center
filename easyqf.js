var timely;

/* Easy Timer */

var total_seconds = 60 * 2;
var minute = total_seconds / 60;
var minutes = parseInt(total_seconds / 60);
var secondsleft = parseInt(total_seconds % 60);

function checktimeeasy(){
  var time=document.getElementById('easytimer');
  time.innerHTML= 'Time Left:<br> ' + minutes + ' min<br> ' + secondsleft + ' <br>seconds ';
  time.style.display="block";
  if(total_seconds <= 0)
  {
    alert('Your Time is up!')
    time.style.display="none";
    autosubmitcheckanswerseasy();
  }
  else
  {
    total_seconds = total_seconds -1 ;
    minutes = parseInt(total_seconds / 60);
    secondsleft = parseInt(total_seconds % 60);
    timely = setTimeout("checktimeeasy()" , 1000);
  }
}

timely = setTimeout("checktimeeasy()" ,1000);


/* Auto Submit Easy Level Answer Checker */

function autosubmitcheckanswerseasy(){
    var marks = 0;
    var question1=document.form3.q1.value;
    var question2=document.form3.q2.value;
    var question3=document.form3.q3.value;
    var question4=document.form3.q4.value;
    var question5=document.form3.q5.value;
    var question6=document.form3.q6.value;
    var question7=document.form3.q7.value;
    var question8=document.form3.q8.value;
    var question9=document.form3.q9.value;
    var question10=document.form3.q10.value;  
    var q1result=document.getElementById('ques1');
    var q2result=document.getElementById('ques2');
    var q3result=document.getElementById('ques3');
    var q4result=document.getElementById('ques4');
    var q5result=document.getElementById('ques5');
    var q6result=document.getElementById('ques6');
    var q7result=document.getElementById('ques7');
    var q8result=document.getElementById('ques8');
    var q9result=document.getElementById('ques9');
    var q10result=document.getElementById('ques10');
    var heading=document.getElementsByClassName('begin');
    var result=document.getElementById('res');
    var quizform=document.getElementsByClassName('form');
    var info=document.getElementsByClassName('resultinfo');
    var resultshow=document.getElementsByClassName('resultblock');
    if (question1 == "q13")
    {
      marks+2;
      q1result.textContent='The Answer For Question No.1 : Brazil'
      q1result.style.backgroundColor="green";
    }
    else{
      marks--;
      q1result.textContent='The Answer For Question No.1 : Brazil'
    }
    if (question2 == "q21")
    {
      marks+2;
      q2result.textContent='The Answer For Question No.2 : Miroslave Klose'
      q2result.style.backgroundColor="green";
    }
    else{
      marks--;
      q2result.textContent='The Answer For Question No.2 : Miroslave Klose'
    }
    if (question3 == "q33")
    {
      marks+2;
      q3result.textContent='The Answer For Question No.3 : Episkyros'
      q3result.style.backgroundColor="green";
    }
    else{
      marks--;
      q3result.textContent='The Answer For Question No.3 : Episkyros'

    }
    if (question4 == "q41")
    {
      marks+2;
      q4result.textContent='The Answer For Question No.4 : 1930'
      q4result.style.backgroundColor="green";
    }
    else{
      marks--;
      q4result.textContent='The Answer For Question No.4 : 1930'
    }
    if (question5 == "q53")
    {
      marks+2;
      q5result.textContent='The Answer For Question No.5 : Tottenham Hotspur'
      q5result.style.backgroundColor="green";
    }
    else{
      marks--;
      q5result.textContent='The Answer For Question No.5 : Tottenham Hotspur'
    }
    if (question6 == "q63")
    {
      marks+2;
      q6result.textContent='The Answer For Question No.6 : Uruguay'
      q6result.style.backgroundColor="green";
    }
    else{
      marks--;
      q6result.textContent='The Answer For Question No.6 : Uruguay'
    }
    if (question7 == "q71")
    {
      marks+2;
      q7result.textContent='The Answer For Question No.7 : Uruguay'
      q7result.style.backgroundColor="green";
    }
    else{
      marks--;
      q7result.textContent='The Answer For Question No.7 : Uruguay'
    }
    if (question8 == "q83")
    {
      marks+2;
      q8result.textContent='The Answer For Question No.8 : 1872'
      q8result.style.backgroundColor="green";
    }
    else{
      marks--;
      q8result.textContent='The Answer For Question No.8 : 1872'
    }
    if (question9 == "q93")
    {
      marks+2;
      q9result.textContent='The Answer For Question No.9 : Lucien Laurent'
      q9result.style.backgroundColor="green";
    }
    else{
      marks--;
      q9result.textContent='The Answer For Question No.9 : Lucien Laurent'
    }
    if (question10 == "q103")
    {
      marks+2;
      q10result.textContent='The Answer For Question No.10 : Bert Patenaude'
      q10result.style.backgroundColor="green";
    }
    else{
      marks--;
      q10result.textContent='The Answer For Question No.10 : Bert Patenaude'
    }
    
    quizform[0].style.display="none";
    heading[0].style.display="none";
    info[0].style.display="block";
    resultshow[0].style.display="block";
  
    if (marks < 0)
    {
      marks = 0;
      result.innerHTML='Your Score Is <br>' + marks + ' /20 <br> You Have Completed The Quiz In<br> ' +minute + ' <b>minutes </b>' + secondsleft + ' <b>seconds</b>';
    }
    else
    {
      result.innerHTML='Your Score Is <br>' + marks + ' /20 <br> You Have Completed The Quiz In<br> ' + minute + ' <b>minutes </b>' + secondsleft + ' <b>seconds</b>';
    }

    if (marks == 0)
    {
        resultshow[0].style.backgroundColor = "lightcoral";
    }
    else if (marks > 0 && marks < 10){
        resultshow[0].style.backgroundColor = "orange";
    }
    else{
        resultshow[0].style.backgroundColor = "lightcyan";
    }
}


/* Easy Level Answer Checker */

function checkanswerseasy(){
    clearTimeout(timely);
    var marks = 0;
    var question1=document.form3.q1.value;
    var question2=document.form3.q2.value;
    var question3=document.form3.q3.value;
    var question4=document.form3.q4.value;
    var question5=document.form3.q5.value;
    var question6=document.form3.q6.value;
    var question7=document.form3.q7.value;
    var question8=document.form3.q8.value;
    var question9=document.form3.q9.value;
    var question10=document.form3.q10.value;  
    var q1result=document.getElementById('ques1');
    var q2result=document.getElementById('ques2');
    var q3result=document.getElementById('ques3');
    var q4result=document.getElementById('ques4');
    var q5result=document.getElementById('ques5');
    var q6result=document.getElementById('ques6');
    var q7result=document.getElementById('ques7');
    var q8result=document.getElementById('ques8');
    var q9result=document.getElementById('ques9');
    var q10result=document.getElementById('ques10');
    var heading=document.getElementsByClassName('begin');
    var result=document.getElementById('res');
    var quizform=document.getElementsByClassName('form');
    var info=document.getElementsByClassName('resultinfo');
    var resultshow=document.getElementsByClassName('resultblock');
    if (question1 == "q13")
    {
      marks+2;
      q1result.textContent='The Answer For Question No.1 : Brazil'
      q1result.style.backgroundColor="green";
    }
    else{
      marks--;
      q1result.textContent='The Answer For Question No.1 : Brazil'
    }
    if (question2 == "q21")
    {
      marks+2;
      q2result.textContent='The Answer For Question No.2 : Miroslave Klose'
      q2result.style.backgroundColor="green";
    }
    else{
      marks--;
      q2result.textContent='The Answer For Question No.2 : Miroslave Klose'
    }
    if (question3 == "q33")
    {
      marks+2;
      q3result.textContent='The Answer For Question No.3 : Episkyros'
      q3result.style.backgroundColor="green";
    }
    else{
      marks--;
      q3result.textContent='The Answer For Question No.3 : Episkyros'

    }
    if (question4 == "q41")
    {
      marks+2;
      q4result.textContent='The Answer For Question No.4 : 1930'
      q4result.style.backgroundColor="green";
    }
    else{
      marks--;
      q4result.textContent='The Answer For Question No.4 : 1930'
    }
    if (question5 == "q53")
    {
      marks+2;
      q5result.textContent='The Answer For Question No.5 : Tottenham Hotspur'
      q5result.style.backgroundColor="green";
    }
    else{
      marks--;
      q5result.textContent='The Answer For Question No.5 : Tottenham Hotspur'
    }
    if (question6 == "q63")
    {
      marks+2;
      q6result.textContent='The Answer For Question No.6 : Uruguay'
      q6result.style.backgroundColor="green";
    }
    else{
      marks--;
      q6result.textContent='The Answer For Question No.6 : Uruguay'
    }
    if (question7 == "q71")
    {
      marks+2;
      q7result.textContent='The Answer For Question No.7 : Uruguay'
      q7result.style.backgroundColor="green";
    }
    else{
      marks--;
      q7result.textContent='The Answer For Question No.7 : Uruguay'
    }
    if (question8 == "q83")
    {
      marks+2;
      q8result.textContent='The Answer For Question No.8 : 1872'
      q8result.style.backgroundColor="green";
    }
    else{
      marks--;
      q8result.textContent='The Answer For Question No.8 : 1872'
    }
    if (question9 == "q93")
    {
      marks+2;
      q9result.textContent='The Answer For Question No.9 : Lucien Laurent'
      q9result.style.backgroundColor="green";
    }
    else{
      marks--;
      q9result.textContent='The Answer For Question No.9 : Lucien Laurent'
    }
    if (question10 == "q103")
    {
      marks+2;
      q10result.textContent='The Answer For Question No.10 : Bert Patenaude'
      q10result.style.backgroundColor="green";
    }
    else{
      marks--;
      q10result.textContent='The Answer For Question No.10 : Bert Patenaude'
    }
    
    quizform[0].style.display="none";
    heading[0].style.display="none";
    info[0].style.display="block";
    resultshow[0].style.display="block";
  
    if (marks < 0)
    {
      marks = 0;
      result.innerHTML='Your Score Is <br>' + marks + ' /20 <br> You Have Completed The Quiz In<br>' + (1 - Math.floor(minutes)) + ' <b>minutes </b>' + (59 - Math.floor(secondsleft)) + ' <b>seconds</b>';
    }
    else
    {
      result.innerHTML='Your Score Is <br>' + marks + ' /20 <br> You Have Completed The Quiz In<br>' + (1 - Math.floor(minutes)) + ' <b>minutes </b>' + (59 - Math.floor(secondsleft)) + ' <b>seconds</b>';
    }

    if (marks == 0)
    {
        resultshow[0].style.backgroundColor = "lightcoral";
    }
    else if (marks > 0 && marks < 10){
        resultshow[0].style.backgroundColor = "orange";
    }
    else{
        resultshow[0].style.backgroundColor = "lightcyan";
    }
}

/* Play Again */

function again(){
    var y = confirm("Do You want to Play Again ? ");
    if (y == true)
    {
      window.open('https://w1809743.users.ecs.westminster.ac.uk/quiz.html','_self')
    }
  }
