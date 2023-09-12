<template>
  <Header />
  <main class="flex-shrink-0">
    <div class="container">
      <Section>
        <div class="row">
          <div class="col-12">
            <router-view />
          </div>
        </div>
        <div class="row">
          <div class="col-12">Voltar</div>
        </div>
      </Section>
    </div>
  </main>
  <Footer />
</template>
