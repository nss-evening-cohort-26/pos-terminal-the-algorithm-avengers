<div style="text-align:center">
 
# Hip Hop, Pizza, and Wangs (HHP+W) 
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->
![image](https://github.com/nss-evening-cohort-26/pos-terminal-the-algorithm-avengers/assets/153558948/a79dddae-f8bf-45e4-b3aa-8a81658fda38)
</div>

[View App](https://algorithm-avengers-hiphop-pizza-wangs.netlify.app/)

## Topics 
- [What is Hip Hop, Pizza, and Wangs ?](#what-is-hip-hop-pizza-and-wangs-)
- [Who is the user ?](#who-is-the-user-)
- [MVP Features](#mvp-features)
- [Stretch Features ](#stretch-feature)
- [Planning for HHP+W](#planning-for-hhpw)
- [Contributors](#contributors)
___

## What is Hip Hop, Pizza, and Wangs ?
Hip Hop, Pizza, and Wangs (HHP+W) is a family-owned restaurant that marries the essence of music with delectable food offerings. In response to the surge in call-in orders, they sought a Point of Sale (POS) application to seamlessly manage their operations. This application efficiently stores all incoming orders, both open and closed, empowering HHP+W to create, edit, and delete orders as necessary. Additionally, to streamline the management of order items, each order is accompanied by a dedicated page where items can be added or removed, providing flexibility and control. Upon closing an order, the revenue is automatically logged in the revenue page, enabling HHP+W to track their financial performance accurately.

## Who is the user ?
- The ideal user is a restaurant owner but this specific app was tailored towards HHP+W.
- They were in need of a POS application built to help them keep up with their many order types.

## MVP Features
- When the app first loads, the user should see a home screen that welcomes the user with their name, along with the "View Orders" and "Create an Order" buttons.
- A list of all the orders appears when the user clicks on "View Orders."
- Each order should display the name of the customer, whether the order is open or closed, the customer's phone number, email address, and the order type. The order type options include online, in person, and over the phone.
https://www.loom.com/share/61d26509529342f991506b1f4d31a1cd?sid=0dc40a9b-96d5-4630-b328-5deb25c20184

- A user should be able to create, edit, and delete an order. When deleting an order, all order items associated with that order should be deleted as well.
  https://www.loom.com/share/62534146eba14bf782ffb6b0058078e5?sid=f40f42bd-6813-4274-a518-1e32f2601548
  
- An order will contain menu items when 'details' is clicked. Here, only the items associated with that order should be visible. The items will display the menu item name and its price.
- The user should be able to add an item to an order and delete an item from that order only.
- To close an order, a user should click 'Go to Payment' where they can select a payment type (cash, check, debit, credit, or mobile payment) and enter the tip amount.
  https://www.loom.com/share/d74cb549cd3b4e22a019202309983fca?sid=7500f504-8505-48a6-995e-eef04dbd8ddc

  
- Submitting the closed order should add that amount to the Revenue page.
https://www.loom.com/share/fe95297af4d8408781c6dccb9b3cad60?sid=69b0abdf-e8b6-4d36-9b38-0b811859485d

## Stretch Features
- There is an affordance to toggle between the open and closed orders. The open orders should show up first.
- While looking at the list of orders, you should be able to search the orders by name and/or phone number.
- While looking at the revenue view, you should be able to see a chart of revenue.
https://www.loom.com/share/3358904090f24da2b2be8e1c7529885c

## Planning for HHP+W
- [ERD](https://github.com/nss-evening-cohort-26/pos-terminal-the-algorithm-avengers/assets/153558948/7a76847f-c980-4eb9-8624-c021b15bb096)
- [Wireframes](https://www.figma.com/file/4y3EZddALuBR3ouSEM57Np/MVP?type=design&node-id=0-1&mode=design)
- [Postman Collection](https://restless-robot-80667.postman.co/workspace/New-Team-Workspace~db71f8b8-1dc5-4d6a-8113-f93687f7d04a/collection/31929847-d58940ba-db9a-4706-a291-c2ed04a0c0e1?action=share&creator=31929847)
- [Flow Chart](https://lucid.app/lucidchart/76cff346-df2f-48c7-8f73-40a8becad9b6/edit?invitationId=inv_5cedc629-9d07-4fd9-9286-2c46caa47ecb&page=0_0#)
- [Project Board](https://github.com/orgs/nss-evening-cohort-26/projects/15/views/1)

## Contributors
- [Yarelis Martin](https://github.com/your-github-url)
- [Jesse French](https://github.com/jessefrench)
- [Britnay Gore](https://github.com/britnay268)
- [Andrew Spurlock](https://github.com/AndrewSpur73)
