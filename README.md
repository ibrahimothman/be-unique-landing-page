# be-unique-landing-page

## What do i use
- React for creating the UI components
- Tailwind for styling the components
- Redux for state management

## Some changes in order to demonstrate how redux could be used
- In the second section where there are four cards, i changed the button for 3th and 4th cards to be (Add/remove cart) instead of (shop ...)
- So you can press add to/removefrom cart to see that the cart's length is being changied

## Where do i use states
- Footer component => where i listen to the emailAddress state to disable/enable the subscribe button
- ShopCard component => where i listen to isAddedToCart to determine the propert text on the button and which action should be dispatched (addToCart or removeFromCart)

## How do i use Redux
- Redux is used to manage cartLength state

## Notes
- I am using the MainLayout which includes the header component to be wrapped around all pages if in the future we want some kind of pattern across the pages

