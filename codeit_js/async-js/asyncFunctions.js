export async function printEmployees() {
    const response = await fetch("https://learn.codeit.kr/api/employees"); //fetch: return promise (pending, fulfiled, rejected)
    const data = await response.json(response); //await: wait until promise becomes fulfiled or rejected
    console.log(data);
}

//then() method

fetch("https://learn.codeit.kr/api/employees")
.then((response) => response.json())
.then((data) => console.log(data)); //promise chain