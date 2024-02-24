<script setup lang="ts">

</script>


<template>
  <header>
    <div class="container">
      <div class="header_nav-wrapper">
        <nav>
          <nuxt-link to="/">Главная</nuxt-link>
          <nuxt-link to="/settings">Настройки</nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  padding: 10px 0;
  border-bottom: #00bd7e solid 1px;
  align-items: center;
}

header {
  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
  }

  nav a.nuxt-link-exact-active {
    color: #00bd7e;
    text-decoration: underline;

  }

  nav a.nuxt-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    color: #00bd7e;
    text-decoration: none;
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid #00bd7e;
  }

  nav a:first-of-type {
    padding-left: 0;
    border: 0;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header {

    .container {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
      align-items: center;
    }

    nav {
      text-align: left;
      font-size: 2rem;
    }
  }
}
</style>
