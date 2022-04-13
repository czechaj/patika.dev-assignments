import axios from 'axios'

export default async (user_id) => { 
    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    
    console.log("user", user, "posts", posts)
}


















//Method1
// const user = (user_id) => {
//     return new Promise(async(resolve,reject) => {
//         const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
//         resolve(user)
//     })
// } 

// const posts = (user_id) => {
//     return new Promise(async(resolve,reject) =>{
//         const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
//         resolve(posts)
//     })}


// export default (async() => {
//     await user(1)
//     .then((user) => console.log("user",user))
//     .catch((e)=>{console.log(e)})

//     await posts(1)
//     .then((posts) => console.log("posts",posts))
//     .catch((e)=>{console.log(e)})
// })()







//Method2
// export default async(user_Id) => {

//     const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${user_Id}`);
//     const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_Id}`);

//     return {...user, ...posts}
// }


