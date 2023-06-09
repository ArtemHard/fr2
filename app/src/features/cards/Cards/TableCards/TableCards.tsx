import React, { useState } from "react"
import Table from "@mui/material/Table"
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import { PackType } from "features/packs/packs.api.types"
import { useActions, useAppSelector } from "common/hooks"
import { selectorUserId } from "features/packs/pack.selector"
import { packsActions, packsThunks } from "features/packs/packs.slice"
import { Card } from "features/cards/cards.api.types"
import { TableHeader } from "../../../../components/Table/TableHeader"
import { headerTableParamsType } from "features/cards/Cards/Cards"
import { TableBodyCards } from "../../../../components/Table/TableBodyCards"
import { cardsActions, cardsThunks } from "features/cards/cards.slice"

const generateRequestSortString = (orderDirection: "asc" | "desc", valueToOrderBy: string) => {
  if (orderDirection === "asc") return "1" + valueToOrderBy
  else return "0" + valueToOrderBy
}

type TableContentRefactProps = {
  data: Card[]
  headerParams: headerTableParamsType[]
}

export const TableCards = ({ data, headerParams }: TableContentRefactProps) => {
  const { changeFilterParams } = useActions(cardsActions)
  const { fetchCards } = useActions(cardsThunks)

  const [orderDirection, setOrderDirection] = useState<"asc" | "desc">("asc")
  const [valueOrderBy, setValueToOrderBy] = useState<string>("0grade")
  // const [page, setPage] = useState(0)
  // const [rowPerPage, setRowsPerPage] = useState(1)

  const handlerRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
    const isAscending = valueOrderBy === property && orderDirection === "asc"
    setValueToOrderBy(property)
    setOrderDirection(isAscending ? "desc" : "asc")

    const dataForRequest = {
      sortCards: generateRequestSortString(isAscending ? "desc" : "asc", property),
    }

    changeFilterParams(dataForRequest)
    fetchCards()
  }

  return (
    <TableContainer component={Paper} sx={{ marginTop: "24px", marginBottom: "40px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeader
          textParams={headerParams}
          valueToOrderBy={valueOrderBy}
          orderDirection={orderDirection}
          handlerRequestSort={handlerRequestSort}
        />
        <TableBodyCards cards={data} />
      </Table>
    </TableContainer>
  )
}
