<template>
  <div id="nav">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-white rounded"
    >
      <div class="container">
        <div class="nav-left-area">
          <li class="show-dropdow-on-hover">
            <router-link tag="div" class-active="active" to="/"
              >Home</router-link
            >

            <ul class="custom-dropdown-menu">
              <router-link
                tag="li"
                class="dropdown-item"
                class-active="active"
                to="/genedetails"
                >Gene Details</router-link
              >

              <router-link
                tag="li"
                class="dropdown-item"
                class-active="active"
                to="/submitdata"
                >Submit Data</router-link
              >

              <router-link
                tag="li"
                class="dropdown-item"
                class-active="active"
                to="/account"
                >Account</router-link
              >
            </ul>
          </li>
        </div>
        <div class="nav-right-area">
          <router-link tag="li" class="mr-10" class-active="active" to="/help"
            >Help</router-link
          >

          <router-link tag="li" class="mr-10" class-active="active" to="/login"
            >Login</router-link
          >

          <router-link tag="li" class-active="active" to="/register"
            >Register</router-link
          >
        </div>

        <!-- <router-link to="/404">404</router-link> | -->
      </div>
    </nav>
  </div>

  <router-view />
</template>

<style>

</style>
