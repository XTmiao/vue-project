<template>
	<!-- <form>
	    <div>
	    	<label for="email">邮箱</label>
	    	<input type="text" name="email">
	    </div>
	    <div><label for="mobile">手机</label><input type="text" name="mobile"></div>
	    <div><label for="password">密码</label><input type="text" name="password"></div>
	    <div><label for="repassword">确认密码</label><input type="text" name="repassword"></div>
	    <div><label for="name">中文名</label><input type="text" name="name"></div>
	    <div><label for="country">国籍</label><input type="text" name="country"></div> 
	</form>-->
	    <div class="box">
		    <label class="label" for="email">Email</label>
		    <p class="control">
		        <input v-validate data-rules="required|email" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
		        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
		    </p>
		</div>
	
</template>

<script>
	//import VeeValidate, { Validator } from 'vee-validate'
	//import messages from 'assets/js/zh_CN';
    export default {

    }
</script>

<style scoped>
	.box{position: fixed; top: 30%; right: 30%; width: 200px; height: 100px; z-index: 100; background: red;}
</style>
