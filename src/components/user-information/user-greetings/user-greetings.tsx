import { GreetingsProps } from '../type'

export function UserGreetings({ firstName, lastName }: GreetingsProps) {
    const name = firstName.length < 10 ? firstName : `${firstName.substring(0, 10)}...`
    const surname = lastName.length < 7 ? firstName : `${lastName.substring(0, 7)}...`

    return (
        <div>
            <p>{`Hello, ${name} ${surname}`}</p>
        </div>
    )
}
