# Git_Manager

Simple Node Program to clone all students repositories. (Could be done in .SH)

## Setup

```sh
    git clone https://github.com/coditech/Git_Manager.git
    cd Git_Manager
    cd 00_GitManager
    npm install
```

## Use

#### Clone/Update Repository list.

```sh
    node ./GitManager.js
```

#### Check Exercise/Challenges

```sh
    node ./GitManager.js check (exercise/challenge name) stepNumber

    e.g cv-styling : node ./GitManager check cv-styling 2
    > return all student names that have not finished the exercise at step 2.
```

It should clone all submissions folder.

## Task List

- [x] Implement Update Function.
- [x] Implement Arguments.
- [x] Implement Exercises/Challenges Checkup.
- [ ] Implement fetching repo list from API
- [ ] Implement List of Exercises/Challenges to verify.
- [ ] Implement more arguments e.g : completed exercises etc..
- [ ] Cleanup the Code.
- [ ] Implement Code reading.
- [ ] Implement Code Compare (with others students)
