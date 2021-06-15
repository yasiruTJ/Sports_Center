var timely;

/* Timer */

var total_seconds = 60 * 5;
var minute = total_seconds/60;
var minutes = parseInt(total_seconds / 60);
var secondsleft = parseInt(total_seconds % 60);

function checktimehard(){
  var time=document.getElementById('hardtimer');
  time.innerHTML= 'Time Left:<br> ' + minutes + ' min<br> ' + secondsleft + ' <br>seconds ';
  time.style.display="block";
  if(total_seconds <= 0)
  {
    alert('Your Time is up!')
    autosubmitcheckanswershard();
  }
  else
  {
    total_seconds = total_seconds -1 ;
    minutes = parseInt(total_seconds / 60);
    secondsleft = parseInt(total_seconds % 60);
    timely = setTimeout("checktimehard()" , 1000);
  }
}

timely = setTimeout("checktimehard()" ,1000);

/* Auto Submit hard Level Answer Checker */

function autosubmitcheckanswershard(){
    var marks = 0;
    var question21=document.form5.q21.value;
    var question22=document.form5.q22.value;
    var question23=document.form5.q23.value;
    var question24=document.form5.q24.value;
    var question25=document.form5.q25.value;
    var question26=document.form5.q26.value;
    var question27=document.form5.q27.value;
    var question28=document.form5.q28.value;
    var question29=document.form5.q29.value;
    var question30=document.form5.q30.value;  
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
    if (question21 == "q213")
    {
      marks+2;
      q1result.textContent='The Answer For Question No.1 : Virgil van Dijk'
      q1result.style.backgroundColor="green";
    }
    else{
      marks--;
      q1result.textContent='The Answer For Question No.1 : Virgil van Dijk'
    }
    if (question22 == "q221")
    {
      marks+2;
      q2result.textContent='The Answer For Question No.2 : Arsenal'
      q2result.style.backgroundColor="green";
    }
    else{
      marks--;
      q2result.textContent='The Answer For Question No.2 : Arsenal'
    }
    if (question23 == "q231")
    {
      marks+2;
      q3result.textContent='The Answer For Question No.3 : Stade De Lyon'
      q3result.style.backgroundColor="green";
    }
    else{
      marks--;
      q3result.textContent='The Answer For Question No.3 : Stade De Lyon'
  
    }
    if (question24 == "q241")
    {
      marks+2;
      q4result.textContent='The Answer For Question No.4 : Monaco'
      q4result.style.backgroundColor="green";
    }
    else{
      marks--;
      q4result.textContent='The Answer For Question No.4 : Monaco'
    }
    if (question25 == "q252")
    {
      marks+2;
      q5result.textContent='The Answer For Question No.5 : South Africa'
      q5result.style.backgroundColor="green";
    }
    else{
      marks--;
      q5result.textContent='The Answer For Question No.5 : South Africa'
    }
    if (question26 == "q263")
    {
      marks+2;
      q6result.textContent='The Answer For Question No.6 : Cardiff'
      q6result.style.backgroundColor="green";
    }
    else{
      marks--;
      q6result.textContent='The Answer For Question No.6 : Cardiff'
    }
    if (question27 == "q273")
    {
      marks+2;
      q7result.textContent='The Answer For Question No.7 : Danny Murphy'
      q7result.style.backgroundColor="green";
    }
    else{
      marks--;
      q7result.textContent='The Answer For Question No.7 : Danny Murphy'
    }
    if (question28 == "q282")
    {
      marks+2;
      q8result.textContent='The Answer For Question No.8 : Video Assistant Referee'
      q8result.style.backgroundColor="green";
    }
    else{
      marks--;
      q8result.textContent='The Answer For Question No.8 : Video Assistant Referee'
    }
    if (question29 == "q292")
    {
      marks+2;
      q9result.textContent='The Answer For Question No.9 : Community Shield'
      q9result.style.backgroundColor="green";
    }
    else{
      marks--;
      q9result.textContent='The Answer For Question No.9 : Community Shield'
    }
    if (question30 == "q303")
    {
      marks+2;
      q10result.textContent='The Answer For Question No.10 : The Cherries'
      q10result.style.backgroundColor="green";
    }
    else{
      marks--;
      q10result.textContent='The Answer For Question No.10 : The Cherries'
    }
  
    info[0].style.display="block";
    resultshow[0].style.display="block";
    quizform[0].style.display="none";
    heading[0].style.display="none";
  
  
    if (marks < 0)
    {
      marks = 0;
      result.innerHTML='Your Score Is <br>' + marks + ' /20 <br> You Have Completed The Quiz In<br>' + minute + ' <b>minutes </b>' + secondsleft + ' <b>seconds</b>';
    }
    else
    {
      result.innerHTML='Your Score Is <br>' + marks + ' /20 <br> You Have Completed The Quiz In<br>' + minute + ' <b>minutes </b>' + secondsleft + ' <b>seconds</b>';
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

/* hard Level Answer Checker */

function checkanswershard(){
    clearTimeout(timely);
    var marks = 0;
    var question21=document.form5.q21.value;
    var question22=document.form5.q22.value;
    var question23=document.form5.q23.value;
    var question24=document.form5.q24.value;
    var question25=document.form5.q25.value;
    var question26=document.form5.q26.value;
    var question27=document.form5.q27.value;
    var question28=document.form5.q28.value;
    var question29=document.form5.q29.value;
    var question30=document.form5.q30.value;  
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
    if (question21 == "q213")
    {
      marks+2;
      q1result.textContent='The Answer For Question No.1 : Virgil van Dijk'
      q1result.style.backgroundColor="green";
    }
    else{
      marks--;
      q1result.textContent='The Answer For Question No.1 : Virgil van Dijk'
    }
    if (question22 == "q221")
    {
      marks+2;
      q2result.textContent='The Answer For Question No.2 : Arsenal'
      q2result.style.backgroundColor="green";
    }
    else{
      marks--;
      q2result.textContent='The Answer For Question No.2 : Arsenal'
    }
    if (question23 == "q231")
    {
      marks+2;
      q3result.textContent='The Answer For Question No.3 : Stade De Lyon'
      q3result.style.backgroundColor="green";
    }
    else{
      marks--;
      q3result.textContent='The Answer For Question No.3 : Stade De Lyon'
  
    }
    if (question24 == "q241")
    {
      marks+2;
      q4result.textContent='The Answer For Question No.4 : Monaco'
      q4result.style.backgroundColor="green";
    }
    else{
      marks--;
      q4result.textContent='The Answer For Question No.4 : Monaco'
    }
    if (question25 == "q252")
    {
      marks+2;
      q5result.textContent='The Answer For Question No.5 : South Africa'
      q5result.style.backgroundColor="green";
    }
    else{
      marks--;
      q5result.textContent='The Answer For Question No.5 : South Africa'
    }
    if (question26 == "q263")
    {
      marks+2;
      q6result.textContent='The Answer For Question No.6 : Cardiff'
      q6result.style.backgroundColor="green";
    }
    else{
      marks--;
      q6result.textContent='The Answer For Question No.6 : Cardiff'
    }
    if (question27 == "q273")
    {
      marks+2;
      q7result.textContent='The Answer For Question No.7 : Danny Murphy'
      q7result.style.backgroundColor="green";
    }
    else{
      marks--;
      q7result.textContent='The Answer For Question No.7 : Danny Murphy'
    }
    if (question28 == "q282")
    {
      marks+2;
      q8result.textContent='The Answer For Question No.8 : Video Assistant Referee'
      q8result.style.backgroundColor="green";
    }
    else{
      marks--;
      q8result.textContent='The Answer For Question No.8 : Video Assistant Referee'
    }
    if (question29 == "q292")
    {
      marks+2;
      q9result.textContent='The Answer For Question No.9 : Community Shield'
      q9result.style.backgroundColor="green";
    }
    else{
      marks--;
      q9result.textContent='The Answer For Question No.9 : Community Shield'
    }
    if (question30 == "q303")
    {
      marks+2;
      q10result.textContent='The Answer For Question No.10 : The Cherries'
      q10result.style.backgroundColor="green";
    }
    else{
      marks--;
      q10result.textContent='The Answer For Question No.10 : The Cherries'
    }
  
    info[0].style.display="block";
    resultshow[0].style.display="block";
    quizform[0].style.display="none";
    heading[0].style.display="none";
  
  
    if (marks < 0)
    {
      marks = 0;
      result.innerHTML='Your Score Is <br>' + marks + ' /20 <br> You Have Completed The Quiz In ' + (4 - Math.floor(minutes)) + ' <b>minutes </b>' + (59 - Math.floor(secondsleft)) + ' <b>seconds</b>';
    }
    else
    {
      result.innerHTML='Your Score Is <br>' + marks + ' /20 <br> You Have Completed The Quiz In ' + (4 - Math.floor(minutes)) + ' <b>minutes </b>' + (59 - Math.floor(secondsleft)) + ' <b>seconds</b>';
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