# Project Overview

## Project Name

Get Trippin'

## Project Description

This app will be able to help you plan your next adventure within the U.S. User will be able to look at some already created trip ideas, create their own trip ideas for others to see, and lastly edit already trip ideas to make them better with reviews. 

## Wireframes
<img width="857" alt="Screen Shot 2021-06-28 at 8 55 20 PM" src="https://user-images.githubusercontent.com/81048858/123720991-58490e00-d853-11eb-8ef7-e67b093b3372.png">


<img width="850" alt="Screen Shot 2021-06-28 at 8 55 33 PM" src="https://user-images.githubusercontent.com/81048858/123721071-7ca4ea80-d853-11eb-8dc5-a5ce0a143ae3.png">

<img width="854" alt="Screen Shot 2021-06-28 at 8 55 42 PM" src="https://user-images.githubusercontent.com/81048858/123721121-9cd4a980-d853-11eb-80b7-313d1e5b3842.png">


<img width="737" alt="Screen Shot 2021-06-28 at 8 55 58 PM" src="https://user-images.githubusercontent.com/81048858/123721174-bd9cff00-d853-11eb-95f9-a394bc8a86a4.png">


<img width="706" alt="Screen Shot 2021-06-28 at 8 56 07 PM" src="https://user-images.githubusercontent.com/81048858/123721229-d9a0a080-d853-11eb-80f8-ec57d341a745.png">


<img width="697" alt="Screen Shot 2021-06-28 at 8 56 14 PM" src="https://user-images.githubusercontent.com/81048858/123721286-fc32b980-d853-11eb-8181-539aaa9ecd77.png">


## Component Hierarchy
<img width="854" alt="Screen Shot 2021-06-28 at 9 14 27 PM" src="https://user-images.githubusercontent.com/81048858/123722206-e1614480-d855-11eb-967a-164e405d6e5c.png">

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keytqKiIOeeFkHG8K'}).base('appBSQnq6pOwxWbIv');

base('Trips').create([
  {
    "fields": {
      "Where": "New York City 1",
      "Attractions": "Empire State Building",
      "Needs": "Good shoes, good camera, good weather",
      "Ratings": "3",
      "Comments": "Can be amazing with great company. Great view of the city but wont stay for too long"
    }
  },
  {
    "fields": {
      "Where": "New Jersey",
      "Attractions": "Dream Mall",
      "Needs": "Good shoes, budget, and desire for adventure",
      "Ratings": "3",
      "Comments": "Bring a lot of money and bring comfortable shoes. Good place for adventures with family"
    }
  }
], function(err, records) {
  if (err) {
    console.error(err);
    return;
  }
  records.forEach(function (record) {
    console.log(record.getId());
  });
});
OUTPUT
recS9HW9Mb7b0noUc
rec7vi4JwoTHngBhd
Update Trips records
To update Trips records, use the update or replace method. An update will only update the fields you specify, leaving the rest as they were. A replace will perform a destructive update and clear all unspecified cell values. The example at the right uses the non-destructive update method. Click here to show a destructive replace call.

The first argument should be an array of up to 10 record objects. Each of these objects should have an id property representing the record ID and a fields property which contains all of your record's cell values by field name. You can include all, some, or none of the field values.

Automatic data conversion for update actions can be enabled via typecast parameter. See create record for details.

You can also include a single record object at the top level. Click here to show an example.

 
CODE
```json
{
    "records": [
        {
            "id": "recS9HW9Mb7b0noUc",
            "fields": {
                "attractions": "Empire State Building",
                "where": "New York City 1",
                "ratings": 3,
                "needs": "Good shoes, good camera, good weather",
                "comments": "Can be amazing with great company. Great view of the city but wont stay for too long"
            },
            "createdTime": "2021-06-28T00:13:06.000Z"
        },
        {
            "id": "rec7vi4JwoTHngBhd",
            "fields": {
                "attractions": "Dream Mall",
                "where": "New Jersey",
                "ratings": 3,
                "needs": "Good shoes, budget, and desire for adventure",
                "comments": "Bring a lot of money and bring comfortable shoes. Good place for adventures with family"
            },
            "createdTime": "2021-06-28T00:13:06.000Z"
        },
        {
            "id": "recIhntayBr78XoNa",
            "fields": {
                "attractions": "Holiday World",
                "where": "Indiana",
                "ratings": 2,
                "needs": "Car, towel, comfortable shows, money",
                "comments": "Good small park for family. You will go on the rides more than once because the park is small."
            },
            "createdTime": "2021-06-28T00:13:06.000Z"
        }
    ],
    "offset": "recIhntayBr78XoNa"
}
```

### MVP/PostMVP

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decide what is placed into your MVP, as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
-create-react-app, make it interactive
-Use React Router Dom installed by NPM
-Have minimum 6 rendered components
-organize React file structure
-Axios to retrieve data from Airtable, and GET that data in components 
-Axios to POST new data on Airtable
-Use React for DOM Manipulation
-Add styling
-Use flexbox or CSS grid
_Use media query desktop and mobile
-Commit everyday. Have at least 20 commits in project.



#### PostMVP  


- Add average rating scale
- Favorite page
- add flags of the states

## Project Schedule



|  Day | Deliverable | Status
|---|---| ---|
|June 27-28| Prompt / Wireframes / Component Hierarchy/ Timeframes | Incomplete
|June 29| Project Approval | Work on JSX for components/Render and GET data from Airtable
|June 30| Core Application Structure JSX| Incomplete
|July 1| Pseudocode / actual code | Incomplete
|July 2| Finalize code for JSX| Incomplete
|July 3| Start on CSS| Incomplete
|July 4| Continue working on CSS and make everything cohesive/media query for mobile| Incomplete
|July 5| Make sure media query works well and everything is working
|July 6| If confident with MVP work on PMVP
|July 7| Presentations

## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Structuring and psuedo code| H | 3hrs| 3.5hrs |-|
| JSX code | H | 3hrs| 3hrs |-|
| Working with API | H | 3hrs| 3hrs |-|
| Adding Form Create | H | 3hrs| 3hrs |-|
| Adding Form Edit | H | 3hrs| 3hrs |-|
| Making sure GET work| H | 3hrs| 3hrs |-|
| Making sure POST works | H | 3hrs| 3hrs |-|
| Making Airtable organized and functional/new and old data displayed | H | 3hrs| 3hrs |-|
| CSS | H | 3hrs| 3hrs |-|
| Media Query| H | 3hrs| 3hrs |-|
| Debugging | H | 3hrs| 3hrs |-|
| PMVP | H | 3hrs| 3.5hrs |-|


## SWOT Analysis

### Strengths:
-I would say that I can code JSX faster than CSS. Rending data would be a strength. Staying organized and timely 

### Weaknesses:
-CSS for React is going to prove most challenging and is going to take a considerable amount of time to accomplish as well as the media query.

### Opportunities:
-Become more skilled with React and understanding the concepts in greater detail

### Threats:
- JSX will prove to be tough if I dont start it first. CSS needs to be started right after JSX so i have time. CSS can lose me as I always spend too much time on it.

