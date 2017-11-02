# Installation
Clone this repository (to simplify the setup all dependencies are part of this repository because it's just an example)

Run in the cloned folder:
```
brew install cocoapods yarn
cd ios
pod install
open native-ios.xcodeproj
cd ..
yarn start
```

# Run the app
Build & Run the app in XCode

In the simulator push the button - you should see blue page with this:

```
Congratulation!

This page is rendered using React Native!
Here are all the data from native code:

aaa: 123
bbb: 456
ccc: 789
```
