var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];
   
   
   if(library[0].readingStatus===true)
   {
   console.log("Already read 'Bill Gates' by The Road Ahead.");
   }
   else
   {
   console.log("You will need to read 'Bill Gates' by The Road Ahead.");
   }
   
   
   if(library[1].readingStatus===true)
   {
   console.log("Already read 'Steve Jobs' by Walter Isaacson.");
   }
   else
   {
   console.log("You will need to read 'Steve Jobs' by Walter Isaacson.");
   }
   
   
   if(library[2]. readingStatus===true)
   {
   console.log("Already read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne");
   }
   else
   {
   console.log("You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.");
   }