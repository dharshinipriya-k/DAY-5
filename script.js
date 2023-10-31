//ITERATE OVER ALL FOR LOOPS

const marks = [
    
        { "Tamil": "96",
        "English": "97",
        "Maths": "96",
        "Science": "95",
        "Social": "93"
       },
    
 {
        "Tamil": "99",
        "English": "87",
        "Maths": "99",
        "Science": "93",
        "Social": "94"
         }
 
        
]

//FOR LOOP
console.log("-------------USING FOR LOOP-----------");
for(var i=0; i<marks.length; i++)
{
    console.log(marks[i]);
    //console.log(marks[i]);
}

//FOR IN LOOP
console.log("-------------USING FOR IN LOOP-----------");
for(var key in marks)
{
    console.log(marks[key]);
}

//FOR OF LOOP
console.log("-------------USING FOR OF LOOP-----------");
for(var key1 of marks)
{
    console.log(key1);
}

//RESUME IN JSON FORMAT
console.log("------------Resume data in JSON Format---------------------");

const resume = {
    "Name" : "Priyadharshini",
    "age"  : 22,
    "gender": "F",
    "education": [10,12,"BE"],
    "Designation": "Full Stack Developer",
    "Passed_out": 2022
}

for(let obj in resume)
{
console.log(obj,resume[obj]);
}