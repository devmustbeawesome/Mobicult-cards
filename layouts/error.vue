<script>
export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
}
</script>
<template>
    <div class="error_block">
        <h1 class="error_title" v-if="error.statusCode === 404">Page not found</h1>
        <h1 class="error_title" v-else>An error occurred - {{ error.statusCode }} </h1>
        <NuxtLink to="/">Home page</NuxtLink>
    </div>
</template>
<style>
.error_block {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
</style>

