<template> 
    <!-- TODO Ajustar para adicionar o v-for para v-col e v-row -->
    <v-row
      align="center"
      justify="center">
      <v-col
        cols="12"
        md="4"
        sm="6"
        lg="3">
        <v-card
            color="#3A1C76"
            variant="outlined"
            class="mx-auto"
          >
            <v-card-item class="card-vaga">
              <div>
                <div class="mb-1 nome-vaga">
                  Analista de Suporte ao Usuário Júnior
                </div>
                <div class="corpo-card-vaga">
                  <div class="text-caption">
                    <ul class="requisitos-vaga">
                      <li><strong>Localização:</strong> Freeline Informática - Joinville, SC</li>
                      <li><strong>Tipo de Contrato:</strong> CLT</li>
                      <li><strong>Modalidade de Trabalho:</strong> Presencial</li>
                      <li><strong>Remuneração: </strong> Salário compatível com a função + Benefícios</li>
                    </ul>
                  </div>
                </div>
              </div>
            </v-card-item>
            <div class="my-2 container-empresa">
              <img class="logo-vaga" src="https://picsum.photos/seed/picsum/150/150" alt="logo">
              <span>Freeline Informática</span>
            </div>
          </v-card>
      </v-col>
    </v-row>
</template>

<style lang="scss" scoped> 
  .card-vaga {
    padding: 0 !important;
  }

  .nome-vaga {
    background-color: #3A1C76;
    color: white;
    width: 100%;
    text-align: center;
    padding: 10px 5px;
  }

  .corpo-card-vaga{
    padding: 10px 16px;
    color: #333;
  }

  .requisitos-vaga {
    list-style: none;
    font-size: 15px;
  }

  .container-empresa {
    display: flex; 
    justify-content: start; 
    align-items: center; 
    gap: 20px; 
    margin: 0 10px;
  }

  .logo-vaga {
    border: 2px solid #3A1C76;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }
</style>