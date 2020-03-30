# Know your Knight Backend

Know your Knight shows you where your knight can be in the next 2 rounds.

## Getting Started

- Download/Clone the project from this repository.
- While on the project directory in your terminal:
  - run `npm i`
  - check the prerequisites section.
  - then `npm start`
- The server will run at [http://localhost:8000/](http://localhost:8000/).


### Prerequisites
You'll need a couple of things to install/run the server:
  - npm
  - by default the server try to connect to redis at `localhost:6379`, so you'll nedd redis running at your machine, I recommend doing it with docker, running `docker run --name redistest -p 6379:6379 -d redis:alpine`, but you can change this configuration at `/src/db/redisConfig.js`
  - In case you don't want to get redis running, you can use de `redisless` branch.


## Running the tests

`npm test` on the project directory to run the tests.


## Knight's movement algorithm
Knights can move 2 cells in a axis and 1 in the other, so I listed all possible movements on a cartesian plane in `KnightController.moveList`.
Based on those movements, the `KnightController.getPossibleDestinations` method checks if any of the movements listed will take the knight off bounds and filters them out, returning an array of the valid coordinates the knight can on the next turn. For the second turn movement possibilities, we only iterate over the first returned array and call the same method on each position.

The knightMovement tests checks if the movements are being filtered correctly.


## Folder Structure

    .
    ├── src                     # Source files
    │   ├── Controllers         # App Logic related files
    │   ├── db                  # Database and persistence only related files
    │   └── utils               # Reusable helper functions
    └── test                    # Automated tests (**.spec.js)


## Contributing

Please read CONTRIBUTING.md for project details, required tools, node version, etc


## License

This project is licensed under the MIT License.
