import { useEffect } from "react"
import { useActions, useAppDispatch, useAppSelector } from "common/hooks"
import { packsThunks } from "features/packs/packs.slice"
import { PackType } from "../packs.api.types"
import styled from "styled-components"
import { selectorPacks } from "../pack.selector"
import { P } from "./Packs.styled"
import { BasicButton } from "components/Button/BasicButton"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
export const Packs = () => {
  console.log("Packs render")
  // DANGER FAKE SELECTOR
  const cardPacks = useAppSelector(selectorPacks)

  const { fetchPacks, createPack, removePack, updatePack } = useActions(packsThunks)

  const dispatch = useAppDispatch()

  useEffect(() => {
    // dispatch(packsThunks.fetchPacks())

    // bindActionCreators(packsThunks.fetchPacks, dispatch)()
    fetchPacks()
  }, [])

  const addPackHandler = () => {
    const newPack = {
      name: "🦁" + Math.random(),
    }
    createPack(newPack)
  }

  const removePackHandler = (id: string) => {
    removePack(id)
  }

  const updatePackHandler = (pack: PackType) => {
    const newName = "🦖" + Math.random()
    updatePack({ ...pack, name: newName })
  }

  return (
    <P.Wrapper>
      <P.Container>
        <P.Title>Packs list</P.Title>
        <BasicButton width="175px" buttonText="Add new pack" marginBottom="8px" />
      </P.Container>
      <P.Container>
        <P.ParamContainer>
          <P.ParamsName>Search</P.ParamsName>
          <TextField id="outlined-basic" variant="outlined" />
        </P.ParamContainer>
      </P.Container>
    </P.Wrapper>
    // <div>
    //   <h1>Packs</h1>
    //   <button onClick={addPackHandler}>add pack</button>
    //   <div>
    //     {cardPacks.map((p) => {
    //       return (
    //         <PacksContainer key={p._id}>
    //           <p>
    //             <b>pack name</b>: {p.name}
    //           </p>
    //           <p>
    //             <b>cardsCount</b>: {p.cardsCount}
    //           </p>
    //           <p>
    //             <b>user name</b>: {p.user_name}
    //           </p>
    //           <button onClick={() => removePackHandler(p._id)}>remove</button>
    //           <button onClick={() => updatePackHandler(p)}>update</button>
    //         </PacksContainer>
    //       )
    //     })}
    //   </div>
    // </div>
  )
}

const PacksContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
