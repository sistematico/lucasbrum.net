<script setup lang="ts">
import { ref } from 'vue'

const url = 'https://formsubmit.co/ajax/sistematico@gmail.com'
const name = ref('Anônimo')
const email = ref('')
const message = ref('')
const status = ref('')
const nameH = ref('Não compartilharei seu e-mail com ninguem.')
const emailH = ref('Não compartilharei seu e-mail com ninguem.')
const messageH = ref('Não compartilharei seu e-mail com ninguem.')
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
        nameH.value = 'Digite um e-mail válido.';
        nameValid.value = false
    } else {
        nameValid.value = true
        nameH.value = 'Não compartilharei seu e-mail com ninguem.';
    }
}

const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        emailH.value = 'Digite um e-mail válido.';
        emailValid.value = false
    } else {
        emailValid.value = true
        emailH.value = 'Não compartilharei seu e-mail com ninguem.';
    }
}

const validateMessage = () => {
    if (message.value.length < 5) {
        messageH.value = 'Digite um e-mail válido.';
        nameValid.value = false
    } else {
        nameValid.value = true
        messageH.value = 'Não compartilharei seu e-mail com ninguem.';
    }
}

const submit = async () => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value })
    })

    console.log("Raw Response: " + res)

    if (!res.ok) {
      status.value = `Erro: ${res.status} - ${res.statusText}`
      return
    }

    const responseData = await res.json()
    console.log("JSON Response: " + responseData)
    
    status.value = `Successo: ${res.status} - ${res.statusText}`;    
  } catch (err) {
    throw err
  }
}
</script>
<template>
  <Section>
    <div class="row">
      <div class="col-md-8">
        <h1 class="mt-5 fw-bold">Entre em contato</h1>

        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="status">
          {{ status }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <form @submit.prevent="submit">
          <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input v-model="name" type="text" class="form-control" id="nome" @blur="validateName" />
            <div class="form-text">{{ nameH }}</div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input v-model="email" type="email" class="form-control" id="email" @blur="validateEmail" />
            <div class="form-text">{{ emailH }}</div>
          </div>

          <div class="mb-3">
            <label for="mensagem" class="form-label">Mensagem</label>
            <textarea v-model="message" class="form-control" id="mensagem" rows="3" @blur="validateMessage"></textarea>
            <div class="form-text">{{ messageH }}</div>
          </div>

          <button ref="submitBtn" type="submit" class="btn btn-primary" :disabled="nameValid || emailValid || messageValid">
          <!-- <button ref="submitBtn" type="submit" class="btn btn-primary"> -->
            <font-awesome-icon icon="fa-solid fa-paper-plane" />
            Enviar
          </button>
        </form>
      </div>
      <div class="col-md-4">
        <lottie-email />
      </div>
    </div>
  </Section>
</template>
