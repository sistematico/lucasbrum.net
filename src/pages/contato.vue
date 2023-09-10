<template>
  <Section>
    <h1>Contact Form</h1>
    <form accept-charset="UTF-8" action="https://www.formbackend.com/f/ee96f8fb88dbbda7" method="POST">
      <div class="form-fields">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div class="form-fields">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div class="form-fields">
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
      </div>

      <button type="submit">Send message</button>
    </form>
  </Section>
</template>

<style scoped>
h1 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.form-fields {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  font-size: 0.9rem;
}
input[type='text'],
input[type='email'],
textarea {
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
}
body {
  display: block;
}
button[type='submit'] {
  background-color: rgb(67 56 202);
  color: white;
  font-size: 0.8rem;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 500;
}
</style>
