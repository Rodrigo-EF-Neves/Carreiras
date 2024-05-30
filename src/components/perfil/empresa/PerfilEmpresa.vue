<template>
    <Navbar/>
    <v-container fluid="true">
        <div class="empresa-info">
            <div class="capa"></div>
            <div class="pos-capa">            
                <div class="empresa-descricao">
                    <img class="perfil-foto" src="https://picsum.photos/seed/picsum/150/150" alt="Foto de perfil">
                    <div>
                        <h1>Nome fantasia</h1>
                        <span>Localização</span>
                    </div>
                </div>
            </div>
                <div class="empresa-texto">
                    <p>Em um circo cheio de diversão, lhamas fofas estão super felizes! Com seus tutus coloridos e sorrisos brilhantes, elas começam a dançar balé. Saltitam de um lado para o outro, fazendo piruetas engraçadas e rodopiando com a maior alegria. O público ri e aplaude enquanto as lhamas deslizam pelo picadeiro, mostrando que até mesmo os animais podem ser estrelas da dança! lalalalala.</p>
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
// *{
//     border: 1px solid red;
// }
.empresa-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    position: relative;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    gap: 10px;
}

.empresa-descricao {
    display: flex;
    align-items: center;
    width: 45%;
    gap: 20px;
    padding: 0 20px;
}

.empresa-texto {
    width: 60%;
}

.perfil-foto {
    border: 2px solid #3A1C76;
    border-radius: 50%;
}

@media (max-width: 800px) {
    .empresa-info {
        padding: 0;
        margin-bottom: 30px;
        position: relative;
    }

    .pos-capa {
        flex-direction: column;
        height: fit-content;
        padding: 10px 5px;
    }

    .empresa-descricao {
        flex-direction: column;
        text-align: center;
        width: fit-content;
        gap: 10px;
        padding: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .empresa-texto {
        width: 90%;
        text-align: justify;
    }
}
</style>