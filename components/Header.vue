<template>
  <div class="header">
    <div class="logo-text">
    <nuxt-link class="title" to="/">
      Self Review
      </nuxt-link>
      <span class="sub-title">〜描いた作品を自己採点〜</span>
    </div>
    <div>
      <nuxt-link class="menu" to="/shop/"> 掲載一覧 </nuxt-link>
      <nuxt-link class="menu" to="/shop/entry"> 描いた作品を登録 </nuxt-link>
    </div>
  </div>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cccccc;
}

.logo-text {
  font-family: 'Skia-Regular_Black',sans-serif;
  font-size: 50px;
  padding: 12px 24px;
}

.sub-title {
  font-size: 18px;
  margin-left: 8px;
}

@media screen and (max-width: 767px) {
  .logo-text {
    font-size: 30px;
  }

  .sub-title {
    display: none;
  }
}
.title{
  text-decoration: none;
  color: black;
}

.menu {
  color: #364e96;
  border: solid 3px #364e96;
  padding: 0.5em;
  border-radius: 0.5em;
  display: inline-block;
  text-decoration: none;
  margin-right: 20px;
}
.menu:hover{
  color: #fff;
  background: #000;

}
</style>
