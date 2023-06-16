# School assignment

## Frontend to book store api with JWT token logins

Known bugs:
- still "signed in" when token is invalid. (solution: filter? unsure.)
- Site does not scale at all.

What to do:
- Add some kind of filter to Login/Register view when already signed in.
- Css for modals
- Modals need to return the api answer (new list of user/books), Most of service functions returns the list, but it gets left in the modal and does not make it back to update the list.
