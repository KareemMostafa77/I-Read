// To Know Who Write CLicked
var writerID=localStorage.getItem('profileID');
var writers;

if(localStorage.getItem('writersInfo')==null)
    {
        writers = [];
    }
else
    {
        writers = JSON.parse(localStorage.getItem('writersInfo'));
        
    }

// Print Clicked Writer Posts
for (var i=0;i<writers.length;i++)
    {
        if(writers[i].id==writerID)
            {
                document.getElementById("writerName").innerHTML=writers[i].name;
                document.getElementById("writerLocation").innerHTML="From "+writers[i].location;
                document.getElementById("writerAge").innerHTML=writers[i].age+" Years";
                document.getElementById("writerPosts").innerHTML=writers[i].posts;
                
            }
    }