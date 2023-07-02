import React from "react"
import { useActions } from "./useActions"
import { modalActions } from "features/modals/modal.slice"
import { useAppSelector } from "./useAppSelector"
import {
  selectorAnswerModal,
  selectorIdInModal,
  selectorIsDeleteModal,
  selectorModalTypeAction,
  selectorNameInModal,
  selectorQuestionModal,
  selectorTypeModal,
} from "features/modals/modal.selector"

export const useModals = () => {
  const { closeModals, toggleModal } = useActions(modalActions)
  const modalTypeAction = useAppSelector(selectorModalTypeAction)
  const open = useAppSelector(selectorIsDeleteModal)
  const modalType = useAppSelector(selectorTypeModal)
  const name = useAppSelector(selectorNameInModal)
  const _id = useAppSelector(selectorIdInModal)
  const answer = useAppSelector(selectorAnswerModal)
  const question = useAppSelector(selectorQuestionModal)
  const nameInModal = useAppSelector(selectorNameInModal)

  return {
    actions: {
      closeModals,
      toggleModal,
    },
    selectors: {
      open,
      modalType,
      name,
      _id,
      modalTypeAction,
      answer,
      question,
      nameInModal,
    },
  }
}
