// resume bio section

bio.display=function(){
   var name="yali Wei";
   var formattedName=HTMLheaderName.replace("%data%",name);  
   $("#header").prepend(formattedName);
   var role="Network Center Technician";
   var formattedRole=HTMLherderRole.replace("%data%",role);
   $("#header").prepend(formattedRole);
   for(contact in bio.contacts){     
      var formattedMobile=HTHLmobile.replace("%data%","bio.contacts.mobile");
      $(".flex-item:last").append(formattedMibile);
      var formattedEmail=HTHLemail.replace("%data%","bio.contacts.email");
      $(".flex-item:last").append(formattedEmail);
      var formattedGithub=HTHLgithub.replace("%data%","bio.contacts.github");
      $(".flex-item:last").append(formattedGiuhub);     
      var formattedLocation=HTHLlocation.replace("%data%","bio.contacts.location");
      $(".flex-item:last").append(formattedLocation);
      var formattedwelcomeMessage=HTHLwelcomMsg.replace("%data%","bio.contacts.welcomeMessage");
      $(".welcome-message").append(formattedwelcomeMessage);
      }
   for(skill in bio.skills){
      $("#header").append(HTMLskillsStart);
      var formattedSkill=HTHLSkills.replace("%data%","bio.skills");
      $("#skills").append(formattedSkill);
      }
      var formattedBiopic=HTHLbiopic.replace("%data%","bio.contacts.biopic");
      $(".biopic").append(formattedBiopic);
}
 
 
var bio={
         "name": "Yali Wei",
         "role": "Web develper",
         "contacts":{
                     "mobile":"6362888484",
                     "email":"yaliwei@sbcglobal.net",
                     "github":"yaliwei",                    
                     "location":"Earthcity"
                     },
         "welcomeMessage": "whoever reads this will find whatever you want!! ",
         "skills":[ "IP network managment","HTML","CCS","Javascript"],
         "biopic": "C:\Users\ym9157\Desktop\yali.jpg"         
         }
		 
		 		 // Resume work section
		 
	work.display=function(){
      for(job in work.jobs){
     $("#workExperience").append(HTMLworkStart);
     var formattedworkEmployer=HTMLworkEmployer.replace("%data%","work.jobs[job].employer");
     $(".work-entry:last").append(formattedworkEmployer);
     var formattedworkTitle=HTMLworkTitle.replace("%data%","work.jobs[job].title");
     $(".work-entry:last").append(formattedworkTitle);
     var formattedworLocation=HTMLworkLocation.replace("%data%","work.jobs[job].location");
     $(".work-entry:last").append(formattedworkLocation);
     var formattedworDates=HTMLworkDates.replace("%data%","work.jobs[job].dates");
     $(".work-entry:last").append(formattedworkDates);
     var formattedworDescription=HTMLworkDescription.replace("%data%","work.jobs[job].description");
     $(".work-entry:last").append(formattedworkDescription);
     }
  }
 
var work={
    "jobs":[
      {
      "employer":"AT&T",
      "title":"Network Center Technicain",
      "location":"125 corporate office dr earth city MO 63045",
      "dates":["May 2000-Now"],
      "description":"I have been working for AT&A since 2000 as a network center technician."
       },
       {
      "employer":"beijing international studies university",
      "title":"Shenyang international studies university",
      "location":"None",
      "dates":"1994",
      "description":"I have been working for AT&A since 2000 as a network center technician."
       }
      ]
      
  }
  // Resume project section 
  
  projects.display=function(){
   for(project in projects.projects){
     $("#projects").append(HTMLprojectStart);     
     var formattedprojectkTitle=HTMLprojectTitle.replace("%data%","projects.projects[project].title");
     $(".project-entry:last").append(formattedprojectTitle);     
     var formattedprojectDates=HTMLprojectDates.replace("%data%","projects.projects[project].dates");
     $(".project-entry:last").append(formattedprojectDates);
     var formattedprojectDescription=HTMLprojectDescription.replace("%data%","projects.projects[project].     description");
     $(".project-entry:last").append(formattedprojectDescription);
     }
     for(image in projectes.images){
	var formattedprojectImage=HTMLprojectImage.replace("%data%","projects.projects[project].image");
	$(".project-entry:last").append(formattedprojectImage);
     }
  }

var projects={
    "projects":[
      {
      "title":"outage managment",
      "dates":["May 2014-Now"],
      "description":"I have been working for AT&A since 2000 as a network center technician.",
      "images":["May 2014-Now"]
       },
       {
      "title":"Edison",
      "dates":"2012-2014",
      "description":"I have been working for AT&A since 2000 as a network center technician."
       }
      ]
	  	  
  }
  // Resume education section
 
education.display=function(){
   for(school in education.schools){
     $("#education-entry").append(HTMLschoolStart);
     var formattedschoolName=HTMLschoolName.replace("%data%","education.schools[school].name");
     $(".education-entry:last").append(formattedschoolName);
     var formattedschoolDegree=HTMLschoolDegree.replace("%data%","education.schools[school].degree");
     $(".education-entry:last").append(formattedschoolDegree);
     var formattedschoolDates=HTMLschoolDates.replace("%data%","education.schools[school].dates");
     $(".education-entry:last").append(formattedschoolDates);
     var formattedschoolLocation=HTMLschoolLocation.replace("%data%","education.schools[school].location");
     $(".education-entry:last").append(formattedschoolDates);  
     var formattedschoolMajor=HTMLschoolMajor.replace("%data%","education.schools[school].major");
     $(".education-entry:last").append(formattedschoolMajor);
     var formattedschoolURL=HTMLschoolURL.replace("%data%","education.schools[school].url");
     $(".education-entry:last").append(formattedschoolURL);
   for(onlineCourse in education.onlineCourses){
     $("#education-entry").append(HTMLonlineClasses);
     var formattedonlineTitle=HTMLonlineTitle.replace("%data%","education.onlineCourses[onlineCourse].name");
     $(".education-entry:last").append(formattedonlineTitle);
     var formattedonlineSchool=HTMLonlineSchool.replace("%data%",       "education.onlineCourses[onlineCourse].school");
     $(".education-entry:last").append(formattedonlineSchool);
     var formattedonlineDates=HTMLonlineDates.replace("%data%","education.onlineCourses[onlineCourse].dates");
     $(".education-entry:last").append(formattedonlinedates);    
     var formattedonlineURL=HTMLonlineURL.replace("%data%","education.onlineCourses[onlineCourse].url");
     $(".education-entry:last").append(formattedonlineURL);
     }
  }
    
 

var education={
    "schools":[
      {
      "name":"Shenyang Arospace university",
      "location":"Shenyang Arospace university",
      "degree":"Electronic Engnnering",
      "majors":["wireless technology"],
      "dates":"1985-1989",
      "url":"http://en.sau.edu.cn/"
       },
       {
      "name":"beijing international studies university",
      "location":"Shenyang international studies university",
      "degree":"None",
      "majors":["English"],
      "dates":"1994",
      "url":"http://en.bisu.edu.cn/"
       }
      ],
      "onlineCourses":[
       {
       "title":"HTML",
       "school":"Udacity",
       "dates":"now",
       "url":"http://www.classroom.udacity.com"
       },
       {
       "title":"css",
       "school":"Udacity",
       "dates":"now",
       "url":"http://www.classroom.udacity.com"
       }
      ]
     
}
    
 
 
 
 


  
 
