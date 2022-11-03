const countdownCircle = function (countTime) {

    const countdownWrapper = document.createElement('div')
    countdownWrapper.setAttribute('id', 'countdown-circle')
    countdownWrapper.style.setProperty('--timeEnd', `${countTime}`)

    countdownWrapper.innerHTML = `
                    <div id="countdown-circle">
                        <div id="countdown-circle__number">${countTime}</div>
                        <svg>
                            <circle r="18" cx="20" cy="20"></circle>
                        </svg>
                    </div>
    `
    return countdownWrapper.innerHTML
}

export default countdownCircle
