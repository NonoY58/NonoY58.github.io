---
layout: page
title: Projects
---

# Image Processing

Create a desktop app using PyQt to modify an image to obtain basic workflow of Image Processing with Python.  


### Basics
- [Python Virtual Environments: A Primer](https://realpython.com/python-virtual-environments-a-primer/)
  - create venv
    - "python -m venv (env_name)"
  - activate venv
    - move to the directory.
    - "(env_name)/Scripts/activate"
  - deactivate venv
    - type "deactivate"
  - delete venv
    - simply delete folder by typing "rm -r venv"  
  - [[video] Creating a Virtual Environment](https://realpython.com/lessons/creating-virtual-environment/#transcript)  
  
- [Object-Oriented Programming (OOP) in Python 3](https://realpython.com/python3-object-oriented-programming/)
    - How to handle classes and instances.
      - **class**  is like a blueprint for creating an object.
      - **instance** is an object that is built from a class and contains real data.
    - [Python Class Constructors: Control Your Object Instantiation](https://realpython.com/python-class-constructor/)
    - [Python Command Line Arguments](https://realpython.com/python-command-line-arguments/)
    - [Supercharge Your Classes With Python super()](https://realpython.com/python-super/)
    - [Python's property(): Add Managed Attributes to Your Classes](https://realpython.com/python-property/#the-getter-and-setter-approach-in-python) 
      - What is a **getter method** ?
    - [What Does if **\_\_name\_\_** == "**\_\_main\_\_**" Do in Python?](https://realpython.com/if-name-main-python/)  
    - [What is Abstraction in Programming? Explained for Beginners](https://www.freecodecamp.org/news/what-is-abstraction-in-programming-for-beginners/)

- functions and tools
  - [Python String Formatting Best Practices](https://realpython.com/python-string-formatting/)
    - "f{ }" => f-strings, a.k.a formatted string literals.
    - [printf-style String Formatting](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting)
    - [Python 3's f-Strings: An Improved String Formatting Syntax (Guide)](https://realpython.com/python-f-strings/)
  - [How to Use Python Lambda Functions](https://realpython.com/python-lambda/)
  - [Python enumerate(): Simplify Looping With Counters](https://realpython.com/python-enumerate/)
  - [Using Python datetime to Work With Dates and Times](https://realpython.com/python-datetime/)
  - [Python eval(): Evaluate Expressions Dynamically](https://realpython.com/python-eval-function/)
    - [eval_really_is_dangerous](https://nedbatchelder.com/blog/201206/eval_really_is_dangerous.html)
  - [Python args and kwargs: Demystified](https://realpython.com/python-kwargs-and-args/)
    - positional arguments and keyword arguments
    - unpacking operators: to be able to accept varying number of arguments 
      - (*) is for positional arguments, (**) is for keyword arguments  

- Other topics
  - [Difference Between Python Modules, Packages, Libraries, and Frameworks](https://learnpython.com/blog/python-modules-packages-libraries-frameworks/)
    -  **A module** is basically a bunch of related code saved in a file with the extension .py.
    - **Python packages** are basically a directory of a collection of **modules**.
    - **A library** is an umbrella term referring to a reusable chunk of code. However, it is often assumed that while **a package** is a collection of **modules**, a **library** is a collection of **packages**.
      - [Top 15 Python Libraries for Data Science](https://learnpython.com/blog/python-libraries-for-data-science/)
  - [Business_logic_wiki](https://en.wikipedia.org/wiki/Business_logic)

- [How to Publish an Open-Source Python Package to PyPI](https://realpython.com/pypi-publish-python-package/)
  - PyPI; Python Package Index is a repository containing several hundred thousand packages.  

- [Glossary](https://docs.python.org/3/glossary.html#term-special-method)

### GUI

- [Python and PyQt: Building a GUI Desktop Calculator](https://realpython.com/python-pyqt-gui-calculator/)
  - Built PyQt6 environment through this instruction.
- [PyQt Layouts: Create Professional-Looking GUI Applications](https://realpython.com/python-pyqt-layout/)
  - 3 steps to put a layout on a widget  
    1. create a layout
    2. Add widgets to the layout
    3. Assign the layout to the parent widget
  - [[video] Creating PyQt Layouts for GUI Python Applications](https://www.youtube.com/watch?v=MY29YV9Wk7I)
  - [Widgets Classes](https://doc.qt.io/qt-6/widget-classes.html) 
  - [spin box class](https://doc.qt.io/qt-6/qspinbox.html)
  - [How to add an image to the PyQt5 window](https://www.educative.io/answers/how-to-add-an-image-to-the-pyqt5-window)
  
- [Model-View-Controller (MVC) Explained – With Legos](https://realpython.com/the-model-view-controller-mvc-paradigm-summarized-with-legos/)

- [PyQt vs PySide Licensing](https://www.pythonguis.com/faq/pyqt-vs-pyside/)  
  - A GPL lisence allow users to distribute software if the source code is also distributed.  

- QSpinbox
  - [QSpinBox](https://doc.qt.io/qtforpython-5/PySide2/QtWidgets/QSpinBox.html)
  - [PyQt QSpinBox](https://zetcode.com/pyqt/qspinbox/) 

### Image Processing

- [Image Processing With the Python Pillow Library](https://realpython.com/image-processing-with-the-python-pillow-library/)
- [Pillow’s documentation](https://pillow.readthedocs.io/en/stable/reference/index.html)
  - [Image Module](https://pillow.readthedocs.io/en/stable/reference/Image.html)
  - [Image file formats](https://pillow.readthedocs.io/en/stable/handbook/image-file-formats.html)
  - PIL, Python Pillow Library, is predecessor of Pillow

- Image format
  - [Python PIL \| tobytes() Method](https://www.geeksforgeeks.org/python-pil-tobytes-method/)
    - "raw" is just a name of defualt encoder
  - [QImage Class](https://doc.qt.io/qt-6/qimage.html)
    - Image formats documented here are available 
    - QImage has a number of image format. In this project, "Format_RGBA8888" that is refered in the following link was selected, because it worked.
  - [PIL Image to QPixmap conversion issue](https://stackoverflow.com/questions/34697559/pil-image-to-qpixmap-conversion-issue)
    - the conversion worked by adding stated lines here
  - [Convert BGR and RGB with Python, OpenCV (cvtColor)](https://note.nkmk.me/en/python-opencv-bgr-rgb-cvtcolor/) 
    - OpenCV is BGR, Pillow is RGB in the order of colors
  - [Pixmap Conversion](https://doc.qt.io/qt-6/qpixmap.html#:~:text=A%20QPixmap%20object%20can%20be,QPixmap%20using%20the%20fromImage().)
    -  a QImage can be converted into a QPixmap using the fromImage(). 
  - [ImageQt Module](https://pillow.readthedocs.io/en/stable/reference/ImageQt.html)
    - The ImageQt module contains support for creating PyQt6, PySide6, PyQt5 or PySide2 QImage objects from PIL images.

- C++ 
  - [Access Specifiers](https://www.w3schools.com/cpp/cpp_access_specifiers.asp)
    - public, private, protected
  - [What is C++ Enum, And How to Use Enums in C++](https://www.simplilearn.com/tutorials/cpp-tutorial/cpp-enum#:~:text=In%20C%2B%2B%20programming%2C%20enum%20or,to%20maintain%20and%20less%20complex.)
    - **Enum** provides a way to define and group integral constants.