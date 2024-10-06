<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<img src="./public/logo.svg" alt="Logo" height=50">

<h3 align="center">The Youverify Invoice App</h3>

  <p align="center">
    The web application is a simple invoice app majorly for the assessment of my application for the role of a Senior Frontend Engineer at Youverify.
  </p>
    <a href="https://youverify-invoice-app.netlify.app/">View Demo</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies">Technologies Used</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#conventions-followed">Conventions Followed</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#working-on-the-invoice-app">Working on the Invoice App</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

`...`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Technologies

- Framework: React + TypeScript (vite)
- UI: Shadcn and Tailwindcss
- Routing: React Router v6
- Styling: CSS
- Icon pack: Customized Icons
- Toasts: Sonner
- Formatting: ESLint
- Backend as service for Authentication: Firebase
- Utilities: date-fns, formik,

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Project Structure

    .
    ├── ...
    ├── public                    # Project assets - like svgs and images used
    ├── src                       # All project files
    │   ├── assets                # directory of other assets
    |   |    ├── lotties          # contains assets like animation json file for the lottie library utilised
    │   ├── components            # smaller components not upto views
    │   ├── lib                   # Utility constants, function, validations etc.
    │   ├── routes                # Routes (private route)
    │   ├── pages                 # Folders for each pages
    │   │   ├── auth              # Files for authentication pages - login and register
    │   │   ├── coming-soon.tsx   # A template page to notify that page is under comstruction
    |   |   ├── invoice.tsx       # Page for the invoice screen
    │   ├── main.tsx              # Entry file to the project
    │   └── index.css             # General CSS file for the project
    ├── .eslintrc.cjs
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    └── ...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Conventions Followed

- All Folders are lowercases
- There should be only one level of folder in each component folder (i.e. `/components/{component}/{subcomponent}` should be the deepest tree level in the component folder).
- Functions use camelCases while components use PascalCases for naming comvention, file names should be lowercase (words should be separated by hyphens).
- `...`
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/iwa-temmy/youverify-invoice-app.git
   ```
2. cd into the project
   ```sh
   cd youverify-invoice-app
   ```
3. Install packages
   ```sh
   yarn
   ```
4. Start up project
   ```sh
   yarn run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Working on the Youverify invoice App

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
