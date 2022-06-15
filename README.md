<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href='https://github.com/canojuan10/proyecto3_react'>
    <img src="src/image/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Collaborative Online News Web</h3>

  <p align="center">
    BOOTCAMP HACK A BOSS-2022
    <br />
    <br />
    <a href="https://github.com/canojuan10/proyecto3_react/issues">Report issue</a>
   
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]]

HAB 2022 final project. FrontEnd for the API-REST of collaborative news, previously carried out. In the following <a href="https://github.com/wicket-warrick/PROXECTO2_NODE">link</A> you can find the BackEnd repository.</br>
The functionalities of creating user, logging...etc... have been developed. They will be described in the following document.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Cretae React App.js](https://create-react-app.dev/)

<p align="right">(<a href="#top">back to top</a>)</p>

# Getting Started

In the next chapter you can read how to download and install the different components and utilities of this project.

### Installation

To get started, you must have a local copy on your computer.
There are two options:

A. CLONE the repo.

```sh
git clone git@github.com:canojuan10/proyecto3_react.git
```

B. DOWNLOAD the repo.
</br>
</br>
<a href='https://github.com/canojuan10/proyecto3_react/archive/refs/heads/main.zip'> Download repository</a>

### Config

1. Install NPM packages

   ```sh
   npm install
   ```

2. <p>Rename the '.example.env' file to '.env'; and configure the variables to be able to execute the project.</p>

3. <p>Before creating the tables or loading the <a href='https://github.com/wicket-warrick/PROXECTO2_NODE/tree/main/documentacion/databaseExample'>sample database</a>, you must create a database/schema on your SQL server, with the variable name assigned in the .env document (MYSQL_DATABASE)</p>

4. <p>Once you have created the database/schema; has two configuration options:</p>
      <ul>
    </br>
    <li>Create the tables in the database/schema, without sample data.
    <b>NOTICE:</b> Image files are not contained in the repository</li>
    </br>

   ```sh
   node ./db/initDb.js
   ```

     <li>Import the <a href='https://github.com/wicket-warrick/PROXECTO2_NODE/tree/main/documentacion/databaseExample'>sample database</a> directly into your SQL server.
   </li>
    
    </ul>

5. <p>Import the <a href=https://github.com/wicket-warrick/PROXECTO2_NODE/blob/main/documentacion/NODE_PROJECT.postman_collection.json>POSTMAN collection</a>, in order to test the API functionalities.</p>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
  - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

<h3>Hugo Suárez</h3>

[![Linkedin][linkedin-shield]](https://www.linkedin.com/in/hugosuarezdevp)

[![GitHub][github-shield]](https://github.com/wicket-warrick)

<h3>Juan Fernández</h3>

[![Linkedin][linkedin-shield]](https://www.linkedin.com/in/juanfernandezmirandacano)

[![GitHub][github-shield]](https://github.com/canojuan10)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [HACK A BOSS](https://www.hackaboss.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[product-screenshot]: images/screenshot.png
