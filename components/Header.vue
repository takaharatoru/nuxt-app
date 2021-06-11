<template>
  <div class="header">
    <div class="logo-text">
      BookShop Review
      <span class="sub-title">〜便利な書店をご紹介〜</span>
    </div>
    <div>
      <nuxt-link class="menu" to="/shop/"> 掲載一覧 </nuxt-link>
      <nuxt-link class="menu" to="/shop/entry"> 好きなお店を登録 </nuxt-link>
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
  font-family: 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', '游明朝','Yu Mincho', '游明朝体', 'YuMincho','ＭＳ Ｐ明朝', 'MS PMincho', serif;
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
