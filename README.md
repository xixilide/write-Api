# 项目描述

react-router 传参数，就是从前台的一个页面，传入到下一个页面，跟后台没有直接关系

如何发起传参：

```js
<Link to={/posts/2345}> sss </Link>
```

对应路由应该写：
```js
<Route path="/posts/:id" component={aaa}/>
```
如何在新页面中得到'2345'这个字符串呢？

```js
this.props.params.id
```

>小贴士：异步函数 Post.findById({_id: req.params.id}, function(err, post) { res.json({ post: post }) }) 上面的 findById 就是一个异步函数，异步函数的特点是，所要的结果，不能通过 返回值的形式直接得到，而要通过回调函数来获得
