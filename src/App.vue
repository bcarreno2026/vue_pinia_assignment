<script setup>
import Menu from './components/Menu.vue'
import Display from './components/Display.vue'
import Summary from './components/Summary.vue'
</script>

<template>
  <div class="main-workspace">
    <header class="app-header">
      <h1>Sandwich Deli</h1>
      <p>Select your Ingredients</p>
    </header>

    <div class="content-grid">
      <Menu />
      <Display />
      <Summary />
    </div>
  </div>
</template>

<style>
body {
  background-color: #2e1065;
  margin: 0;
  font-family: 'Arial Black', Gadget, sans-serif;
}

.main-workspace {
  max-width: 500px;
  margin: 50px auto;
  background-color: white;
  padding: 30px;

  border: 15px solid #78350f;

  border-radius: 60px 60px 20px 20px;

  box-shadow: 10px 10px 0px #451a03;
}

.app-header {
  text-align: center;
  border-bottom: 2px dashed #78350f;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

h1 {
  margin: 0;
  color: #78350f;
  text-transform: uppercase;
}

p {
  color: #db2777;
  font-weight: bold;
  margin: 5px 0 0 0;
}

.content-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
