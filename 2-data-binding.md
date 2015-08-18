#2 Way Data Binding

Let's start by building something simple that showcases the power of Angular. 

In traditional frameworks, controllers package up data from the models with a template and then render a view to the user.  That view is a snapshot in time; it only reflects the state of data at the time it was rendered.  Newer JavaScript frameworks like Angular and Ember allow us to write dynamic, live templates.  This means that we can write Angular templates that will **automatically update when our data changes.**  

This is called 2-way or bi-directional binding.

* when a model changes, the view knows about it
* when a view changes, the model also knows about it.


Let's try it out!
 In `index.html` create a text input.

```
	<input type="text" placeholder="What is your name">
```

Add a new attribute `ng-model="name"` to the text input.  This binds the value of the text input to a property called "name". Technically, `ng-model` tries to bind "name" by evaluating the expression on the current $scope, and since the property "name" doesn't already exist on this $scope, it will be created implicitly and added to the $scope. We'll talk a lot more about this when we learn about controllers in a few lessons, so don't worry about it for now.

Now that we've bound the input to the "name" property, let's display the value of "name" on the page.  We can write expressions in our HTML using `{{ }}`.

```
	<h1>My name is: {{name}}</h1>
	
```	

Open up `index.html` in your browser.  What does the `h1` say when the page loads?  Try typing something into the input and notice that the `h1` reflects whatever value we type into the input.  This is our first example of 2-way data binding.

**EXERCISE: Replicate the exact same functionality without using Angular.  In a new file, write vanilla JS code that will automatically update the h1 when the value in the text input changes.**

**EXERCISE: Use ng-model with a dropdown menu(select tag).  Give the user the following four items to pick from: "Dogs", "Cats", "Dogs and Cats", "Neither". Display the user's choice in an h3.  For example, if the user selects "Dogs", the h3 should say "I love dogs <3".**

**Questions**

* What does ng-model do?
	-ng-model binds an input, select, textarea properties using the NgModelController which is created and exposed by this derivative. It will bine the property on the current scope, if it is not exist on the scope it will be added to it. 
* What is "dirty checking"?
	-it scans the scope for changes in the digest cycle. This cycle is where angular checks if there are any changes to the variables watched by all the scopes. 
* Find a way to set the initial value of "name" as "BoJack"(without writing a controller).
	-ng-init="name='Bojack'"
* What are those `{{ }}` expressions?  Are they Handlebars?
	-They are javascript code snippets. They are expressions evaluated on the scope but you cannot use conditions, loops or expressions. They cannot be used to declare functions. 
	-They are not handlebars as handlebars is a template engine. 
* Explain what 2-way data binding is.
	-When the page is loaded data-binding works in the direction from the model to the UI. In two-way data binding, the model can be updated via the UI and the direction of the data can change. 
* BONUS: Research the $digest loop
	-After evaluating an express the $apply method performs a $digest phase. This phase the scope examines all of the $watch expressions and compares them with the previous value and then the dirty checking happens. If there is a change in the models, the $digest will run. If it detects something then the $watch is run. 

Resources:

* [Data Binding Reference](https://docs.angularjs.org/guide/databinding)
* [ng-model Docs](https://docs.angularjs.org/api/ng/directive/ngModel)
