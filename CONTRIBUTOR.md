# Contributor guide

#### Read guide below if you would like to know how to run this application in your local environment to test out features you'd like to implement!

##### Note that this file walks you through using Github Desktop + Visual Studio Code<br> (although you can use a different editor because most of the guide uses Github Desktop)

### Quick access index

Getting started<br>
[Objectives](#objectives)<br>
[Methodology](#methodology)<br>
[Tools](#tools)<br>
[Helpful extensions](#helpful-extensions)<br>
[Documentation](#documentation)<br><br>
Contribute<br>
[Step 1 - Clone and open in Visual Studio Code](#step-1---clone-and-open-in-visual-studio-code)<br>
[Step 2 - Run the NextJS application](#step-2---run-the-nextjs-application)<br>
[Step 3 - Exit the application](#step-3---exit-the-application)<br>
[Step 4 - Commit the changes and make a pull request](#step-4---commit-the-changes-and-make-a-pull-request)<br>
[Step 5 - Celebrate!](#step-5---celebrate)<br>

### Objectives

The main objective of this file is a walkthrough of how to setup and run this application locally and is for maintainers and contributors alike! If at any point anything becomes unclear, please create an issue with which steps are confusing and tag `win21H2`.

[↑ Go to top ↑](#quick-access-index)

### Methodology

  - Clone this github repository and open it in Github Desktop
  - Open the repository in Visual Studio Code using Github Desktop
  - Make a new branch
  - Commit to that branch and via Github Desktop, create a pull request

[↑ Go to top ↑](#quick-access-index)

### Tools

<a href="https://desktop.github.com/" target="_blank">Github Desktop</a><br>
<a href="https://code.visualstudio.com/download" target="_blank">Visual Studio Code</a>

[↑ Go to top ↑](#quick-access-index)

### Helpful extensions

<a href="https://prettier.io/docs/en/editors.html">Prettier</a>

[↑ Go to top ↑](#quick-access-index)

### Documentation

`TODO`

[↑ Go to top ↑](#quick-access-index)

### Step 1 - Clone and open in Visual Studio Code

Firstly, you want to head over to the green `code` button. Next, you will have to go to the `HTTPS` section and copy the URL which is provided (you can click the small copy icon to the right of the link).<br>

![image](https://user-images.githubusercontent.com/92825997/183276666-7376fc2e-547a-43b6-9296-bc92873b0e26.png)<br>
![image](https://user-images.githubusercontent.com/92825997/183276677-4263f38a-4496-4cf3-810d-38cf5c78dfd9.png)<br>

Now go ahead and open up Github Desktop and click `File` and then `Clone repository...`, you should then see a `Clone repository` window pop up, go to the `URL` section on the top menu and paste the link in the `URL or username/repository` section. After that, click `Clone`<br>

![image](https://user-images.githubusercontent.com/92825997/183276696-90dc6901-5826-45fd-aefe-fe4bd008909d.png)<br>
![image](https://user-images.githubusercontent.com/92825997/183276716-f2f3eed9-43fd-47d2-bfb8-4e2c42afc5d2.png)<br>

You should then see something like the below

![image](https://user-images.githubusercontent.com/92825997/183300233-1ebceef9-47af-4bf3-b7ba-ad63a3f0a71d.png)<br>

Which means you have cloned the repository to your local computer. After that, go ahead an click on the `Fetch origin` button around the top right and after it fetches, click on the button on the top that says `Current branch` and click `New branch` and name your branch. An example is `win21H2-card`<br>

![image](https://user-images.githubusercontent.com/92825997/183300444-610a1798-52f3-4ce8-b7b1-2fb82e41d502.png)<br>
![image](https://user-images.githubusercontent.com/92825997/183300513-796c711d-8941-414b-9701-92d33e424795.png)<br>

Go ahead and click the `Create branch` button and then `Publish branch`.<br>

![image](https://user-images.githubusercontent.com/92825997/183300566-62bd1bef-837e-476f-8812-7b779bd2dc1f.png)<br>

At this point, do not click `Create Pull Request` because you have not added anything and there is no point making a pull request with nothing in it. Now, click the `Open in Visual Studio Code` button.<br>

![image](https://user-images.githubusercontent.com/92825997/183300703-4bb2a869-d471-412f-b0f3-54e15ee8128e.png)<br>

Note that the editor you use does not have to be Visual Studio Code and if you would like to change it, there is a link `Options`, click on that and change the editor to the one you want to use.

[↑ Go to top ↑](#quick-access-index)

### Step 2 - Run the NextJS application

Firstly, you will need to run in the integrated terminal (VSCode) the command `npm i`. This will look in the package.json file and install the needed packages for the application to run.<br>

It should look something like the below<br>
![image](https://user-images.githubusercontent.com/92825997/183319872-6de5590c-5d15-4a18-ab76-3e0ce64c0beb.png)<br>

Then, you want to run `npm i next` which will install next which allows you to run the application<br>

It should look something like the below<br>
![image](https://user-images.githubusercontent.com/92825997/183319960-a2eeb5b2-934b-4283-a31e-fde66f4c8bec.png)<br>

And at last in order to run the application, type out the command `npm run dev` which will start up a development server @ the address: `http://localhost:3000`<br>

It should look something like the below<br>
![image](https://user-images.githubusercontent.com/92825997/183320111-aead1cae-b5ca-4f54-a895-6b5513f0eb0b.png)<br>

Well done! You have just learnt how to start up a NextJS application using a CLI

[↑ Go to top ↑](#quick-access-index)

### Step 3 - Exit the application

In order to stop the application, all you have to do is go to the terminal and hit `Ctrl + C` and then type out `y` and it should close down the localhost address. <br>Note that you wont see any changes past this point since localhost:3000 is no longer running. If you want to get it back up and running, simply follow step 2 again!

[↑ Go to top ↑](#quick-access-index)

### Step 4 - Commit the changes and make a pull request

Once you have made changes to the files e.g. adding in some lines of code, you now have to commit the changes to the branch. Go back to Github Desktop and you should now see some red and green lines (if you changed the files) 

It should look something like the below<br>
![image](https://user-images.githubusercontent.com/92825997/183320451-477b5000-a035-47e0-9a49-6e345df62c48.png)<br>

Now, enter a summary such as `added CSS styling for darkmode` and a description (which is optional) such as `Added styling for darkmode effects etc.`

It should now look something like the below<br>
![image](https://user-images.githubusercontent.com/92825997/183320575-6df47641-9d07-465d-980e-afa248edc346.png)<br>

Now, click the `Commit to` button and you should be brought back to the main page and now you have to click the `Push origin` button which will push your commit to the branch you made.

It should now look something like the below<br>
![image](https://user-images.githubusercontent.com/92825997/183320726-423fc72d-8aee-4ae2-b6f6-a9de2c62c647.png)<br>

Now you can click the `Create Pull Request` button which should bring you to the Github website. 

It should look something like the below<br>
![image](https://user-images.githubusercontent.com/92825997/183320867-c6d06b9a-1417-4081-8548-35bd89cfc993.png)<br>

From here you can edit any details (such as the title or the description) although if you want to keep it the same, click the `Create pull request` button.  

It should look something like the below<br>
![image](https://user-images.githubusercontent.com/92825997/183321006-cde98c8a-7665-4d71-a23f-93644d49304a.png)<br>

[↑ Go to top ↑](#quick-access-index)

### Step 5 - Celebrate

Congrats! You have learnt how to clone, open, run this application and then commit, and create a pull request for maintainers to review!

[↑ Go to top ↑](#quick-access-index)

links to tailwind, nextjs, react, typescript docs
check out this repo for the main README of this repo
work on contributor guidelines
