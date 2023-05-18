<script setup lang="ts">
import { ref } from 'vue'

const nome = ref('')
const mensagem = ref('')

function sendMessage() {
  const msg: string = nome.value + ' ' + encodeURIComponent(mensagem.value)
  window.open(`https://wa.me//5567998552020?text=${msg}`, '_blank', 'noreferrer')
}
</script>
<template>
  <h1>Entre em contato</h1>

  <form @submit.prevent="sendMessage">
    <div class="mb-3">
      <label for="nome" class="form-label">Nome</label>
      <input v-model="nome" type="text" id="nome" class="form-control" />
    </div>
    <div class="mb-3">
      <label for="mensagem" class="form-label">Mensagem</label>
      <textarea v-model="mensagem" class="form-control" id="mensagem" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-primary me-2" :disabled="mensagem.length < 10 && nome.length > 3">Enviar</button>
    <button type="reset" class="btn btn-danger" :disabled="mensagem.length < 0 && nome.length > 0">Limpar</button>
  </form>
</template>
