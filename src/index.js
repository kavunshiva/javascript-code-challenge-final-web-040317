$(document).ready(function(){
  const postList = new PostList()
  $('#photo-list').html(postList.render()) // add ul's to photo list
  addFormListener(postList)
})

const addFormListener = (postList) => {
  $('#photo-form').submit((e) => {
    e.preventDefault()
    const url = $('input[name=image_url]').val()
    const caption = $('input[name=caption]').val()
    const newPost = new Post(url, caption)
    postList.addPost(newPost)
    $('#photo-list ul').append(newPost.render())
  })
}

class PostList {
  constructor(){
    this.array = []
  }

  all(){
    return this.array
  }
  addPost(post){
    this.array.push(post.render())
  }
  render(){
    return `<ul>${this.array}</ul>`
  }
}

class Post {
  constructor(url, caption){
    this.url = url
    this.caption = caption
  }
  render(){
    return `<li><img src="${this.url}" width=350px><br/>${this.caption}<br/><br/></li>`
  }
}
