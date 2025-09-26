import { memo } from "react"
import { CrewView } from "../../../entities/crew"

export const CrewDetail = memo(() => {
  return (
      <div className="container">
          <CrewView/>
    </div>
  )
})
