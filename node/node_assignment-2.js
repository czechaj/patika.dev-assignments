// Post Sıralama ve Post Ekleme
// Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.


const argument = process.argv.slice(2)
let yourPost = { message: argument[0] }

const posts = [
    { title: "title1", message: "post1" },
    { title: "title2", message: "post2" },
    { title: "title3", message: "post3" },
    { title: "title4", message: "post4" },
]

const listPosts = () => {
    console.log("________________")
    console.log("POSTS")
    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].message)
    }
    console.log("________________")
}

const newPost = (post) => {
    return new Promise((resolve, reject) => {
        if (post) {
            posts.push(post)
            resolve(post)
        }
        else {
            reject(err)
        }
    }
    )
}


const finalFunc = async () => {

    try {
         await listPosts();
         await newPost(yourPost);
         await listPosts()
    }
    catch (err) { console.log(err) }
}

finalFunc()