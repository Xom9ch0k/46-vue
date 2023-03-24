<template>
  <div class="input">
    <p><strong>Name</strong></p>
    <input v-model="inputName" type="text">

    <p><strong>Surname</strong></p>
    <input v-model="inputSurname" type="text">
  </div>
  <div class="input">
    <p><strong>Age</strong></p>
    <input v-model="inputAge" type="text">

    <p><strong>Rank</strong></p>
    <input v-model="inputRank" type="text">
  </div>
  
  <div class="input">
    <p><strong>Salary</strong></p>
    <input v-model="inputSalary" type="text">
  </div>

<button @click = "sendInfo">Ok</button>
</template>

<script>
export default{
  data(){
    return{
        inputName: "",
        inputSurname: "",
        inputAge: "",
        inputRank:"",
        inputSalary:"",
    }
  },
  methods: {
    sendInfo(){
      this.$emit("newMessage", this.inputName, this.inputSurname, this.inputAge, this.inputRank, this.inputSalary)
      this.inputName = ""
      this.inputSurname = ""
      this.inputAge = ""
      this.inputRank = ""
      this.inputSalary = ""
    }
  },
  name: "StandartInput"
}
</script>

<style>
.input{
  margin: 5px, 2px;
}
button{
    appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676D7;
  color: #fff;
  padding: 5px 10px;
  margin: 2px 4px;
  font-size: 16px;
}
</style>
