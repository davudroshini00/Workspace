# Survey Website App

This repository contains a survey website app built using the React app.Please follow the instruction to set it up.

**Tools Used**

1. React.js
2. Bootstrap
3. CSS
   

 **Features**

 1. Basic Details
 2. Additional Questions
 3. Entered Details
 4. Thank You Page
   
### Instructions

1. Run ``npx create-react-app survey-website``.
2. Then run ``npm install react-router-dom``

---
**HTML for a question**
```html
<div className="form-group m-2" onChange={handleProfessionChange}>
    <label htmlFor="q1">
      <b>1.</b> What is your profession?
        </label>
         </div>                           
```
**HTML for Submit button**
```html
<button type="submit" onClick={submit} ClassName="btn btn-success">
    Submit
    </button>
```

