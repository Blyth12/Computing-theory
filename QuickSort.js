/** The original algorithm
 * Quicksort(start point, end point)
	If there are at least 2 items in list
		Point KP at start point in list
		Point P at end point in list
		
		Repeat until P=KP
			Compare items at P and KP
			If out of order swap items and swap pointers
			Move P toward KP
			
		Quicksort before KP in the sublist
		Quicksort after KP in the sublist

 */

        let data = ['robot', 'parentheses', 'rather', 'question', 'stoned', 'surface', 'terrible', 'mutate']

        console.log(data)
        quicksort(0, data.length - 1)
        console.log(data)
        
        function quicksort(start, end) {
            if (data.length > 2) {
                let keyPointer = data[start]
                let pointer = data[end]
            }

            if (data[keyPointer] > data[pointer]){
                let temp = data[keyPointer]
                data[keyPointer] = data[pointer]
                data[pointer] = temp
            }
            else if (data[keyPointer] < data[pointer]){

            }
                
                // Repeat until P=KP
                // 	Compare items at P and KP
                // 	If out of order swap items and swap pointers
                // 	Move P toward KP
                    
                // Quicksort before KP in the sublist
                // Quicksort after KP in the sublist
          
        }