const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const body = $('body')
const videoWrapperLandingpage = $('.video-wrapper')
const exerciseBtn = $('[exercse-btn]')

const App = {
    packages: [
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
    ],

    handleEvent() {



        videoWrapperLandingpage && videoWrapperLandingpage.addEventListener('click', () => {
            this.openModal(this.openVideo())
        })

        exerciseBtn && exerciseBtn.addEventListener('click', () => {
            this.openModal(this.openExercise())
        })
    },

    closeModal(modal) {
        body.classList.remove('stop-scrolling')
        body.removeChild(modal)
        delete modal
    },

    openModal(html) {

        const modal = document.createElement('div')
        modal.classList.add('landingpage-modal')
        modal.setAttribute('role', 'dialog')



        modal.onclick = (e) => {
            html.handleEvent(e, modal)
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
                ${html.html}
            </div>
        </div>
        `

        return modal
    },

    openVideo() {

        const packageItem = this.packages.map(package => {
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

        const packageSection = () => {
            return `
            <div class="price-list">
                    <h2 class="fs-sec-heading fw-bold text-center">Mức giá ưu đãi dành riêng cho bạn
                        </br>Chỉ 1 lần duy nhất</h2>
                    <!-- countdown -->
                    <div class="countdown">
                        <div class="countdown__heading">Ưu đãi kết thúc sau:</div>
                        <div class="countdown__clock-wrapper">
                            <div class="countdown__number-wrapper">
                                <span class="countdown-number">02</span>
                                <span class="countdown-prefix">Ngày</span>
                            </div>
                            <div class="countdown__number-wrapper">
                                <span class="countdown-number">12</span>
                                <span class="countdown-prefix">Giờ</span>
                            </div>
                            <div class="countdown__number-wrapper">
                                <span class="countdown-number">20</span>
                                <span class="countdown-prefix">Phút</span>
                            </div>
                            <div class="countdown__number-wrapper">
                                <span class="countdown-number">11</span>
                                <span class="countdown-prefix">Giây</span>
                            </div>
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

        const handleEvent = (e, modal) => {
            if (e.target.closest('.close-btn')) {
                this.closeModal(modal)
            }

            if (e.target.closest('#login-btn')) {
                const element = e.target

                element.closest('.modal-body').innerHTML = `<div class="loader"></div>`

                const modalBody = $('.loader').closest('.modal-body')


                setTimeout(() => {
                    modalBody.innerHTML = packageSection()
                }, 500)
            }
        }



        const html = `
           <div class="modal-video">
               <div class="video-wrapper">
                   <video
                       video-controler
                       controls
                       poster="/img/video-hero-thumbnail.png"
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
        return {
            html,
            packageSection,
            handleEvent
        }
    },

    openExercise() {

        const exercisePackage = [
            {
                questionName: 'Tôi đi học bằng xe đạp mỗi ngày',
                answer: '1'
                // I go to school by bike every day
            },
            {
                questionName: '2 Tôi đi học bằng xe đạp mỗi ngày',
                answer: '2'
            },
        ]

        let currentQuestion = 0

        function createExercise() {
            const exerciseWrapper = document.createElement('div')
            exerciseWrapper.classList.add('exercise-question')

            const html = `
                <div class="question-number">
                    Câu: ${currentQuestion + 1}/5
                </div>
                <div class="question-title">${exercisePackage[currentQuestion].questionName}</div>
                <div class="question-input">
                    <input placeholder="Dịch câu trên sang tiếng Anh..." rows="4">
                    <p class="question-input__cta">Gõ câu trả lời của bạn vào ô trên và bấm Nộp bài!</p>
                </div>
                <div class="question-btn-wrapper">
                    <button class="btn submit-anwswer">Nộp bài</button>
                    <button class="btn btn-no-bg ">Tôi muốn bỏ qua và học thử ngay</button>
                </div>
            `

            const result = (isRight) => {

                const html = `<div class="question-result">
                                <div class="question-result__desc">Đáp án:</div>
                                <div class="question-result__answer">${exercisePackage[currentQuestion].answer}</div>
                            </div>
                    `
                return `
                    <p class="question-input__check-result">${isRight ? 'Đúng rồi' : 'Sai rồi'}</p>
                    ${!isRight ? html : ''}
                    <button class="btn submit-anwswer">Tiếp theo</button>
                    <button class="btn btn-no-bg ">Tôi muốn bỏ qua và học thử ngay</button>
            `
            }

            return {
                html,
                result,
                exerciseWrapper
            }
        }

        const render = () => {
            const { html, result, exerciseWrapper } = createExercise()

            if (currentQuestion < exercisePackages.length) {
                currentQuestion++
            }

            exerciseWrapper.innerHTML = html

            return { result, exerciseWrapper }
        }

        let html = `
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

        const resetQuestion = (element) => {
            element.closest('.lp-exercise').classList.remove('correct')
            element.closest('.lp-exercise').classList.remove('incorrect')
            while (element.firstChild) {
                element.removeChild(element.firstChild)
            }
        }

        const handleEvent = (e, modal) => {
            if (e.target.closest('.close-btn')) {
                this.closeModal(modal)
            }

            if (e.target.closest('[exercise-start-btn]')) {
                const element = e.target
                const { result, exerciseWrapper } = render()
                const exerciseElement = element.closest('.lp-exercise')
                resetQuestion(exerciseElement)
                exerciseElement.appendChild(exerciseWrapper)

                if (exerciseWrapper) {
                    const userInput = exerciseWrapper.querySelector('input')

                    userInput.onkeyup = (e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault()
                            const userInputValue = userInput.value
                            const isRight = userInputValue === exercisePackage[currentQuestion].answer
                            const questionBtnWrapper = exerciseWrapper.querySelector('.question-btn-wrapper')

                            questionBtnWrapper.innerHTML = result(isRight)
                            userInput.disabled = true;
                            if (isRight) {
                                exerciseWrapper.closest('.lp-exercise').classList.add('correct')
                                exerciseWrapper.closest('.lp-exercise').classList.remove('incorrect')

                            } else {
                                exerciseWrapper.closest('.lp-exercise').classList.remove('correct')
                                exerciseWrapper.closest('.lp-exercise').classList.add('incorrect')
                            }
                        }
                    }
                }
            }

        }

        return {
            html,
            handleEvent
        }
    },

    start() {

        this.handleEvent()
    }
}



App.start()
