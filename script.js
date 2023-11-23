var quote=["Success is No Accident","Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts","Don't Count the Days, Make the Days Count","He Who is Not Courageous Enough to Take Risks Will Accomplish Nothing in Life","Don't Wait for Opportunity, Create it","Either Run the Day or the Day Runs You","When You Feel Like Quitting, Remember Why You Started","Great Things Never Come From Comfort Zones","The Real Risk is Doing Nothing","Success is Walking from Failure to Failure","Action is the Foundational Key to Success","In the End We Only Regret the Chances We Didn't Take"," Success isn't Always about Greatness. It's about Consistency","Success is Where Preparation & Opportunity Meet","80% of Success is Showing Up","It is not enough to be busy; so are the ants. The question is: What are we busy about?","Life Is What Happens While You Are Busy Making Other Plans","Stop the world. I want to get off.","I wanted to figure out why I was so busy, but I couldn't find the time to do it.","I recommend you take care of the minutes and the hours will take care of themselves." 
];

function newQuote(){
    var randNum=Math.floor(Math.random()*(quote.length));
    document.getElementById("quote-display").innerHTML=quote[randNum];
}



