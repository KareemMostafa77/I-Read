// To help me to get data of login username
var writerName=localStorage.getItem('writerName');

var writers;

// To get writer Posts
if(localStorage.getItem('writersInfo')==null)
    {
        writers = [];
    }
else
    {
        writers = JSON.parse(localStorage.getItem('writersInfo'));
        for (var i=0;i<writers.length;i++)
        {
        if(writerName==writers[i].name)
            {
                post=writers[i].posts;
            }
        }
    }

// To Print Writer Info And Posts
for (var i=0;i<writers.length;i++)
    {
        if(writerName==writers[i].name)
            {
                document.getElementById("writerName").innerHTML=writers[i].name;
                document.getElementById("writerLocation").innerHTML="From "+writers[i].location;
                document.getElementById("writerAge").innerHTML=writers[i].age+" Years";
                document.getElementById("writerPosts").innerHTML=writers[i].posts;
                
            }
    }

// Upload A New Post
function postNow(){
    
    var d = new Date();
    
    var text=document.getElementById("writerText");
    
    post = '<div class=" col-lg-5  col-12 bg-primary text-left rounded p-3 my-3"> <h5 class="font-weight-bold" id="writerName">'+writerName+'</h5> <small class="font-weight-bold" id="postDate">'+d.getDay()+'-'+d.getMonth()+'-'+d.getFullYear()+' at '+d.toLocaleTimeString()+' </small> <p class="my-3 p-3 text-white">'+text.value+'</p> </div>'+post;
    
    document.getElementById("writerPosts").innerHTML=post;
    
    // to save post on writer profile
    for (var i=0;i<writers.length;i++)
    {
        if(writerName==writers[i].name)
            {
                writers[i].posts=post;
                localStorage.setItem("writersInfo",JSON.stringify(writers));
            }
    }
    
    document.getElementById("writerText").value="";
    
    
  
}


// Function To Log Out
function logOut(){
    window.location.assign("index.html");
    
}

