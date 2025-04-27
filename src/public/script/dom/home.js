const createNewPostLink = document.querySelector(".createNewPostLink")
const createNewPostImage = document.querySelector(".createNewPostLink img");
const accessContLink = document.querySelector(".accessContLink")
const accessContLinkImage = document.querySelector(".accessContLink img" )
// simplismente fazer a mesma coisa que fez para o add post

createNewPostLink.addEventListener("mouseenter",(evt)=>{
    createNewPostImage.src = "/assets/images/headerImages/addHover.png"
})
createNewPostLink.addEventListener("mouseleave",()=>{
    createNewPostImage.src = "/assets/images/headerImages/add.png"
})

accessContLink.addEventListener("mouseenter", (evt)=>{
    accessContLinkImage.src = "/assets/images/headerImages/contaHover.png"
})
accessContLink.addEventListener("mouseleave", (evt)=>{
    accessContLinkImage.src = "/assets/images/headerImages/conta.png"
})

