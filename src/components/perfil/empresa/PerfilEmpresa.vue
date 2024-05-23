<template>
    <Navbar/>
    <v-container>
        <div class="perfil-info">
            <div style="width: 100%">
                <v-img
                    :width="300"
                    aspect-ratio="16/9"
                    cover
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                ></v-img>
            </div>
            <div>
                 <img class="logo-perfil-empresa" src="https://picsum.photos/seed/picsum/150/150" alt="logo">
            </div>
        </div>
    </v-container>
</template>

<script>
//
</script>

<style lang="scss" scoped>
.logo-perfil-empresa {
    border-radius: 50%;
}
</style>