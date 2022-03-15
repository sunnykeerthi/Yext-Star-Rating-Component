# Guide

## Note: Please make sure the *ratings* variable in your KG is of type *Number*

## template.hbs

 - Paste `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">` in line 1 of `template.hbs` file.
 - In side the first div (Line 2), add `{{>  rating}}` . Change the position as per your requirement, like next to title/subtitle etc.
 - outside of this div, add the following code.  

        {{#*inline 'rating'}} 
         <div class="star-rating" title="{{card.ratingPercentage}}%">
            <div class="back-stars">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
    
                <div class="front-stars" style="width: {{card.ratingPercentage}}%">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
            <span class="rating-figure"> {{#if card.rating}}{{card.rating}}{{/if}} ({{card.noOfVotes}})</span>
          </div> 
        {{/inline}}

## component.js

Inside `return {}` create a new variable `ratingPercentage`(or whatever, the same should be used in your `template.hbs`). and assign as value `profile.c_cRating ? (profile.c_cRating / 5) * 100 : 0,`(**Note:** Here the value in my KG holding the rating is *c_Rating*, please update this accordingly). And finally `c_noOfVotes` gives me the total number of votes. It Should resemble below.

     return {
       rating: profile.c_cRating ? profile.c_cRating : 0, //This holds my rating
       ratingPercentage: profile.c_cRating ? (profile.c_cRating / 5) * 100 : 0, // this returns rating to percentage calculated
       noOfVotes: profile.c_noOfVotes ? profile.c_noOfVotes: 0, //This holds my number of votes
     }
## answers.scss

Paste the data from `answers.scss` file above in the sandbox's `answers.css` file. (`**Please paste the content, do not override the existing**`). Here are the changes to update the branding (added the same as comments in `answers.scss` file).

 - To change the star background color, update `.back-stars color` attribute (currently setr to white).
 - To change the fill color, update `.front-stars color` attribute (Currently set to black).
 - To change the star's border color,  update `.fa -webkit-text-stroke-color: black;` attribute (currently, this is also set to black).
