### TECH STACK
- use Gatsby.js which uses React Components to build single paged website
- deploy as a AWS instance or serve it as a static index.html with bundled js using nginx
- buy a custom domain and use it for your deployment

### Website
- should have a navbar - About Me(this section would containtech stack), Projects, Contact. Clicking on each nav item should focus the user to the section of the website
- left side of navbar should have a icon. It could be a picture of you or it could literally be MM. Something that represents you
- section About Me (default section) should show a picture of you + Your role + a description of yourself. It should also link your resume and github and linkedin. Use Icons to describe the stacks that you are familiar with
- Section Projects should contain picture + description + working demo link OR github to projects you have. 
- Section Contact(optional) should literally be a email form telling the users to email you. 
- should have a footer. Footer should contain links pertaining to you, your address(mine), email, git, linkedin, trademark, etc. You could also insert a sentence that says "code for this website <here>"

# Extra features
[x] Lambda Serverless Contact Form. No need to mailto: Just hit send and it sends an email to me. 
* There is a config.js file that has all the lambda API points.
* The controller has the POSTing function.
* AFTER successful post, a message is sent back with an ID (RESTFUL)
* User is notified of posting (RESTFUL)
* DONT USE AXIOS. DOES NOT WORK WITH SERVICE WORKERS.

[] Transitions, scale Keyframes. Make it friendly for mobile first. 


This based on the Forty template by CodeBushi designed by HTML5 UP


## Installation

Run `gatsby develop` in the terminal to start the dev site.
Run `npm run deploy:surge` to deploy the production site

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
<div className="grid-wrapper">
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
    <div className="col-4">
        <p>Content Here</p>
    </div>
</div>
```