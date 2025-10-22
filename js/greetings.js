        /**
         * The core logic function that determines the time of day and updates the display.
         */
        const now = new Date();
        const currentHour = now.getHours();
        console.log(now.getHours());

        function updateGreeting() {

            // Get references to the three time-of-day element containers
            const morningContainer = document.getElementById('morning-container');
            const afternoonContainer = document.getElementById('afternoon-container');
            const nightContainer = document.getElementById('night-container');

            console.log(morningContainer);
            console.log(afternoonContainer);
            console.log(nightContainer);
            
            // Get a reference to the body tag for background color changes

        

            // 1. Hide all elements first (ensures only one is shown)


            // 2. Conditional Logic: Determine the time frame using if/else statements

            // Morning: 5 AM (inclusive) to 12 PM (exclusive) -> Hours 5 to 11

           if (currentHour >= 5 && currentHour < 12) {
            console.log("Good Morning!");
            }

                // Show Morning


            // Afternoon: 12 PM (inclusive) to 6 PM (exclusive) -> Hours 12 to 17

            else if (currentHour >= 12 && currentHour < 17) {
            console.log("Good Afternoon!");
            } 

                // Show Afternoon


            // Night: 6 PM (inclusive) to 4 AM (inclusive) -> Hours 18 to 4
                else if (currentHour >= 18 && currentHour <= 4) {
                console.log("Good Night!");
                } 

            // Optional: Log the current time for debugging

        }

        // Run the function once when the script loads

         window.onload = function() {
        updateGreeting(); // Call your function here
    };


        // Optional: Run the function every 30 seconds (or more frequently) to update automatically
        // Note: Students should understand this is for real-time changes
        // setInterval(updateGreeting, 30000); 
