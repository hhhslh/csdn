var newAjax = new Vue({
	el:"#main",
	data:{
		list:[],
	},
	mounted: function(){
		
	},
	methods: {
		denglu: function(){
			var that = this;
			$.ajax({
				url:"http://blog.com/api/user/doLogin",
				type:"post",
				dataType: "json", 
				data:{
					'phone':$(".number").val(),
        			'password':$(".password").val(),
				},
				success: function(res){
					if(res.error_code == 0){
						alert("登录成功")
						window.location.href="./csdn.html"
						localStorage.setItem("user_id",res.data.user.userid);
						localStorage.setItem("user_img",res.data.user.userimg);
						localStorage.setItem("user_name",res.data.user.username);
					}else{
						alert("message")
					};
					
				},
				error:function(res){

				}
			})
		}
	}
})