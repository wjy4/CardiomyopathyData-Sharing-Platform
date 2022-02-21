<template>
    <h1> Welcome back {{ username }}</h1>
    <div class="flex-parent">
  <div class="account-info">
     <h2>Name :{ { username } }</h2>
    </div>
  <div class="account-info">
   <h2> Account Type : { { accountype } }</h2>
    </div>
    <div class="account-info">
  <h2>  Email address : { { email } }</h2>
    </div>
    <div class="account-info">
   <h2> Phone number : { { phonenumber } }</h2>
    </div>
    <div class="account-info">
   <h2> Address : { { user-adress } }</h2>
    </div>
</div>
<div class = "submit-parent">
  <div class = "submit">
  <input type = "submit" value="Submited Data">
  </div>
</div>

</template>