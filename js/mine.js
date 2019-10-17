var writers;

// Get Data From Local Storage And If its first one create one 
if(localStorage.getItem('writersInfo')==null)
    {
        writers = [];
    }
else
    {
        writers = JSON.parse(localStorage.getItem('writersInfo'));
    }


// Function Get Data From User and sign up
function signUp(){
    
    var writer ={
        
        name:document.getElementById("name-signup").value,
        nickName:document.getElementById("nickName-signup").value,
        age:document.getElementById("age-signup").value,
        location:document.getElementById("location-signup").value,
        userName:document.getElementById("userName-signup").value.toLowerCase(),
        passWord:document.getElementById("passWord-signup").value,
        id:writers.length,
        posts:"",
        
                }
    // Validate No Empty Informaation
    if(writer.name==""||writer.nickName==""||writer.age==""||writer.location==""||writer.userName==""||writer.passWord==""){
        window.alert("You Must Fill All Fields");
        reset();
        return;
    }
        
    // Check No user name can be repeated
    for (var i=0;i<writers.length;i++)
    {
        if(writer.userName==writers[i].userName)
            {
                window.alert("This Username Already Exist , Change it");
                document.getElementById("userName-signup").value="";
                return;
            }
    
    }
    
    
                // Save Data And End OF sign up
                writers.push(writer);

                localStorage.setItem("writersInfo",JSON.stringify(writers));
                
                window.alert("Registration Done, Log in Now");
    
                reset();
    
                
    }

// Function To login writer account
function logIn(){
    
    var x=document.getElementById("userName-login").value.toLowerCase();
    var y=document.getElementById("passWord-login").value;
    
    for (var i=0;i<writers.length;i++)
    {
        if(x==writers[i].userName && y==writers[i].passWord)
            {
                localStorage.setItem("writerName",writers[i].name);
                window.location.assign("writer-page.html");// To Move To another html page
                return ;
            }
    
    }
    window.alert("You Username Or Password is Wrong , Please Try Again!");
}

// Function to Print All Wriers on Home Section
function show_Writers(){
    
    var temp="";
    for(var i = 0 ; i <writers.length ; i++)
        {
            temp+='<div class="col-lg-3 col-md-6 col-6 p-1 rounded" id="'+i+'" onclick="moveToProfile(this.id)"> <div class="bg-primary text-white border border-dark text-center p-2">  <h2>'+writers[i].nickName+'</h2> <hr class="border-dark w-75 my-2 mx-auto">   <h4> From '+writers[i].location+' </h4> <h6> '+writers[i].age+' Years </h6> </div> </div>';
        }
    document.getElementById("homeWriters").innerHTML=temp;
}


// Reset Fields on sign up form
function reset(){
    
    document.getElementById("name-signup").value="";
    document.getElementById("age-signup").value="";
    document.getElementById("nickName-signup").value="";
    document.getElementById("location-signup").value="";
    document.getElementById("userName-signup").value="";
    document.getElementById("passWord-signup").value="";

}

// Function return id for clickable div
function reply_click(clicked_id)
  {
      return clicked_id;
  }

// Function to open writer profile by id of clickable div
function moveToProfile(k){
    localStorage.setItem("profileID",reply_click(k));
    window.location.assign("writer-profile.html");
    
}








show_Writers();

