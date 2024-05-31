<template>
  <Navbar />
  <v-container fluid class="bg-deep-purple-lighten-4" style="width: 100%;">
    <v-col>
      <v-row>

        <v-col style="display:flex;flex-direction: column; align-items: center; width:100%;" cols="12" md="6">
          <h1 style="margin: 20px;">Vagas Candidatadas</h1>
          <div style="width: 90%; margin-top: 30px;">

            <!-- AQUI TEM OS CARDS-->
            <v-col>
              <v-card color="#3A1C76" variant="outlined" class="bg-white">
                <v-card-item>
                  <div>
                    <div class="corpo-card-vaga">
                      <h2 class="mb-2">Analista de Suporte ao Usuário Júnior</h2>
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
                  <span style="font-size: 20px;">Freeline Informática</span>
                </div>
              </v-card>
            </v-col>

            <v-col>
              <v-card color="#3A1C76" variant="outlined" class="bg-white">
                <v-card-item>
                  <div>
                    <div class="corpo-card-vaga">
                      <h2 class="mb-2">Analista de Suporte ao Usuário Júnior</h2>
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
                  <span style="font-size: 20px;">Freeline Informática</span>
                </div>
              </v-card>
            </v-col>
            <!-- FIM CARD-->

          </div>
        </v-col>

        <v-col style="width:100%; height: auto;" cols="12" md="6">
          <h1 style="margin: 20px;display:flex;flex-direction: column; align-items: center; ">Maio</h1>
          <v-row >
            <v-col>
              <v-sheet style="margin: 30px; border-color:black;border-width: 1px; border-radius: 5px; height:600px"  >
                <v-calendar ref="calendar" v-model="today" :events="events" color="primary" type="month"></v-calendar>
              </v-sheet>
            </v-col>
          </v-row>
        </v-col>

      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { useDate } from 'vuetify'

export default {
  data: () => ({
    focus: '',
    events: [],
    colors: [
      'blue',
      'indigo',
      'deep-purple',
      'cyan',
      'green',
      'orange',
      'grey darken-1',
    ],
    names: [
      'Meeting',
      'Holiday',
      'PTO',
      'Travel',
      'Event',
      'Birthday',
      'Conference',
      'Party',
    ],
  }),
  mounted() {
    const adapter = useDate()
    this.fetchEvents({
      start: adapter.startOfDay(adapter.startOfMonth(new Date())),
      end: adapter.endOfDay(adapter.endOfMonth(new Date())),
    })
  },
  methods: {
    getEventColor(event) {
      return event.color
    },
    fetchEvents({ start, end }) {
      const events = []

      const min = start
      const max = end
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          title: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          allDay: !allDay,
        })
      }

      this.events = events
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>

<style lang="scss" scoped>
.nome-vaga {
  background-color: #3A1C76;
  color: white;
  width: 100%;
  text-align: center;
  padding: 10px 5px;
}

.corpo-card-vaga {
  padding: 10px 0px;
  color: #333;
}

.requisitos-vaga {
  list-style: none;
  font-size: 20px;
  margin-left: 15px;
}

.container-empresa {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 15px;
  flex-direction: row-reverse;
}

.logo-vaga {
  border: 2px solid #3A1C76;
  border-radius: 50%;
  height: 60px;
  width: 60px;
}
</style>
