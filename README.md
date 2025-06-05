<a id="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://raw.githubusercontent.com/seaboie/images/main/images/logoTransparent.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">Typescript</h3>

  <p align="center">
    Typescript
    <br />
    <a href="https://www.youtube.com/watch?v=PEBKm8gXe5Y"><strong>On Youtube »</strong></a>
    <br />
    
  </p>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary style='font-size: 2em;'>Table of Contents</summary>
  <ol style='font-size: 1.5em;'>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#create-packagejson-file">Create `package.json` file</a></li>
        <li><a href="#install-tsx-with-yarn">Install `tsx`</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- GETTING STARTED -->
## Getting Started


### Prerequisites  

**Configure at `tsconfig.json`

> tsconfig.json  

```json
"compilerOptions": {
  "target": "es2017",
  "moduleDetection": "force"
}
```  

- `"moduleDetection": "force"` prevent error when declare same name variable in another files  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Create `package.json` file  

```bash
yarn init -y
```  

### Install `tsx` with `yarn`  

To install **`tsx`** as a **local development dependency** using Yarn, run:

```bash
yarn add -D tsx
```

### **What This Does:**
- `add` → Installs the package  
- `-D` → Saves it under `devDependencies` in `package.json` (for development tools)  
- `tsx` → The TypeScript execution runtime  

### **Why `-D` (--dev)?**
- `tsx` is a **development tool** (like `ts-node` or `vite`), not needed in production.  
- Keeps your production dependencies lean.  

### **After Installation:**
Run your TypeScript file in watch mode with:  
```bash
yarn tsx watch src/index.ts
```
*(No `npx` needed—Yarn automatically resolves local binaries!)*  

### **Bonus: Add a Script**  
In `package.json`:  
```json
{
  "scripts": {
    "dev": "tsx watch src/index.ts"
  }
}
```
Then just run:  
```bash
yarn dev
```

### **Key Notes:**
- **Global install?** Not recommended (use `-D` for project-specific versions).  
- **Already installed?** Yarn will upgrade/downgrade to match the version in `package.json`.  

Yarn’s workflow is cleaner than npm’s for local tools—no `npx` needed! 🚀  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---  


### Installation



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- ACKNOWLEDGMENTS -->
## Acknowledgments  

* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[logo-image]:https://raw.githubusercontent.com/seaboie/images/main/images/logoTransparent.png

