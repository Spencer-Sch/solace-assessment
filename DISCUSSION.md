# Additional Thoughts

## My Process for Addressing Challenges

My first step when approaching any assignment is to identify the core goals that should take priority. This means setting the scope of my focus to include only these priorities until they are achieved. Once the core priorities of my assignment are complete, then I will allow myself to begin considering additional tasks or the further development of my core priorities as seems necessary.

Generally speaking, I prioritize functionality first and leave detailed styling/design for later.

## Application of my Process to this Challenge

Taking the suggested 2 hour time limit into consideration, I decided on the following as the core priorities:

1. Update code to fit React standard patterns and best practices
2. Fix any remaining bugs
3. Achieve a functioning search feature
4. Apply some basic UI/UX improvements

I believe I was successful in accomplishing these goals within the allotted time.

## Additional Changes to be Made

### Configure a Database

With my primary experience being as a frontend developer, I decided to focus my limited time where I could make the most impact. This meant I decided not to configure the database during my two hours.

However, as someone focused on continuous improvement and learning, I will come back and complete that step on my own time in order to improve my familiarity with the process.

### Improve the Advocate Fetching & Filtering Process

The current approach of fetching all advocates in the DB and filtering through them on the frontend of the application is going to be a performance nightmare for a DB containing hundreds of thousands of advocates.

Improvements I would implement are:

1. Move the filtering logic to the server, closer to the DB to be more efficient
2. Paginate the data returned to the frontend to limit the number of advocates fetched at once
3. Debounce the search input to reduce the number of API calls

Accompanying UX improvements would be:

- Implement infinite scroll instead of pagination buttons
- Add loading state while data fetch/filter is happening

### Implement a Design System

The app is clearly missing a design system or really any design at all. Collaborating with project owners, stake holders, and other team members to come to an agreement on a design, codifying that design into a design system, and then implementing that system across the app would be a necessary improvement.

### Mobile First & Responsiveness

Modern applications are primarily interacted with via a mobile device so designing and implementing the above design system would need to happen via mobile first methodology. From there, responsiveness is key to allowing the app to look and function well at all screen sizes.

### Error Handling

Better error handling is always on my mind in order to keep the user informed about any issues that may be encountered.

### Sorting Columns

Allowing the user to sort the filtered advocates using the different table columns would be another great addition to allowing the user control over how they want to browse the data.
