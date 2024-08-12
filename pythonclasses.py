"""
Ebboni McKenzie
Aug 8, python classes
"""
print("=====Example 1: Class definition====")
class Myclass:
    x = 5

#calling class MyClass

myclass1 = Myclass()
print("The complete class", myclass1)
print("Property of MyClass",myclass1.x)

print("\n=====Example 2: initialize class====")
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        #set a class property
        self.luckynumber = 88

    #return string
    def __str__(self):
        return f"User {self.name} is {self.age} years-old"
    
    #method
    def mymethod(self):
        print(f"{self.name} lucky number is {self.luckynumber}")

#crete and object of class Person
user1 = Person ("Jade", 44)


print(f"Results --> {user1}")
user1.mymethod()
print(f"Class property--> {user1.luckynumber}")

#modify class property value
user1.age=25
print(f"Results --> {user1}")

#empty class
class Schedule:
    pass

print("\n===================Example 3: class with adjustable methods===================")
class Number:
    def __init__(self,num):
        self.num = num

    #accesible property
    num_symbol = '$'

    #define a method to double the number
    def doublenumber(self):
        self.num = self.num * 2
        
    #return string of the class
    def __str__(self):
        return f"The final number is {self.num_symbol}{self.num}"

# create an object of class Number
n1 = Number(12)
#print the object of class number
print(f"Object of class number --> {n1}")
#call method doublenumber()
n1.doublenumber()
#print the object of class number
print(f"Object of class number --> {n1}")
#call method doublenumber
n1.doublenumber()
print(f"Object of class number --> {n1}")

print("\n===================Example 4: class with private property===================")
class Chair:
    def __init__(self, height, width, length):
        self.height = height
        self.width = width
        self.length = length
        self.totaldimension = 0
        self.shippingcostfee = 0.2
        self.totalshippingcost = 0

    #accessible property
    chair_color = 'brown'

    #method to calculate the total dimension
    def total_dimension(self):
        return self.height * self.length * self.width
    
    #return string of th class
    def __str__(self):
        return f"The total dimension for the {self.chair_color}nchair is {self.total_dimension()}"
    
#create an object of the class
chair1= Chair(3,4,5)
#print the object
print(f"Results for the {chair1.chair_color} chair dimension {chair1}")

