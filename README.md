React 👩‍💻

# what is NPM?
 it is package manager,it is used to install the node modules.

# what is parcel/wepack ?
    parcel or webpack these are bundler which will allow to package the code in to single file , this what bundler do.
# .parcel-cache?
    it have the information of our project when parcel build it. so that when it rebuilds , it dosent have to re analyzing everyting from scratch.
# what is npx?
    npx stands for node_module package eXecute. it simply  an NPM Package runner.It allows developers to execute any Javascript Package available on the NPM registry without even installing it. npx is installed automatically with npm version 5.2. 0 and above. 
# what is diffrence between dependencies and DevDependencies?
    dependencies - these are used in the production phase
    devDependencies - these are used in the development phase
# what is tree shaking
    it describe that removeing of dead code i.e, import and export that are not used.
# what is HOT Module Replacement?
    by using HMR , we can see sode changes in the browser very fast with out refreshing it.
# superpowers of parsel
    -Dev Build
    -Local Server
    -Hot module Replesement- HMR
    -file watching algorithem -will written in c++
    -catching -For Faster builds
    -Image optimization
    -minifization
    -Bundling
    -compress
    -consisting hashing
    -code spliting
    -dignostics
    -Error Handling
    -Https
# what is .gitignore
    .gitignore file used to add file which are no need to push in to github, we need to add rebuild files even we delete those we can get back.
# diffrence between the package.json and package.lock.json
    in the package.json is a configaration of NPM it will accept the installed version of package, the versions are we can see 2 ways 
    1.Caret(^) - it indicate when small version came, it will help to update.
    2. tilde (~) - it indicate when the bigger versions came , it will help to update.

    in the package.lock.json file will automatically generated by the npm when the packages is installed , it will record the exact version of every installed dependency, including the sub dependencies and their version.
    
# why package.lock.json not be modefied?
    the npm will update the package.lock.json , when the we install the npm , here npm will only deside to modefy.

# what is node modules, is it a good itea to push them in git.
    node modules is way to reuse the code in the application, its not good idea to push node modules to git . because we can re create the node modules by using the package.json

# what is dist folder
    when we are building the application then the bulder will do compress the code , the compressed code information will save in the Dist folder. this file can be automatically genarate when we building the application.

# what is 'browserlists'?
    browserlist is a package  it will help run our app is older verstions of browsers, to configure we need to add a "browserslist" in the package.json with list of verstion of the browsers.



# ///////// jsx////////

 in jsx, the JSX code will transpile to react.createElement then react element object it render as a HTML Element.
 JSX code ==> react.createElement ==> reactElement(object) ==>HTMLElement(render)


# 1. What is JSX? 
 jsx is syntax like html

# 2.SuperPower of jsx?
=>Using JSX, you can write markup inside Javascript,
 providing you with a superpower to write logic and markup of a component inside a single
  jsx file. JSX is easy to maintain and debug.

# 3. Role of type attribute in script tag?What option can i use there?
=>The type attribute specifies the type of the script.
 The type attribute identifies the content between the <script> and </script> tags.

# 4. {TitleComponent} vs {<TitleComponent/>}vs{<TitleComponent></TitleComponent>}in jsx?
 => The Difference is stated below: {TitleComponent} : This value describes the TitleComponent as a javascript expression or a variable. 
 The {} can embed a javascript expression or a variable inside it. 
 <TitleComponent/> : This value represents a Component that is basically returning Some JSX value.
 {<TitleComponent></TitleComponent>} : This value also represents a Component that is basically returning Some JSX value.
 we can add elements between these two tags.


    



