
//Interval waiting the page to fully load in order to get the header class
const interval = setInterval(() => {

    const header = document.querySelector("._1QUKR")
    if(header){
        clearInterval(interval)//Stops the interval since it found the header

        const select = document.createElement('select');
        var i = 1;

        //Creating the speed options available
        while(i <= 2){
            const opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = i;
            opt.classList.add('speedOpt')
            select.appendChild(opt);

            i = i + 0.25;
        }

        select.classList.add('speedSelector')
        
        header.appendChild(select);
        
        //This interval will be running forever checking the speed selected by the user
        const verify = setInterval(() => {
            var speed = select.options[select.selectedIndex].value;

            const audios = document.querySelectorAll("audio");
            for(audio of audios){
                audio.playbackRate = speed;
            }
        }, 500)

    }
    
}, 500)
