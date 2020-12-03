<img src="./public/images/dsc-wow-white.gif" height="240px">

### Developer Student Clubs WOW Website

This repository contains the official website for the DSC WOW event, organized by a mega-collaboration between more than 121+ DSC's.

### Project Info

This project uses [React.Js](https://reactjs.org) and the contents are bundled using webpack.

The contents in this project follow the following structure.

```
├───public
│   └───images
│
└───src
    ├──sections
    │   ├───about
    │   ├───faq
    │   ├───footer
    │   ├───landing
    │   ├───schedule
    │   ├───speakers
    │   └───sponsors
    │
    │
    └───shared_components
        ├───button
        └───sidebar
```

Each individual section and component, follows this structure

```
section
  ├──components
  └──styles
```

#### Constants

This project uses 'Roboto' as it's primary font, with weights of 300, 400, 500 and 700. All the fonts have been pre-imported.

Moreover, here are a few constants which are used throughout the project, and have been added to the root of css, use them accordingly.

```
font-size: 16px;
--bg-primary: #ffffff;
--bg-secondary: #f5f5f5;
--text-primary: #000000;
--text-secondary: #202124;
--btn-primary: #0005df;
--btn-secondary: #ffffff;
--focused-state: #c2c3f7;
--transition-speed: 250ms;
--sidebar-width: 5rem;
```

## Setup

##### Clone the repository

```bash
git clone https://github.com/ishandeveloper/DSC-WOW.git
```

##### Move to the desired folder

```bash
cd \DSC-WOW
```

##### To install the dependencies, simply write

```bash
yarn install
```

##### To run the app, simply write

```bash
yarn start
```

### Contributors

<p align="left">
<a href="https://github.com/ishandeveloper"><img width="72px" src="https://avatars1.githubusercontent.com/u/54989142?s=460&u=4b787a0f50c1236b915d4766aa1a40c1b1d9f313&v=4"></a>
<a href="https://github.com/maheshn22"><img width="72px" src=https://avatars0.githubusercontent.com/u/56269416?s=460&u=ce88319460f1f7c17602d5be8ed960d7443d47d5&v=4"></a>
<a href="https://github.com/Yashank18"><img width="72px" src="https://avatars2.githubusercontent.com/u/46098062?s=460&u=1704c77ef3ffb6472dd3a01bc40df0cef01b9c09&v=4"></a>
<a href="https://github.com/sanchibansal340"><img width="72px" src="https://avatars3.githubusercontent.com/u/51092036?s=460&u=740acc04c49c10f016de57476677063135e56f9d&v=4"></a>
<a href="https://github.com/abhishekraj272"><img width="72px" src="https://avatars3.githubusercontent.com/u/27128838?s=460&u=801211cd3583ce1f2b9d1dd0e273835b666802a4&v=4"></a>
<a href="https://github.com/sanket9006"><img width="72px" src="https://avatars1.githubusercontent.com/u/53385614?s=460&u=87a0c623d1928ed4322bef068581a4c251456de8&v=4"></a><a href="https://github.com/Akhil-chaudhary"><img width="72px" src="https://avatars0.githubusercontent.com/u/54743359?s=460&u=9de95b6efa9f75da8a049b04b157bf52e0cbf815&v=4"></a>
</p>

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/ishandeveloper)
