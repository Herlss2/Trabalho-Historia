const start = document.getElementById('controls-innit')
const tv_content = document.querySelector('.tv_content')
const controls_text = document.getElementById('controls-text')
const initial_frames = document.getElementById('initial_frames_wrapper')
const story_frames = document.querySelector('.story_frames_wrapper')
const characters = document.querySelectorAll('.character')
const arrow = document.querySelector('.arrow')
const quiz = document.querySelector('.quiz_frames_wrapper')
const checkbox = document.querySelectorAll('.check')
const story_frames2 = document.querySelector('.story_frames_wrapper2')
const story_frames3 = document.querySelector('.story_frames_wrapper3')
const quiz2 = document.querySelector('.quiz_frames_wrapper2')
const quiz3 = document.querySelector('.quiz_frames_wrapper3')
const story_frames4 = document.querySelector('.story_frames_wrapper4')
const quiz4 = document.querySelector('.quiz_frames_wrapper4')
const story_frames5 = document.querySelector('.story_frames_wrapper5')
const quiz5 = document.querySelector('.quiz_frames_wrapper5')


"use strict"

start.addEventListener('click', () => {
    controls_text.innerText = `Iniciando..`

    setTimeout(() => {
        tv_content.style.backgroundImage = "url('Assets/tv_static.gif')";
    }, 500)

    setTimeout(() => {
        tv_content.style.backgroundImage = "url('Assets/tv_transition.gif')";
    }, 2000)

    setTimeout(() => {
        initial_frames.style.transform = "translateY(-700px)"
        setTimeout(() => {
            initial_frames.style.display = 'none'
        },500)
    },3000)

    setTimeout(() => {
        toStoryFrames()
    },4000)
})

const toStoryFrames = () => {
    document.body.style.backgroundColor = '#111222'
    
    setTimeout(() => {
        story_frames.style.display = 'flex'
        
        setTimeout(() => {
            story_frames.style.transform = 'translateX(0px)'
        },500)
    },500)

    setTimeout(() => {
        characters[0].style.opacity = '1'
        characters[1].style.opacity = '1'

        setTimeout(() => {
            characters[0].style.transform = 'translateX(0px)'
            characters[1].style.transform = 'translateX(0px) rotateY(180deg)'
            document.querySelectorAll('.chatBox').forEach(box => {
                box.style.opacity = '1'
            })
            arrow.style.display = 'block'
            arrow.style.opacity = '1'

            setTimeout(() => {

                arrow.style.transform = 'translateX(800px)'
            },200)
        },500)
    },2000)
}

const seta = document.getElementById('seta')

seta.addEventListener('click', () => {
    console.log('bungas')
    story_frames.style.transform = 'translateX(-1500px)'
    arrow.style.display = 'none'

    setTimeout(() => {
        quiz.style.display = 'flex'
        quiz.style.opacity = '1'
        document.querySelectorAll('.chatBox').forEach(box => {
            box.style.opacity = '0'
        })

        setTimeout(() => {
            quiz.style.transform = 'translateY(-510px)'
        },200)
    }, 1000)
})

const seta3 = document.getElementById('seta3')

checkbox.forEach((box,i) => {
    box.addEventListener('click', () => {
        checkbox.forEach(box => {box.checked = false})
        checkbox[i].checked = true
        if(checkbox[2].checked) {
            quiz.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-arrow-right fa-4x" id="seta2"></i>`)
            const seta2 = document.getElementById('seta2')
            seta2.style.opacity = '1'
            seta2.style.zIndex = '100'
            seta2.style.display = 'block'
            seta2.addEventListener('click', () => {
                quiz.style.transform = 'translateY(-1600px)'
                console.log('fafas')
                setTimeout(() => {
                    quiz.style.display = 'none'
                    story_frames2.style.display = 'block'

                    setTimeout(() => {
                        story_frames2.style.transform = 'translateY(-400px)'
                    },200)
                    setTimeout(() => {
                        characters[2].style.opacity = '1'
                        characters[3].style.opacity = '1'
                
                        setTimeout(() => {
                            characters[2].style.transform = 'translateY(0px)'
                            characters[3].style.transform = 'translateY(0px) rotateY(180deg)'
                            document.querySelectorAll('.chatBox').forEach(box => {
                                box.style.opacity = '1'
                            })
                            seta3.style.display = 'block'
                            seta3.style.opacity = '1'

                            setTimeout(() => {
                                seta3.style.transform = 'translateX(800px)'
                            }, 200);
                        },1000)
                    },2000)
                },2000)
            })
        }
    })
})

