function bubble(students){
    let n=students.length
    for(i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            if(students[j].age>students[j+1].age){
                let temp=students[j];
                students[j]=students[j+1];
                students[j+1]=temp;
            }
        }
    }
    return students;
}
let students = [
    { name: "Hari", age: 22, mark: 85 },
    { name: "Keerthi", age: 20, mark: 90 },
    { name: "Priya", age: 21, mark: 88 },
    { name: "Arun", age: 23, mark: 70 }
];

console.log(bubble(students));
