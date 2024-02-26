<script>
export default {
    name: 'SettingsPage',
    data() {
        return {
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="settings_container">
            <CardAddBlock></CardAddBlock>
            <CardListSettings></CardListSettings>
        </div>
    </div>
</template>
<style>
.settings_container {
    margin: 20px auto;
}

@media only screen and (max-width: 600px) {
    .settings_container {
        margin: 10px auto;
    }
}
</style>