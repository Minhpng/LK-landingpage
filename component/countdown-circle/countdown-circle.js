const countdownCircle = function (countTime) {

    const countdownWrapper = document.createElement('div')
    countdownWrapper.setAttribute('id', 'countdown-circle')
    countdownWrapper.style.setProperty('--timeEnd', `${countTime}s`)

    console.log(countdownWrapper);

    countdownWrapper.innerHTML = `
                        <div id="countdown-circle__number">${countTime}</div>
                        <svg>
                            <circle r="145" cx="150" cy="150"></circle>
                        </svg>
                    `
    return countdownWrapper.outerHTML
}

export default countdownCircle
