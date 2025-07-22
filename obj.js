const dict={
    name:"abhijit dutta",
    age:21,
    dob:'29-12-2003',
    phone_num:9875870115,
    unmarried:true
}
console.log(dict);
console.log(typeof dict.unmarried);

let data={
    name:["dude","mynigga","aditya","amrit","devanshu","amar","aniket","abhinabo","debjit","souvik"],
    position:["employee","employee","employee","employee","employee","employee","employee","employee","employee","employee"],
    date_of_join:["12-04-2003","02-03-2013","12-01-2015","09-12-2016","12-01-2015","15-09-2014","23-12-2019","17-07-2014","09-12-2021","23-05=2021"],
    age:[45,48,28,34,43,44,25,29,30,47],
    experiance_plus_5yrs:[true,true,true,true,false,true,true,true,false,false]
}
console.log(data);
console.log(data.name[3],data.position[3],data.date_of_join[3],data.age[3],data.experiance_plus_5yrs[3]);

for (let index = 0; index < data.name.length; index++) {
    const element = data.name[index];
    console.log(element);
    
}
