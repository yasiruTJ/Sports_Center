var timely;

/* Medium Timer */

var total_seconds = 60 * 3;
var minute = total_seconds / 60;
var minutes = parseInt(total_seconds / 60);
var secondsleft = parseInt(total_seconds % 60);

function checktimemedium(){
  var time=document.getElementById('mediumtimer');
  time.innerHTML= 'Time Left:<br> ' + minutes + ' min<br> ' + secondsleft + ' <br>seconds ';
  time.style.display="block";
  if(total_seconds <= 0)
  {
    alert('Your Time is up!')
    autosubmitcheckanswersmedium();
  }
  else
  {
    total_seconds = total_seconds -1 ;
    minutes = parseInt(total_seconds / 60);
    secondsleft = parseInt(total_seconds % 60);
    timely = setTimeout("checktimemedium()" , 1000);
  }
}

timely = setTimeout("checktimemedium()" ,1000);

/*  Auto submit medium level Answer Checker */

function autosubmitcheckanswersmedium(){
    var marks = 0;
    var question11=document.form4.q11.value;
    var question12=document.form4.q12.value;
    var question13=document.form4.q13.value;
    var question14=document.form4.q14.value;
    var question15=document.form4.q15.value;
    var question16=document.form4.q16.value;
    var question17=document.form4.q17.value;
    var question18=document.form4.q18.value;
    var question19=document.form4.q19.value;
    var question20=document.form4.q20.value;  
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
    if (question11 == "q111")
    {
      marks+2;
      q1result.textContent='The Answer For Question No.1 : Jamie Vardy'
      q1result.style.backgroundColor="green";
    }
    else{
      marks--;
      q1result.textContent='The Answer For Question No.1 : Jamie Vardy'
    }
    if (question12 == "q122")
    {
      marks+2;
      q2result.textContent='The Answer For Question No.2 : They became the first team to win a Premier League game on 29 February'
      q2result.style.backgroundColor="green";
    }
    else{
      marks--;
      q2result.textContent='The Answer For Question No.2 : They became the first team to win a Premier League game on 29 February'
    }
    if (question13 == "q133")
    {
      marks+2;
      q3result.textContent='The Answer For Question No.3 : Leicester City 4-0 Aston Villa'
      q3result.style.backgroundColor="green";
    }
    else{
      marks--;
      q3result.textContent='The Answer For Question No.3 : Leicester City 4-0 Aston Villa'
  
    }
    if (question14 == "q143")
    {
      marks+2;
      q4result.textContent='The Answer For Question No.4 : Southampton'
      q4result.style.backgroundColor="green";
    }
    else{
      marks--;
      q4result.textContent='The Answer For Question No.4 : Southampton'
    }
    if (question15 == "q151")
    {
      marks+2;
      q5result.textContent='The Answer For Question No.5 : Bournemouth'
      q5result.style.backgroundColor="green";
    }
    else{
      marks--;
      q5result.textContent='The Answer For Question No.5 : Bournemouth'
    }
    if (question16 == "q161")
    {
      marks+2;
      q6result.textContent='The Answer For Question No.6 : Arsenal'
      q6result.style.backgroundColor="green";
    }
    else{
      marks--;
      q6result.textContent='The Answer For Question No.6 : Arsenal'
    }
    if (question17 == "q172")
    {
      marks+2;
      q7result.textContent='The Answer For Question No.7 : Cuba'
      q7result.style.backgroundColor="green";
    }
    else{
      marks--;
      q7result.textContent='The Answer For Question No.7 : Cuba'
    }
    if (question18 == "q183")
    {
      marks+2;
      q8result.textContent='The Answer For Question No.8 : The lost 3-0'
      q8result.style.backgroundColor="green";
    }
    else{
      marks--;
      q8result.textContent='The Answer For Question No.8 : The lost 3-0'
    }
    if (question19 == "q191")
    {
      marks+2;
      q9result.textContent='The Answer For Question No.9 : Brighton'
      q9result.style.backgroundColor="green";
    }
    else{
      marks--;
      q9result.textContent='The Answer For Question No.9 : Brighton'
    }
    if (question20 == "q203")
    {
      marks+2;
      q10result.textContent='The Answer For Question No.10 : Pierre-Emerick Aubameyang'
      q10result.style.backgroundColor="green";
    }
    else{
      marks--;
      q10result.textContent='The Answer For Question No.10 : Pierre-Emerick Aubameyang'
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
      result.innerHTML='Your Score Is <br>' + marks + ' /20 <br> You Have Completed The Quiz In<br>'  + minute + ' <b>minutes </b>' + secondsleft + ' <b>seconds</b>';
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


/*  medium level Answer Checker */

function checkanswersmedium(){
    clearTimeout(timely);
    var marks = 0;
    var question11=document.form4.q11.value;
    var question12=document.form4.q12.value;
    var question13=document.form4.q13.value;
    var question14=document.form4.q14.value;
    var question15=document.form4.q15.value;
    var question16=document.form4.q16.value;
    var question17=document.form4.q17.value;
    var question18=document.form4.q18.value;
    var question19=document.form4.q19.value;
    var question20=document.form4.q20.value;  
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
    if (question11 == "q111")
    {
      marks+2;
      q1result.textContent='The Answer For Question No.1 : Jamie Vardy'
      q1result.style.backgroundColor="green";
    }
    else{
      marks--;
      q1result.textContent='The Answer For Question No.1 : Jamie Vardy'
    }
    if (question12 == "q122")
    {
      marks+2;
      q2result.textContent='The Answer For Question No.2 : They became the first team to win a Premier League game on 29 February'
      q2result.style.backgroundColor="green";
    }
    else{
      marks--;
      q2result.textContent='The Answer For Question No.2 : They became the first team to win a Premier League game on 29 February'
    }
    if (question13 == "q133")
    {
      marks+2;
      q3result.textContent='The Answer For Question No.3 : Leicester City 4-0 Aston Villa'
      q3result.style.backgroundColor="green";
    }
    else{
      marks--;
      q3result.textContent='The Answer For Question No.3 : Leicester City 4-0 Aston Villa'
  
    }
    if (question14 == "q143")
    {
      marks+2;
      q4result.textContent='The Answer For Question No.4 : Southampton'
      q4result.style.backgroundColor="green";
    }
    else{
      marks--;
      q4result.textContent='The Answer For Question No.4 : Southampton'
    }
    if (question15 == "q151")
    {
      marks+2;
      q5result.textContent='The Answer For Question No.5 : Bournemouth'
      q5result.style.backgroundColor="green";
    }
    else{
      marks--;
      q5result.textContent='The Answer For Question No.5 : Bournemouth'
    }
    if (question16 == "q161")
    {
      marks+2;
      q6result.textContent='The Answer For Question No.6 : Arsenal'
      q6result.style.backgroundColor="green";
    }
    else{
      marks--;
      q6result.textContent='The Answer For Question No.6 : Arsenal'
    }
    if (question17 == "q172")
    {
      marks+2;
      q7result.textContent='The Answer For Question No.7 : Cuba'
      q7result.style.backgroundColor="green";
    }
    else{
      marks--;
      q7result.textContent='The Answer For Question No.7 : Cuba'
    }
    if (question18 == "q183")
    {
      marks+2;
      q8result.textContent='The Answer For Question No.8 : The lost 3-0'
      q8result.style.backgroundColor="green";
    }
    else{
      marks--;
      q8result.textContent='The Answer For Question No.8 : The lost 3-0'
    }
    if (question19 == "q191")
    {
      marks+2;
      q9result.textContent='The Answer For Question No.9 : Brighton'
      q9result.style.backgroundColor="green";
    }
    else{
      marks--;
      q9result.textContent='The Answer For Question No.9 : Brighton'
    }
    if (question20 == "q203")
    {
      marks+2;
      q10result.textContent='The Answer For Question No.10 : Pierre-Emerick Aubameyang'
      q10result.style.backgroundColor="green";
    }
    else{
      marks--;
      q10result.textContent='The Answer For Question No.10 : Pierre-Emerick Aubameyang'
    }
  
    info[0].style.display="block";
    resultshow[0].style.display="block";
    quizform[0].style.display="none";
    heading[0].style.display="none";
  
  
    if (marks < 0)
    {
      marks = 0;
      result.innerHTML='Your Score Is <br>' + marks + ' /20 <br> You Have Completed The Quiz In ' + (2 - Math.floor(minutes)) + ' <b>minutes </b>' + (59 - Math.floor(secondsleft)) + ' <b>seconds</b>';
    }
    else
    {
      result.innerHTML='Your Score Is <br>' + marks + ' /20 <br> You Have Completed The Quiz In ' + (2 - Math.floor(minutes)) + ' <b>minutes </b>' + (59 - Math.floor(secondsleft)) + ' <b>seconds</b>';
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