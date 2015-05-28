# ProperCaseDirective
An angular directive for proper casing inputs from user

#Why this?
As a web developer you will be dealing with forms which requires input from the users.
Am assuming you are using angular.
Suppose if you want user to enter his/her name for as input. for eg my name : "Nishanth Kabra"
  1. I press shift on keyboard + I type "N"
  2. I unpress shift and type rest of my first name
  3. I type space
  4. I press shift on keyboard + I type "K"
  6. I unpress shift and type rest of my last name
I dont want to talk about Caps lock. Hope you understand where am i taking you.

By ading this simple angular directive in your markup as follows:
"Name: input proper-case type="text" ng-model="user.propercasedname"

User can enter plain text without any no shift press/unpress, caps lock on/off frenzy.

   
