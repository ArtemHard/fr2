import { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import Button from "@mui/material/Button"
import styled from "styled-components"
import { P } from "../../../features/packs/Packs/Packs.styled"
import { useActions, useAppSelector } from "common/hooks"
import { selectorMaxCardsCount, selectorMinCardsCount } from "features/packs/pack.selector"
import { packsActions, packsThunks } from "features/packs/packs.slice"
import { selectorIsLoading } from "app/app.selectors"

export default function SliderBlock() {
  // т.к. бэк выдаёт что можно изменять параметры - дизэйбл на ui
  const packsLength = useAppSelector((state) => state.packs.cardPacks.length)

  const min = useAppSelector(selectorMinCardsCount)
  const max = useAppSelector(selectorMaxCardsCount)
  const isLoading = useAppSelector(selectorIsLoading)
  const minFilter = useAppSelector((state) => state.packs.filterParams.min)
  const maxFilter = useAppSelector((state) => state.packs.filterParams.max)
  const [value, setValue] = useState<number[]>([minFilter || 0, maxFilter || 100])

  const { changeFilterParams } = useActions(packsActions)
  const { fetchPacks } = useActions(packsThunks)

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      changeFilterParams({ min: newValue[0], max: newValue[1] })
      setValue(newValue as number[])
    }
  }

  const onChangeCommittedHandler = (event: React.SyntheticEvent | Event, value: number | Array<number>) => {
    fetchPacks()
  }

  useEffect(() => {
    setValue([min, max])
    changeFilterParams({ min: min, max: max })
  }, [min, max])

  // для сброса параметров после нажатия clearFilter
  useEffect(() => {
    if (minFilter === min && maxFilter === max) setValue([min, max])
  }, [minFilter, maxFilter])
  return (
    <P.ParamContainer>
      <P.ParamsName>Number of cards</P.ParamsName>
      <Wrapper>
        <Button
          name="My"
          variant="outlined"
          size="small"
          disabled={true}
          sx={{
            borderRadius: "2px",
            width: "36px",
            height: "36px",
            textTransform: "none",
            border: "1px solid #D9D9D9",
          }}
        >
          <NumberInBtn>{value[0]}</NumberInBtn>
        </Button>
        <Box sx={{ width: 155 }}>
          <Slider
            min={min}
            max={max}
            defaultValue={1}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            onChangeCommitted={onChangeCommittedHandler}
            valueLabelDisplay="auto"
            disabled={min === max || isLoading || !packsLength}
          />
        </Box>
        <Button
          name="My"
          variant="outlined"
          size="small"
          disabled={true}
          sx={{
            borderRadius: "2px",
            width: "36px",
            height: "36px",
            textTransform: "none",
            border: "1px solid #D9D9D9",
          }}
          // onClick={handleChange}
        >
          <NumberInBtn>{value[1]}</NumberInBtn>
        </Button>
      </Wrapper>
    </P.ParamContainer>
  )
}

// border: 1px solid #D9D9D9;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`
const NumberInBtn = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #000000;
`
