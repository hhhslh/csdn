# csdn
####项目使用的渲染技术是Vue，与后端交互
*登录 注册
*查看文章详情
*收藏文章（取消收藏文章））
*发布博客
*编辑修改发布的博客
*删除发布的博客
*管理我的信息：收藏的文章等
####1、登录 注册<br>
*可以从主页或详情页的“登录”按钮进入登录页面denglu.html，如果还未注册过账号，点击登录页面的立即注册进入注册页面zhuce.html，<br>
####a.注册
*注册时，用户需要提供自己的"用户名"、"手机号"、"密码"，然后点击注册按钮，触发注册事件。
在zhuce.html绑定一个点击事件@click="zhuce",然后调用zhuce();填写信息合理即注册成功
、、、
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
、、、
####b.登录
*登录与注册同理
##### 注册登录后保存用户信息到本地（用户名、id）,以供后面的收藏文章，发布博客等使用。
