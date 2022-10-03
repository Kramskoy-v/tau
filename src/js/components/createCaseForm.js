import { initPaymentSelects } from "./customSelect";
import { initDatePayment } from "./customDate";
import { initDatePaymentsMask } from "./inputMask";

const addTermsBtn = document.querySelector('.create-case-page__add-btn')
const termsList = document.querySelector('.case-terms__items')
const templateTermsFragment = document.querySelector('#case-terms-template')?.content;
if (templateTermsFragment) {
  const templateTerms = templateTermsFragment.querySelector('.case-terms__item')
  if (addTermsBtn) {
    addTermsBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const termsEl = templateTerms.cloneNode(true)
      termsList.appendChild(termsEl)
      initPaymentSelects()
      initDatePaymentsMask()
      initDatePayment()
    })
  }
}

const addOptionalBtn = document.querySelector('.case-optional__add-btn')
const optionalList = document.querySelector('.case-optional__items')
const templateOptionalFragment = document.querySelector('#case-optional-template')?.content;
if (templateOptionalFragment) {
  const templateOptional = templateOptionalFragment.querySelector('.case-optional__item')
  if (addOptionalBtn) {
    addOptionalBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const optionalEl = templateOptional.cloneNode(true)
      optionalList.appendChild(optionalEl)
      initPaymentSelects()
    })
  }
}

const annexWrapper = document.querySelector('.case-annex__items')

if (annexWrapper) {

  const templateAnnexOptionalFragment = document.querySelector('#optional-annex-template')?.content;
  const templateAnnexOptional = templateAnnexOptionalFragment.querySelector('.case-optional__item')

  annexWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('case-annex__add-optional-btn')) {
      const currentOptional = e.target.closest('.case-annex__item')
      const optionalAnnexList = currentOptional.querySelector('.case-annex__optional-items')
      const optionalEl = templateAnnexOptional.cloneNode(true)
      optionalAnnexList.appendChild(optionalEl)
      initPaymentSelects()
    }
  })
}


const addAnnexBtn = document.querySelector('.create-case-page__add-annex')
const annexList = document.querySelector('.case-annex__items')
const annexFragment = document.querySelector('#case-annex-template')?.content;
if (annexFragment) {
  const annexEl = annexFragment.querySelector('.case-annex__item')
  if (addAnnexBtn) {
    addAnnexBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const optionalEl = annexEl.cloneNode(true)
      annexList.appendChild(optionalEl)
      initPaymentSelects()
    })
  }
}



// Удаление поля в приложении
if (annexWrapper) {
  annexWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('case-optional__delete-btn')) {
      const optionalTarget = e.target.closest('.case-optional__item')
      const optionalListTarget = e.target.closest('.case-annex__optional-items')
      optionalListTarget.removeChild(optionalTarget)
    }
  })
}


// Удаление поля в опциональных полях

const optionalWrapper = document.querySelector('.case-optional__items')

if (optionalWrapper) {
  optionalWrapper.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('case-optional__delete-btn')) {
      const optionalTarget = e.target.closest('.case-optional__item')
      const optionalListTarget = e.target.closest('.case-optional__items')
      optionalListTarget.removeChild(optionalTarget)
    }

  })
}



// Удаление платежного условия сделки

const termsWrapper = document.querySelector('.case-terms__items')

if (termsWrapper) {
  termsWrapper.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('case-optional__delete-btn')) {
      const optionalTarget = e.target.closest('.case-terms__item')
      const optionalListTarget = e.target.closest('.case-terms__items')
      optionalListTarget.removeChild(optionalTarget)
    }
  })
}


