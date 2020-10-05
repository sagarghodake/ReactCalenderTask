# React-Calendar

<div align="center">
  <img width="436" heigth="398" src="https://projects.wojtekmaj.pl/react-calendar/react-calendar.jpg">
</div>

Ultimate calendar for your React app.

* Pick days, months, years, or even decades
* Supports range selection
* Supports virtually any language
* No moment.js needed

## tl;dr
* Install by executing `npm install react-calendar` or `yarn add react-calendar`.
* Import by adding `import Calendar from 'react-calendar'`.
* Use by adding `<Calendar />`. Use `onChange` prop for getting new values.

## Demo

A minimal demo page can be found in `sample` directory.

[Online demo](http://projects.wojtekmaj.pl/react-calendar/) is also available!

## Before you continue

React-Calendar is under constant development. This documentation is written for React-Calendar 3.x branch. If you want to see documentation for other versions of React-Calendar, use dropdown on top of GitHub page to switch to an appropriate tag. Here are quick links to the newest docs from each branch:

* [v2.x](https://github.com/wojtekmaj/react-calendar/blob/v2.x/README.md)

## Getting started

### Compatibility

Your project needs to use React 16.3 or later.

React-Calendar uses modern web technologies. That's why it's so fast, lightweight and easy to style. This, however, comes at a cost of [supporting only modern browsers](https://caniuse.com/#feat=internationalization).

#### Legacy browsers

If you need to support legacy browsers like Internet Explorer 10, you will need to use [Intl.js](https://github.com/andyearnshaw/Intl.js/) or another Intl polyfill along with React-Calendar.

### Installation

Add React-Calendar to your project by executing `npm install react-calendar` or `yarn add react-calendar`.

### Usage

Here's an example of basic usage:

```js
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
```

Check the [sample directory](https://github.com/wojtekmaj/react-calendar/tree/master/sample) in this repository for a full working example. For more examples and more advanced use cases, check [Recipes](https://github.com/wojtekmaj/react-calendar/wiki/Recipes) in [React-Calendar Wiki](https://github.com/wojtekmaj/react-calendar/wiki).

### Custom styling

If you want to use default React-Calendar styling to build upon it, you can import React-Calendar's styles by using:

```js
import 'react-calendar/dist/Calendar.css';
```

instead.


## Useful links

* [React-Calendar Wiki](https://github.com/wojtekmaj/react-calendar/wiki)
