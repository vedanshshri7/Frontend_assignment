
# Atlan SQL RUNNER

## Introduction

This project is a frontend-based SQL Editor developed for the Atlan Frontend Internship task. It provides a simple interface for users to write the SQL queries and view the output. 

## Data Storage

The application stores SQL query results as a local JSON object. When a query is executed, the app searches for a matching query in the stored dataset and retrieves the corresponding output.

## Page Speed and Optimisation

1. Lazy Loading with React Suspense – The TableGrid component is dynamically imported to reduce the initial load time.

2. useMemo for Output Rendering – Memoization is used to prevent unnecessary re-renders when the output does not change.

3. useTransition for Non-Blocking Updates – The query execution process is handled in a non-blocking way.

4. Efficient State Management – useState and useCallback are used to batch state updates and prevent redundant renders.


### Page Load Time

I checked the site's performance using Lighthouse, GTmetrix. The results show that it loads quickly and meets optimal performance standards, ensuring a smooth and responsive user experience.

Also,I added Screenshots of page load time in a later section.
 

## Dependencies

1. @emotion/react

2. @emotion/styled 

3. Material Ui

4. React-ace

5. React-Bootstrap

## WebSite OverView

<img width="720" alt="No query" src="https://i.imgur.com/nKnhANT.png">
<img width="720" alt="Queries" src="https://i.imgur.com/U2vBUzX.png">
<img width="720" alt="Output" src="https://i.imgur.com/IFBFcQG.png">
<img width="720" alt="History" src="https://i.imgur.com/vDcS1Pr.png">
<img width="720" alt="Theme" src="https://i.imgur.com/oV7uOEZ.png">
<img width="720" alt="Download Json" src="https://i.imgur.com/PG7Budx.png">

## Website Performance

<strong>Website Load Time: 0.9 seconds</strong>
  
![Website Loadtime](https://i.imgur.com/j37E2WA.png)
    
<strong>Performance check in GTmetrix : Grade A</strong>

![Load time](https://i.imgur.com/7m50eXz.png)

<strong>TimeSpan : 8/8 Performance</strong>

![TimeSpan](https://i.imgur.com/4ql0mNx.png)



