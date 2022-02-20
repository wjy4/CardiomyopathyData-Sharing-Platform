<template>
    <h1> Welcome back { { username } }</h1>
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



.flex-parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.account-info {
  background-color: lightgray;
   width: 800px;
  border: 15px solid white;
  padding: 80px;
  height: 400px;
  margin-top: 100px; 
  
}
h2{
  font-size: 20px;
}
.submit-parent{
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit{
  background-color: lightgray;
   width: 400px;
  border: 15px solid white;
  padding: 80px;
  height: 250px;
  margin: center;
  font-size: 30px;
}

</style>
