<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
let fun = () => {
	console.log("邱张华");
};
export default {
  data () {
		fun();
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>