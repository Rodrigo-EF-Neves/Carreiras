<template>
    <div class="div-capa-foto">
        <div class="capa"></div>
        <div class="pos-capa"></div>
        <div class="div-foto-perfil">
            <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                class="foto-perfil" alt="Foto de Perfil">
            <h3>Nome do Elemento</h3>
            <h4>Desenvolvedor Full Stack</h4>
            <!-- <button class="mdi mdi-square-edit-outline botton-edit"></button> -->
            <div class="text-center div-button-edit">
                <v-dialog v-model="dialog" max-width="600">
                    <template v-slot:activator="{ props: activatorProps }">
                        <button class="text-none font-weight-regular mdi mdi-square-edit-outline" variant="tonal"
                            v-bind="activatorProps"></button>
                    </template>

                    <v-card prepend-icon="mdi-account" title="Editar Perfil">
                        <v-card-text>
                            <v-row dense>
                                <v-col cols="12" md="12">
                                    <v-text-field label="Nome Completo*" required></v-text-field>
                                </v-col>

                                <v-col cols="12" md="12">
                                    <v-text-field label="Profissão*" required></v-text-field>
                                </v-col>

                                <v-col cols="12" md="12">
                                    <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp"
                                        label="Foto de perfil" placeholder="Foto de perfil" prepend-icon="mdi-camera">
                                    </v-file-input>
                                </v-col>

                                <v-col cols="12" md="12">
                                    <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp"
                                        label="Foto de capa" placeholder="Foto de capa" prepend-icon="mdi-camera">
                                    </v-file-input>
                                </v-col>

                            </v-row>

                            <small class="text-caption text-medium-emphasis">*indicates required field</small>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn text="Fechar" variant="plain" @click="dialog = false"></v-btn>

                            <v-btn color="Enviar" text="Salvar" variant="tonal" @click="dialog = false"></v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mdi{
    color: grey;
}

.div-capa-foto {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

    .capa {
        height: 200px;
        background-image: url("https://empresas.infoempleo.com/hrtrends/media/2017/10/Compromiso-empleados.jpg");
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        width: 100%;
        border-radius: 15px;
    }

    .pos-capa {
        height: 200px;
        width: 100%;
        display: flex;
        justify-content: end;
    }

    .div-foto-perfil {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        position: absolute;
        gap: 5px;

        .foto-perfil {
            width: 150px;
            height: 150px;
            border-radius: 100%;
            border: 2px solid #6832D2;
        }

        h3,
        h4 {
            margin: 0;
        }

        h3 {
            color: #333;
        }

        h4 {
            font-size: 13px;
            color: #6832D2;
            text-transform: uppercase;
        }

        .div-button-edit {
            border-radius: 100%;
            height: 50px;
            width: 50px;
            // border: 1px solid red;
            position: absolute !important;
            right: 0;
            top: 110px;
        }
    }
}
</style>

<script>
export default {
    data: () => ({
        dialog: false,
    }),
}
</script>