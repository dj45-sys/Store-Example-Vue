<template>
  <div class="cover-container">
    <img
      src="https://images.prismic.io/digitalocean/0b619d51-a723-4748-997f-39ed5697a540_intro-to-cloud.jpg"
      class="img"
      alt="Cover"
    />
    <h1>Welcome</h1>
    <p>Go to Store Page :3</p>
  </div>
</template>
<script>
export default {
  name: "Cover",
};
</script>
<style>
.cover-container{
    height: 100vh;
    width: 100%;
    object-fit: contain;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.img{
  object-fit: cover;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
}
.cover-container > h1{
    color: white;
    font-size: 100px;
}
.cover-container > p {
    margin-top: 8px;
    color: white;
    font-size: 32px;
}
</style>
