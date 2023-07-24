## Case study 2:

Case Study: Building a Library Management System

You are tasked with building a library management system for a public library. The system should allow users to search for and borrow books, as well as manage their accounts and view their borrowing history. The following requirements have been identified:

The system should be able to handle different types of users, including library staff and members.
The system should have a collection of books with the ability to search and filter by title, author, and genre.
The system should allow users to borrow and return books, with a limit on the number of books that can be borrowed at any one time.
The system should maintain a borrowing history for each user.
The system should send notifications to users when books are overdue or when their borrowing limit is reached.
To build this system, you will need to use a range of object-oriented programming concepts, including:

Inheritance: You can define a base class called "User" which will have common properties and methods for all types of users. Then, you can create two derived classes, "LibraryStaff" and "Member", which will inherit from the "User" class and add their own unique properties and methods.

Encapsulation: You can use encapsulation to hide the implementation details of your classes from other parts of the program. For example, you can create a private method called "calculateDueDate" within the "Borrow" class that is only accessible within that class.

Polymorphism: You can use polymorphism to define a common interface for related objects. For example, you can create an interface called "LibraryItem" that has methods such as "checkOut" and "checkIn". Then, you can implement this interface in classes such as "Book" and "DVD", which will have their own implementation of the interface methods.

Abstraction: You can use abstraction to simplify complex systems by hiding unnecessary details. For example, you can create a class called "Borrow" that encapsulates the process of borrowing a book, including checking the user's borrowing limit and updating the borrowing history. This class can be used by other parts of the program without needing to know the details of how borrowing works.

Composition: You can use composition to combine multiple objects into a single object. For example, you can create a class called "Library" that has a collection of "Book" objects and "DVD" objects. This class can then have methods for searching and filtering the collection.
