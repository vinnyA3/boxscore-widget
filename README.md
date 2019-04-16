# Boxscore Widget
> The Boxscore is the goto widget on any sports site to get quick information about a game.  ESPN, Fox Sports, theScore, and many others have solutions.

**Prototype**:
<p align="center">
  <img height="141" width="481" src="https://github.com/vinnyA3/fullstack-challenge/blob/master/screenshots/fullstack.png?raw=true">
</p>

---

### Getting started 
First, make sure that **node** and **mongodb** are both installed on your local
machine.  Next, start the mongodb daemon.

To run the application locally, you can:
* Clone the repo: `git clone git@github.com:vinnyA3/fullstack-challenge.git`
* Install all necessary dependencies: `npm install`
* Start both the client and server dev. processes: `npm run dev`

Finally, navigate to [http://localhost:8000](http://localhost:8000)

---

### Deliverables
Links to both the NodeJS Server repo, and the React App repo.
* The NodeJS Server should:
	- [x] Consume and store the feed data from the feeds above, in a database.
	- [x] Contain endpoints that allowing the React app to consume data from the database.
	- [x] Be simple and straightforward to run. Think `yarn start` or `npm start`.
* The React app should:
	- [x] Consume the NodeJS API, and will feed data into the components.
	- [x] Also, be simple and straighforward to get running.

---

### Possible improvements and optimizations
Here are some improvements that could be made:
* A testing suite, such as Jest, could be used 
* A production build of webpack could be generated (compressed and uglified)
* Typechecking could be used ie. *React PropTypes*
* Another database could be used for caching data (ie. *Redis*)

