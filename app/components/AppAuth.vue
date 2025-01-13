<script>
  import axios from 'axios'
  import { getData, setData } from 'nuxt-storage/local-storage'
  export default {
    name: 'AppAuth',
    data() {
      return {
        username: '',
        email: '',
        id: '',
        message: '',
      }
    },
    methods: {
      async log() {
        try {
          if (this.username && this.email) {
            let response = await axios.post(
              `http://45.12.238.27:5000/register`,
              {
                username: this.username,
                email: this.email,
                phone: this.phone,
              },
            )
            console.log(response)
            this.message = response.data.message
            this.id = response.data.id
            let cart_id = response.data.cart_id
            if (this.message == 'Успешно') {
              setData('id', this.id, 10, 'd')
              setData('cart_id', cart_id, 10, 'd')
              setTimeout(() => {
                this.message = ''
              }, 2500)
            }
            setTimeout(() => {
              this.message = ''
            }, 2500)
          }
        } catch (err) {
          console.log(err)
        }
      },
    },
    mounted() {},
  }
</script>
<template>
  <div class="card">
    <span class="title">Регистрация</span>
    <div class="group">
      <input
        type="text"
        name="login"
        id="login"
        v-model="username"
        placeholder="Введите свой логин"
      />
      <span class="group-value">Логин</span>
    </div>
    <div class="group">
      <input
        type="email"
        name="email"
        id="email"
        v-model="email"
        placeholder="Введите свою почту"
      />
      <span class="group-value">Почта</span>
    </div>
    <button v-if="!message" @click="log" class="btn">Продолжить</button>
    <div
      class="msg"
      :class="{
        success: this.message == 'Успешно',
        error: this.message != 'Успешно',
      }"
      v-if="message"
    >
      {{ message }}
    </div>
  </div>
</template>
<style scoped>
  .card {
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 32px;
    border-radius: 20px;
    color: rgb(var(--color-primary-600));
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    text-align: center;
    color: #aa6a2a;
  }

  .desc {
    opacity: 80%;
    font-weight: 500;
    font-size: 16px;
    line-height: 22.4px;
  }

  .btn {
    width: 100%;
    background-color: rgb(var(--color-primary-600));
    border-radius: 10px;
    padding: 17px 24px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    background-color: #aa6a2a;
  }

  .log {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .log span,
  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 19.6px;
  }

  a {
    color: #cf0032;
  }

  .cancel {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cancel img {
    cursor: pointer;
    height: 24px;
    width: 24px;
  }

  input {
    width: 100%;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    padding: 16px;
    color: rgb(var(--color-primary-600));
  }

  input::placeholder {
    color: #a5a5a5;
    font-weight: 400;
    font-size: 14px;
    line-height: 19.12px;
  }

  .forget_pass {
    text-align: end;
  }

  .group {
    position: relative;
  }

  .group-value {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    left: 12px;
    background-color: #fff;
    padding: 0 4px;
    color: rgb(var(--color-primary-600));
    font-weight: 500;
    font-size: 10px;
    line-height: 13.66px;
  }

  .card:hover {
    cursor: auto;
    transform: none;
  }

  .msg {
    padding: 10px 13px;
    font-size: 16px;
    line-height: 16px;
    color: #fff;
    border-radius: 15px;
    width: fit-content;
    margin: 0 auto;
  }

  .success {
    background-color: #45ed0b;
  }

  .error {
    background-color: #cf0032;
  }
</style>
