import React from "react";

type Button= {
    children:any,
    disable:boolean
}
export default function Button({children='Click',disable=false}:Partial<Button>) {
    return(
        <button disabled={disable}>{children}</button>
    )
}
