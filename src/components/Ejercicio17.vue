<template lang="">

  <div class="teal">
    <h1>{{title}}</h1> 
    <ul v-for="post in posts" :post="post">
      <li>
        <h3>{{ post.title }}</h3>
      </li>
      
      <li>
        <p>{{ post.body }}</p>
      </li>
      <hr>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Este es el 17vo ejercicio",
      posts: [],
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.posts = data;
      });
  },
  props: {
    post: Object,
  },
};
</script>

<style>
h1{
  color: black;
  text-align: center;
  background-color: white;
}
h3 {
  color: black;
  text-align: center;
}
p {
  color: white;
}
</style>