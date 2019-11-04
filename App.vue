<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
let fun = () => {
  return "qiuzhanghua";
//	console.log("邱张华");
};
export default {
  data () {
		let name = fun();
    return {
      msg: name
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>