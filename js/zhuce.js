var newAjax = new Vue({
	el:"#main",
	data:{
		list:[],
	},
	mounted: function(){
	},
	methods: {
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
	}
})
