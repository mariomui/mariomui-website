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


# gatsby-starter-forty

**This is a starter for Gatsby.js V2.**

**The older V1 version of this starter can be found on the v1 branch**

Gatsby.js V2 starter based on the Forty site template, designed by HTML5 UP. Check out https://codebushi.com/gatsby-starters/ for more Gatsby starters and templates.

## Preview

https://gatsby-forty.surge.sh

## Installation

Install this starter (assuming Gatsby is installed) by running from your CLI:
<br/>
`gatsby new gatsby-starter-forty https://github.com/codebushi/gatsby-starter-forty`

Run `gatsby develop` in the terminal to start the dev site.

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