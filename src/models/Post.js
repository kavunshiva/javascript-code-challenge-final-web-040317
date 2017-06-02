class Post {
  constructor(url, caption){
    this.url = url
    this.caption = caption
  }
  render(){
    return `<li><img src="${this.url}" width="350px"><br/>${this.caption}<br/><br/></li>`
  }
}
