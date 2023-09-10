<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const formURL = 'https://www.formbackend.com/f/ee96f8fb88dbbda7'

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })

  return response.json()
}

const submit = async () => {
  try {
    const res = await postData(formURL, { name, email, message })
    // const res = await fetch(`${formURL}`)

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`
      throw new Error(message)
    }

    // const data = await res.json()
    // const response = await res

    console.log(res)
  } catch (err) {
    console.error(err)
  }
}
</script>
<template>
  <Section>
    <div class="row">
      <div class="col-md-8">
        <h1 class="mt-5 fw-bold">Entre em contato</h1>

        <form @submit.prevent="submit">
          <div class="mb-3">
            <label for="nome" class="form-label">Nome</label>
            <input v-model="name" type="text" class="form-control" id="nome" />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">E-mail</label>
            <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">Não compartilharei seu e-mail com ninguem.</div>
          </div>

          <div class="mb-3">
            <label for="mensagem" class="form-label">Mensagem</label>
            <textarea v-model="message" class="form-control" id="mensagem" rows="3"></textarea>
          </div>

          <button type="submit" class="btn btn-primary" :disabled="name === '' || email === '' || message.length < 10">
            <font-awesome-icon icon="fa-solid fa-paper-plane" />
            Enviar
          </button>
        </form>
      </div>
      <div class="col-md-4">
        <Email />
      </div>
    </div>
  </Section>
</template>
