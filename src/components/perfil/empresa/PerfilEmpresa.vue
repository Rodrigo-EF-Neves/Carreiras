<template>
    <Navbar/>
    <v-container fluid="true">
        <div class="empresa-info">
            <div class="capa"></div>
            <div class="pos-capa">

            </div>
            <div class="empresa-imagem">

            </div>
        </div>
        <div>
            <CardVaga/>
        </div>
    </v-container>
</template>

<script>
//
</script>

<style lang="scss" scoped>
.empresa-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
}

.capa {
    height: 200px;
    background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.pos-capa {
    height: 200px;
    background-color: #E1D6F6;
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
</style>