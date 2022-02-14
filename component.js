 return {
      rating: profile.c_cRating ? profile.c_cRating : 0, //This holds my rating
      ratingPercentage: profile.c_cRating ? (profile.c_cRating / 5) * 100 : 0, // this returns rating to percentage calculated
      noOfVotes: profile.c_noOfVotes ? profile.c_noOfVotes: 0, //This holds my number of votes
 }
