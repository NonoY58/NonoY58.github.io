---
layout: archives
---

# Python Document

### Machine Learning
- [Python Machine Learning Tutorials](https://realpython.com/tutorials/machine-learning/)
- [Python Machine Learning Tutorial (Data Science)](https://www.youtube.com/watch?v=7eh4d6sabA0)
- [Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow (book)](https://colab.research.google.com/github/ageron/handson-ml3/blob/main/index.ipynb#scrollTo=FivFb8xzt9ll)
  - [GitHub](https://github.com/ageron/handson-ml3/blob/main/01_the_machine_learning_landscape.ipynb)
  - [Installation](https://github.com/ageron/handson-ml3/blob/main/INSTALL.md)
  - [Khanacademy - free learning of math](https://www.khanacademy.org/)


### Open CV
- [OpenCV Tutorial: A Guide to Learn OpenCV in Python](https://www.mygreatlearning.com/blog/opencv-tutorial-in-python/)
- [OpenCV Course - Full Tutorial with Python](https://youtu.be/oXlwWbU8l2o)
  - [OpenCV with Python in 4 Hours](https://github.com/jasmcaus/opencv-course)
- [Filling holes in an image using OpenCV ( Python / C++ )  ](https://learnopencv.com/filling-holes-in-an-image-using-opencv-python-c/)
- [Smoothing Images 4. Bilateral Filtering](https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#ga9d7064d478c95d60003cf839430737ed)
  - bilateral filter is highly effective in noise removal while keeping edges sharp
- [Image Segmentation with Watershed Algorithm](https://docs.opencv.org/4.x/d3/db4/tutorial_py_watershed.html)
- [Watershed OpenCV](https://pyimagesearch.com/2015/11/02/watershed-opencv/)
  - circle fitting
- [Morphological Transformations](https://docs.opencv.org/4.x/d9/d61/tutorial_py_morphological_ops.html)
- [Contour Properties](https://docs.opencv.org/3.4/d1/d32/tutorial_py_contour_properties.html)
- [Watershed segmentation(scikit-image)](https://scikit-image.org/docs/stable/auto_examples/segmentation/plot_watershed.html)

### Matplotlib
- [Linestyles in Matplotlib Python](https://www.geeksforgeeks.org/linestyles-in-matplotlib-python/)
- [Quick start guide](https://matplotlib.org/stable/tutorials/introductory/quick_start.html)
  - [Matplotlib Application Interfaces (APIs)](https://matplotlib.org/stable/users/explain/api_interfaces.html#api-interfaces)


### Numpy
- [NumPy: the absolute basics for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)
- [NumPy Tutorial- W3School](https://www.w3schools.com/python/numpy/default.asp)


### Image Processing 
- [Learn basics through Image Processing project here.](/projects/imageProcessing.html)
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
  - [Python PIL, tobytes() Method](https://www.geeksforgeeks.org/python-pil-tobytes-method/)
  - [ImageFilter Module](https://pillow.readthedocs.io/en/stable/reference/ImageFilter.html)
  - [concepts of Pillow](https://pillow.readthedocs.io/en/stable/handbook/concepts.html)
  - [ImageEnhance Module](https://pillow.readthedocs.io/en/stable/reference/ImageEnhance.html#)
  - [How to adjust brightness, contrast, sharpness and saturation of images in PIL (pillow) – with Python Examples](https://holypython.com/python-pil-tutorial/how-to-adjust-brightness-contrast-sharpness-and-saturation-of-images-in-python-pil/)
  - [Dictionaries and JSON, Digital Scholarship Resources](https://heardlibrary.github.io/digital-scholarship/script/python/json/)


### SQL
- [Data Management With Python, SQLite, and SQLAlchemy](https://realpython.com/python-sqlite-sqlalchemy/)

### Selenium
- [[OOP] Modern Web Automation With Python and Selenium](https://realpython.com/modern-web-automation-with-python-and-selenium/)
- [How to Automate Login using Selenium in Python](https://www.thepythoncode.com/article/automate-login-to-websites-using-selenium-in-python)
- [Selenium with Python 4. Locating Elements](https://selenium-python.readthedocs.io/locating-elements.html)
- [Selenium XPath Tutorial - XPath in Selenium WebDriver, XPath Full Tutorial, SoftwareTestingMentor](https://youtu.be/U0WMFjnbb4I)
  - //tagname[@Attribute='Value']
  - //tagname[starts-with(@Attribute,'Value')]
  - //tagname[contains(@Attribute,'Value')]
  - //tagname[text()='ActualText']
  - //tagname[@Attribute='Value' or @Attribute='Value']
  - //tagname[@Attribute='Value' and @Attribute='Value']
  - //tagname[@Attribute='Value']//child::tagname
  - //tagname[@Attribute='Value']//parent::tagname
  - //tagname[@Attribute='Value']//self::tagname
  - //tagname[@Attribute='Value']//decendant::tagname
  - //tagname[@Attribute='Value']//ancestor::tagname
- [Webscrape Google Map Reviews Using Selenium Python](https://www.linkedin.com/pulse/webscrape-google-map-reviews-using-selenium-python-choy-siew-wearn?trk=pulse-article_more-articles_related-content-card)

### Pandas
- [pandas documentation](https://pandas.pydata.org/docs/) --> Read "getting started"
- [Using Pandas and Python to Explore Your Dataset](https://realpython.com/pandas-python-explore-dataset/)
  - [The pandas DataFrame: Make Working With Data Delightful](https://realpython.com/pandas-dataframe/)
  - [Look Ma, No For-Loops: Array Programming With NumPy](https://realpython.com/numpy-array-programming/)  --> vectorization
  - [Fast, Flexible, Easy and Intuitive: How to Speed Up Your pandas Projects](https://realpython.com/fast-flexible-pandas/)
  - [Python pandas: Tricks & Features You May Not Know](https://realpython.com/python-pandas-tricks/#8-understand-how-pandas-uses-boolean-operators)
  - [pandas GroupBy: Your Guide to Grouping Data in Python](https://realpython.com/pandas-groupby/)
  - [Pythonic Data Cleaning With pandas and NumPy](https://realpython.com/python-data-cleaning-numpy-pandas/)
  - [Combining Data in pandas With merge(), .join(), and concat()](https://realpython.com/pandas-merge-join-and-concat/)
- [How to Iterate Over Rows in pandas, and Why You Shouldn't](https://realpython.com/pandas-iterate-over-rows/)
- [[Video] Effective Pandas by Matt Harrison](https://www.youtube.com/watch?v=UURvPeczxJI)
- [[Video] Complete Python Pandas Data Science Tutorial! (Reading CSV/Excel files, Sorting, Filtering, Groupby)](https://www.youtube.com/watch?v=vmEHCJofslg)
- [Improve Your Data Wrangling With Object Oriented Programming](https://towardsdatascience.com/improve-your-data-wrangling-with-object-oriented-programming-914d3ebc83a9)
- [Professional Pandas: The Pandas Assign Method and Chaining](https://ponder.io/professional-pandas-the-pandas-assign-method-and-chaining/)
- [Replacing Pandas with Polars. A Practical Guide.](https://www.confessionsofadataguy.com/replacing-pandas-with-polars-a-practical-guide/)
- [20 Pandas Functions for 80% of your Data Science Tasks](https://levelup.gitconnected.com/20-pandas-functions-for-80-of-your-data-science-tasks-b610c8bfe63c)

### Python Scraping
- [Beautiful Soup: Build a Web Scraper With Python](https://realpython.com/beautiful-soup-web-scraper-python/)
- [Web Scraping Project Videos Powered by Bright Data](https://brightdata.com/discovery-zone?gspk=bm9haGthbHNvbjU1MQ&gsxid=lhiNSwqUmCxn&utm_source=affiliates&utm_campaign=bm9haGthbHNvbjU1MQ)
- [Web Scraping with Python and Object-Oriented Programming](https://medium.com/analytics-vidhya/web-scraping-with-python-and-object-oriented-programming-14638a231f14)
- [How to Read Robots.txt](https://www.seerinteractive.com/insights/how-to-read-robots-txt)
- [Concurrent Web Scraping with Selenium Grid and Docker Swarm](https://testdriven.io/blog/concurrent-web-scraping-with-selenium-grid-and-docker-swarm/)
- [Docker+Pythonを使ってスクレイピング環境を構築する](https://boardtechlog.com/2020/07/programming/dockerpython%e3%82%92%e4%bd%bf%e3%81%a3%e3%81%a6%e3%82%b9%e3%82%af%e3%83%ac%e3%82%a4%e3%83%94%e3%83%b3%e3%82%b0%e7%92%b0%e5%a2%83%e3%82%92%e6%a7%8b%e7%af%89%e3%81%99%e3%82%8b%e3%80%90mac%e3%83%bbwind/)
- [GitHub repo of Numpy](https://github.com/numpy/numpy)
- Sending emails
  - [Sending Emails With Python](https://realpython.com/python-send-email/)
  - [How to Send Emails using Python: Tutorial with examples](https://www.justintodata.com/send-email-using-python-tutorial/)
 

### Beautiful Soup 4
- [Beautiful Soup 4 Tutorial #1 - Web Scraping With Python](https://www.youtube.com/watch?v=gRLHr664tXA)
- [Beautiful Soup Documentation](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
- type of object
  - class 'bs4.element.ResultSet' -> list
  - class 'bs4.element.Tag' -> tag



### OOP
- [Object-Oriented Programming for Data Scientists
](https://towardsdatascience.com/object-oriented-programming-for-data-scientists-8d4d976b6af8)
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




### Python Basics
- [Python Basics](https://realpython.com/tutorials/basics/)
  - LEGB(Local, Enclose, Global, Built-in)
- PEP8 explained by Tim.  [Write Python Code Properly!](https://youtu.be/D4_s3q038I0) 
- [Welcome to real python](https://realpython.com/courses/real-python-welcome/)
  - [PEP 8 – Style Guide for Python Code](https://peps.python.org/pep-0008/)
  - [PEP 20 – The Zen of Python](https://peps.python.org/pep-0020/)
- [Interacting With Python](https://realpython.com/interacting-with-python/)
  - REPL interaction: 
    - **Reads** the command you enter
    - **Evaluates** and executes the command
    - **Prints** the output (if any) to the console
    - **Loops** back and repeats the process
  - IDE; An Integrated Development Environment
  - IDLE; Integrated Development and Learning Environment, rudimentary IDE
- [Getting Started With Testing in Python](https://realpython.com/python-testing/)
- [How to Use Python for Web Development](https://www.freecodecamp.org/news/how-to-use-python-for-web-development/)
- [The Meaning of Underscores in Python](https://dbader.org/blog/meaning-of-underscores-in-python#:~:text=It's%20a%20hint%20to%20the,is%20intended%20for%20internal%20use.)
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
  - [[video] Python Tutorial: Using Virtual Environments With GitHub](https://www.youtube.com/watch?v=6W6iY7uUu34)
    - create new repo on GitHub with ".gitignore" file by default.
    - copy URL of remote repo.
    - move to local directory and clone the repo by "git clone URL" 
      -> this process includes initialize in git.
    - create venv by "python -m venv venv"
    - create or copy .py file and install all packages necessary.
      -> check packages with "pip list" command.
    - create a requirments file with "pip freeze > requirments.txt"
    - push everything to the remote repo.
  - [Using Jupyter Notebook in Virtual Environment](https://www.geeksforgeeks.org/using-jupyter-notebook-in-virtual-environment/)
    - need to install ipython kernel with the following command: "ipython kernel install --user --name=venv"
- [Create Executable of Python Script using PyInstaller](https://datatofish.com/executable-pyinstaller/)
  - "pyinstaller --onefile --noconsole hello.py" replace the filename.
- functions and tools
  - [Python String Formatting Best Practices](https://realpython.com/python-string-formatting/)
    - "f{ }" => f-strings, a.k.a. formatted string literals.
    - [printf-style String Formatting](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting)
    - [Python 3's f-Strings: An Improved String Formatting Syntax (Guide)](https://realpython.com/python-f-strings/)
  - [How to Use Python Lambda Functions](https://realpython.com/python-lambda/)
  - [enum in Python](https://www.geeksforgeeks.org/enum-in-python/)
  - [Python enumerate(): Simplify Looping With Counters](https://realpython.com/python-enumerate/)
  - [Using Python datetime to Work With Dates and Times](https://realpython.com/python-datetime/)
  - [Python eval(): Evaluate Expressions Dynamically](https://realpython.com/python-eval-function/)
    - [eval_really_is_dangerous](https://nedbatchelder.com/blog/201206/eval_really_is_dangerous.html)
  - [Python args and kwargs: Demystified](https://realpython.com/python-kwargs-and-args/)
    - positional arguments and keyword arguments
    - unpacking operators: to be able to accept varying number of arguments 
      - (*) is for positional arguments, (**) is for keyword arguments  
  - [Python Keywords: An Introduction](https://realpython.com/python-keywords/)
  - [Primer on Python Decorators](https://realpython.com/primer-on-python-decorators/#simple-decorators) --> Decorators provide a simple syntax for calling higher-order functions
  - [Python's map(): Processing Iterables Without a Loop](https://realpython.com/python-map-function/)

  - Other topics
  - [Difference Between Python Modules, Packages, Libraries, and Frameworks](https://learnpython.com/blog/python-modules-packages-libraries-frameworks/)
    -  **A module** is basically a bunch of related code saved in a file with the extension .py.
    - **Python packages** are basically a directory of a collection of **modules**.
    - **A library** is an umbrella term referring to a reusable chunk of code. However, it is often assumed that while **a package** is a collection of **modules**, a **library** is a collection of **packages**.
      - [Top 15 Python Libraries for Data Science](https://learnpython.com/blog/python-libraries-for-data-science/)
  - [Business_logic_wiki](https://en.wikipedia.org/wiki/Business_logic)
  - [The Terminal: First Steps and Useful Commands](https://realpython.com/terminal-commands/)

- [How to Publish an Open-Source Python Package to PyPI](https://realpython.com/pypi-publish-python-package/)
  - PyPI; Python Package Index is a repository containing several hundred thousand packages.  

- [Glossary](https://docs.python.org/3/glossary.html#term-special-method)

### Python Topics
- [Free College Algebra Course (with Python Code!)](https://www.freecodecamp.org/news/college-algebra-course-with-python-code/)
- [How to Learn to Code & Get a Developer Job in 2023 [Full Book]](https://www.freecodecamp.org/news/learn-to-code-book/) => not only python topic
- [Learn From 2022's Most Popular Python Tutorials and Courses](https://realpython.com/popular-python-tutorials-2022/)
- [Working With Linear Systems in Python With scipy.linalg](https://realpython.com/python-scipy-linalg/)
- [860+ Free Online Programming & Computer Science Courses You Can Start This New Year](https://www.freecodecamp.org/news/free-online-programming-cs-courses/)
- [Who controls parallelism? A disagreement that leeds to slower code](https://pythonspeed.com/articles/concurrency-control/)
- [Master the HTTP Networking Protocol](https://www.freecodecamp.org/news/http-networking-protocol-course/)
- [Learn Django by Building a Marketplace](https://www.freecodecamp.org/news/learn-django-by-building-a-marketplace/)

### GUI PyQt6
- [PyQt6 code samples](https://learndataanalysis.org/category/python-tutorial/pyqt6/)
- [Build a Contact Book With Python, PyQt, and SQLite](https://realpython.com/python-contact-book/)
- [Python and PyQt: Building a GUI Desktop Calculator](https://realpython.com/python-pyqt-gui-calculator/)
  - Built PyQt6 environment through this instruction.
- [Basic Layouts Example](https://doc.qt.io/qt-6/qtwidgets-layouts-basiclayouts-example.html)
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

- [QMouseEvent](https://doc.qt.io/qtforpython-5/PySide2/QtGui/QMouseEvent.html)
- [QLineF Class](https://doc.qt.io/qt-6/qlinef.html)

- Get coordinates of image 
  - [Coordinates of an image PyQt](https://stackoverflow.com/questions/63378825/coordinates-of-an-image-pyqt)
  - [How can I find the value of the pixel at the mouse pointer in a grey-scale image](https://groups.google.com/g/pyqtgraph/c/dXyom2XOA1M)
  - [[OpenCV] Displaying the coordinates of the points clicked on the image using Python-OpenCV](https://www.geeksforgeeks.org/displaying-the-coordinates-of-the-points-clicked-on-the-image-using-python-opencv/) 
  - difference between QGraphicsScene, QGraphicView and Qlabel.
     - [Qlabel](https://doc.qt.io/qt-6/qlabel.html): For displaying text or an image. No user interaction functionality is provided.
     - [QGraphicsScene](https://doc.qt.io/qt-6/qgraphicsscene.html): used together with QGraphicsView for visualizing graphical items
     - [QGraphicsView](https://doc.qt.io/qt-6/qgraphicsview.html): visualizes the contents of a QGraphicsScene in a scrollable viewport.
     - [Graphics View Framework](https://doc.qt.io/qt-6/graphicsview.html)
  - Does repaint() method work for Qlabel?
  - [Show X and Y coordinates lines in QGraphicsView](https://stackoverflow.com/questions/56748603/show-x-and-y-coordinates-lines-in-qgraphicsview)
- [Handling SQL Databases With PyQt: The Basics](https://realpython.com/python-pyqt-database/)
- [Creating additional windows](https://www.pythonguis.com/tutorials/creating-multiple-windows/)
- [How do I pass variables between class instances or get the caller?](https://stackoverflow.com/questions/7501706/how-do-i-pass-variables-between-class-instances-or-get-the-caller)

- [Using PyInstaller to Easily Distribute Python Applications](https://realpython.com/pyinstaller-python/)

