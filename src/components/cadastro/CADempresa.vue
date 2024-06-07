<template>
  <v-container fluid class="signup-container fill-height">
    <v-row style="margin: 0;" justify="center" align="center">
      <v-col cols="12" sm="9" md="10" lg="11">
        <div class="logo-container text-center">
          <img class="carreiras-logo" src="/src/assets/Logo_branco.png" alt="Logo do Carreiras">
        </div>
        <v-card class="px-4 elevation-12 signup-card" rounded="xl">
          <v-card-text>
            <h1 class="text-center my-1">Cadastro</h1>
            <v-form class="my-4" @submit.prevent>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="razaoSocial"
                    :rules="razaoSocialRules"
                    label="Razão social"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                  <v-text-field
                    v-model="nomeFantasia"
                    :rules="nomeFantasiaRules"
                    label="Nome fantasia"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="Email"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                    <v-text-field
                      v-model="telefone"
                      :rules="telefoneRules"
                      label="Telefone"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3" md="3" lg="3">
                    <v-text-field
                      v-model="celular"
                      :rules="celularRules"
                      label="Celular"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                  </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="3" md="3" lg="3">
                   <v-text-field
                      v-model="cnpj"
                      :rules="cnpjRules"
                      label="CNPJ"
                      bg-color="#F7F7F7"
                      density="compact"
                   ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                   <v-text-field
                      v-model="inscricaoEstadual"
                      :rules="inscricaoEstadualRules"
                      label="Inscrição estadual"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="4" md="4" lg="4">
                   <v-text-field
                      v-model="cep"
                      :rules="cepRules"
                      label="CEP"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="2" md="2" lg="2">
                   <v-text-field
                      v-model="numero"
                      :rules="numeroRules"
                      label="Nº"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6">
                   <v-text-field
                      v-model="complemento"
                      :rules="complementoRules"
                      label="Complemento"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                </v-col>
                <v-col>
                   <v-text-field
                      v-model="endereco"
                      :rules="enderecoRules"
                      label="Endereço"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="3" md="3" lg="3">
                   <v-text-field
                      v-model="bairro"
                      :rules="bairroRules"
                      label="Bairro"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" md="3" lg="3">
                   <v-text-field
                      v-model="cidade"
                      :rules="cidadeRules"
                      label="Cidade"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                   <v-select
                    v-model="estado"
                    :rules="estadoRules"
                    :items="items"
                    label="Estado"
                    bg-color="#F7F7F7"
                    density="compact"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      v-model="responsavelLegal"
                      :rules="responsavelLegalRules"
                      label="Responsável legal"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                    <v-text-field
                      v-model="responsavelAdm"
                      :rules="responsavelAdmRules"
                      label="Responsável administrativo (RA)"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                </v-col>
                <v-row>
                  <v-col cols="12" sm="6" md="6" lg="6">
                      <v-text-field
                        v-model="contatoRA"
                        :rules="contatoRARules"
                        label="Contato RA"

                        bg-color="#F7F7F7"
                        density="compact"
                      ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3" md="3" lg="3">
                    <v-text-field
                      v-model="senha"
                      :rules="senhaRules"
                      label="Senha"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3" md="3" lg="3">
                    <v-text-field
                      v-model="repSenha"
                      :rules="repSenhaRules"
                      label="Repetir senha"
                      bg-color="#F7F7F7"
                      density="compact"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-row>
              <div class="sign-in-buttons d-flex justify-center my-4">
                <v-btn class="adm-button bg-purple-darken-4 mt-4 mb-2" size="large">Salvar</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      razaoSocial: '',
      nomeFantasia: '',
      email: '',
      telefone: '',
      celular: '',
      cnpj: '',
      inscricaoEstadual: '',
      cep: '',
      numero: '',
      complemento: '',
      endereco: '',
      bairro: '',
      cidade: '',
      estado: '',
      responsavelLegal: '',
      responsavelAdm: '',
      contatoRA: '',
      senha: '',
      repSenha: '',
      razaoSocialRules: [(v) => !!v || 'A razão social é obrigatória'],
      nomeFantasiaRules: [(v) => !!v || 'O nome fantasia é obrigatório'],
      estadoRules: [(v) => !!v || 'O estado é obrigatório'],
      senhaRules: [(v) => !!v || 'A senha é obrigatória'],
      items: [
        'Amazonas', 
        'Amapá',
        'Santa Catarina', 
        'Paraná', 
        'Rio Grande do Sul', 
        'São Paulo'
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.signup-container {
  background-color: #6832D2 !important;
  height: 100% !important;
}

.signup-card {
  margin: 0 auto; 
  width: auto; 
  max-width: 1000px;
}

.v-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-container {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carreiras-logo {
  height: auto;
  width: 210px;
  margin: 0 10px;
}

.sign-in-buttons {
  margin-top: 20px;
}

.adm-btn {
  border: thin solid #3a1c76 !important;
  color: #3a1c76 !important;
}
</style>