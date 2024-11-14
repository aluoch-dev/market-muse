<template>
    <div class="topbar">
      <!-- Left section: Company Name -->
      <div class="left">
        <span class="company-name">Market Muse</span>
      </div>
  
      <!-- Right section: Navigation Links -->
      <div class="right">
        <button class="nav-button">Projects</button>
        <button class="nav-button">About</button>
        <button class="nav-button">Contact</button>
      </div>
    </div>
</template>
  
<script>
    export default {
        name: "Topbar"
    };
</script>
  
<style scoped>
  /* Overall page styling */
  body {
    background-color: #f8f8f8; /* Off-white */
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  /* Topbar styling */
  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #f8f8f8; /* Same as page color */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Slight shadow */
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  
  /* Left (company name) styling */
  .left .company-name {
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }
  
  /* Right (buttons) styling */
  .right {
    display: flex;
    gap: 15px;
  }
  
  /* Buttons styling */
  .nav-button {
    border: 2px solid #000; /* Black outline */
    border-radius: 20px;
    padding: 5px 15px;
    font-size: 16px;
    background-color: transparent;
    color: #000;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .nav-button:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Light background on hover */
  }
  
  /* Responsive Design: Stack buttons on smaller screens */
  @media (max-width: 768px) {
    .topbar {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .right {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      gap: 10px;
      margin-top: 10px;
    }
  }
</style>  