import type { Route } from "./+types/_index";

export const meta: Route.MetaFunction = (
    {matches}
) => { 

    const root = matches[0].meta
    const title = root.find(item => item.title)
    return []
}

export default function C(){
    return <div>
        hello
    </div>
}