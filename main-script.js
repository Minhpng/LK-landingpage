const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const body = $('body')
const videoWrapperLandingpage = $('.video-wrapper')
const exerciseBtn = $('[exercse-btn]')

const App = (() => {
    const packages = [
        {
            name: 'Gói đặc biệt',
            desc: [
                ['2 năm học', 'check'],
                ['Thêm 6 tháng học ', 'check'],
                ['Khóa 10 ngày phát âm', 'check'],
                ['Khóa lấy lại căn bản', 'check'],
            ],
            bestseller: true,
            priceOld: '5,190,000 VNĐ',
            priceNew: '1,290,000 VNĐ',
        },
        {
            name: 'Gói 2 năm',
            desc: [
                ['2 năm học', 'check'],
                ['Thêm 6 tháng học ', 'cross'],
                ['Khóa 10 ngày phát âm', 'cross'],
                ['Khóa lấy lại căn bản', 'cross'],
            ],
            bestseller: false,
            priceOld: '5,190,000 VNĐ',
            priceNew: '1,290,000 VNĐ',
        },
        {
            name: 'Gói 1 năm tặng 3 tháng',
            desc: [
                ['1 năm học', 'check'],
                ['Thêm 3 tháng học ', 'check'],
                ['Khóa 10 ngày phát âm', 'cross'],
                ['Khóa lấy lại căn bản', 'cross'],
            ],
            bestseller: false,
            priceOld: '1,290,000 VNĐ',
            priceNew: '890,000 VNĐ',
        },
    ]

    function handleEvent() {
        videoWrapperLandingpage && videoWrapperLandingpage.addEventListener('click', () => {
            openModal(openVideo())
        })

        exerciseBtn && exerciseBtn.addEventListener('click', () => {
            openModal(openExercise())
        })
    }

    function closeModal(modal) {
        body.classList.remove('stop-scrolling')
        body.removeChild(modal)
        delete modal
    }

    function openModal(element) {

        const [html, handleEvent] = element

        const modal = document.createElement('div')
        modal.classList.add('landingpage-modal')
        modal.setAttribute('role', 'dialog')



        modal.onclick = (e) => {
            if (e.target.closest('.close-btn')) {
                closeModal(modal)
            }

            handleEvent(e)
        }

        body.appendChild(modal)
        body.classList.add('stop-scrolling')

        modal.innerHTML = `
        <div class="modal-content-wrapper" role="document">
            <div class="modal-content">
                <div
                    class="close-btn">
                    <i class="fa-solid fa-xmark"></i></div>
                <!-- modal children -->
                ${html}
            </div>
        </div>
        `

        return modal
    }

    function openVideo() {

        const packageItem = packages.map(package => {
            const packageDesc = package['desc'].map(item => {
                return `
                <li class="package-desc__item">
                    <div class="package-desc__icon"><img src="./img/list-${item[1]}.svg" alt=""></div>
                    <p class="package-desc__content">${item[0]}</p>
                </li>
                `
            })
            return `
            <div class="package-item">
                <h2>
                    ${package.name}
                    ${package.bestseller ? '<span>Bestseller</span>' : ''}
                </h2>
                <div class="package-desc">
                    <p class="desc-text">Gồm:</p>
                    <ul class="package-desc__list">
                        ${packageDesc.join('')}
                    </ul>
                    <p class="package-price"><span>${package.priceOld}</span> ${package.priceNew}</p>
                    <button class="btn ${!package.bestseller ? 'btn-secondary' : ''}">Thanh toán</button>
                </div>
            </div>
            `
        })

        const countdownElement = (days, hours, minutes, seconds) => {

            return `
                <div class="countdown__clock-wrapper">
                    <div class="countdown__number-wrapper">
                        <span class="countdown-number">${days}</span>
                        <span class="countdown-prefix">Ngày</span>
                    </div>
                    <div class="countdown__number-wrapper">
                        <span class="countdown-number">${hours}</span>
                        <span class="countdown-prefix">Giờ</span>
                    </div>
                    <div class="countdown__number-wrapper">
                        <span class="countdown-number">${minutes}</span>
                        <span class="countdown-prefix">Phút</span>
                    </div>
                    <div class="countdown__number-wrapper">
                        <span class="countdown-number">${seconds}</span>
                        <span class="countdown-prefix">Giây</span>
                    </div>
                </div>

                `
        }

        const timer = (html, endTime) => {

            const converNumber = (value) => {
                if (value >= 10) return value.toString()
                return value = `0${value}`
            }
            var countDownDate = new Date(endTime).getTime();

            var now = new Date().getTime();

            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            days = converNumber(days)
            hours = converNumber(hours)
            minutes = converNumber(minutes)
            seconds = converNumber(seconds)

            let countdownHtml = html(days, hours, minutes, seconds)
            return [countdownHtml, distance]
        }

        const packageSection = () => {

            const [countdownHtml] = timer(countdownElement, 'Nov 14, 2025')

            return `
            <div class="price-list">
                    <h2 class="fs-sec-heading fw-bold text-center">Mức giá ưu đãi dành riêng cho bạn
                        </br>Chỉ 1 lần duy nhất</h2>
                    <!-- countdown -->
                    <div class="countdown">
                        <div class="countdown__heading">Ưu đãi kết thúc sau:</div>
                        <div class="countdown__clock-wrapper">
                            ${countdownHtml}
                        </div>
                    </div>
                    <p class="choose-package-cta">Chọn gói thanh toán</p>
                    <div class="package-wrapper">
                        ${packageItem.join('')}
                    </div>
                </div>
                <div class="support text-center">
                    <p class="text-red fw-bold fs-body">Vui lòng liên hệ hỗ nếu bạn cần giúp đỡ</p>
                    <div class="support-phone-wrapper">
                        <div class="support-icon">
                            <svg class="icon">
                                <use xlink:href="./img/support-icon.svg#support-icon"></use>
                                </svg>
                        </div>
                        <a class="support-phone-number" href="tel:+84973979109">097 397 9109</a>
                    </div>
                </div>
                <div class="request-support">
                    <p class="request-support__desc">
                        Hoặc gửi yêu cầu đến nhân viên hỗ trợ
                    </p>
                    <a href="#">Bấm gửi yêu cầu</a>
                </div>
            </div>
        `
        }



        const handleEvent = (e) => {

            if (e.target.closest('#login-btn')) {
                const element = e.target

                element.closest('.modal-body').innerHTML = `<div class="loader"></div>`

                const modalBody = $('.modal-body')

                const html = packageSection()


                setTimeout(() => {
                    modalBody.innerHTML = html

                    const countdown = $('.countdown__clock-wrapper')

                    const x = setInterval(function () {

                        const [html, distance] = timer(countdownElement, 'Nov 14, 2025')

                        countdown.innerHTML = html

                        if (distance < 0) {
                            clearInterval(x);
                        }
                    }, 1000);
                }, 500)
            }
        }

        const html = `
           <div class="modal-video">
               <div class="video-wrapper">
                   <video
                       video-controler
                       autoplay
                       controls
                       poster="./img/video-hero-thumbnail.png"
                       src="https://static.langkingdom.me/webinars/replay/buoi-2-bSrOWQTNiy.mp4"
                       type="video/mp4"
                   ></video>
               </div>
               <div class="modal-body">
                   <div class="ask-for-login">
                        <h3 class="fs-sec-heading fw-semi-bold">Đăng nhập để xem mức giá đặc biệt của của bạn!</h3>
                        <button id="login-btn" class="btn" >Đăng nhập và nhận ưu đãi</button>
                        <div class="support text-center">
                            <p class="text-red fw-bold fs-body">Vui lòng liên hệ hỗ nếu bạn cần giúp đỡ</p>
                            <div class="support-phone-wrapper">
                                <div class="support-icon">
                                    <svg class="icon">
                                        <use xlink:href="./img/support-icon.svg#support-icon"></use>
                                    </svg>
                                </div>
                                <a class="support-phone-number" href="tel:+84973979109">097 397 9109</a>
                            </div>
                        </div>
                    </div>
                </div>

           </div>
           `
        return [
            html,
            handleEvent
        ]
    }

    function openExercise() {

        const rightSound = new Audio('./audio/bell-right.mp3')
        const wrongSound = new Audio('./audio/bell-wrong.mp3')

        const exercisePackage = [
            {
                questionName: 'Tôi đi học bằng xe đạp mỗi ngày',
                answer: 'I go to school by bike every day',
            },
            {
                questionName: 'Có gì đó trong mắt của tôi',
                answer: "There's something in my eyes",
            },
            {
                questionName: 'Bạn cảm thấy thế nào?',
                answer: "How are you feeling?",
            },
            {
                questionName: 'Bạn ổn chứ?',
                answer: "Are you alright?",
            },
            {
                questionName: 'Tôi ổn, cảm ơn',
                answer: "I am fine, thanks",
            },
        ]

        let initScreenExerciseHtml = `
            <div class="lp-exercise">
                <div class="exercise-intro">
                    <div class="exercise-intro__image">
                        <img src="./img/exercise-intro-img.png" alt="do you speak english?">
                    </div>
                    <h1 class="exercise-intro__title">Khoan đã</h1>
                    <p class="exercise-intro__desc">Hãy thử nói vài câu để kiểm tra trình độ của bạn trước nhé?
                    </p>
                    <p class="exercise-intro__cta">Bạn đã sẵn sàng chưa?</p>
                    <button exercise-start-btn class="btn">Bắt đầu</button>
                </div>
            </div>
        `

        let currentQuestion = 0

        function createExercise() {
            const exerciseWrapper = document.createElement('div')
            exerciseWrapper.classList.add('exercise-question')

            const exerciseHtml = `
                <div class="question-number">
                    Câu: ${currentQuestion + 1}/${exercisePackage.length}
                </div>
                <div class="question-title">${exercisePackage[currentQuestion].questionName}</div>
                <div class="question-input">
                    <input type="text"placeholder="Dịch câu trên sang tiếng Anh..." rows="4">
                    <p class="question-input__cta">Gõ câu trả lời của bạn vào ô trên và bấm Nộp bài!</p>
                </div>
                <div class="question-btn-wrapper">
                    <button class="btn submit-anwswer">Kiểm tra</button>
                    <button class="btn btn-no-bg ">Tôi muốn bỏ qua và học thử ngay</button>
                </div>
            `
            exerciseWrapper.innerHTML = exerciseHtml
            return exerciseWrapper
        }

        function renderResult(isRight) {
            const html = `<div class="question-result">
                            <div class="question-result__desc">Đáp án:</div>
                            <div class="question-result__answer">${exercisePackage[currentQuestion].answer}</div>
                        </div>
                        `
            return `
                <p class="question-input__check-result">${isRight ? 'Đúng rồi! Hay quá!' : ''}</p>
                ${!isRight ? html : ''}
                <button class="btn submit-anwswer">Tiếp theo</button>
                <button class="btn btn-no-bg ">Tôi muốn bỏ qua và học thử ngay</button>
                `
        }

        function showFinishedScreen(element) {
            const elementWrapper = element.closest('.lp-exercise')
            elementWrapper.classList = 'lp-exercise'

            resetQuestion(element)

            elementHtmlContent = `
                <div class="exercise-finished">
                    <p class="exercise-finished__desc">Bạn trả lời đúng bao nhiêu câu?
                    </p>
                    <p class="exercise-finished__desc">Nếu các câu đơn giản này bạn chưa nói chính xác được, thì bạn nên xem 1 lần hết video này!
                    </p>

                    <div class="video-wrapper">
                        <video
                            video-controler
                            controls
                            poster="./img/video-hero-thumbnail.png"
                            src="https://static.langkingdom.me/webinars/replay/buoi-2-bSrOWQTNiy.mp4"
                            type="video/mp4"
                        ></video>
                    </div>
                    <button class="btn">Không, tôi chỉ muốn học thử ngay!</button>
                </div>
            `

            elementWrapper.innerHTML = elementHtmlContent
        }

        function resetQuestion(element) {
            element.closest('.lp-exercise').classList.remove('correct')
            element.closest('.lp-exercise').classList.remove('incorrect')
            while (element.firstChild) {
                element.removeChild(element.firstChild)
            }
        }

        function checkResult(userInput, currentQuestionNode, event) {

            userInput.value.replace(/,|\.|\?|\!/g, '')

            const rightAnswer = exercisePackage[currentQuestion].answer.replace(/,|\.|-/g, '')
            const isRight = userInput.value.toUpperCase() === rightAnswer.toUpperCase()

            const showHtmlResult = currentQuestionNode.querySelector('.question-btn-wrapper')
            showHtmlResult.innerHTML = renderResult(isRight)

            const nextBtn = showHtmlResult.querySelector('.submit-anwswer')

            function loadNextQuestion() {
                if (currentQuestion < exercisePackage.length - 1) {
                    currentQuestion++
                    showNextQuestion(currentQuestionNode)
                } else {
                    showFinishedScreen(currentQuestionNode)
                }
            }

            nextBtn.addEventListener('click', loadNextQuestion)

            userInput.style.borderColor = 'currentColor'
            userInput.disabled = true;

            if (isRight) {
                rightSound.play()
                currentQuestionNode.closest('.lp-exercise').classList.add('correct')
                currentQuestionNode.closest('.lp-exercise').classList.remove('incorrect')


            } else {
                wrongSound.play()
                currentQuestionNode.closest('.lp-exercise').classList.remove('correct')
                currentQuestionNode.closest('.lp-exercise').classList.add('incorrect')

            }
        }


        function showNextQuestion(element) {
            const currentQuestion = createExercise()

            const exerciseElement = element.closest('.lp-exercise')
            resetQuestion(exerciseElement)
            exerciseElement.appendChild(currentQuestion)

            const userInput = currentQuestion.querySelector('input')
            userInput.focus()

            const checkResultBtn = currentQuestion.querySelector('.submit-anwswer')
            checkResultBtn.style.opacity = 0.5

            userInput.addEventListener('keyup', (e) => {

                function enableCheckBtn() {
                    checkResult(userInput, currentQuestion)
                }

                if (!userInput.value.trim()) {
                    checkResultBtn.style.opacity = 0.5
                    checkResultBtn.disabled = true
                }


                checkResultBtn.addEventListener('click', enableCheckBtn)
                checkResultBtn.style.opacity = 1

                if (e.key === 'Enter' && userInput.value.trim()) {
                    checkResult(userInput, currentQuestion)
                }
            })

        }

        const handleEvent = (e) => {

            if (e.target.closest('[exercise-start-btn]')) {
                const element = e.target

                showNextQuestion(element)
            }

        }

        return [
            initScreenExerciseHtml,
            handleEvent
        ]
    }

    function start() {
        handleEvent()
    }

    return start()
})()

