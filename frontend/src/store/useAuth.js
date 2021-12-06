import { defineStore } from "pinia";

const apiUrl = process.env.NODE_ENV == 'development' ?
'http://localhost:8000/roro/' : 'https://doculib.herokuapp.com/roro/'

const useAuth = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token")
      ? localStorage.getItem("token")
      : undefined,
    userId: localStorage.getItem("userId")
      ? localStorage.getItem("userId")
      : undefined,
    isLoggedIn: false,
  }),
  actions: {
    async login(username, password) {
      const response = await fetch(`${apiUrl}token-auth/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        this.updateLoggedState(data);
      } else throw new Error("Error en con las credenciales");
    },
    updateLoggedState(data) {
      console.log(data.user_id);

      this.token = data.token;
      this.userId = data.user_id;
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user_id);
    },
  },
});

export default useAuth;
