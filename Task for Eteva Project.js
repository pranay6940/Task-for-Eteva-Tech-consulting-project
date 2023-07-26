// ## Task-1 Without using Javascript Array methods
let List1 = ['Hyderabad', 'Bangalore', 'Chennai', 'Delhi', 'Pune', 'Kolkata'];
let List2 = ['Gujarat', 'Pune', 'Rajasthan', 'Bangalore', 'Vizag', 'Delhi'];

let InCitiesList1 = [];
let InCitieslist2 = [];
let sameCities = [];

//unique Cities from List1 which are not in the List2 without using Array methods
for (let i = 0; i < List1.length; i=i+1) {
    let findOut = false;
    for (let j = 0; j < List2.length; j=j+1) {
        if (List1[i] === List2[j]) {
            findOut = true;
            break;
        }
    }
    if (!findOut) 
    InCitiesList1.push(List1[i]);
}
console.log(InCitiesList1);
//unique Cities from List2 which are not in the List1 without using Array Methods
for (let i = 0; i < List2.length; i=i+1) {
    let findOut = false;
    for (let j = 0; j < List1.length; j = j+ 1) {
        if (List2[i] === List1[j]) {
            findOut = true;
            break;
        }
    }
    if (!findOut)
    InCitieslist2.push(List2[i]);
}

console.log(InCitieslist2);

//sameCities from List1 and List2 without using Array Methods
for (let i = 0; i < List1.length; i= i+1) {
    for (let j = 0; j < List2.length; j = j+1) {
        if (List1[i] === List2[j]) {
            sameCities.push(List1[i]);
            break;
        }
    }
}
console.log(sameCities);