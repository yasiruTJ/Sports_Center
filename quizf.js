/* The function that will find out what level is chosen */

function start_game()
{
    var name = document.getElementById("username").value;
    var level = document.form2.level.value; 
    if(name == "")
    {
        alert("Name Field is Empty ! ");
    }
    if (level == "")
    {
        alert("Level is Not Selected ! ");
    }  
	  else
    {
        var con =confirm("LETS PLAY ! ") //if all satisfied a confirm box to load the quiz
        if (con==true)
        {
          select_level();
        }
    }
}

/* Level Selector */


function select_level()
{ 
  var level = document.form2.level.value;
  if (level == "easypage")
  {
    window.open('https://w1809743.users.ecs.westminster.ac.uk/easyq.html');
  }
  else if (level == "mediumpage")
  {
    window.open('https://w1809743.users.ecs.westminster.ac.uk/mediumq.html');
  }
  else
  {
    window.open('https://w1809743.users.ecs.westminster.ac.uk/hardq.html');
  }   
}





