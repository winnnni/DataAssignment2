/**
 * @author
 */
/*
		 * the purpose of this assignment is to create a list of books with different properties, including
		 * types and versions.
		 * From this list, create two new lists, one of them is my need list, the other is my want list.
		 */
			var myBooks = [{
			"bookname" : "Microeconomics",
			"type" : "used",
			"version" : "hardcover",
			"needorwant" : "need"
			}, {
			"bookname" : "The Big Short",
			"type" : "new",
			"version" : "kindle",
			"needwant" : "need"
			}, {
			"bookname" : "Monument's Men",
			"type" : "new",
			"version" : "kindle",
			"needwant" : "want"
			}, {
			"bookname" : "Gateways to Art",
			"type" : "new",
			"version" : "papercover",
			"needwant" : "want"
			}, {
			"bookname" : "Business Reader",
			"type" : "new",
			"version" : "papercover",
			"needwant" : "need"
			}];
			console.log(myBooks);

			//these are the lists I will sort my cart into
			var myNeedlist = [];
			var myWantlist = [];
			
			//for every item in my list, check if it is need or want. 
			//If it's need, go to my need list; or else, go to want list.
			
			//introduce i and console.log the character

				for (var i = 0; i < myBooks.length; i++) {
					//I can use i<5, because there are 5 items in the list
					// use the "length", then I don't need to count the total number ourselves, and avoid making mistakes.
					
					var currentBook = myBooks[i];
					//console.log(currentBook);
					//no need to console.log currentBook, it makes double lines show up in the chorme browser

					if (currentBook.needwant == "need") {
						// the == means the same as, I want to sort out the books I need instead of giving it a new meaning
						console.log(currentBook);
						myNeedlist.push(currentBook);
						//push means add.
						//because it is need, the book goes to my need list
						//otherwise, add the book to my want list
					}else{
						myWantlist.push(currentBook);						
					} //this is the end of the if/else list
				} //this is the end of my for loop
				
				//for loop is for iteration, by applying for loop, the code can repeat itself and execute 
				//without for loop, code can only execute one property at a time
				
				console.log(myNeedlist);
				console.log(myWantlist);
			