seta3.addEventListener('click', () => {
    story_frames2.style.transform = 'translateX(-1500px)'
    seta3.style.display = 'none'

    setTimeout(() => {
        quiz2.style.display = 'flex'
        quiz2.style.opacity = '1'
        document.querySelectorAll('.chatBox').forEach(box => {
            box.style.opacity = '0'
        })

        setTimeout(() => {
            quiz2.style.transform = 'translateY(-820px)'
        },200)
    }, 1000)
})

const seta5 = document.getElementById('seta5')

checkbox.forEach((box,i) => {
    box.addEventListener('click', () => {
        checkbox.forEach(box => {box.checked = false})
        checkbox[i].checked = true
        if(checkbox[5].checked) {
            quiz2.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-arrow-right fa-4x" id="seta4"></i>`)
            const seta4 = document.getElementById('seta4')
            seta4.style.opacity = '1'
            seta4.style.zIndex = '400'
            seta4.style.display = 'block'
            seta4.addEventListener('click', () => {
                quiz2.style.transform = 'translateY(-1600px)'
                story_frames3.style.display = 'block'

                setTimeout(() => {
                    story_frames3.style.transform = 'translateY(-1500px)'
                },500)
    
                setTimeout(() => {
                    characters[4].style.opacity = '1'
                    characters[5].style.opacity = '1'

            
                    setTimeout(() => {
                        characters[4].style.transform = 'translateY(0px)'
                        characters[5].style.transform = 'translateY(0px) rotateY(180deg)'
                        document.querySelectorAll('.chatBox').forEach(box => {
                            box.style.opacity = '1'
                        })
                        seta5.style.display = 'block'
                        seta5.style.opacity = '1'
                        
                        setTimeout(() => {
                            seta5.style.transform = 'translateX(930px)'
                        }, 200);
                    },1000)
                },2000)
            })
        }
    })
})

seta5.addEventListener('click', () => {
    story_frames3.style.transform = 'translateX(-1500px)'
    seta5.style.display = 'none'

    setTimeout(() => {
        quiz3.style.display = 'flex'
        quiz3.style.opacity = '1'
        document.querySelectorAll('.chatBox').forEach(box => {
            box.style.opacity = '0'
        })

        setTimeout(() => {
            quiz3.style.transform = 'translateY(-1900px)'
        },200)
    }, 1000)
})

const seta6 = document.getElementById('seta6')
const seta7 = document.getElementById('seta7')

checkbox.forEach((box,i) => {
    box.addEventListener('click', () => {
        checkbox.forEach(box => {box.checked = false})
        checkbox[i].checked = true
        if(checkbox[11].checked) {
            quiz3.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-arrow-right fa-4x" id="seta6"></i>`)
            const seta6 = document.getElementById('seta6')
            seta6.style.opacity = '1'
            seta6.style.zIndex = '400'
            seta6.style.display = 'block'
            seta6.style.transform = 'translateX(500px)'
            seta6.addEventListener('click', () => {
                quiz3.style.transform = 'translateY(-3500px)'
                story_frames5.style.display = 'block'
                story_frames5.style.transform = 'translateY(-2600px)'

                setTimeout(() => {
                    story_frames5.style.opacity = '1'
                },500)
    
                setTimeout(() => {
                    document.getElementById('nc1').style.opacity = '1'
                    document.getElementById('nc2').style.opacity = '1'
            
                    setTimeout(() => {
                        document.querySelectorAll('.chatBox').forEach(box => {
                            box.style.opacity = '1'
                        })
                        seta7.style.display = 'block'
                        seta7.style.opacity = '1'
                        
                        setTimeout(() => {
                            seta7.style.transform = 'translateX(930px)'
                        }, 200);
                    },500)
                },2000)
            })
        }
    })
})

seta7.addEventListener('click', () => {
    story_frames5.style.transform = 'translateX(-1500px)'
    seta7.style.display = 'none'

    setTimeout(() => {
        quiz5.style.display = 'flex'
        quiz5.style.opacity = '1'
        document.querySelectorAll('.chatBox').forEach(box => {
            box.style.opacity = '0'
        })

        setTimeout(() => {
            quiz5.style.transform = 'translateY(-2970px)'
        },200)
    }, 1000)
})

checkbox.forEach((box,i) => {
    box.addEventListener('click', () => {
        checkbox.forEach(box => {box.checked = false})
        checkbox[i].checked = true

        if(checkbox[15].checked) {
            quiz5.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-arrow-right fa-4x" id="seta8"></i>`)
            const seta8 = document.getElementById('seta8')
            seta8.style.opacity = '1'
            seta8.style.zIndex = '400'
            seta8.style.display = 'block'
            seta8.style.transform = 'translateX(0px)'

            seta8.addEventListener('click', () => {
                quiz5.style.transform = 'translateY(-5069px)'
            })
        }
    })
})
