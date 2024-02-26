<script>
export default {
    name: 'TheFooter',
}
</script>

<template>
    <footer>
        <div class="container">
            footer
        </div>
    </footer>
</template>

<style lang="scss">
footer {
    padding: 10px 20px;
    border-top: #00bd7e solid 1px;
    align-items: center;
}

@media (min-width: 1024px) {
    footer {
        padding: 10px;
    }
}
</style>