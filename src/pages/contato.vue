<script setup lang="ts">
import { ref } from 'vue'

const url = 'https://formsubmit.co/ajax/sistematico@gmail.com'
const name = ref('')
const email = ref('')
const message = ref('')
const status = ref('')
const sending = ref(false)
const sended = ref(false)
const nameH = ref('Digite um nome com 3 caracteres ou mais.')
const emailH = ref('Não compartilharei seu e-mail com ninguem.')
const messageH = ref('Digite uma mensagem com 5 caracteres ou mais.')
const nameValid = ref(false)
const emailValid = ref(false)
const messageValid = ref(false)

// fetch("https://formsubmit.co/ajax/your@email.com", {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

const validateName = () => {
  if (name.value.length < 3) {
    nameH.value = 'Digite um nome com 3 caracteres ou mais.'
    nameValid.value = false
  } else {
    nameH.value = ''
    nameValid.value = true
  }
}

const validateEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailH.value = 'Não compartilharei seu e-mail com ninguem.'
    emailValid.value = true
  } else {
    emailH.value = 'Digite um e-mail válido.'
    emailValid.value = false
  }
}

const validateMessage = () => {
  if (message.value.length < 5) {
    messageH.value = 'Digite uma mensagem com 5 caracteres ou mais.'
    messageValid.value = false
  } else {
    messageH.value = ''
    messageValid.value = true
  }
}

const submit = async () => {
  try {
    sending.value = true
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value })
    })

    console.log('Raw Response: ' + res)

    if (!res.ok) {
      sending.value = false
      status.value = `Erro: ${res.status} - ${res.statusText}`
      return
    }

    const responseData = await res.json()
    sending.value = false
    sended.value = true
    console.log('JSON Response: ' + responseData)

    status.value = `Successo: ${res.status} - ${res.statusText}`
  } catch (err) {
    sending.value = false
    throw err
  }
}
</script>
<template>
  <Section>
    <div class="row">
      <div class="col-md-8">
        <h1 class="mt-5 fw-bold" v-if="!sended">Entre em contato</h1>
        <h1 class="mt-5 fw-bold" v-else>Obrigado!</h1>

        <div class="alert alert-dark alert-dismissible fade show" role="alert" v-if="status">
          {{ status }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" v-if="!sended"></button>
        </div>

        <form @submit.prevent="submit" v-if="!sended">
          <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input v-model="name" type="text" class="form-control shadow-none" @input="validateName" />
            <div class="form-text">{{ nameH }}</div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input v-model="email" type="email" class="form-control shadow-none" @input="validateEmail" />
            <div class="form-text">{{ emailH }}</div>
          </div>

          <div class="mb-3">
            <label for="mensagem" class="form-label">Mensagem</label>
            <textarea v-model="message" class="form-control shadow-none" rows="3" @input="validateMessage"></textarea>
            <div class="form-text">{{ messageH }}</div>
          </div>

          <button ref="submitBtn" type="submit" class="btn btn-primary" :disabled="sending || !nameValid || !emailValid || !messageValid" v-if="!sending">
            <font-awesome-icon icon="fa-solid fa-paper-plane" />
            Enviar
          </button>
          <button class="btn btn-primary" type="button" disabled v-else>
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Enviando...</span>
          </button>
        </form>
      </div>
      <div class="col-md-4">
        <lottie-email />
      </div>
    </div>
  </Section>
</template>
