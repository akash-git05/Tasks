let resumeData = {
    "name": "Akash M",
    "title": "Software Engineer",
    "email": "akashinrealtime@gmail.com",
    "phone": "+91 9150731073",
    "github": "https://github.com/akash-git05",
    "qualification":"Diploma in computer science" ,
    "location": "Avadi,Chennai-600054"
    };
//for the above json iterating using for loop

for (let i = 0; i < resumeData.length; i++) {
    console.log(i + " : " + resumeData[i]);
}