---
layout: archives
---


# Machine Learning
### [Kaggle](https://www.kaggle.com/)

<table>
  <tr>
    <caption><strong>Courses</strong></caption>
    <th>Course</th>
    <th>Topic</th>
    <th>Memo</th>
  </tr>
  <tr>
    <td><a href="https://www.kaggle.com/learn/intro-to-machine-learning">Intro to Machine Learning</a></td>
    <td>Model Validation, Underfitting and Overfitting, Random Forests</td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://www.kaggle.com/learn/pandas">Pandas</a></td>
    <td>Functions and Maps, Grouping and Sorting, Renaming and Combining</td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://www.kaggle.com/learn/intermediate-machine-learning">Intermediate Machine Learning</a></td>
    <td>
    Imputation, Categorical Variables(ODE, OHE), Pipelines, Cross-Validation, XGBoost, Data Leakage
    </td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://www.kaggle.com/learn/data-visualization">Data Visualizetion</a></td>
    <td>seaborn, Line Charts, Bar Charts and Heatmaps, Scatter Plots, Distributions, Custum Styles</td>
    <td></td>
  </tr>
  <tr>
    <td><a href="https://www.kaggle.com/learn/feature-engineering">Feature Engineering</a></td>
    <td>
    Mutual Information, K-Means, Principal Component(PCA), Target Encoding
    </td>
    <td></td>
  </tr>
</table><table>
  <tr>
    <caption><strong>Competitions</strong></caption>
    <th>Competition</th>
    <th>Memo</th>
  </tr>
  <tr>
    <td><a href="https://www.kaggle.com/competitions/titanic">Titanic - Machine Learning from Disaster</a></td>
    <td>Getting Started</td>
  </tr>
  <tr>
    <td><a href="https://www.kaggle.com/competitions/playground-series-s3e25">Regression with a Mohs Hardness Dataset</a></td>
    <td>Playground Series - Season 3, Episode 25, ~December.5.2023</td>
  </tr>
</table><table>
  <tr>
    <caption><strong>Topics</strong></caption>
    <th>Title</th>
    <th>Memo</th>
  </tr>
  <tr>
    <td>Adversarial Validation</td>
    <td>Check whether train and test datasets have the same distribution. <a href="https://www.kaggle.com/code/carlmcbrideellis/what-is-adversarial-validation">What is Adversarial Validation?</a></td>
  </tr>
  <tr>
    <td>Cross Validation Visualization</td>
    <td>How data is split by each method <a href="https://scikit-learn.org/stable/auto_examples/model_selection/plot_cv_indices.html#sphx-glr-auto-examples-model-selection-plot-cv-indices-py">Visualizing cross-validation behavior in scikit-learn</a></td>
  </tr>
  <tr>
    <td>Select Columns</td>
    <td>
    1. List Comprehention<br>
    <code>obj_col = [col for col in df.columns if df[col].dtype in ["object"]]</code><br>
    <code>num_col = [col for col in df.columns if df[col].dtype in ['int64', 'float64']]</code><br><br>
    2. Select_dtypes()<br>
    <code>obj_col = list(df.select_dtypes(include="object"))</code><br>
    <code>num_col = list(df.select_dtypes(include="number"))</code><br><br>
    </td>
  </tr>
  <tr>
    <td>Get Column Names</td>
    <td>
    1. <code>list(df)</code><br>
    2. <code>df.columns</code>
    </td>
</table>
<!-- 
### Youtube
-[Rob Mulla](https://www.youtube.com/@robmulla)
  - [A Gentle Introduction to Pandas Data Analysis (on Kaggle)](https://youtu.be/_Eb0utIRdkw)
  - [Exploratory Data Analysis with Pandas Python 2023](https://youtu.be/xi0vhXFPegw)

-[Ryan Nolan](https://www.youtube.com/@RyanNolanData)
  - [Beginner Data Science Portfolio Project Walkthrough (Kaggle Titanic)](https://youtu.be/6IGx7ZZdS74)

# Deep Learning
plan: January 2024 ~ -->
