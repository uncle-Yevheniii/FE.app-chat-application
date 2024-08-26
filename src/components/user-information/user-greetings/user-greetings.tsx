import { GreetingsProps } from '../type'

export function UserGreetings({ firstName, lastName }: GreetingsProps) {
    return (
        <div>
            <span>
                Hello,{' '}
                <b>
                    {firstName} {lastName}
                </b>
            </span>
        </div>
    )
}
