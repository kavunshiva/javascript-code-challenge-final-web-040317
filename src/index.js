$(document).ready(function(){
  const postList = new PostList()
  $('#photo-list').html(postList.render()) // add ul's to photo list
  addFormListener(postList)
})

const addFormListener = (postList) => {
  $('#photo-form').submit((e) => {
    e.preventDefault()
    const url = $('input[name=image_url]').val()
    $('input[name=image_url]').val('')
    const caption = $('input[name=caption]').val()
    $('input[name=caption]').val('')
    const newPost = new Post(url, caption)
    postList.addPost(newPost)
    $('#photo-list ul').append(newPost.render())
  })
}
