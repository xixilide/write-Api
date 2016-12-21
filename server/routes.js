const Post = require('./models/post');

module.exports = function(app) {
  app.get('/', function(req, res){
    res.send('hello world')
  })

  app.get('/posts', function(req, res) {
    Post.find().exec(function(err, posts) {
      res.json({ posts })
    });
  });
//保存提交时用post
  app.post('/posts', function (req,res) {
    let content = req.body.content;
    let title = req.body.title;
    const post = new Post({title: title, content: content});
    console.log(req.body);
    post.save(function(){
      console.log('post saved!');
    });
  })

//得到一篇文章用get
  app.get('/posts/:id', function(req, res){
    Post.findById({_id: req.params.id},function (err,post) {
      res.json({ post : post})
    })
  })
//更新
  app.put('/posts/:id', function(req, res){

    res.send('update a post!');
  })

  app.delete('/posts/:id', function(req, res){
    res.send('delete a post!');
  })
}
