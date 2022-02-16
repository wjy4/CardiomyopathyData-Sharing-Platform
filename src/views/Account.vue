<template>
  <div class="account">
   <!-- <h1>Make sure you're logged in to view your account</h1> !-->
    <h1> Welcome back { { username } }</h1>
  </div>
  <div class = "account-info">
    <h4> Name : { { username } }</h4>
    <h4> Account Type : { { accountype } }</h4>
    <h4> Email address : { { email } }</h4>
    <h4> Phone number : { { phonenumber } }</h4>
    <h4> Address : { { user-adress } }</h4>
  </div>
    <input type = "submit" class = "li" value="Submited Data">
</template>



<style>
h1{
  font-size: 40px;
}
.account-info{
  margin-right: 70%;
  font-size: 25px;
  margin-top: 90px;
  margin: auto;
}
.li{
  margin-left: 50%;
  font-size: 30px;
  margin-top: 90px;
  margin: auto;
}

</style>
