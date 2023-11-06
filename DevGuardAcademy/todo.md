
- [x] set stuff up
- [x] develop presentation components
- [x] develop screens
- [x] add modals capabiltiy
- [x] add good bottom navigation
- [x] develop inter-screen navigation
- [x] learn more about redux
- [x] add meaningful slices and default values for them
  - [x] deleted separate breaches and vulnerabilities decks, now have just 1 reducer, and put all stuff from data as different decks
  - [x] decks slice - add/remove adcard, remoce card, update deck, update card in deck
  - [x] stats slice -0 add totoal, increment all cetegories. reset study streak function, longest streak
  - [x] UI slice - do not need, react navigation handles this
  - [x] user slice - userInfo, isAuthenticated, login, logout, updateUser
- [ ] run and record a test run

the key missing pieces are the amplitude integration and redux. both are new to me, and expo app is not something I'm that proficient with to integrate these smoothly

## Bug fixes
- [ ] scrollable panel error
- [ ] modal error
- [ ] need to navigate all the pages safely

## interim
- [ ] change view into safearea view at the top level https://reactnative.dev/docs/safeareaview

## amplitude integration
- [x] consider running it as a side effect https://redux-saga.js.org/ - nah, deprecated it seems. just using the redux toolkit
- [ ] integrate amplitude
- [ ] get api key
- [ ] ok maybe if sdk is there the safety is less relevant, but still need to setup with vercel https://vercel.com/new/templates/other/nodejs-serverless-function-express
- [ ] add stories to the components here

## marketing
- [x] create a landing page - nah
- [ ] outline future features
- [ ] publish
