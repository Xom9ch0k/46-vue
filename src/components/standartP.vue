<template>
<p>
  Message: {{ text }}
</p>
</template>

<script>
export default{
    props:{
        text:{
            type:String,
            require: true
        }
    },
    name : "StandartP"
}
</script>

<style>
/* p{
    font-family: Arial, sans-serif;
    font-style: italic;
    font-size: 25px;
    font-weight: 2px;
    text-align:justify;
    width: 80%;
    position:static;
    left:100px;
    right: 100px;
} */
</style>
