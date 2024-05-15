<template>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Senha"
      ></v-text-field>

     <template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn density="compact">Compact Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn density="comfortable">Comfortable Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn density="default">Default Button</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
    </v-form>
  </v-sheet>
</template>

<script>
</script>