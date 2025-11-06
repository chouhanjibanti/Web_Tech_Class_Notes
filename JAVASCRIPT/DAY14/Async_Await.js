// // A function that takes time to complete.

// function fetchData(){
//     return new Promise((resolve)=>{
//          setTimeout(()=>{
//             resolve("Data Fetched Succeessfully...")
//          },3000)
//     })
// }

// async function getData(){
//   console.log("fetching data.....");
//   const result = await fetchData();
//   console.log(result);
//   console.log("process completed...");
// }
// getData()


// =====================================================


// Example of Async and Await 
// Normal Synchronous function
function add(a,b){
    return a+b;
}

async function getPosts(){
   console.log("fetcing posts...");
     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
     const posts = await response.json();
     console.log("post fetched sucessfully....");
     console.log(posts);
}


async function getUsers(){
   console.log("fetching Users...");
     const response = await fetch("https://jsonplaceholder.typicode.com/users")
     const users = await response.json();
     console.log("user fetched sucessfully....");
     console.log(users);
}

async function runAll(){
    console.log("Starting process....");
    console.log("sum of 10 or 20 ", add(10,20));
    await getPosts(); // 
    await getUsers(); // waits until post are fetched

    console.log("All process are compledted");
}
runAll()





