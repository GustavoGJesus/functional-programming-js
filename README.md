# Functional Programming with Javascript
## What is Functional Programming ?

 Functional Programming is a programming paradigm, where functions reign. Function programming is also a coding styles, code organization, code writing and a project approach style. Also is a mindset type that you can use, a way of thinking about a problem, a way to solve a task. 

## Why Functional Programming Javascript ?
Safer, easier to debug and maintain. To help us write the Javascript function there are several libraries.

## How can you do that ?
So, the main thing and maybe it seems obvious is that you want to do everything using functions, so we want express everything in our program in functions terms. And a function, of course, is just something that takes an input and returns an output. So, we want thinking about the type of flow of datas of input and output of program, instead of thinking about objects and how they interact and how they handle or think about steps in a recipe as in an imperative style, here we are really thinking about how you express everything in functions terms, get input's, return output's. 

## Exemple

> Not functional:

    var name = "Gustavo";
    var greeting = "Hi, i'm ";
    console.log(greeting + name);
    
    => "Hi, i'm Gustavo"
In the example above i could specify a variable, I call it "name" and make it store the text "Gustavo", i could have a greeting with "Hi, i'm" or "Hello, i'm", whatever and then i could log that to the console. This is sort of an imperative style, first do this then do that then do this other thing we don't have function, here we're not expressing this in terms of how inputs transformed into outputs.
    
> Functional

    function greet(name) {
	    return "Hi, i'm" + name;
    }
    greet("Gustavo");
    
    => "Hi, i'm Gustavo"


So maybe a more functional way of doing the same thing and this is a really simples example just for the sake of it is to define a function called greet which takes a parameter name and returns a string which adds "Hi, i'm ". If I pass the name Maria as input, I get the output "Hi i'm Maria". 

## Avoid side effects 
So, the main thing  about functional programming is avoid side effects, and what is side effects ? Is when a function relies on, or modifies, something outside its parameters to do something, for exemple, If you have a function that use some globally defined variable to calculate its output that does not depend  just of input for this function, so this does not is pure, is to take something from outside the function and wrap it in some way. So this is just a explanation very simple and fast about side effects. 
The goal is for your function to do nothing except take its input and use that to compute an output and after returned.
## Side effects example

> Function with side effects (Not pure)

    var name = "Gustavo"; 
    function greet() {
	    console.log("Hi, i'm" + name)
    }
In this example we have a name variable that is defined global that is used in function, how you can you see. 

> Correct function (Pure)

    function greet(name) {
	    return "Hi, i'm" + name;
    }
In this example the only thing that matters for this function is its input, and the only thing she does is return her exit.
## Think in the pure possible way
One of the main parts of functional programming is thinking about things as pure as possible. 

Thanks so much for getting here, this is a simple article about Functional Programming. In the next articles I will talk about "Use higher-order function" and "Data Structures" in functional programming with javascript of course.

