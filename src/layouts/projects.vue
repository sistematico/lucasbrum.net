<template>
  <div id="wrapper">
    <Header />
    <main class="flex-shrink-0">
      <div class="container">
        <Section>
          <Breadcrumb 
            :items="[
              { name: 'Início', link: '/' }, 
              { name: 'Projetos' }, 
            ]" 
          />
          <div class="row">
            <div class="col-12">
              <router-view />
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <a href="#" @click.prevent="$router.back()">Voltar</a>
            </div>
          </div>
        </Section>
      </div>
    </main>
    <Footer />
  </div>
</template>
