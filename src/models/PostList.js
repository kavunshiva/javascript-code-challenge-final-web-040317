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
