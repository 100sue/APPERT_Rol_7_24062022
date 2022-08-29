<template>
    <header class="header-container">
      <div class="logo-header">
        <img src="../assets/main-header.png" alt="" class="logo-img" />
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderHome",
  };
  </script>
  
  <style>
  header {
    height: 60px;
  }
  .logo-header {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo-img {
    height: 60px;
  }
  </style>