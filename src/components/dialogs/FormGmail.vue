<!--<template>-->
<!--    <v-card>-->
<!--      <v-card-text>-->
<!--        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.-->
<!--      </v-card-text>-->
<!--      <v-card-actions>-->
<!--        <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>-->
<!--      </v-card-actions>-->
<!--    </v-card>-->
<!--</template>-->
<template>
  <div class="container">
    <form>
      <label>Name</label>
      <input
          type="text"
          v-model="name"
          name="name"
          placeholder="Your Name"
      >
      <label>Email</label>
      <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Your Email"
      >
      <label>Message</label>
      <textarea
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
          </textarea>

      <input type="submit" value="Send">
    </form>
  </div>
</template>
<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target,
            'YOUR_USER_ID', {
              name: this.name,
              email: this.email,
              message: this.message
            })

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>