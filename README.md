
House Shop

Atanas Kambitov                                                                                   14/07/2018

This is a simple shop application made with React.js where a registered user can buy a house online.
There are three types of users.

Guest - A guest is a user who has not registered yet, he can only see the home page which is deferent for him.
This user can also register and login.

Logged In User - This type of user is registered and he can not only see the home and about page in the application, he can logout, view houses details, review them and buy a house that he likes.
This user can also see a list of his own orders made in the pass and review their details, in addition
a logged In user can see a profile page containing his/her profile details.

Admin – This type of user has the more credentials than the rest, he can not only perform the above described actions, but he can edit and delete houses.
An Admin user can also view all orders from all users and review them together with the profile pages.

A house cannot be bought more than once.
An admin cannot update an already bought house, but he can delete it.
The app contains everything in the project assignment description.

Index page : https://nasokila.github.io/house-shop/	
 
Login page : https://nasokila.github.io/house-shop/user/login
 
Register page : https://nasokila.github.io/house-shop/user/register
 	
About page : https://nasokila.github.io/house-shop/about
 
Home Logged In page : https://nasokila.github.io/house-shop	
Here we see all the houses (available or not) listed with pagination.

House Details page : https://nasokila.github.io/house-shop/house/details/{houseId}	
From this page, an admin user can Order, Edit or Delete the house.
The Logged In user can only Order the house. 

Confirm Order page : https://nasokila.github.io/house-shop/house/confirm-order/{houseId}
After clicking on Order the user lands on this page which is for confirming that the details of the house is right.	

Order Completed page : https://nasokila.github.io/house-shop/order/completed/{houseId}
This is a confirmation page saying that the house was bought.
The user can view it’s details or go back to the Home page.

House Edit page : https://nasokila.github.io/house-shop/house/edit/{hoiseId}		
On this page the admin user can update the house details.
 
House Delete page : https://nasokila.github.io/house-shop/house/delete/{houseId}
On this page the admin user can delete the house.
 
Profile page : https://nasokila.github.io/house-shop/user/profile/:id
This is the profile page of the current logged in user.
The user has the option to update his/her profile details.
 
Update Profile page : https://nasokila.github.io/house-shop/user/updateProfile/{userId}
From this page the user can update the details of his own profile.
 
My Orders page : https://nasokila.github.io/house-shop/order/my
On this page the user sees a list of all the orders that he created and he can delete or see the details of every single one.
 
Create House page : https://nasokila.github.io/house-shop/house/create	
This is the page where the admin user can create a new house.
 
All Orders page : https://nasokila.github.io/house-shop/order/all	
Here the admin user can see all the orders from every user and he can delete or view the details of every one of them.
