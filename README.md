# ProductReviews

This micro service allows users to display and add reviews to all the products. Users can also give start rating to the product and sort the reviews based on their star ratings and date posted.  

**Retail Clone**

Retail Clone is a Full-Stack E-commerce Web Application to implement Item Detail Page with focus on design and functationality. This Application was built by a team of five Full Stack Software Engineers from the Hack Reactor, Austin 50th Cohort (HRATX50).The site utilizes service oritented architecture to increase flexibility, scalability, and reliablility. The final project consists of 5 standalone services, which can be easily combined utilizing a Proxy. The five services are Search/Header/Footer, About This Item, Recommended / Featured Items, and Product Reviews.

### Overall Page Demo

![B1](https://user-images.githubusercontent.com/34432441/97263679-e28b2f00-17f9-11eb-8e61-fc85a8be7e6f.gif)

### Product Reviews Demo

![b2](https://user-images.githubusercontent.com/34432441/97263908-431a6c00-17fa-11eb-8660-ed5e92e01a5e.gif)

### Dev Team

  * [Mariella Arias]: Frequently Bought Together and Recommended Items
  * [Andrew Binkard]: About This Item
  * [Steven Brotherton]: Header (Searchbar) and Footer
  * [Rahul Chauhan]: Product Reviews
  * [Belle Nguyen]: Product View and Shipping

### Tech Stack 
*Product Reviews* was built primarily with ReactJS and CSS on the front end and Node/Express on the backend. Other key technologies used are listed below: 

### Technologies

<table style="width:50%">
  <tr>
    <td class="subheading">Front-end</td>
    <td><a href="https://reactjs.org/">React</a></td>
    <td><a href="https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/">CSS modules</a></td>
    <td><a href="https://github.com/airbnb/javascript">AirBnB style guide</a></td>
  </tr>
  <tr rowspan="2">
    <td class="subheading">Back-end</td>
    <td><a href="http://nodejs.org">Node.js</a></td> 
    <td><a href="http://expressjs.com">Express</a></td>
    <td><a href="https://www.mysql.com/">mySQL</a></td>
  </tr>
  <tr>
      <td class="subheading">Dev Tools</td>
      <td><a href="https://webpack.js.org/">Webpack</a></td>
      <td><a href="https://babeljs.io/">Babel</a></td>
      <td><a href="https://www.npmjs.com/">NPM</a></td>
    </tr>
 <tr>
      <td class="subheading">Deployment</td>
      <td><a href="https://aws.amazon.com/ec2/">AWS EC2</a></td>
    </tr>
</table>

### Workflow
Our team managed workflow and responsibilities by utilizing Agile methodology. Trello was used to to keep track of tickets. With <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow">git feature branch workflow</a>, our team managed each of our separate components. When it came time to deploy, we each deployed our separate components and built a proxy server which rendered the separate components together, thereby making use of Service Oriented Architecture. 
