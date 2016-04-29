# Results Page

## Components
```js
ResultsPage
  SearchContainer
    SearchBar
  FilterContainer
    Filter
  ItemsContainer
    Item
```

### SearchBar
State: search term to autofill  
Action: SEARCH
```js
{
  type: SEARCH,
  query: 'regex'  
}
```

### Filter
State: ```filter: 'someFilter'```  
Action: SET_RESOURCE_FILTER
```js
{
  type: RESOURCE_FILTER,
  filter: 'books'  
}
```
Later I may want to add an availability filter and a source filter.

### ItemsContainer
State:   
```js
{
  items: [ item... ],
  filter: 'books'
}

```
Action: none

### Item
State:   
```js
{
  title: 'Mastering Regex',
  subTitle: 'All you need to know to',
  author: 'Dr. Reggie',
  type: 'book',
  averageRating: 2.5,
  thumbnail: 'http://bookcover.img',
  availability: {
    localLibraries: ['Main', 'Potrero'],
    linkPlus: 'http://linkplusitem',
    purchase: 'http://amazon.com?yourbook'
  }
}
```
Action: none, but clicking on an item should link to the items detail page.
