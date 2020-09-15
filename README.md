# Enter UI
Enter UI is a set of UI components to help people create a CMS of any types in a very efficient way.

## Introduction 

### This is not the UI Library You Expected
Enter UI might not be the one that you are expecting. Other UI libraries usually provide a set of standalone components, which leaves the freedom of "how to compose these elements" to the developers. However, this library, in the contrast, is assuming that the developers and the users are all agreeing with a basic content management workflow. This means, by using this UI library, you will find it is very hard to arrange the UI components "freely". However, in return, if you are familiar with the philosophy behind this library, you can build a CMS interface in a very quick way.

### Philosophy Behind Enter UI
Enter UI assumes that all the CMS tasks are beginning with a data collection. While the data collection is there, what people will do with the data collection is searching or filtering the items, and perform actions on one or more of the items, or even perform some actions without selecting any items.

Taking the content management of a blog website as an example. The data collection could be a table for displaying blog posts, a tree for displaying categories with hierarchy, a card collection for displaying uploaded images. People would search for the blog posts which are posted 1 month ago. And read, edit or remove some of them.

The use case of Enter UI is definitely far more than building a management console for the blog website. The same philosophy can be applied on, for example, a content management system of an online-shop. Tables can be used for displaying items, orders and customers, a tree for displaying item categories, and a card collection for managing the uploaded product images.

We believe that most of the content management tasks can be summarized to the workflow that we have mentioned before. And this library is an implementation of this workflow.

## Development

We are going to implement following components:
* Button: perform an action
* Text Input (can be used for password): input for strings
* Number Input: input for numbers
* Multiline Input: input for long strings 
* Multiple select: a dropdown (or a list?) of checkboxes for selecting more than one item
* Single select: basically a dropdown for selecting one item
* Toggle: input for boolean values
* File Uploader: input for files
* Date/Time Picker: input for timestamps
* Simple Table: display small amount of data without taking much space
