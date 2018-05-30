# csdn
#### 项目使用的渲染技术是Vue，与后端交互。
* 登录 注册；
* 查看文章详情；
* 收藏文章（取消收藏文章）；
* 发布博客；
* 编辑修改发布的博客；
* 删除发布的博客；
* 管理我的信息：收藏的文章等；
#### 1、登录 注册<br>
* 可以从主页或详情页的“登录”按钮进入登录页面denglu.html，如果还未注册过账号，点击登录页面的立即注册进入注册页面zhuce.html。<br>
##### a.注册(zhuce.html)
* 注册时，用户需要提供自己的"用户名"、"手机号"、"密码"，然后点击注册按钮，触发注册事件。<br>
  在zhuce.html绑定一个点击事件@click="zhuce",然后调用zhuce();填写信息合理即注册成功。
```
zhuce: function(){
	var that = this;
	$.ajax({
		url:"http://blog.com/api/user/doReg",
		type:"post",
		data:{
		      'phone':$(".number").val(),
	              'password':$(".password").val(),
	              'uname':$(".username").val(),
        	     },
		dataType: "json",
		success: function(res){
			if(res.error_code == 0){
			     alert("注册成功")
			}else{
			     alert("message")
			};
		},
		error:function(res){
		}
	})
 }
```
##### b.登录(denglu.html)
* 登录与注册同理。
##### 注册登录后保存用户信息到本地（用户名、id）,以供后面的收藏文章，发布博客等使用。
#### 2、查看文章详情(xiangqing.html)
* 查看详情需要知道文章的id，从首页传一个文章的文章id号（id），然后根据文章id号取到文章内容。
#### 3、收藏文章（取消收藏文章）
##### a.收藏文章
* 在详情页绑定一个点击事件@click="collect",点击页面上的收藏按钮，触发收藏事件。
* 因为进入详情页就获得了文章的id号，然后调取收藏接口，收藏成功，将收藏成功的文章放入list.html列表中。<br>
```
collect: function(){
	var that = this;
	$.ajax({
		url:"http://blog.com/api/collect/add",
		type:"post",
		data:{
			user_id:window.localStorage.user_id,
			blog_id:window.location.search.split("=")[1],
		     },
		dataType:"json",
		success:function(res){
		       if( res.error_code == 0){
			      that.$refs.collects.innerHTML="已收藏";
			}else{
			      that .$refs.collects.innerHTML="收藏";
			}
		},
		error:function(res){

		}
	})
},
```
##### b.取消收藏文章
* 在详情页面，点击"已收藏"按钮，取消收藏，原理同收藏博客。
#### 4、发布博客
* 可以xiangqing.html页面点击"写博客"，进入release.html；
* 进入之后，用户需要输入标题，内容和选择博客分类;
* 内容使用百度编辑器完成，用户可以根据自己的需要随心设置文章的样式。<br>
  用getUeditorContent()函数获得百度编辑器的内容
```
getUeditorContent: function(){
	return UE.getEditor('editor').getContent();
}
```
* 编辑完成之后点击"发布"按钮，完成发布博客。
#### 5、编辑修改发布的博客
* 进入release-list.html页面，点击"编辑"按钮，回到release.html页面（编辑接口进来的时候带着文章的id号），在发布文章界面需要判断一下是否有文章id，如果有，就根据文章id找到那篇文章，然后把标题，内容和文章分类赋值到页面上，进行修改，之后点击"编辑成功"，即完成编辑修改。
#### 6、删除发布的博客
* 进入release-list.html页面，点击"删除"按钮。删除成功，减少一条博客。


