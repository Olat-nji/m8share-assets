const DOMstrings = {
  stepsBtnClass: 'multisteps-form__progress-btn',
  stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
  stepsBar: document.querySelector('.multisteps-form__progress'),
  stepsForm: document.querySelector('.multisteps-form__form'),
  stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
  stepFormPanelClass: 'multisteps-form__panel',
  stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
  stepPrevBtnClass: 'js-btn-prev',
  stepNextBtnClass: 'js-btn-next'
}
const removeClasses = (elemSet, className) => {
  elemSet.forEach(elem => {
    elem.classList.remove(className)
  })
}
const findParent = (elem, parentClass) => {
  let currentNode = elem
  while (!currentNode.classList.contains(parentClass)) {
    currentNode = currentNode.parentNode
  }
  return currentNode
}
const getActiveStep = elem => {
  return Array.from(DOMstrings.stepsBtns).indexOf(elem)
}
const setActiveStep = activeStepNum => {
    
  removeClasses(DOMstrings.stepsBtns, 'js-active')
  DOMstrings.stepsBtns.forEach((elem, index) => {
    if (index <= activeStepNum) {
      elem.classList.add('js-active')
    }
  })
  localStorage.setItem(getStepName(), activeStepNum);

}
const getActivePanel = () => {
  let activePanel
  DOMstrings.stepFormPanels.forEach(elem => {
    if (elem.classList.contains('js-active')) {
      activePanel = elem
    }
  })
  return activePanel
}
const setActivePanel = activePanelNum => {
  removeClasses(DOMstrings.stepFormPanels, 'js-active')
  DOMstrings.stepFormPanels.forEach((elem, index) => {
    
    if (index == activePanelNum) {
        
      elem.classList.add('js-active')
      setFormHeight(elem)
    }
  })
}
const formHeight = activePanel => {
  const activePanelHeight = activePanel.offsetHeight
  DOMstrings.stepsForm.style.height = `${activePanelHeight}px`
}
const setFormHeight = () => {
  const activePanel = getActivePanel()
  formHeight(activePanel)
}



let activeStep = localStorage.getItem(getStepName());
if (!activeStep) {
    
  activeStep = 0;
  localStorage.setItem(getStepName(), activeStep);
}



DOMstrings.stepsBar.addEventListener('click', e => {
  const eventTarget = e.target
  if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
    return
  }
  const clickedStep = getActiveStep(eventTarget)
  setActiveStep(clickedStep)
  setActivePanel(clickedStep)
  activeStep = clickedStep // update active step based on user interaction
})

DOMstrings.stepsForm.addEventListener('click', e => {
  const eventTarget = e.target
  if (
    !(
      eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) ||
      eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)
    )
  ) {
    return
  }
  let clickedStep = activeStep // use shared state variable for active step
  const activePanel = findParent(
    eventTarget,
    `${DOMstrings.stepFormPanelClass}`
  )
  clickedStep = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel)
  if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
    clickedStep--
  } else {
    clickedStep++
  }
  setActiveStep(clickedStep)
  setActivePanel(clickedStep)
  activeStep = clickedStep // update active step based on user interaction
})

const showStep = stepNum => {
  setActiveStep(stepNum)
  setActivePanel(stepNum)
  activeStep = stepNum // update active step programmatically
}


window.addEventListener('load', setFormHeight, false)
window.addEventListener('resize', setFormHeight, false)

    showStep(activeStep);
    setActivePanel(activeStep)
    
  